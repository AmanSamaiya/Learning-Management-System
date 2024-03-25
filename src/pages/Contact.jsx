import { useState } from "react";
import HomeLayout from "../Layouts/Homelayout";
import toast from "react-hot-toast";
import { isEmail } from "../helper/regexmatcher";
import axiosInstance from "../config/axiosInstance";

function Contact() {
  const [userinput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUserInput({
      ...userinput,
      [name]: value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    if (!userinput.email || !userinput.name || !userinput.message) {
      toast.error("All fields are mandatory");
      return;
    }

    if (!isEmail(userinput.email)) {
      toast.error("Enter a valid email");
      return;
    }

    try {
      const response = axiosInstance.post("/contact", userinput);
      toast.promise(response, {
        loading: "Submitting your query",
        success: "Form submitted successfully",
        error: "Failed to submit the form",
      });

      const responsedata = await response;

      if (responsedata?.data) {
        setUserInput({
          email: "",
          name: "",
          message: "",
        });
      }
      
    } catch (error) {
      toast.error("Operation Failed....");
    }
  }

  return (
    <HomeLayout>
      <div className=" flex items-center justify-center h-[100vh]">
        <form
          onSubmit={onFormSubmit}
          noValidate
          className=" flex flex-col items-center justify-center gap-2 p-5 rounded-md text-white w-[22rem]"
        >
          <h1 className=" font-semibold text-3xl ">Contact Form</h1>

          <div className=" flex flex-col w-full gap-1 mt-2">
            <label htmlFor="name" className=" text-xl font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              className=" bg-white border px-2 py-1 rounded-sm text-black"
              placeholder="Enter your name"
              name="name"
              onChange={handleInputChange}
              value={userinput.name}
            />
          </div>

          <div className=" flex flex-col w-full gap-1 mt-2">
            <label htmlFor="email" className=" text-xl font-semibold">
              Email
            </label>
            <input
              type="text"
              id="email"
              className=" bg-white border px-2 py-1 rounded-sm text-black"
              placeholder="Enter your email"
              name="email"
              onChange={handleInputChange}
              value={userinput.email}
            />
          </div>

          <div className="flex flex-col w-full gap-1 mt-2">
            <label htmlFor="message" className=" text-xl font-semibold">
              Message
            </label>
            <textarea
              type="text"
              id="message"
              className=" bg-white border px-2 py-1 rounded-sm resize-none h-40 text-black"
              placeholder="Enter your message"
              name="message"
              onChange={handleInputChange}
              value={userinput.message}
            />
          </div>
          <button
            type="submit"
            className=" w-full bg-yellow-400 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </HomeLayout>
  );
}

export default Contact;
