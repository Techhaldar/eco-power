import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Scheme from "./pages/Scheme";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import FloatingCallButton from "./components/FloatingCallButton";
import MobileOfferBar from "./components/MobileOfferBar";
import ScrollToTop from "./components/ScrollToTop.jsx";
import FloatingContactBar from "./components/FloatingContactBar";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="min-h-screen flex flex-col">
        <MobileOfferBar />
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/scheme" element={<Scheme />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        <FloatingContactBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
