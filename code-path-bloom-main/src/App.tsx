import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Roadmap from "./pages/Roadmap";
import PracticalLabs from "./pages/PracticalLabs";
import ToolsLibrary from "./pages/tools/ToolsLibrary";
import NetworkPentestTools from "./pages/tools/NetworkPentestTools";
import WebPentestTools from "./pages/tools/WebPentestTools";
import NetworkAnalysisTools from "./pages/tools/NetworkAnalysisTools";
import ReconTools from "./pages/tools/ReconTools";
import ReverseEngineeringTools from "./pages/tools/ReverseEngineeringTools";
import ForensicsTools from "./pages/tools/ForensicsTools";
import OsintTools from "./pages/tools/OsintTools";
import WirelessTools from "./pages/tools/WirelessTools";
import PasswordTools from "./pages/tools/PasswordTools";
import VulnerabilityScanners from "./pages/tools/VulnerabilityScanners";
import ProgrammingPage from "./pages/roadmap/ProgrammingPage";
import NetworkingPage from "./pages/roadmap/NetworkingPage";
import LinuxPage from "./pages/roadmap/LinuxPage";
import LinuxCoursesPage from "./pages/roadmap/linux/LinuxCoursesPage";
import LinuxWebsitesPage from "./pages/roadmap/linux/LinuxWebsitesPage";
import WhatIsLinuxPage from "./pages/roadmap/linux/WhatIsLinuxPage";
import CyberSecurityBasicsPage from "./pages/roadmap/CyberSecurityBasicsPage";
import PenTestBasicsPage from "./pages/roadmap/PenTestBasicsPage";
import WebPenTestPage from "./pages/roadmap/WebPenTestPage";
import WebPenTestResourcesPage from "./pages/roadmap/WebPenTestResourcesPage";
import WebProgrammingBasicsPage from "./pages/roadmap/WebProgrammingBasicsPage";
import ActiveDirectoryPage from "./pages/roadmap/ActiveDirectoryPage";
import MalwareAnalysisPage from "./pages/roadmap/MalwareAnalysisPage";
import WebsitesPage from "./pages/resources/WebsitesPage";
import YoutubeChannelsPage from "./pages/resources/YoutubeChannelsPage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/roadmap/programming" element={<ProgrammingPage />} />
          <Route path="/roadmap/networking" element={<NetworkingPage />} />
          <Route path="/roadmap/linux" element={<LinuxPage />} />
          <Route path="/roadmap/linux/courses" element={<LinuxCoursesPage />} />
          <Route path="/roadmap/linux/websites" element={<LinuxWebsitesPage />} />
          <Route path="/roadmap/linux/what-is-linux" element={<WhatIsLinuxPage />} />
          <Route path="/roadmap/cybersecurity-basics" element={<CyberSecurityBasicsPage />} />
          <Route path="/roadmap/pentest-basics" element={<PenTestBasicsPage />} />
          <Route path="/roadmap/web-pentest" element={<WebPenTestPage />} />
          <Route path="/roadmap/web-pentest-resources" element={<WebPenTestResourcesPage />} />
          <Route path="/roadmap/web-programming-basics" element={<WebProgrammingBasicsPage />} />
          <Route path="/roadmap/active-directory" element={<ActiveDirectoryPage />} />
          <Route path="/roadmap/malware-analysis" element={<MalwareAnalysisPage />} />
          <Route path="/practical-labs" element={<PracticalLabs />} />
          <Route path="/tools" element={<ToolsLibrary />} />
          <Route path="/tools/network-pentest" element={<NetworkPentestTools />} />
          <Route path="/tools/web-pentest" element={<WebPentestTools />} />
          <Route path="/tools/network-analysis" element={<NetworkAnalysisTools />} />
          <Route path="/tools/recon" element={<ReconTools />} />
          <Route path="/tools/reverse-engineering" element={<ReverseEngineeringTools />} />
          <Route path="/tools/forensics" element={<ForensicsTools />} />
          <Route path="/tools/osint" element={<OsintTools />} />
          <Route path="/tools/wireless" element={<WirelessTools />} />
          <Route path="/tools/password-attacks" element={<PasswordTools />} />
          <Route path="/tools/vulnerability-scanners" element={<VulnerabilityScanners />} />
          <Route path="/resources/websites" element={<WebsitesPage />} />
          <Route path="/resources/youtube-channels" element={<YoutubeChannelsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
