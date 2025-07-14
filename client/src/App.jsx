import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";
import DeitiesPage from "./pages/DeitiesPage";
import FestivalsPage from "./pages/FestivalsPage";
import VisitPage from "./pages/VisitPage";
import GalleryPage from "./pages/GalleryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
        <Route path="/history" element={<MainLayout><HistoryPage /></MainLayout>} />
        <Route path="/deities" element={<MainLayout><DeitiesPage /></MainLayout>} />
        <Route path="/festivals" element={<MainLayout><FestivalsPage /></MainLayout>} />
        <Route path="/visit" element={<MainLayout><VisitPage /></MainLayout>} />
        <Route path="/gallery" element={<MainLayout><GalleryPage /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
