import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const announcements = [
  {
    id: 1,
    title: "End-Sem Dates Tentative",
    description: "The tentative schedule for End-Semester Examinations for the Monsoon 2025 term has been released.",
    date: "Nov 10, 2025",
    type: "urgent",
    link: "#"
  },
  {
    id: 2,
    title: "Fee Payment Reminder",
    description: "The last date for paying the hostel and mess fees is Nov 15, 2025.",
    date: "Nov 8, 2025",
    type: "urgent",
    link: "#"
  },
  {
    id: 3,
    title: "Faculty Office Hours Update",
    description: "Dr. Anjali's office hours have changed starting next week.",
    date: "Nov 5, 2025",
    type: "info",
    link: "#"
  },
  {
    id: 4,
    title: "Library Extended Hours",
    description: "The library will now remain open until midnight during the examination period.",
    date: "Nov 3, 2025",
    type: "info",
    link: "#"
  }
];

export const Announcements = () => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
        Important Announcements 📢
      </h2>
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="border-l-4 border-primary pl-4 py-2 hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold">{announcement.title}</h3>
                  {announcement.type === "urgent" && (
                    <Badge variant="destructive" className="text-xs">Urgent</Badge>
                  )}
                  {announcement.type === "info" && (
                    <Badge variant="secondary" className="text-xs">Info</Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{announcement.description}</p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                {announcement.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
