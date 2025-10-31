'use client';

import { useEffect } from 'react';

/**
 * Hook to track unique visitors
 * Uses localStorage to ensure each unique device is only counted once
 */
export function useVisitorTracking() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const trackVisitor = async () => {
      try {
        // Check if this user has already been counted
        const visitorId = localStorage.getItem('candy-cart-visitor-id');

        if (!visitorId) {
          // Generate a unique ID for this visitor
          const newVisitorId = `visitor-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
          localStorage.setItem('candy-cart-visitor-id', newVisitorId);

          // Increment the visitor count in Firebase
          const { incrementVisitorCount } = await import('@/lib/firebaseService');
          await incrementVisitorCount();
        }
      } catch (error) {
        console.error('Error tracking visitor:', error);
      }
    };

    trackVisitor();
  }, []);
}
