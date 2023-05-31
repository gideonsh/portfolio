import React from "react";
import react from "../assets/react.png";
import aws from "../assets/aws.png";
import mysql from "../assets/mysql.png";
import nodejs from "../assets/nodejs.png";
import git from "../assets/git.png";
import mongodb from "../assets/mongodb.png";
import postgresql from "../assets/postgresql.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-max sm:h-screen bg-[#0a192f] text-[#ffffff] skills-div"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4  border-indigo-600">
            Technologies
          </p>
          <p className="py-4">These are the Technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#000000a6] hover:scale-110 duration-500 bg-[#ffffff]">
            <img className="w-20 mx-auto " src={nodejs} alt="NodeJS icon" />
            <p className="my-4 text-indigo-500 font-bold">NodeJS</p>
          </div>

          <div className="shadow-md shadow-[#000000a6] hover:scale-110 duration-500 bg-[#ffffff]">
            <img className="w-20 mx-auto" src={react} alt="React icon" />
            <p className="my-4 text-indigo-500 font-bold">React</p>
          </div>

          <div className="shadow-md shadow-[#000000a6] hover:scale-110 duration-500 bg-[#ffffff]">
            <img className="w-20 mx-auto " src={mysql} alt="MySQL icon" />
            <p className="my-4 text-indigo-500 font-bold">mysql</p>
          </div>

          <div className="shadow-md shadow-[#000000a6] hover:scale-110 duration-500 bg-[#ffffff]">
            <img className="w-20 mx-auto " src={git} alt="Git icon" />
            <p className="my-4 text-indigo-500 font-bold">Git</p>
          </div>

          <div className="shadow-md shadow-[#000000a6] hover:scale-110 duration-500 bg-[#ffffff]">
            <img className="w-20 mx-auto " src={aws} alt="Aws icon" />
            <p className="my-4 text-indigo-500 font-bold">Aws</p>
          </div>

          <div className="shadow-md shadow-[#000000a6] hover:scale-110 duration-500 bg-[#ffffff]">
            <img className="w-20 mx-auto " src={mongodb} alt="MongoDB icon" />
            <p className="my-4 text-indigo-500 font-bold">MongoDB</p>
          </div>

          <div className="shadow-md shadow-[#000000a6] hover:scale-110 duration-500 bg-[#ffffff]">
            <img
              className="w-20 mx-auto "
              src={postgresql}
              alt="PostgreSQL icon"
            />
            <p className="my-4 text-indigo-500 font-bold">PostgreSQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
