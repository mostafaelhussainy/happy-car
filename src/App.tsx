import { Box } from "@mui/material";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WorkGallery from "./components/WorkGallery";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <Box component="body" sx={{ bgcolor: "#b5b5b5" }}>
      <Header />
      <HeroSection />
      <WorkGallery />
      <ContactUs />
      <Footer />
    </Box>
  );
}

export default App;
