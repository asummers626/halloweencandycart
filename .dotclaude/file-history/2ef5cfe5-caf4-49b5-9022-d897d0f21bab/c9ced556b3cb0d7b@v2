'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCandyCartStore } from '@/store/candyCartStore';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const setAdminLoggedIn = useCandyCartStore((state) => state.setAdminLoggedIn);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple password check (in production, use proper authentication)
    if (password === 'halloween2025') {
      setAdminLoggedIn(true);
      router.push('/admin/dashboard');
    } else {
      setError('Incorrect password');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-purple-900 to-black flex items-center justify-center p-4">
      {/* Floating Halloween decorations */}
      <div className="absolute top-10 left-10 text-6xl animate-bounce">🎃</div>
      <div className="absolute top-20 right-20 text-6xl animate-bounce delay-100">👻</div>
      <div className="absolute bottom-20 left-20 text-6xl animate-bounce delay-200">🦇</div>
      <div className="absolute bottom-10 right-10 text-6xl animate-bounce delay-300">🍬</div>

      <div className="bg-black/50 backdrop-blur-lg border-4 border-orange-500 rounded-3xl p-8 w-full max-w-md shadow-2xl">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🎃</div>
          <h1 className="text-4xl font-bold text-orange-500 mb-2">Admin Login</h1>
          <p className="text-purple-300">Halloween Candy Cart</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-orange-300 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              className="w-full px-4 py-3 bg-purple-900/50 border-2 border-purple-500 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:border-orange-500 transition-colors"
              placeholder="Enter admin password"
              required
            />
          </div>

          {error && (
            <div className="bg-red-900/50 border-2 border-red-500 rounded-xl p-3 text-red-200 text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg"
          >
            Login 👻
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => router.push('/')}
            className="text-purple-300 hover:text-purple-200 transition-colors"
          >
            ← Back to Map
          </button>
        </div>
      </div>
    </div>
  );
}
