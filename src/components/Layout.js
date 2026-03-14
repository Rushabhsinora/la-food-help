'use client';

import Link from "next/link";
import { ReactNode } from "react";

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b p-4">
        <nav className="max-w-6xl mx-auto flex gap-6">
          <Link href="/" className="font-semibold text-lg">🍽️ LA Food Help</Link>
          <Link href="/spots/venice" className="hover:underline">Venice</Link>
          <Link href="/admin" className="text-sm text-gray-600 hover:underline">Admin</Link>
        </nav>
      </header>
      <main className="max-w-6xl mx-auto p-6 flex-1">
        {children}
      </main>
    </div>
  );
}
