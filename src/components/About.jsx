import React from "react";

const About = () => {
  return (
    <div name="about" className="about-div w-full h-screen text-black-800">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-indigo-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Here is a brief overview of my early life</p>
          </div>
          <div>
            <p>
              As a child I remember that the subjects of science and mathematics
              were always fascinating to me, when I reached middle school I
              started a program for studying mathematics for students who excel
              in mathematics. I did high school at an advanced institution for
              science subjects where I took my first course in programing
              language. This then led me to a B.Sc. in Computer Science, and
              during my third year of my degree I started my first job as a
              back-end developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
