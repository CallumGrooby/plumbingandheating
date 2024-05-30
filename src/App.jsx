import { Navigationbar } from "./components/Navigationbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigationbar />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
