import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export const GameCard = ({ game, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="glass-panel rounded-2xl overflow-hidden game-card-hover cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="p-4 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/20 transform translate-y-4 group-hover:translate-y-0 transition-transform">
            <Play className="w-6 h-6 text-zinc-950 fill-current" />
          </div>
        </div>
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-zinc-900/80 backdrop-blur-md text-[10px] uppercase tracking-widest font-bold rounded-md border border-white/10">
            {game.category}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 group-hover:text-emerald-400 transition-colors">{game.title}</h3>
        <p className="text-zinc-400 text-sm line-clamp-2 mb-3">{game.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {game.tags.map(tag => (
            <span key={tag} className="text-[10px] text-zinc-500 font-mono">#{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
