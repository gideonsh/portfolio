import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f] home-div">
      {/* Container */}
      <div className="home-container">
        <p className="text-indigo-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ffffff]">
          Gideon Shachar
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#6c748d]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#ffffff] py-4 max-w-[700px]">
          A Full Stack developer with B.Sc. degree in Computer Science, with a
          year expirience in a fintech company as a backend developer
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center view-work">
              {/* <Link to="work" smooth={true} duration={500}> */}
              View Work
              {/* </Link> */}
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
