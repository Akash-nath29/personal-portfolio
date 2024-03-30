import React from "react";
import "./css/Certificate.css";
import tridentTrack3 from "./assets/certificates/tridentTrack3.jpg";
import tridentTrack2 from "./assets/certificates/tridentTrack2.jpg";
import genAIcourse from "./assets/certificates/genAIcourse.jpg";
import apiTestingKeploy from "./assets/certificates/apiTestingKeploy.jpg";

const Certificates = () => {
  return (
    <div className="certificateBg w-full flex flex-col-reverse md:flex-row gap-2 px-5 py-20 items-center justify-center">
      <div className="certificates grid md:grid-cols-2 grid-cols-1 gap-2 md:w-3/4 w-full">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={tridentTrack3}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4 bg-yellow-300">
            <div className="font-bold text-2xl mb-2 text-black">
              Trithon Triplets 2023 Track 3
            </div>
            <p className="text-black text-base">
              2nd Runners up of Trithon Triplets 2023 Track 3, Winner at
              Software category.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={tridentTrack2}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4 bg-yellow-300">
            <div className="font-bold text-2xl mb-2 text-black">
              Trithon Triplets 2023 Track 3
            </div>
            <p className="text-black text-base">
              5th Runners up of Trithon Triplets 2023 Track 2.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={genAIcourse}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4 bg-yellow-300">
            <div className="font-bold text-2xl mb-2 text-black">
              GenAI course
            </div>
            <p className="text-black text-base">
              Participated in the GenAI course by Microsoft Student Learner
              Ambassador JISCE
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={apiTestingKeploy}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4 bg-yellow-300">
            <div className="font-bold text-2xl mb-2 text-black">
              API testing course
            </div>
            <p className="text-black text-base">
              Participated in the API testing course using Keploy by GDSC JISCE
            </p>
          </div>
        </div>
      </div>
      <div className="intro w-full">
        <h1 className="text-6xl font-bold text-yellow-300">My Certificates</h1>
        <br />
        <p className="text-white text-lg">
          Here are some of the certificates that I have achieved in various
          competitions and events.
        </p>
      </div>
    </div>
  );
};

export default Certificates;
