// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="bg-skills-gradient px-5 py-16 font-sans sm:px-8 sm:py-20 md:px-12 lg:px-20 lg:py-24 xl:px-28"
  >
    {/* Section Title */}
    <div className="mx-auto mb-8 max-w-3xl text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="mt-4 text-base font-semibold text-gray-400 sm:text-lg">
      A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="min-w-0 rounded-2xl border border-white bg-gray-900 px-5 py-6 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] sm:px-6
          "
        >
          <h3 className="text-xl sm:text-3xl font-semibold text-gray-200 mb-4 text-center">
            {category.title}
          </h3>

          {/* Skill Items - 3 per row on larger screens */}
          <Tilt
            key={category.title}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.01}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid w-full grid-cols-1 gap-2 min-[400px]:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex min-w-0 items-center justify-center gap-2 rounded-3xl border border-gray-100 bg-transparent px-2 py-2 text-center"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="h-5 w-5 shrink-0 object-contain sm:h-6 sm:w-6"
                  />
                  <span className="min-w-0 break-words text-xs text-gray-300 sm:text-sm">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
