import React from "react";
import Html from "./assets/skill-icons/html.png";
import Css from "./assets/skill-icons/css.webp";
import Javascript from "./assets/skill-icons/js.png";
import Python from "./assets/skill-icons/py.png";
import Flask from "./assets/skill-icons/flask.png";
import Django from "./assets/skill-icons/django.png";
import Git from "./assets/skill-icons/git.png";
import Bootstrap from "./assets/skill-icons/bootstrap.png";
import Tailwind from "./assets/skill-icons/tailwind.png";
import "./css/Skills.css";

export default function SkillGallery() {
  return (
    <div class="grid grid-cols-3 gap-5 h-1/2 w-full place-items-center">
      <div class="grid gap-4">
        <div>
          <img
            class="h-[60px] max-w-full rounded-lg bg-white p-3"
            src={Html}
            alt=""
          />
        </div>
        <div>
          <img
            class="h-[60px] max-w-full rounded-lg bg-white p-3"
            src={Css}
            alt=""
          />
        </div>
        <div>
          <img
            class="h-[60px] max-w-full rounded-lg bg-white p-3"
            src={Javascript}
            alt=""
          />
        </div>
      </div>
      <div class="grid gap-4">
        <div>
          <img
            class="h-[60px] max-w-full rounded-lg bg-white p-3"
            src={Python}
            alt=""
          />
        </div>
        <div>
          <img
            class="h-[60px] max-w-full rounded-lg bg-white p-3"
            src={Flask}
            alt=""
          />
        </div>
        <div>
          <img
            class="h-[60px] max-w-full rounded-lg bg-white p-3"
            src={Django}
            alt=""
          />
        </div>
      </div>
      <div class="grid gap-4">
        <div>
          <img
            class="h-[60px] max-w-full rounded-lg bg-white p-3"
            src={Git}
            alt=""
          />
        </div>
        <div>
          <img
            class="h-[60px] max-w-full rounded-lg bg-white p-3"
            src={Bootstrap}
            alt=""
          />
        </div>
        <div>
          <img
            class="h-[60px] max-w-full w-[70px] rounded-lg bg-white p-3"
            src={Tailwind}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
