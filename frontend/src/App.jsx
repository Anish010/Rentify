import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Seller from "./pages/Seller/Seller";
import Buyer from "./pages/Buyer/Buyer";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Seller" element={<Seller/>} />
          <Route path="/Buyer" element={<Buyer/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
