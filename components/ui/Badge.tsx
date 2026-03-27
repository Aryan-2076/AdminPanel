import { HTMLAttributes, ReactNode } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: "admin" | "core" | "member" | "default";
}

export function Badge({ children, variant = "default", className = "", ...props }: BadgeProps) {
  const variants = {
    admin: "bg-red-500/10 text-red-400 border border-red-500/20",
    core: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
    member: "bg-green-500/10 text-green-400 border border-green-500/20",
    default: "bg-slate-700/50 text-slate-300 border border-slate-600"
  };

  return (
    <span 
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
