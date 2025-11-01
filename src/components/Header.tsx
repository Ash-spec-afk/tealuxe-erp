import { Bell, Calendar, User } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import iiitdLogo from "@/assets/iiitd-logo.png";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  studentName?: string;
  onLogout?: () => void;
}

export const Header = ({ studentName = "Student", onLogout }: HeaderProps) => {
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className="h-16 border-b bg-card flex items-center justify-between px-6 sticky top-0 z-40">
        <img 
          src={iiitdLogo} 
          alt="IIIT-Delhi" 
          className="h-10 cursor-pointer"
          onClick={() => navigate("/")}
        />
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Calendar className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-destructive rounded-full" />
          </Button>
          
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => setShowProfile(!showProfile)}
            >
              <User className="h-5 w-5" />
            </Button>
            
            {showProfile && (
              <Card className="absolute right-0 top-12 w-64 p-4 shadow-lg">
                <div className="space-y-2">
                  <h3 className="font-semibold">{studentName}</h3>
                  <p className="text-sm text-muted-foreground">B.Tech CSE</p>
                  <p className="text-sm text-muted-foreground">Semester: Monsoon 2025 - V</p>
                  <Button
                    variant="destructive"
                    className="w-full mt-4"
                    onClick={onLogout}
                  >
                    Logout
                  </Button>
                </div>
              </Card>
            )}
          </div>
        </div>
      </header>
      
      <div className="bg-primary text-primary-foreground px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">👋 Welcome, {studentName}!</h1>
      </div>
    </>
  );
};
