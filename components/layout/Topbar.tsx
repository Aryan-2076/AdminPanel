"use client";

import { usePathname } from "next/navigation";
import { Bell, Search, Command } from "lucide-react";

export default function Topbar() {
  const pathname = usePathname();

  const getPageTitle = () => {
    if (pathname === "/") return "Overview";
    if (pathname?.startsWith("/members")) return "Community";
    if (pathname?.startsWith("/events")) return "Events & Meets";
    return "Admin Panel";
  };

  return (
    <header className="h-20 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/60 flex items-center justify-between px-8 sticky top-0 z-10 supports-[backdrop-filter]:bg-slate-900/60 transition-all">
      <div className="flex items-center gap-12 flex-1">
        <h2 className="text-xl font-semibold text-white tracking-wide">{getPageTitle()}</h2>
        
        <div className="hidden md:flex items-center bg-slate-800/40 border border-slate-700/50 rounded-xl px-4 py-2 w-96 group focus-within:ring-2 focus-within:ring-blue-500/30 focus-within:border-blue-500/50 focus-within:bg-slate-800/80 transition-all">
          <Search className="w-4 h-4 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
          <input 
            type="text" 
            placeholder="Search anything..." 
            className="bg-transparent border-none outline-none text-sm text-gray-200 ml-3 w-full placeholder:text-slate-500"
          />
          <div className="flex items-center gap-1 bg-slate-700/50 rounded-md px-2 py-0.5 opacity-50">
            <Command className="w-3 h-3 text-slate-400" />
            <span className="text-[10px] font-medium text-slate-400 uppercase">K</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative p-2.5 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-xl transition-all border border-transparent hover:border-slate-700/50 group">
          <Bell className="w-5 h-5 group-hover:animate-pulse" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-blue-500 rounded-full ring-4 ring-slate-900 flex items-center justify-center">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping opacity-75"></span>
          </span>
        </button>
      </div>
    </header>
  );
}