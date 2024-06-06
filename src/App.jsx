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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
