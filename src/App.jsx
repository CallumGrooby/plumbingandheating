import { Navigationbar } from "./components/Navigationbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { GasServices } from "./pages/GasServices";
import { OilHeatingService } from "./pages/OilHeatingService";
import { StovesSection } from "./pages/StovesSection";
import { BathroomServices } from "./pages/BathroomServices";
import { CoreValues } from "./pages/CoreValues";
import { FAQsPage } from "./pages/FAQsPage";
import { Showroom } from "./pages/Showroom";
import { Footer } from "./components/Footer";
import { ContactUs } from "./pages/ContactUs";

import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { News } from "./pages/News";
import { BlogPost } from "./pages/BlogPost";
library.add(faFacebook, faLinkedin, faInstagram);

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigationbar />}>
            <Route index path="/" element={<HomePage />} />

            <Route path="/gas-services" element={<GasServices />} />
            <Route path="/heating-services" element={<OilHeatingService />} />
            <Route path="/log-burners-services" element={<StovesSection />} />
            <Route
              path="/bathroom-installations"
              element={<BathroomServices />}
            />
            <Route path="/values" element={<CoreValues />} />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route path="/showroom" element={<Showroom />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/news" element={<News />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
