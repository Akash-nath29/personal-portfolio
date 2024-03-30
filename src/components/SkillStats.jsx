import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import "./css/Skills.css";

const SkillStats = () => {
  return (
    <div className="skillsStats flex flex-col gap-2 my-20 w-full">
      <h3>HTML</h3>
      <ProgressBar completed={95} />
      <h3>CSS</h3>
      <ProgressBar completed={85} />
      <h3>JavaScript</h3>
      <ProgressBar completed={70} />
      <h3>Python</h3>
      <ProgressBar completed={80} />
    </div>
  );
};

export default SkillStats;
