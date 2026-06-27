import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Post from "./pages/Post";

export default function App() {
  return (
    <HashRouter>
      <div className="grain relative">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}
