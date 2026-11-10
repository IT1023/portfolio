import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Main() {
  return (
    <div className="w-screen min-h-screen bg-background overflow-x-hidden flex flex-col">
      <Header />
      <div className="w-full flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
