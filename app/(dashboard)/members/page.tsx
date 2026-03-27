"use client";

import { useState } from "react";
import { MembersTable } from "@/components/tables/MembersTable";
import { AddMemberForm } from "@/components/forms/AddMemberForm";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { UserPlus, Search, SlidersHorizontal } from "lucide-react";

const initialMembers = [
  { id: "1", name: "Aryan Sharma", email: "admin@technobyte.com", role: "admin" as const },
  { id: "2", name: "Sarah Connor", email: "sarah@technobyte.com", role: "core" as const },
  { id: "3", name: "John Doe", email: "john@technobyte.com", role: "member" as const },
  { id: "4", name: "Alice Smith", email: "alice@technobyte.com", role: "core" as const },
  { id: "5", name: "Bob Johnson", email: "bob@technobyte.com", role: "member" as const },
];

export default function MembersPage() {
  const [members, setMembers] = useState(initialMembers);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddMember = (data: { name: string; email: string; role: "admin" | "core" | "member" }) => {
    const newMember = {
      id: Math.random().toString(36).substr(2, 9),
      ...data,
    };
    setMembers([newMember, ...members]);
    setIsModalOpen(false);
  };

  const handleEdit = (member: any) => {
    console.log("Edit member", member);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this member?")) {
      setMembers(members.filter((m) => m.id !== id));
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-800/60">
        <div>
          <h2 className="text-3xl font-bold text-white tracking-tight">Community</h2>
          <p className="text-sm text-slate-400 mt-1.5">Manage members, update access roles, and invite new users.</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2">
          <UserPlus className="w-5 h-5" />
          <span>Invite Member</span>
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
        <div className="relative w-full sm:max-w-md group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
          </div>
          <Input
            type="text"
            placeholder="Search community by name or email..."
            className="pl-11 h-12 text-base shadow-lg shadow-black/10 bg-slate-800/60 border-slate-700/60"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="secondary" className="h-12 border-slate-700/60 bg-slate-800/60 shadow-lg shadow-black/10 flex items-center gap-2 px-5 text-slate-300">
          <SlidersHorizontal className="w-4 h-4" />
          <span>Filters</span>
        </Button>
      </div>

      <MembersTable 
        members={filteredMembers} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
      />

      <AddMemberForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddMember}
      />
    </div>
  );
}