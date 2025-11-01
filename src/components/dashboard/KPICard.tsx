import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
}

export const KPICard = ({ title, value, icon: Icon }: KPICardProps) => {
  return (
    <Card className="p-6 flex items-center gap-4 hover:shadow-lg transition-shadow">
      <div className="p-3 bg-primary/10 rounded-full">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="text-3xl font-bold">{value}</p>
      </div>
    </Card>
  );
};
