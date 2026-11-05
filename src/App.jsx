import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import Vans from "./pages/Vans";
import VansDetails from "./pages/VansDetails.jsx";

import SiteLayout from "./layouts/SiteLayout.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Income from "./pages/dashboard/Income.jsx";
import Reviews from "./pages/dashboard/Reviews.jsx";
import VansDashboard from "./pages/dashboard/Vans.jsx";
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

            <Route path="/host" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<VansDashboard />} />
              <Route path="vans/:id" element={<VansDetails />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
