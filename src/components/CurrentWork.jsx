import React from "react";
import "./css/CurrentWork.css";
import freelancingBg from "./assets/freelancingBG.png";
import codasaurasLogo from "./assets/codasaurasLogo.png";
import internshala from "./assets/internshala.webp";
import wayspire from "./assets/wayspire.png";

const CurrentWork = () => {
  return (
    <div
      className="currentWorkBg flex flex-col gap-5 w-full items-center justify-center py-15 px-5"
      id="currentWork"
    >
      <h1 className="text-7xl font-bold py-10">Current Position</h1>
      <br />
      <div className="flex flex-col gap-30">
        <div className="first-element flex flex-col md:flex-row items-center justify-evenly min-h-[150px] gap-5">
          <div className="wrapper">
            <h1 className="text-5xl font-bold">Freelancer</h1>
            <br />
            <p>I do Freelancing, mainly web development!!</p>
            <br />
            <br />
            <a href="https://www.upwork.com/freelancers/~01e0724608edcc944d">
              <button className="bg-slate-900 hover:bg-slate-700 text-white font-bold px-5 py-2 duration-700">
                Work With Me!!
              </button>
            </a>
          </div>
          <img
            id="freelancingIllustration"
            src={freelancingBg}
            alt="Freelancing SVG"
          />
        </div>
        <br />
        <br />
        <div className="card-list grid grid-cols-1 md:grid-cols-3 gap-10 my-10">
          <div className="flex flex-col items-center gap-5">
            <img
              src={codasaurasLogo}
              alt="Codasauras Logo"
              id="codasaursLogo"
            />
            <h1 className="text-2xl font-bold codasauras-heading">
              <a href="https://www.codasauras.in">@Codasauras Community</a>
            </h1>
            <p>Founder and Community Leader</p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <img src={internshala} alt="Codasauras Logo" id="codasaursLogo" />
            <h1 className="text-3xl font-bold codasauras-heading">
              <a href="https://internshala.com/">@Intenshala</a>
            </h1>
            <p>Campus Ambassador</p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <img src={wayspire} alt="Codasauras Logo" id="codasaursLogo" />
            <h1 className="text-3xl font-bold codasauras-heading">
              <a href="https://wayspire.in/">@Wayspire</a>
            </h1>
            <p>Campus Ambassador</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWork;
