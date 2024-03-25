import { useLocation, useNavigate } from "react-router-dom";
import HomeLayout from "../../Layouts/Homelayout";
import { useSelector } from "react-redux";

function CourseDescription() {
  const { state } = useLocation();

  const navigate = useNavigate();

  const { role, data } = useSelector((state) => state.auth);

  return (
    <HomeLayout>
      <div className=" flex flex-col items-center justify-center text-white pt-12 px-20 min-h-[90vh]">
        <div className=" grid grid-cols-2 gap-10 py-10 relative">
          <div className=" space-y-5">
            <img
              src={state?.thumbnail?.secure_url}
              alt="thumbnail"
              className=" w-full h-64"
            />
            <div className=" space-y-4 ">
              <div className=" flex flex-col justify-between items-center text-xl">
                <p className=" font-semibold">
                  <span className=" font-bold text-yellow-500">
                    Total Letures :{" "}
                  </span>
                  {state?.numberOfLectures}
                </p>
                <p className=" font-semibold">
                  <span className=" font-bold text-yellow-500">
                    Instructor :{" "}
                  </span>
                  {state?.createdBy}
                </p>
              </div>

              {role === "ADMIN" || data?.subscription?.status === "active" ? (
                <button
                  onClick={() =>
                    navigate("/course/displaylecture", { state: { ...state } })
                  }
                  className=" bg-yellow-500 text-xl rounded-md font-bold px5 py-3 w-full hover:bg-yellow-600 transition-all ease-in-out duration-300"
                >
                  Watch Lectures
                </button>
              ) : (
                <button
                  onClick={() => navigate("/checkout")}
                  className=" bg-yellow-500 text-xl rounded-md font-bold px5 py-3 w-full hover:bg-yellow-600 transition-all ease-in-out duration-300"
                >
                  Subscribe
                </button>
              )}
            </div>
          </div>

          {/* right side of the grid */}
          <div className=" space-y-2 text-xl">
            <h1 
            className=" text-3xl font-bold text-yellow-500 mb-5 text-center">
                {state?.title}
                </h1>
                <p className=" text-yellow-500">
                    Course Description : { " " }
                </p>
                <p>
                    {state?.description}
                </p>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default CourseDescription;
