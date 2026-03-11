import React, { useState } from 'react';
import { Maximize2, Minimize2, RefreshCw, ExternalLink } from 'lucide-react';

export const GamePlayer = ({ game }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [key, setKey] = useState(0);

  const toggleFullscreen = () => {
    const elem = document.getElementById('game-container');
    if (!elem) return;

    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const reloadGame = () => setKey(prev => prev + 1);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="glass-panel rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/5">
        <div className="px-6 py-4 flex items-center justify-between border-b border-white/5">
          <h2 className="font-bold text-xl">{game.title}</h2>
          <div className="flex items-center gap-3">
            <button 
              onClick={reloadGame}
              className="p-2 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-400 hover:text-white"
              title="Reload Game"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
            <button 
              onClick={toggleFullscreen}
              className="p-2 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-400 hover:text-white"
              title="Fullscreen"
            >
              {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
            </button>
            <a 
              href={game.iframeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-400 hover:text-white"
              title="Open in new tab"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div id="game-container" className="relative aspect-video bg-black">
          <iframe
            key={key}
            src={game.iframeUrl}
            className="w-full h-full border-none"
            allow="fullscreen; autoplay; gamepad"
            title={game.title}
          />
        </div>
      </div>
      
      <div className="mt-8 p-6 glass-panel rounded-2xl">
        <h3 className="font-bold mb-2">Controls & Info</h3>
        <p className="text-zinc-400 text-sm">
          Most games use Arrow Keys or WASD for movement. If the game doesn't respond, click inside the game area to focus it.
        </p>
      </div>
    </div>
  );
};
