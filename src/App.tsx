import { Suspense, lazy } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Post from "./pages/Post";

// Ambient, full-page WebGL flow field behind all content.
const BackgroundFX = lazy(() => import("./three/BackgroundFX"));

export default function App() {
  return (
    <HashRouter>
      <Suspense fallback={null}>
        <BackgroundFX />
      </Suspense>
      <div className="grain relative z-10">
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
