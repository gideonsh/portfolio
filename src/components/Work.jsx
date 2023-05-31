import React from "react";
import Coffee from "../assets/Coffee.jpg";
import Sadna from "../assets/Sadna.jpg";
import Bank2 from "../assets/API_banking.png";
import Memory_game from "../assets/memory-game3.jpg";
import Checkers from "../assets/checkers.jpg";
import Sweeper from "../assets/mine_sweeper2.jpg";
import Work_item from "./Work_item";

const Work = () => {
  return (
    <React.Fragment>
      <div name="work" className="w-full h-max md:h-max text-black-800 ">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 text-black-800 border-indigo-600">
              Work
            </p>
            <p className="py-4">Check out some of my recent work</p>
          </div>
          {/* Container */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Grid Item */}
            <Work_item
              project="Hackathon FS Project"
              href="https://github.com/gideonsh/CoffeeTime"
              img={Coffee}
              txt="Mobile application using Java, Firebase and android studio in MTA Hackathon which i took 
              part in my second year to college with my friends"
              stack="Android Studio, Java, FireBase, Github"
            />

            {/* Grid Item */}
            <Work_item
              project="B.Sc. Final Project"
              href="https://github.com/gideonsh/A-GBusinessesPromotions"
              img={Sadna}
              txt="A dynamic web application that advertises businesses using HTML, CSS, JS, Django, SQLite"
              stack="HTML, CSS, JS, Django, SQLite, Github"
            />

            {/* Grid Item */}
            <Work_item
              project="Bank API"
              href="https://github.com/gideonsh/Bank-Project"
              img={Bank2}
              txt="An API for bank transaction using Node.js, Express and MySQL"
              stack="Node.js Express MySQL, Bitbucket"
            />

            {/* Grid Item */}
            <Work_item
              project="Memory Game"
              href="https://github.com/gideonsh/MemoryGame/tree/master/Memorygame"
              img={Memory_game}
              txt="A console memory game using C#, playing 1vs1 or 1vsComnputer"
              stack="C#, Github"
            />

            {/* Grid Item */}
            <Work_item
              project="Checkers"
              href="https://github.com/gideonsh/Checkers"
              img={Checkers}
              txt="Summary checkers project in 'advance in C' course 1st year to college"
              stack="C"
            />

            {/* Grid Item */}
            <Work_item
              project="Mine Sweeper"
              href="https://github.com/gideonsh/MineSweeper"
              img={Sweeper}
              txt="Final project in Haskell, my first course in functional programing language"
              stack="Haskell"
            />

            {/* Mobile work */}

            {/* Grid Item */}
            <Work_item
              mobile="yes"
              project="Hackathon FS Project"
              href="https://github.com/gideonsh/CoffeeTime"
              img={Coffee}
              txt="Mobile application using Java, Firebase and android studio in MTA Hackathon which i took 
              part in my second year to college with my friends"
              stack="Android Studio, Java, FireBase, Github"
            />

            {/* Grid Item */}
            <Work_item
              mobile="yes"
              project="B.Sc. Final Project"
              href="https://github.com/gideonsh/A-GBusinessesPromotions"
              img={Sadna}
              txt="A dynamic web application that advertises businesses using HTML, CSS, JS, Django, SQLite"
              stack="HTML, CSS, JS, Django, SQLite, Github"
            />

            {/* Grid Item */}
            <Work_item
              mobile="yes"
              project="Bank API"
              href="https://github.com/gideonsh/Bank-Project"
              img={Bank2}
              txt="An API for bank transaction using Node.js, Express and MySQL"
              stack="Node.js Express MySQL, Bitbucket"
            />

            {/* Grid Item */}
            <Work_item
              mobile="yes"
              project="Memory Game"
              href="https://github.com/gideonsh/MemoryGame/tree/master/Memorygame"
              img={Memory_game}
              txt="A console memory game using C#, playing 1vs1 or 1vsComnputer"
              stack="C#, Github"
            />

            {/* Grid Item */}
            <Work_item
              mobile="yes"
              project="Checkers"
              href="https://github.com/gideonsh/Checkers"
              img={Checkers}
              txt="Summary checkers project in 'advance in C' course 1st year to college"
              stack="C"
            />

            {/* Grid Item */}
            <Work_item
              mobile="yes"
              project="Mine Sweeper"
              href="https://github.com/gideonsh/MineSweeper"
              img={Sweeper}
              txt="Final project in Haskell, my first course in functional programing language"
              stack="Haskell"
            />
          </div>

          {/* Mobile work */}
          <div className="on-screen"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Work;
