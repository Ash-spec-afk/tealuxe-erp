import { Card } from "@/components/ui/card";

const MyCourses = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Courses</h1>
      <Card className="p-6">
        <p className="text-muted-foreground">Your registered courses will be displayed here.</p>
      </Card>
    </div>
  );
};

export default MyCourses;
