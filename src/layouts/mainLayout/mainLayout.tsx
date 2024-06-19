import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./navbar/navbar";
import SubNavbar from "./navbar/subNavbar";

const MainLayout = () => {
  return (
    <>
      <header className="font-iranSans font-thin">
        <Navbar />
      </header>
      <main className="relative font-iranSans">
        <div className="pb-2 px-4 bg-slate-800 text-white backdrop-filter sticky top-0 font-extrabold text-sm">
          <SubNavbar />
        </div>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
