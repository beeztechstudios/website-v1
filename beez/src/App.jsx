import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AboutUsPage from "./pages/About";
import BookACallForm from "./components/BookACallForm";
import ScrollToTop from "./components/ScrollToTop";
import PortfolioPage from "./pages/Works";
import BeezTechBlogPage from "./components/Blogs/BeezTechBlogPage";
import BeezTechBlogDetailPage from "./components/Blogs/BeezTechBlogDetailPage";
import WebDevelopmentPage from "./pages/WebDevelopmentPage";
import DigitalMarketingPage from "./pages/DigitalMarketingPage";
import BrandingPage from "./pages/BrandingPage";
import MediaProductionPage from "./pages/MediaProdPage";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop /> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/book-call" element={<BookACallForm />} />
        <Route path="/works" element={<PortfolioPage />} />
        <Route path="services/digital-marketing" element={<DigitalMarketingPage />} />
        <Route path="/blogs" element={<BeezTechBlogPage />} />
        <Route path="/blog/:slug" element={<BeezTechBlogDetailPage />}/>
        <Route path="/services/web-app-development" element={<WebDevelopmentPage />} />
        <Route path="/services/branding" element={<BrandingPage/>} />
        <Route path="/services/media-production" element={<MediaProductionPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
