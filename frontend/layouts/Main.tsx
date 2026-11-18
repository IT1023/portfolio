import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Main() {
  return (
    <div className="max-w-screen min-h-screen bg-background overflow-x-hidden flex flex-col">
      <Header />
      <div className="w-full z-0 flex-1 flex mt-15 min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
