// client/src/App.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import ScrollToTop from "./Components/Global/ScrollToTop";
import LandingPage from "./Pages/LandingPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import ProductPage from "./Pages/ProductPage";

function App() {
  return (
    <BrowserRouter>
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tentang" element={<AboutPage />} />
        <Route path="/kontak" element={<ContactPage />} />
        <Route path="/produk" element={<ProductPage/>}/>
      </Routes>
      
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
        }}
      />

    </BrowserRouter>
  );
}

export default App;
