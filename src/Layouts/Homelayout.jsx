import { useState } from "react";
import Footer from "../components/Footer.jsx";
import { FiMenu } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function HomeLayout({ children }) {



  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn)
  const role = useSelector((state) => state?.auth?.role)


  function onLogOut(e){

    e.preventDefault();
    

    navigate("/")
  }


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

              {isLoggedIn && role === "ADMIN" && (
                  <li>
                    <Link to = "/admin/dashboard"> Admin Dashboard</Link>
                  </li>
              )}



              <li>
                <Link to="/about" > About Us </Link>
              </li>
              <li>
                <Link to="/contact" > Contact Us </Link>
              </li>
              <li>
                <Link to="/courses" > All Courses </Link>
              </li>


              {!isLoggedIn ? (
                <li className=" ml-14 w-[60%]">
                    <div className=" w-full flex items-center justify-center">
                        <button className=" btn btn-primary px-4 py-1 font-semibold rounded-md w-full">
                              <Link to = "/login">Login</Link>
                          </button>
                        <button className=" btn btn-secondary px-4 py-1 font-semibold rounded-md w-full">
                              <Link to = "/login">Signup</Link>
                          </button>
                    
                    </div>
                </li>
              ) : (
                <li className=" ml-14 w-[60%]">
                    <div className=" w-full flex items-center justify-center">
                        <button className=" btn btn-primary px-4 py-1 font-semibold rounded-md w-full">
                              <Link to = "/user/profile">Profile</Link>
                          </button>
                        <button className=" btn btn-secondary px-4 py-1 font-semibold rounded-md w-full">
                              <Link onClick={onLogOut}>Logout</Link>
                          </button>
                    
                    </div>
                </li>
              )
            
            }


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
