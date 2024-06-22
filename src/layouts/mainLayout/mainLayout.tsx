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
      <main className="relative font-iranSans bg-slate-800">
        <div className="z-40 px-4 py-3 bg-slate-800/75 backdrop-blur-sm text-white sticky top-0 font-extrabold text-sm">
          <SubNavbar />
        </div>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
