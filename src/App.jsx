import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import NotFound from "./pages/not-found";
import Vans from "./pages/Vans";
import VansDetails from "./pages/vansDetails";
import Footer from "./components/footer";
import SiteLayout from "./layouts/siteLayout";

import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SiteLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans-details/:id" element={<VansDetails />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
