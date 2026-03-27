import { Card } from "@/components/ui/Card";
import { Users, Calendar, UserPlus, TrendingUp, Activity, Sparkles } from "lucide-react";

export default function DashboardPage() {
  const stats = [
    { name: "Total Members", value: "1,240", icon: Users, change: "+12%", trend: "up", color: "from-blue-600 to-indigo-600" },
    { name: "Active Events", value: "8", icon: Calendar, change: "+2", trend: "up", color: "from-emerald-500 to-teal-500" },
    { name: "New Registrations", value: "145", icon: UserPlus, change: "+18%", trend: "up", color: "from-purple-500 to-pink-500" },
    { name: "Engagement", value: "84%", icon: Activity, change: "+5%", trend: "up", color: "from-amber-500 to-orange-500" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between pb-4 border-b border-slate-800/60">
        <div>
          <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-2">
            Welcome back, Aditya <Sparkles className="w-6 h-6 text-yellow-500" />
          </h2>
          <p className="text-slate-400 mt-1.5 text-sm">Here's what's happening in Technobyte today.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.name} className="p-6 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20 hover:border-slate-600/50">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-slate-400">{stat.name}</p>
                <h3 className="text-3xl font-bold text-white mt-2 tracking-tight">{stat.value}</h3>
              </div>
              <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg shadow-black/20 text-white`}>
                <stat.icon className="w-5 h-5" />
              </div>
            </div>
            <div className={`mt-5 text-sm font-medium flex items-center gap-1.5 ${stat.trend === 'up' ? 'text-emerald-400' : 'text-rose-400'}`}>
              <div className={`px-2 py-0.5 rounded-md ${stat.trend === 'up' ? 'bg-emerald-500/10' : 'bg-rose-500/10'}`}>
                {stat.change}
              </div>
              <span className="text-slate-500 font-normal">vs last month</span>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-0 overflow-hidden">
          <div className="p-6 border-b border-slate-700/50 flex items-center justify-between bg-slate-800/20">
            <h3 className="text-lg font-semibold text-white">Activity Overview</h3>
            <button className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors">View Report</button>
          </div>
          <div className="flex items-center justify-center p-6 h-[350px] bg-slate-900/20 relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 blur-3xl rounded-full opacity-50"></div>
             <div className="relative w-full h-full border border-slate-700/50 rounded-xl border-dashed bg-slate-800/20 flex flex-col items-center justify-center group cursor-pointer hover:border-slate-500 hover:bg-slate-800/40 transition-all">
                 <TrendingUp className="w-10 h-10 text-slate-600 mb-3 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
                 <span className="font-medium text-sm text-slate-500 group-hover:text-slate-300 transition-colors">Interactive Chart Visualization</span>
             </div>
          </div>
        </Card>
        
        <Card className="p-0 overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-700/50 bg-slate-800/20">
            <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
          </div>
          <div className="p-6 space-y-6 flex-1 bg-slate-900/10 relative">
            {[
              { id: 1, text: "New member joined", time: "2m ago", color: "bg-emerald-500", highlight: "John Doe" },
              { id: 2, text: "Hackathon registration opened", time: "1h ago", color: "bg-blue-500", highlight: "Event" },
              { id: 3, text: "Promoted to Core", time: "3h ago", color: "bg-purple-500", highlight: "Sarah C." },
              { id: 4, text: "Weekly meet scheduled", time: "5h ago", color: "bg-amber-500", highlight: "Meeting" },
              { id: 5, text: "Server maintenance", time: "1d ago", color: "bg-slate-500", highlight: "System" },
            ].map((item, i) => (
              <div key={item.id} className="flex gap-4 relative group cursor-pointer">
                {i !== 4 && <div className="absolute left-[5px] top-6 bottom-[-24px] w-px bg-slate-700/50"></div>}
                <div className={`relative z-10 w-3 h-3 mt-1.5 ${item.color} rounded-full ring-4 ring-slate-800 shadow-sm group-hover:scale-125 transition-transform`}></div>
                <div>
                  <p className="text-sm text-slate-300">
                    <span className="font-medium text-white">{item.highlight}</span> {item.text.toLowerCase()}
                  </p>
                  <span className="text-xs text-slate-500 mt-1 block group-hover:text-slate-400 transition-colors">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
