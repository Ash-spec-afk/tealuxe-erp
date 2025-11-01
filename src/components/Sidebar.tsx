import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  BookOpen, 
  Wallet, 
  Clock, 
  Award, 
  GraduationCap,
  FileText,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  onLogout?: () => void;
}

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/" },
  { title: "Course Catalog", icon: BookOpen, path: "/courses" },
  { title: "My Finances", icon: Wallet, path: "/finances" },
  { title: "Timetable", icon: Clock, path: "/timetable" },
  { title: "My Grades", icon: Award, path: "/grades" },
  { title: "My Courses", icon: GraduationCap, path: "/my-courses" },
  { title: "Transcript", icon: FileText, path: "/transcript" },
];

export const Sidebar = ({ onLogout }: SidebarProps) => {
  return (
    <aside className="w-64 bg-sidebar text-sidebar-foreground min-h-[calc(100vh-8rem)] border-r border-sidebar-border">
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors relative",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-primary"
                  : "hover:bg-sidebar-accent/50"
              )
            }
          >
            <item.icon className="h-5 w-5" />
            <span className="font-medium">{item.title}</span>
          </NavLink>
        ))}
        
        <button
          onClick={onLogout}
          className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors hover:bg-sidebar-accent/50 w-full text-left mt-4"
        >
          <LogOut className="h-5 w-5" />
          <span className="font-medium">Logout</span>
        </button>
      </nav>
    </aside>
  );
};
