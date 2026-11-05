import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Outlet } from "react-router";

export default function SiteLayout() {
  return (
    <>
      <div className="max-w-137 mx-auto flex flex-col flex-wrap min-h-screen">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
