import { useNavigate } from "react-router-dom";
import HomeLayout from "../Layouts/Homelayout";

function Denied() {
  const navigate = useNavigate();

  return (
    <main className=" w-full flex flex-col justify-center items-center h-screen bg-[#1A2238]">
      <h1 className=" text-9xl font-semibold text-white tracking-widest">
        403
      </h1>
      <div className=" bg-black text-white px-2 text-sm rounded-sm rotate-12 relative bottom-16">
        Access Denied!!
      </div>
      <button onClick={()=>navigate(-1)} className=" mt-5 cursor-pointer ">
        <span className=" relative block px-8 py-3 bg-orange-500 border border-current text-white">
          Go Back
        </span>
      </button>
    </main>
  );
}

export default Denied;
