import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeLayout from "../Layouts/Homelayout";
import toast from "react-hot-toast";
import { isEmail } from "../helper/regexmatcher";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";

function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signinDetails, setSigninDetails] = useState({
    email: "",
    password: "",
  });


  function handleUserInput(e) {
    const { name, value } = e.target;
    setSigninDetails({
      ...signinDetails,
      [name]: value,
    });
  }


  async function onFormSubmit(e) {
    console.log(signinDetails);
    e.preventDefault();
    if (
      !signinDetails.email ||
      !signinDetails.password
    ) {
      toast.error("Please fill all the details");
      return;
    }

    if (signinDetails.fullname.length < 4) {
      toast.error("Name should be atleast of four characters");
      return;
    }

    if (!isEmail(signinDetails.email)) {
      toast.error("Not a valid email");
      return;
    }



    const response = await dispatch(login(signinDetails));
    console.log(response);
    if (response?.payload?.data) {
      navigate("/");
    }

    setSigninDetails({
      email: "",
      password: "",
    });

  }

  return (
    <div>
      <HomeLayout>
        <div className=" flex overflow-x-auto items-center justify-center h-[100vh]">
          <form
            onSubmit={onFormSubmit}
            noValidate
            className=" flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-auto"
          >
            <h1 className=" text-2xl font-bold text-center">
              Login Page
            </h1>

            <div className=" flex flex-col gap-1">
              <label htmlFor="email" className=" font-semibold">
                Email
              </label>
              <input
                required
                className="px-2 py-1 bg-transparent border"
                type="text"
                id="email"
                name="email"
                value={signinDetails.email}
                placeholder="Enter your email"
                onChange={handleUserInput}
              />
            </div>

            <div className=" flex flex-col gap-1">
              <label htmlFor="password" className=" font-semibold">
                Password
              </label>
              <input
                required
                className="px-2 py-1 bg-transparent border"
                type="text"
                id="password"
                name="password"
                value={signinDetails.password}
                placeholder="Enter your password"
                onChange={handleUserInput}
              />
            </div>

            <button className=" mt-2 bg-yellow-800 hover:bg-yellow-500 transition-all ease-in-out duration-300 cursor-pointer py-2 font-semibold text-lg">
              Login
            </button>
            <p className="text-center">
              Don't have an account ?{" "}
              <Link
                to="/signup"
                className=" underline text-accent cursor-pointer"
              >
                Signup
              </Link>
            </p>
          </form>
        </div>
      </HomeLayout>
    </div>
  );
}

export default Signin;
