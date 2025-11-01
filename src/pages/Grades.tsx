import { Card } from "@/components/ui/card";

const Grades = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Grades</h1>
      <Card className="p-6">
        <p className="text-muted-foreground">Detailed grades will be displayed here.</p>
      </Card>
    </div>
  );
};

export default Grades;
