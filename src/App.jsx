import Home from "./components/Home/Home";
import CarContent from "./components/CartContent/CarContent";
import DataProvider from "./components/Context/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CarContent />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
