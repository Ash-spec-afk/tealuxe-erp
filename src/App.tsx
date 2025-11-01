import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import Finances from "./pages/Finances";
import Timetable from "./pages/Timetable";
import Grades from "./pages/Grades";
import MyCourses from "./pages/MyCourses";
import Transcript from "./pages/Transcript";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const handleLogout = () => {
    console.log("Logging out...");
    // Add logout logic here
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen w-full bg-background">
            <Header studentName="Rahul Kumar" onLogout={handleLogout} />
            <div className="flex w-full">
              <Sidebar onLogout={handleLogout} />
              <main className="flex-1 p-8">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/finances" element={<Finances />} />
                  <Route path="/timetable" element={<Timetable />} />
                  <Route path="/grades" element={<Grades />} />
                  <Route path="/my-courses" element={<MyCourses />} />
                  <Route path="/transcript" element={<Transcript />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
