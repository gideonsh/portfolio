import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
{
  /* import Logo from "../assets/logo.png"; */
}
import { Link } from "react-scroll";
import resume from "../assets/Gideon_Shachar_CV.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="navbar-div bg-[#0a192f] navbar-div-color text-white">
      <div>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ffffff]">
          Gideon Shachar
        </h1>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="li-navbar bg-blue-600">
            <a
              className="a-navbar text-gary-300"
              href="https://www.linkedin.com/in/gideon-shachar/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="li-navbar bg-[#333333]">
            <a
              className="a-navbar text-gary-300"
              href="https://github.com/gideonsh"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="li-navbar bg-[#565f69]">
            <a
              className="a-navbar text-gary-300"
              href={resume}
              download="Gideon_Shachar_CV"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
