import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeLayout from "../Layouts/Homelayout";
import { BsPersonCircle } from "react-icons/bs";
import toast from "react-hot-toast";
import { isEmail, isValidPassword } from "../helper/regexmatcher";
import { useDispatch } from "react-redux";
import { createAccount } from "../redux/slices/authSlice";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signupDetails, setSignupDetails] = useState({
    email: "",
    fullname: "",
    password: "",
    avatar: "",
  });

  const [previewImage, setPreviewImage] = useState("");

  function handleUserInput(e) {
    const { name, value } = e.target;
    setSignupDetails({
      ...signupDetails,
      [name]: value,
    });
  }

  function handleAvatar(e) {
    e.preventDefault();
    const uploadImage = e.target.files[0];
    if (!uploadImage) return;
    setSignupDetails({
      ...signupDetails,
      avatar: uploadImage,
    });
    const fileReader = new FileReader();
    fileReader.readAsDataURL(uploadImage);
    fileReader.addEventListener("load", function () {
      setPreviewImage(this.result);
    });
  }

  async function onFormSubmit(e) {
    console.log(signupDetails);
    e.preventDefault();
    if (
      !signupDetails.email ||
      !signupDetails.fullname ||
      !signupDetails.password ||
      !signupDetails.avatar
    ) {
      toast.error("Please fill all the details");
      return;
    }

    if (signupDetails.fullname.length < 4) {
      toast.error("Name should be atleast of four characters");
      return;
    }

    if (!isEmail(signupDetails.email)) {
      toast.error("Not a valid email");
      return;
    }

    if (!isValidPassword(signupDetails.password)) {
      toast.error( "Not a valid password , password should contain 1 uppercase , 1 lowercase , 1 special character and atleast 8 characters long" );
      return;
    }


    const formdata =  new FormData();

    formdata.append("fullname" , signupDetails.fullname);
    formdata.append("email" , signupDetails.email);
    formdata.append("password" , signupDetails.password);
    formdata.append("avatar" , signupDetails.avatar);


    const response = await dispatch(createAccount(formdata));
    console.log(response);
    if (response?.payload?.data) {
      navigate("/");
    }

    setSignupDetails({
      email: "",
      fullname: "",
      password: "",
      avatar: "",
    });

    setPreviewImage("");
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
              Registration Page
            </h1>

            {/* avatar upload */}
            <label htmlFor="image_uploads" className=" cursor-pointer">
              {previewImage ? (
                <img
                  className=" w-24 h-24 rounded-full m-auto"
                  src={previewImage}
                />
              ) : (
                <BsPersonCircle className=" w-24 h-24 rounded-full m-auto" />
              )}
            </label>
            <input
              type="file"
              className="hidden"
              name="image_uploads"
              id="image_uploads"
              accept=".jpg, .jpeg, .png, .svg"
              onChange={handleAvatar}
            />
            {/* //// */}

            <div className=" flex flex-col gap-1">
              <label htmlFor="fullname" className=" font-semibold">
                Name
              </label>
              <input
                required
                className="px-2 py-1 bg-transparent border"
                type="text"
                id="fullname"
                name="fullname"
                value={signupDetails.fullname}
                placeholder="Enter your username"
                onChange={handleUserInput}
              />
            </div>

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
                value={signupDetails.email}
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
                value={signupDetails.password}
                placeholder="Enter your password"
                onChange={handleUserInput}
              />
            </div>

            <button className=" mt-2 bg-yellow-800 hover:bg-yellow-500 transition-all ease-in-out duration-300 cursor-pointer py-2 font-semibold text-lg">
              Create Account
            </button>
            <p className="text-center">
              Already have an account ?{" "}
              <Link
                to="/login"
                className=" underline text-accent cursor-pointer"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </HomeLayout>
    </div>
  );
}

export default Signup;
