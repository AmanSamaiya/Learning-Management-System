import Footer from "../components/Footer.jsx";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

function HomeLayout({ children }) {
  return (
    <>
      <div>
        <div className="drawer absolute left-0 z-50 w-full">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />

          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="drawer-button"
            >
              <FiMenu size={"36px"} className="font-bold text-white m-4" />
            </label>
          </div>

          <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200  text-white text-lg">
              {/* Sidebar content here */}
              <li>
                <Link to="/" > Home </Link>
              </li>
              <li>
                <Link to="/about" > About Us </Link>
              </li>
              <li>
                <Link to="/contact" > Contact Us </Link>
              </li>
              <li>
                <Link to="/courses" > All Courses </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>


      {children}
      <Footer />
    </>
  );
}

export default HomeLayout;
