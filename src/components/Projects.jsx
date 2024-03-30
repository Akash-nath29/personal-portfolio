import React from "react";
import chirpApp from "./assets/projects/chirpApp.png";
import noteswallah from "./assets/projects/noteswallah.png";
import pennyWise from "./assets/projects/pennyWise.png";
import syncz from "./assets/projects/syncz.png";
import inscribe from "./assets/projects/inscribe.png";
import "./css/Projects.css";

const Projects = () => {
  return (
    <div className="projectsBg grid md:grid-cols-3 grid-cols-1 gap-5 w-full place-items-center py-15 px-5" id='projects'>
      <div className="intro ">
        <h1 className="text-7xl text-black font-bold">My Projects</h1>
        <br />
        <p className="text-black">Here's some of my cool projects I have made throughout these 2 years. Absolutly there isn't all projects as I couldn't take pictures of theme (Some of them are under development as well). But you can find all my projects on my github account.</p>
        <br />
        <a className="text-yellow-400 hover:text-white" href="https://github.com/Akash-nath29?tab=repositories"><button className="bg-black text-yellow-400 rounded px-5 py-3 hover:text-white">See More!!</button></a>
      </div>
      <div className="card max-w-sm rounded-lg">
        <a href="#">
          <img className="rounded-t-lg" src={noteswallah} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              NotesWallah
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Flask based online study material sharing platform with a decentralized database, meaning every material will be visible to everyone.
          </p>
          <a
            href="https://github.com/Akash-nath29/NotesWallah2.0"
            className="inline-flex items-center px-5 py-3 text-sm text-center text-black font-bold hover:text-black bg-yellow-500 rounded-lg hover:bg-yellow-600"
          >
            Check it out
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="card max-w-sm rounded-lg">
        <a href="#">
          <img className="rounded-t-lg" src={chirpApp} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              ChirpApp
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Flask based realtime chat application. It doesn't have any database, so the message history gets removed once the chatroom is terminated.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-5 py-3 text-sm text-center text-black font-bold hover:text-black bg-yellow-500 rounded-lg hover:bg-yellow-600"
          >
            Check it out
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="card max-w-sm rounded-lg">
        <a href="#">
          <img className="rounded-t-lg" src={inscribe} alt="" />
        </a>
        <div className="p-5">
          <a href="https://github.com/Akash-nath29/Inscribe">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Inscribe
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Flask based task and notes management web-app. It features user authentication, task and notes management, proper UI/UX and much more.
          </p>
          <a
            href="https://github.com/Akash-nath29/Inscribe"
            className="inline-flex items-center px-5 py-3 text-sm text-center text-black font-bold hover:text-black bg-yellow-500 rounded-lg hover:bg-yellow-600"
          >
            Check it out
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="card max-w-sm rounded-lg">
        <a href="#">
          <img className="rounded-t-lg" src={pennyWise} alt="" />
        </a>
        <div className="p-5">
          <a href="https://github.com/Akash-nath29/PennyWise">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              PennyWise
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            PennyWise is a flask based Expense Tracker web-app. It features user authentication, budget management, proper UI/UX and much more.
          </p>
          <a
            href="https://github.com/Akash-nath29/PennyWise"
            className="inline-flex items-center px-5 py-3 text-sm text-center text-black font-bold hover:text-black bg-yellow-500 rounded-lg hover:bg-yellow-600"
          >
            Check it out
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="card max-w-sm rounded-lg">
        <a href="#">
          <img className="rounded-t-lg" src={syncz} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              SyncZ
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            SyncZ is a flask based realtime online videp conference applicattion. It features user authentication, proper meeting enviorment, proper UI/UX and much more.
          </p>
          <a
            href="https://github.com/Akash-nath29/SyncZ"
            className="inline-flex items-center px-5 py-3 text-sm text-center text-black font-bold hover:text-black bg-yellow-500 rounded-lg hover:bg-yellow-600"
          >
            Check it out
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
