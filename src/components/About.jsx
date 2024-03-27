import React from "react";
import "./css/About.css";
import AboutPhoto from "./assets/About-photo.jpg";

const About = () => {
  return (
    <div className="about-container w-full h-full flex flex-col md:flex-row items-center justify-evenly py-[50px] px-5" id="about">
        <div className="leftContent w-[300px] md:w-1/2">
          <img
            src={AboutPhoto}
            alt=""
            className="aboutImage w-full md:w-[500px] rounded"
          />
        </div>
        <div className="rightContent z-2 w-full md:w-1/2 justify-center items-center">
          <div className="intro text-left">
            <h1 className="text-5xl font-bold text-black">About Me</h1>
            <br />
            <p className="text-black">
            Hey there! I'm Akash Nath, a full-stack developer with a knack for backend development. Currently an engineering student at JIS College of Engineering, Kalyani, I'm passionate about crafting efficient solutions to real-world problems. I'm also deeply interested in AI and ML, having created basic models and always eager to explore more. Let's innovate together!
            </p>
          </div>
          <br />
          <br />
          <br />
          <div className="education text-right">
            <h1 className="text-3xl font-bold text-black">Education</h1>
            <br />
            <p className="text-black">
              Completed my schooling from{" "}
              <a href="https://krishnagarhighschool.in/">
                Krishnagar High School
              </a>
              , Krishnanagar. Currently persuing my B.Tech in Computer Science
              and Engineering with specialization in Artificial Intelligence and
              Machine Learning from{" "}
              <a href="https://jiscollege.ac.in/">JIS College of Engineering</a>
              , Kalyani.
            </p>
            <br />
            <br />
            <br />
            <div className="timeline px-5 text-left">
              <ol class="items-center sm:flex w-full">
                <li class="relative mb-6 sm:mb-0">
                  <div class="flex items-center">
                    <div class="z-2 flex items-center justify-center w-6 h-6 bg-yellow-400 rounded-full ring-0 ring-black sm:ring-8 shrink-0">
                      <svg
                        class="w-2.5 h-2.5 text-black"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div class="mt-3 sm:pe-8">
                    <h3 class="text-lg font-bold text-black">
                      Krishnagar High School
                    </h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-slate-900">
                      2015-2021
                    </time>
                    <p class="text-base font-normal text-black">
                      Passed 10th with 93%
                    </p>
                  </div>
                </li>
                <li class="relative mb-6 sm:mb-0">
                  <div class="flex items-center">
                    <div class="z-2 flex items-center justify-center w-6 h-6 bg-yellow-400 rounded-full ring-0 ring-black sm:ring-8 shrink-0">
                      <svg
                        class="w-2.5 h-2.5 text-black"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div class="mt-3 sm:pe-8">
                    <h3 class="text-lg text-black font-bold">
                      Krishnagar High School
                    </h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-slate-900">
                      2021-2023
                    </time>
                    <p class="text-base font-normal text-black">
                      Passed 12th with 79%
                    </p>
                  </div>
                </li>
                <li class="relative mb-6 sm:mb-0">
                  <div class="flex items-center">
                    <div class="z-2 flex items-center justify-center w-6 h-6 bg-yellow-400 rounded-full ring-0 ring-black sm:ring-8 shrink-0">
                      <svg
                        class="w-2.5 h-2.5 text-black"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                  </div>
                  <div class="mt-3 sm:pe-8">
                    <h3 class="text-lg font-bold text-black">
                      JIS College of Engineering
                    </h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-slate-900">
                      2023-Current
                    </time>
                    <p class="text-base font-normal text-black">
                      Persuing B.Tech Degree
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
    </div>
  );
};

export default About;
