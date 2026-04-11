import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { X, Shield, Mail, User } from "lucide-react";

interface AddMemberFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; email: string; role: "admin" | "core" | "member" }) => void;
}

export function AddMemberForm({ isOpen, onClose, onSubmit }: AddMemberFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"admin" | "core" | "member">("member");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, email, role });
    setName("");
    setEmail("");
    setRole("member");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-300" onClick={onClose}></div>
      
      <div className="relative w-full max-w-md bg-slate-900 border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
        
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 relative z-10 bg-slate-900/50 backdrop-blur-md">
          <h2 className="text-xl font-bold text-white tracking-wide">New Member</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors bg-slate-800/50 p-2 rounded-xl hover:bg-slate-700 border border-transparent hover:border-slate-600">
            <X className="w-4 h-4" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-5 relative z-10 bg-slate-900">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-300 flex items-center gap-2" htmlFor="name">
              <User className="w-4 h-4 text-blue-400" /> Full Name
            </label>
            <Input 
              id="name" 
              required 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="e.g. John Doe" 
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-300 flex items-center gap-2" htmlFor="email">
               <Mail className="w-4 h-4 text-blue-400" /> Email Address
            </label>
            <Input 
              id="email" 
              type="email" 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="e.g. john@technobyte.com" 
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-300 flex items-center gap-2" htmlFor="role">
               <Shield className="w-4 h-4 text-blue-400" /> Access Role
            </label>
            <div className="relative">
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value as any)}
                className="appearance-none flex h-11 w-full rounded-xl border border-slate-700/50 bg-slate-900/40 px-4 py-2 text-sm text-gray-200 shadow-inner transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30 focus-visible:border-blue-500/50 focus-visible:bg-slate-800/60 [&>option]:bg-slate-800"
              >
                <option value="member">Member</option>
                <option value="core">Core</option>
                <option value="admin">Admin</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400 border-l border-slate-700/50">
                 <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                 </svg>
              </div>
            </div>
          </div>

          <div className="pt-6 flex justify-end gap-3 mt-2 border-t border-slate-800/60">
            <Button type="button" variant="ghost" onClick={onClose} className="hover:bg-slate-800">Cancel</Button>
            <Button type="submit">Invite Member</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
