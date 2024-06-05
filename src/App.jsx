import { Navigationbar } from "./components/Navigationbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { GasServices } from "./pages/GasServices";
import { OilHeatingService } from "./pages/OilHeatingService";
import { StovesSection } from "./pages/StovesSection";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigationbar />}>
            <Route index element={<HomePage />} />

            <Route path="/gas-services" element={<GasServices />} />
            <Route path="/heating-services" element={<OilHeatingService />} />
            <Route path="/log-burners-services" element={<StovesSection />} />
            <Route path="/bathroom-installations" element={<GasServices />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
