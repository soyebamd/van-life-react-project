import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import NotFound from "./pages/not-found";
import Footer from "./components/footer";

import { BrowserRouter, Routes, Route, Link } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <main className="max-w-137 mx-auto">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
