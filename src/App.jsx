import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Home, Scroll, Lantern, BuildingSkyscraper } from "lucide-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Add missing imports
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar"; // Use the navbar layout
import Index from "./pages/Index.jsx";
const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "History",
    to: "/history",
    icon: <Scroll className="h-4 w-4" />,
  },
  {
    title: "Culture",
    to: "/culture",
    icon: <Lantern className="h-4 w-4" />,
  },
  {
    title: "Modernity",
    to: "/modernity",
    icon: <BuildingSkyscraper className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              {/* Add more routes here as needed */}
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;