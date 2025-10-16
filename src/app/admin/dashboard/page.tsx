'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCandyCartStore } from '@/store/candyCartStore';

const PRESET_INTERVALS = [
  { label: '15s', value: 15 },
  { label: '30s', value: 30 },
  { label: '1m', value: 60 },
  { label: '2m', value: 120 },
];

export default function AdminDashboardPage() {
  const router = useRouter();
  const {
    isAdminLoggedIn,
    setAdminLoggedIn,
    cartLocation,
    setCartLocation,
    candyStatus,
    setCandyStatus,
    festiveMessage,
    setFestiveMessage,
    cartImage,
    setCartImage,
    autoRefreshEnabled,
    setAutoRefreshEnabled,
    refreshInterval,
    setRefreshInterval,
  } = useCandyCartStore();

  const [customInterval, setCustomInterval] = useState('');
  const [isUpdatingLocation, setIsUpdatingLocation] = useState(false);
  const [locationError, setLocationError] = useState('');
  const [editingMessage, setEditingMessage] = useState(festiveMessage);
  const [uploadingImage, setUploadingImage] = useState(false);

  // Redirect if not logged in
  useEffect(() => {
    if (!isAdminLoggedIn) {
      router.push('/admin/login');
    }
  }, [isAdminLoggedIn, router]);

  // Auto-refresh location
  useEffect(() => {
    if (!autoRefreshEnabled) return;

    const updateLocation = () => {
      setIsUpdatingLocation(true);
      setLocationError('');

      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setCartLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              timestamp: Date.now(),
            });
            setIsUpdatingLocation(false);
          },
          (error) => {
            setLocationError(`Error: ${error.message}`);
            setIsUpdatingLocation(false);
          }
        );
      } else {
        setLocationError('Geolocation not supported');
        setIsUpdatingLocation(false);
      }
    };

    const intervalId = setInterval(() => {
      updateLocation();
    }, refreshInterval * 1000);

    return () => clearInterval(intervalId);
  }, [autoRefreshEnabled, refreshInterval, setCartLocation]);

  const updateLocation = () => {
    setIsUpdatingLocation(true);
    setLocationError('');

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCartLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            timestamp: Date.now(),
          });
          setIsUpdatingLocation(false);
        },
        (error) => {
          setLocationError(`Error: ${error.message}`);
          setIsUpdatingLocation(false);
        }
      );
    } else {
      setLocationError('Geolocation not supported');
      setIsUpdatingLocation(false);
    }
  };

  const handleLogout = () => {
    setAdminLoggedIn(false);
    router.push('/');
  };

  const handleSetCustomInterval = () => {
    const interval = parseInt(customInterval);
    if (interval >= 10 && interval <= 300) {
      setRefreshInterval(interval);
      setCustomInterval('');
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file size (max 1MB to avoid Firebase limitations)
    if (file.size > 1024 * 1024) {
      alert('Image size should be less than 1MB');
      return;
    }

    setUploadingImage(true);

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      setCartImage(base64String);
      setUploadingImage(false);
    };
    reader.onerror = () => {
      alert('Error reading image file');
      setUploadingImage(false);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setCartImage(null);
  };

  if (!isAdminLoggedIn) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-purple-900 to-black p-4 overflow-y-auto">
      {/* Header */}
      <div className="max-w-4xl mx-auto pb-8">
        <div className="bg-black/50 backdrop-blur-lg border-4 border-orange-500 rounded-3xl p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-orange-500 flex items-center gap-2">
                🎃 Admin Dashboard
              </h1>
              <p className="text-purple-300">Halloween Candy Cart Control</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Cart Status Overview */}
        <div className="bg-black/50 backdrop-blur-lg border-4 border-purple-500 rounded-3xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-purple-300 mb-4">🎃 Cart Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-purple-900/50 rounded-xl p-4 text-center">
              <div className="text-4xl mb-2">
                {candyStatus === 'good' ? '✓' : candyStatus === 'low' ? '⚠️' : '✗'}
              </div>
              <div className={`text-lg font-bold ${
                candyStatus === 'good' ? 'text-green-400' :
                candyStatus === 'low' ? 'text-yellow-400' : 'text-red-400'
              }`}>
                {candyStatus === 'good' ? 'Plenty of Candy' :
                 candyStatus === 'low' ? 'Running Low' : 'Out of Candy'}
              </div>
            </div>

            <div className="bg-purple-900/50 rounded-xl p-4 text-center">
              <div className="text-4xl mb-2">📍</div>
              <div className="text-purple-300">
                {cartLocation ? (
                  <>
                    <div className="font-bold text-white">Location Set</div>
                    <div className="text-xs">
                      {cartLocation.latitude.toFixed(4)}, {cartLocation.longitude.toFixed(4)}
                    </div>
                  </>
                ) : (
                  <div className="text-yellow-400">Not Set</div>
                )}
              </div>
            </div>

            <div className="bg-purple-900/50 rounded-xl p-4 text-center">
              <div className="text-4xl mb-2">🔄</div>
              <div className="text-purple-300">
                <div className={`font-bold ${autoRefreshEnabled ? 'text-green-400' : 'text-gray-400'}`}>
                  Auto-Refresh {autoRefreshEnabled ? 'ON' : 'OFF'}
                </div>
                {autoRefreshEnabled && (
                  <div className="text-xs">Every {refreshInterval}s</div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Location Controls */}
        <div className="bg-black/50 backdrop-blur-lg border-4 border-green-500 rounded-3xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-green-300 mb-4">📍 Cart Location</h2>

          <div className="space-y-4">
            {cartLocation && (
              <div className="bg-green-900/30 rounded-xl p-4 text-green-200">
                <div className="font-semibold">Current Location:</div>
                <div className="text-sm">
                  Lat: {cartLocation.latitude.toFixed(6)}, Lng: {cartLocation.longitude.toFixed(6)}
                </div>
                <div className="text-xs opacity-75">
                  Updated: {new Date(cartLocation.timestamp).toLocaleTimeString()}
                </div>
              </div>
            )}

            {locationError && (
              <div className="bg-red-900/50 border-2 border-red-500 rounded-xl p-3 text-red-200">
                {locationError}
              </div>
            )}

            <button
              onClick={updateLocation}
              disabled={isUpdatingLocation}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:from-gray-500 disabled:to-gray-600 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg"
            >
              {isUpdatingLocation ? 'Updating...' : '📍 Update Location Now'}
            </button>

            {/* Auto-Refresh Controls */}
            <div className="bg-purple-900/30 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-purple-200 font-semibold">🔄 Auto-Refresh Location</span>
                <button
                  onClick={() => setAutoRefreshEnabled(!autoRefreshEnabled)}
                  className={`relative w-14 h-8 rounded-full transition-colors ${
                    autoRefreshEnabled ? 'bg-green-500' : 'bg-gray-600'
                  }`}
                >
                  <div
                    className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                      autoRefreshEnabled ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {autoRefreshEnabled && (
                <>
                  <p className="text-sm text-purple-300">Update location automatically</p>

                  <div>
                    <div className="text-purple-200 mb-2 font-semibold">Refresh Interval:</div>
                    <div className="grid grid-cols-4 gap-2">
                      {PRESET_INTERVALS.map((preset) => (
                        <button
                          key={preset.value}
                          onClick={() => setRefreshInterval(preset.value)}
                          className={`py-2 px-3 rounded-lg font-semibold transition-all ${
                            refreshInterval === preset.value
                              ? 'bg-orange-500 text-white'
                              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          }`}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-purple-200 mb-2 text-sm">Custom (10-300 seconds):</div>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        min="10"
                        max="300"
                        value={customInterval}
                        onChange={(e) => setCustomInterval(e.target.value)}
                        placeholder="Seconds"
                        className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                      />
                      <button
                        onClick={handleSetCustomInterval}
                        disabled={!customInterval}
                        className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                      >
                        Set
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Candy Status Controls */}
        <div className="bg-black/50 backdrop-blur-lg border-4 border-yellow-500 rounded-3xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">🍬 Candy Availability</h2>

          <div className="space-y-3">
            <button
              onClick={() => setCandyStatus('good')}
              className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all transform hover:scale-105 ${
                candyStatus === 'good'
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              ✓ Plenty of Candy
            </button>

            <button
              onClick={() => setCandyStatus('low')}
              className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all transform hover:scale-105 ${
                candyStatus === 'low'
                  ? 'bg-yellow-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              ⚠️ Running Low
            </button>

            <button
              onClick={() => setCandyStatus('out')}
              className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all transform hover:scale-105 ${
                candyStatus === 'out'
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              ✗ Out of Candy
            </button>
          </div>
        </div>

        {/* Festive Message Controls */}
        <div className="bg-black/50 backdrop-blur-lg border-4 border-pink-500 rounded-3xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-pink-300 mb-4">💬 Festive Message</h2>

          <div className="space-y-3">
            <div className="bg-pink-900/30 rounded-xl p-4">
              <div className="text-sm text-pink-200 mb-2">Current Message:</div>
              <div className="text-xl font-bold text-white">{festiveMessage}</div>
            </div>

            <input
              type="text"
              value={editingMessage}
              onChange={(e) => setEditingMessage(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 border-2 border-gray-600 rounded-xl text-white focus:outline-none focus:border-pink-500"
              placeholder="Enter festive message"
            />

            <button
              onClick={() => setFestiveMessage(editingMessage)}
              className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg"
            >
              Update Message
            </button>
          </div>
        </div>

        {/* Cart Image Upload */}
        <div className="bg-black/50 backdrop-blur-lg border-4 border-blue-500 rounded-3xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-blue-300 mb-4">📸 Who to Look For</h2>

          <div className="space-y-3">
            {cartImage && (
              <div className="bg-blue-900/30 rounded-xl p-4">
                <div className="text-sm text-blue-200 mb-2">Current Image:</div>
                <img
                  src={cartImage}
                  alt="Cart operator"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
              </div>
            )}

            <div className="space-y-2">
              <label className="block">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg text-center cursor-pointer">
                  {uploadingImage ? 'Uploading...' : cartImage ? '📷 Change Image' : '📷 Upload Image'}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={uploadingImage}
                    className="hidden"
                  />
                </div>
              </label>
              <p className="text-xs text-blue-300 text-center">Maximum file size: 1MB</p>
            </div>

            {cartImage && (
              <button
                onClick={handleRemoveImage}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition-colors"
              >
                🗑️ Remove Image
              </button>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-black/50 backdrop-blur-lg border-4 border-orange-500 rounded-3xl p-6">
          <button
            onClick={() => router.push('/')}
            className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg"
          >
            🗺️ View Map
          </button>
        </div>
      </div>

      {/* Floating decorations */}
      <div className="fixed top-10 right-10 text-4xl animate-bounce">🦇</div>
      <div className="fixed bottom-10 left-10 text-4xl animate-bounce delay-100">👻</div>
    </div>
  );
}
