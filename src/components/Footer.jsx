import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../assets/Gideon_Shachar_CV.pdf";

const Footer = () => {
  return (
    <div
      name="footer"
      className="w-full  bg-[#0a192f]  text-[#ffffff] footer-div"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4  border-indigo-600">
            Contact Me On
          </p>
        </div>

        <div className="">
          <div>
            <div className="w-full grid grid-cols-6 sm:grid-cols-8 gap-4 text-center py-8">
              <a
                href="https://www.linkedin.com/in/gideon-shachar/"
                className="hover:scale-125 duration-500"
              >
                <i>
                  <FaLinkedin size={50} />
                </i>
              </a>
              <a
                href="https://github.com/gideonsh"
                className="hover:scale-125 duration-500"
              >
                <i>
                  <FaGithub size={50} />
                </i>
              </a>
              <a
                href={resume}
                download="Gideon_Shachar_CV"
                className="hover:scale-125 duration-500"
              >
                <i>
                  <BsFillPersonLinesFill size={50} />
                </i>
              </a>
            </div>

            <p className="copyright py-8">
              {" "}
              &copy; Created by: Gideon Shachar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
