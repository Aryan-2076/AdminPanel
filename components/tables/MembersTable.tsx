import { Badge } from "@/components/ui/Badge";
import { Edit2, Trash2, MoreHorizontal } from "lucide-react";

interface Member {
  id: string;
  name: string;
  email: string;
  role: "admin" | "core" | "member";
}

interface MembersTableProps {
  members: Member[];
  onEdit: (member: Member) => void;
  onDelete: (id: string) => void;
}

export function MembersTable({ members, onEdit, onDelete }: MembersTableProps) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/40 backdrop-blur-md shadow-xl">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-300">
          <thead className="bg-slate-900/60 text-slate-400 border-b border-slate-700/50">
            <tr>
              <th scope="col" className="px-6 py-5 font-semibold tracking-wide text-xs uppercase">Member</th>
              <th scope="col" className="px-6 py-5 font-semibold tracking-wide text-xs uppercase">Contact</th>
              <th scope="col" className="px-6 py-5 font-semibold tracking-wide text-xs uppercase">Role Access</th>
              <th scope="col" className="px-6 py-5 font-semibold text-right tracking-wide text-xs uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700/50">
            {members.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center">
                  <p className="text-slate-500 text-base font-medium">No members found.</p>
                </td>
              </tr>
            ) : (
              members.map((member) => (
                <tr key={member.id} className="group hover:bg-slate-700/30 transition-colors duration-200">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center border border-slate-600/50 shadow-inner group-hover:border-blue-500/30 transition-colors">
                        <span className="text-sm font-bold text-slate-300 group-hover:text-blue-400">
                          {member.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div className="font-semibold text-white group-hover:text-blue-100 transition-colors">
                        {member.name}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-slate-400 font-medium group-hover:text-slate-300 transition-colors">
                    {member.email}
                  </td>
                  <td className="px-6 py-5">
                    <Badge variant={member.role} className="shadow-sm">
                      {member.role.charAt(0).toUpperCase() + member.role.slice(1)}
                    </Badge>
                  </td>
                  <td className="px-6 py-5 text-right">
                     <div className="flex items-center justify-end gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => onEdit(member)} className="p-2 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors" title="Edit">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button onClick={() => onDelete(member.id)} className="p-2 text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors" title="Delete">
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-slate-400 hover:bg-slate-700/50 hover:text-white rounded-lg transition-colors">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                     </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}