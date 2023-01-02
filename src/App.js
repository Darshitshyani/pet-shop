import "./App.css";
import Home from "./Components/Page/Home";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Page/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Components/Page/Cart";
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
