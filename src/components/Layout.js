'use client';

import Link from "next/link";

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <header className="bg-white/90 backdrop-blur-xl sticky top-0 z-50 border-b shadow-lg">
        <nav className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-4xl font-titillium font-black bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent drop-shadow-2xl tracking-tight">
              🍽️ LA Food Help
            </Link>
            
            {/* ONLY Home + Admin - NO spot links */}
            <div className="flex gap-4 items-center">
              <Link href="/" className="font-inter text-lg text-gray-700 hover:text-orange-600 font-medium">Home</Link>
              <Link href="/admin" className="font-inter bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl">
                Admin
              </Link>
            </div>
          </div>
        </nav>
      </header>
      
      <main className="max-w-6xl mx-auto px-4 py-12">
        {children}
      </main>
      
      <footer className="mt-24 bg-gradient-to-r from-orange-500/20 to-red-500/20 border-t backdrop-blur-sm py-12 text-center">
        <p className="font-inter text-xl text-gray-700">Helping LA's homeless community find free food • Last updated today</p>
      </footer>
    </div>
  );
}
