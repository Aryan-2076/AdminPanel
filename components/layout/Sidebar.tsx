"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Calendar, Settings } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { name: "Overview", href: "/", icon: LayoutDashboard },
    { name: "Community", href: "/members", icon: Users },
    { name: "Events & Meets", href: "/events", icon: Calendar },
  ];

  return (
    <aside className="w-72 bg-slate-900/95 backdrop-blur-2xl border-r border-slate-800 flex flex-col h-screen sticky top-0 z-20">
      <div className="p-8 pb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 tracking-wide">Technobyte</h1>
            <p className="text-[10px] text-blue-400 mt-0.5 uppercase tracking-widest font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              NIT Kurukshetra
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        {links.map((link) => {
          const exactActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`group flex items-center gap-3.5 px-4 py-3.5 rounded-xl transition-all duration-300 relative overflow-hidden ${
                exactActive 
                  ? "bg-slate-800/80 text-white shadow-sm border border-slate-700/50" 
                  : "text-slate-400 hover:bg-slate-800/40 hover:text-slate-200"
              }`}
            >
              {exactActive && (
                <div className="absolute left-0 w-1 h-8 bg-blue-500 rounded-r-md top-1/2 -translate-y-1/2"></div>
              )}
              <link.icon className={`w-5 h-5 transition-colors ${exactActive ? "text-blue-400" : "group-hover:text-slate-300"}`} />
              <span className="font-medium text-sm tracking-wide">{link.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-6">
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-4 relative overflow-hidden group hover:border-slate-600/50 transition-colors cursor-pointer">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-blue-500/20 transition-all"></div>
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 p-0.5 shadow-lg shadow-blue-500/20">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                 <Settings className="w-5 h-5 text-blue-400" />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Aditya Sharma</p>
              <p className="text-xs text-blue-400 font-medium">Super Admin</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}