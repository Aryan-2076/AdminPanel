import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-slate-900 text-gray-300 min-h-screen">
      
      <Sidebar />

      <div className="flex-1">
        <Topbar />
        <div className="p-6">{children}</div>
      </div>

    </div>
  );
}