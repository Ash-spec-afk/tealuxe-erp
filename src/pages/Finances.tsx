import { Card } from "@/components/ui/card";

const Finances = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Finances</h1>
      <Card className="p-6">
        <p className="text-muted-foreground">Financial information will be displayed here.</p>
      </Card>
    </div>
  );
};

export default Finances;
