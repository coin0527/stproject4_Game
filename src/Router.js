import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Omok } from "./pages/Omok";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/omok" element={<Omok />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};
