import React from 'react';
import { Search, Gamepad2, X } from 'lucide-react';

export const Navbar = ({ searchQuery, setSearchQuery, onBackToHome, isGameActive }) => {
  return (
    <nav className="sticky top-0 z-50 w-full glass-panel px-4 py-3 mb-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={onBackToHome}
        >
          <div className="p-2 bg-emerald-500 rounded-lg group-hover:rotate-12 transition-transform">
            <Gamepad2 className="w-6 h-6 text-zinc-950" />
          </div>
          <h1 className="text-xl font-bold tracking-tight hidden sm:block">
            UNBLOCKED<span className="text-emerald-500">HUB</span>
          </h1>
        </div>

        {!isGameActive && (
          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-800/50 border border-white/5 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all text-sm"
            />
          </div>
        )}

        {isGameActive && (
          <button 
            onClick={onBackToHome}
            className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors text-sm font-medium"
          >
            <X className="w-4 h-4" />
            Close Game
          </button>
        )}
      </div>
    </nav>
  );
};
