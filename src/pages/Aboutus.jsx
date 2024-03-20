import HomeLayout from "../Layouts/Homelayout";
import aboutMainPage from "../assets/images/aboutMainImage.png";
import apj from "../assets/images/apj.png";
import billgates from "../assets/images/billGates.png";
import einstein from "../assets/images/einstein.png";
import stevejobs from "../assets/images/steveJobs.png";
import nelsonmandela from "../assets/images/nelsonMandela.png";

function Aboutus() {
  return (
    <>
      <HomeLayout>
        <div className=" flex flex-col pt-20 pl-20 text-white">
          <div className="flex flex-row items-center gap-5 mx-10 ">
            <section className=" w-1/2 space-y-10">
              <h1 className=" text-5xl text-yellow-500 font-semibold">
                Affordable and Quality Education
              </h1>
              <p className=" text-lg text-gray-200">
                Our goal is to provide affordable and quality education to the
                world . We are providing the platform for the aspiring teachers
                and students to share their skills , creativity and knowledge to
                each other to empower and contribute in the growth and wellness
                of the mankind.
              </p>
            </section>

            <div className=" w-1/2">
              <img
                src={aboutMainPage}
                alt="about main page"
                className=" drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="carousel my-10">
          <div id="item1" className="carousel-item w-full flex flex-col gap-4 justify-center items-center">
            <img src={apj} className="w-72 rounded-full border-2 border-e-gray-400" />
            <h3 className="text-2xl font-semibold">APJ Abdul Kalam</h3>
            <p className="text-xl">“ You have to dream before your dreams can come true. ”</p>
          </div>
          <div id="item2" className="carousel-item w-full flex flex-col gap-4 justify-center items-center">
            <img src={stevejobs} className=" w-72 rounded-full border-2 border-e-gray-400" />
            <h3 className="text-2xl font-semibold">Steve Jobs</h3>
            <p className="text-xl">“ Your time is limited, so don't waste it living someone else's life. ”</p>
          </div>
          <div id="item3" className="carousel-item w-full flex flex-col gap-4 justify-center items-center">
            <img src={billgates} className="w-72 rounded-full border-2 border-e-gray-400" />
            <h3 className="text-2xl font-semibold">Bill Gates</h3>
            <p className="text-xl">“ Success is a lousy teacher. It seduces smart people into thinking they can't lose. ”</p>
          </div>
          <div id="item4" className="carousel-item w-full flex flex-col gap-4 justify-center items-center">
            <img src={nelsonmandela} className="w-72 rounded-full border-2 border-e-gray-400" />
            <h3 className="text-2xl font-semibold">Nelson Mandela</h3>
            <p className="text-xl">“ Education is the most powerful weapon which you can use to change the world.”</p>
          </div>
          <div id="item5" className="carousel-item w-full flex flex-col gap-4 justify-center items-center">
            <img src={einstein} className="w-72 rounded-full border-2 border-e-gray-400" />
            <h3 className="text-2xl font-semibold">Albert Einstein</h3>
            <p className="text-xl">“ Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world. ”</p>
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2 mb-5">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
          <a href="#item5" className="btn btn-xs">
            5
          </a>
        </div>
      </HomeLayout>
    </>
  );
}

export default Aboutus;
