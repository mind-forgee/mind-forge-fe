// src/layouts/AdminLayout.jsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";
import { Menu } from "lucide-react";

export default function AdminLayout() {
  const [open, setOpen] = useState(false);

  return (
    <main className="flex h-screen w-screen bg-gray-50">
      {/* Sidebar Desktop */}
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div
        className={`fixed inset-y-0 left-0 z-50 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out bg-emerald-950 w-56 md:hidden`}
      >
        <Sidebar onClose={() => setOpen(false)} />
      </div>
      <section className="flex-1 overflow-y-auto p-6">
        <div className="flex items-center justify-between mb-4 md:hidden">
          <button
            onClick={() => setOpen(true)}
            className="p-2 rounded-md hover:bg-gray-200 transition"
          >
            <Menu size={24} />
          </button>
        </div>

        <Outlet />
      </section>
    </main>
  );
}
