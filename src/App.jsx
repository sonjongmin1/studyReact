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
        <Route path="/studyReact/" element={<Home />} />
        <Route path="/studyReact/top" element={<Top />} />
        <Route path="/studyReact/bottom" element={<Bottom />} />
        <Route path="/studyReact/acc" element={<Accessories />} />
        <Route path="/studyReact/shoes" element={<Shoes />} />
      </Routes>
    </>
  );
}

export default App;
