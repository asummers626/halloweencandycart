'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-purple-900 to-black flex items-center justify-center p-4">
      <div className="bg-black/50 backdrop-blur-lg border-4 border-red-500 rounded-3xl p-8 max-w-md text-center">
        <div className="text-6xl mb-4">🎃</div>
        <h2 className="text-3xl font-bold text-red-500 mb-4">Something went wrong!</h2>
        <p className="text-purple-300 mb-6">
          {error.message || 'An unexpected error occurred'}
        </p>
        <button
          onClick={reset}
          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg"
        >
          Try again 👻
        </button>
      </div>
    </div>
  );
}
