"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Plus, Calendar as CalendarIcon, MapPin, Users, Clock, ChevronRight } from "lucide-react";

export default function EventsPage() {
  const [events] = useState([
    {
      id: "1",
      title: "Annual Tech Symposium",
      date: "Oct 15, 2024",
      time: "09:00 AM - 05:00 PM",
      location: "Main Auditorium",
      attendees: 350,
      status: "upcoming",
      imageGrad: "from-blue-600/80 to-indigo-900/80"
    },
    {
      id: "2",
      title: "Web Dev Workshop",
      date: "Oct 20, 2024",
      time: "02:00 PM - 04:00 PM",
      location: "Lab 3",
      attendees: 45,
      status: "upcoming",
      imageGrad: "from-emerald-600/80 to-teal-900/80"
    },
    {
      id: "3",
      title: "Hackathon 2024",
      date: "Nov 01, 2024",
      time: "10:00 AM (48 Hrs)",
      location: "Innovation Hub",
      attendees: 120,
      status: "planning",
      imageGrad: "from-purple-600/80 to-pink-900/80"
    },
    {
      id: "4",
      title: "Alumni Meet & Greet",
      date: "Sep 10, 2024",
      time: "06:00 PM - 08:30 PM",
      location: "Student Center",
      attendees: 85,
      status: "completed",
      imageGrad: "from-slate-700/80 to-slate-900/80"
    }
  ]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "upcoming":
        return <Badge variant="core" className="shadow-lg backdrop-blur-md bg-purple-500/20">Upcoming</Badge>;
      case "planning":
        return <Badge variant="member" className="shadow-lg backdrop-blur-md bg-emerald-500/20">Planning</Badge>;
      case "completed":
        return <Badge variant="default" className="shadow-lg backdrop-blur-md bg-slate-800/80">Completed</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-800/60">
        <div>
          <h2 className="text-3xl font-bold text-white tracking-tight">Events & Meets</h2>
          <p className="text-sm text-slate-400 mt-1.5">Organize and track club activities, workshops, and hackathons.</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="w-5 h-5" />
          <span>Create Event</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Card key={event.id} className="p-0 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-slate-600/50 transition-all duration-300 flex flex-col group cursor-pointer">
            <div className={`h-40 relative border-b border-slate-700/50 bg-gradient-to-br ${event.imageGrad} overflow-hidden`}>
               <div className="absolute inset-0 bg-black/20 mix-blend-overlay opacity-50 group-hover:opacity-20 transition-opacity"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
               <div className="absolute top-4 right-4 z-10">
                 {getStatusBadge(event.status)}
               </div>
               <div className="absolute bottom-4 left-5 right-5 z-10">
                  <h3 className="text-xl font-bold text-white tracking-tight line-clamp-1 group-hover:text-blue-200 transition-colors drop-shadow-md" title={event.title}>
                    {event.title}
                  </h3>
               </div>
            </div>
            
            <div className="p-5 flex-1 flex flex-col bg-slate-900/40">
              <div className="space-y-3.5 mb-6 flex-1">
                <div className="flex items-center text-sm text-slate-300 font-medium">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center mr-3 text-blue-400">
                    <CalendarIcon className="w-4 h-4" />
                  </div>
                  {event.date}
                </div>
                <div className="flex items-center text-sm text-slate-300 font-medium">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center mr-3 text-emerald-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  {event.time}
                </div>
                <div className="flex items-center text-sm text-slate-300 font-medium">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center mr-3 text-purple-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="truncate">{event.location}</span>
                </div>
              </div>

               <div className="pt-4 flex items-center justify-between border-t border-slate-700/50 mt-auto">
                <div className="flex items-center text-sm text-slate-400 font-medium">
                  <Users className="w-4 h-4 mr-2 text-slate-500" />
                  {event.attendees} Registered
                </div>
                <button className="text-blue-400 outline-none hover:text-blue-300 text-sm font-semibold flex items-center gap-1 group/btn transition-colors">
                  Details <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
