import { BookOpen, TrendingUp, Award, CheckCircle } from "lucide-react";
import { KPICard } from "@/components/dashboard/KPICard";
import { GradeChart } from "@/components/dashboard/GradeChart";
import { Announcements } from "@/components/dashboard/Announcements";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard title="Registered Credits" value="20" icon={BookOpen} />
        <KPICard title="Current CGPA" value="9.15" icon={TrendingUp} />
        <KPICard title="Courses This Term" value="5" icon={Award} />
        <KPICard title="Credits Earned" value="88" icon={CheckCircle} />
      </div>

      <GradeChart />
      
      <Announcements />
    </div>
  );
};

export default Dashboard;
