"use client";
import { useState } from "react";
import { Sidebar, SidebarToggle } from "@/components/Sidebar";
import { DataTable } from "@/components/DataTable";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* <Sidebar isOpen={isSidebarOpen} /> */}
      <div className="flex-1 p-6 overflow-y-auto">
        <SidebarToggle onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        {children}
      </div>
    </div>
  );
}
