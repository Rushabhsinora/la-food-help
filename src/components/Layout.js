'use client';

import Link from "next/link";

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* Mobile menu */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              🍽️ LA Food Help
            </Link>
            
            {/* Desktop nav */}
            <div className="hidden md:flex gap-6">
              <Link href="/spots/venice" className="hover:text-orange-600 font-medium">Venice</Link>
              <Link href="/spots/overland" className="hover:text-orange-600 font-medium">Overland</Link>
              <Link href="/admin" className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-all">Admin</Link>
            </div>
          </div>
        </nav>
      </header>
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {children}
      </main>
      
      <footer className="mt-20 bg-white/50 border-t py-8 text-center text-gray-600">
        <p>Helping LA's homeless community find free food • Last updated today</p>
      </footer>
    </div>
  );
}
