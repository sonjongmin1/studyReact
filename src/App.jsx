import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import Head from "./component/Head";
import Home from "./pages/Home";
import Top from "./pages/Top";
import Bottom from "./pages/Bottom";
import Accessories from "./pages/Accessories";
import Shoes from "./pages/Shoes";

function App() {
  return (
    <>
      <Head />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top" element={<Top />} />
        <Route path="/bottom" element={<Bottom />} />
        <Route path="/acc" element={<Accessories />} />
        <Route path="/shoes" element={<Shoes />} />
      </Routes>
    </>
  );
}

export default App;
