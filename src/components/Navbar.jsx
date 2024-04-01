import React from "react";
import './Navbar.css';
import { Link,useLocation} from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <header className="text-white bg-gray-900 h-12 sticky top-0 h-auto">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center bg-gray-900 ">
        <Link to="/">
          <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-2xl text-white font-bold font-serif">
              Crex<span className="text-3xl text-green-600">.</span>
            </span>
          </span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold font-serif">
        <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>Home</Link>
        <Link to="/series" className={`nav-link ${location.pathname === "/series" ? "active" : ""}`}>Series</Link>
        <Link to="/fixtures" className={`nav-link ${location.pathname === "/fixtures" ? "active" : ""}`}>Fixtures</Link>
        <Link to="/star" className={`nav-link ${location.pathname === "/star" ? "active" : ""}`}>Star Corner</Link>
        <Link to="/rank" className={`nav-link ${location.pathname === "/rank" ? "active" : ""}`}>Ranking</Link>
        </nav>
        {/* <button className="inline-flex items-center py-1 px-3 focus:outline-none hover:bg-gray-200 text-white text-base mt-4 md:mt-0 bg-black border border-green-600">
          Login
        </button> */}
      </div>
    </header>
  );
};

export default Navbar;
