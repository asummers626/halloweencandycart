'use client';

import { useEffect } from 'react';
import { useCandyCartStore } from '@/store/candyCartStore';
import { subscribeToCartData, initializeCartData } from '@/lib/firebaseService';

/**
 * Hook to sync cart data with Firebase in real-time
 * Call this once in the root component to enable real-time sync
 */
export function useFirebaseSync() {
  const syncFromFirebase = useCandyCartStore((state) => state.syncFromFirebase);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    let unsubscribe: (() => void) | null = null;

    const setupSync = async () => {
      try {
        // Initialize Firebase data if it doesn't exist
        await initializeCartData();

        // Subscribe to real-time updates
        unsubscribe = subscribeToCartData((data) => {
          // Sync Firebase data to Zustand store
          syncFromFirebase({
            cartLocation: data.cartLocation,
            candyStatus: data.candyStatus,
            festiveMessage: data.festiveMessage,
            cartImage: data.cartImage,
          });
        });
      } catch (error) {
        console.error('Error setting up Firebase sync:', error);
      }
    };

    setupSync();

    // Cleanup subscription on unmount
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [syncFromFirebase]);
}
