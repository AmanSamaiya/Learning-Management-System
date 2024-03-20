import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className=" h-screen flex flex-col justify-center items-center w-full bg-blue-950">
      <h1 className="text-9xl font-extrabold text-white">404</h1>
      <div className=" bg-black text-white absolute px-2 text-sm rounded rotate-12">
        Page Not Found..
      </div>
      <button className=" mt-5 ">
        <a
          onClick={() => navigate(-1)} className=" relative inline-block text-sm font-medium text-red-500 active:text-yellow-500 focus:outline-none"
        >
          <span  className=" relative block px-8 py-3 bg-slate-500 border border-current">GO Back</span>
        </a>
      </button>
    </div>
  );
}

export default NotFound;
