import Home from "./components/Home/Home";
import CarContent from "./components/CartContent/CarContent";
import DataProvider from "./components/Context/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blink182 from "./components/Pages/blink182";
import Metallica from "./components/Pages/Metallica";
import Offspring from "./components/Pages/Offspring";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blink182" element={<Blink182 />} />
          <Route path="/metallica" element={<Metallica />} />
          <Route path="/offspring" element={<Offspring />} />
          <Route path="/cart" element={<CarContent />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
