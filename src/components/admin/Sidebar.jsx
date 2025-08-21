import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  FolderKanban,
  User,
  Settings,
  Building2,
  FileText,
  LogOut,
  X,
} from "lucide-react";
import { useLogout } from "../../hooks/useLogout";

const sidebarItems = [
  { name: "Overview", icon: LayoutDashboard, path: "/admin/overview" },
  { name: "Courses", icon: BookOpen, path: "/admin/courses" },
  { name: "Topic", icon: FolderKanban, path: "/admin/topics" },
  { name: "User Profile", icon: User, path: "/admin/profile" },
  { name: "Account", icon: Settings, path: "/admin/account" },
  { name: "Corporate", icon: Building2, path: "/admin/corporate" },
  { name: "Blog", icon: FileText, path: "/admin/blog" },
];

export default function Sidebar({ onClose }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { mutate: logout } = useLogout();

  return (
    <aside className="h-screen w-56 bg-secondary text-white flex flex-col p-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
            <img src="/logo/logo.png" alt="Logo" className="h-8" />
            <span className="text-lg font-bold">MindForge</span>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="p-1 rounded-md hover:bg-emerald-900 transition md:hidden"
          >
            <X size={20} />
          </button>
        )}
      </div>

      <nav className="flex flex-col gap-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const active = location.pathname === item.path;
          return (
            <button
              key={item.name}
              onClick={() => {
                navigate(item.path);
                onClose && onClose(); 
              }}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 ease-in-out
                ${
                  active
                    ? "bg-black text-white"
                    : "hover:bg-emerald-900 hover:scale-105"
                }`}
            >
              <span className="text-secondary bg-white p-2 rounded-md"><Icon size={20} /></span>
              <span className="text-sm font-medium">{item.name}</span>
            </button>
          );
          
        })}
        <button onClick={logout} className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-emerald-900 hover:scale-105">
          <span className="text-secondary bg-white p-2 rounded-md"><LogOut size={20} /></span>
          <span className="text-sm font-medium">Log Out</span>
        </button>
      </nav>
    </aside>
  );
}
