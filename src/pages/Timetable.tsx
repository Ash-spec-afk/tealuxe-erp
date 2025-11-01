import { Card } from "@/components/ui/card";

const Timetable = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Timetable</h1>
      <Card className="p-6">
        <p className="text-muted-foreground">Class schedule will be displayed here.</p>
      </Card>
    </div>
  );
};

export default Timetable;
