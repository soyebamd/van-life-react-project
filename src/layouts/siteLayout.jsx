import Header from "../components/header";
import Footer from "../components/footer";
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
