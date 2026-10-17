import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-skills-gradient px-5 py-16 font-sans sm:px-8 sm:py-20 md:px-12 lg:px-20 lg:py-24 xl:px-28"
    >
      {/* Section Title */}
      <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="mt-4 text-base font-semibold text-gray-400 sm:text-lg">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative mx-auto max-w-5xl">
        {/* Vertical line */}
        <div className="absolute bottom-0 left-3 top-0 w-px bg-purple-400/60 sm:left-1/2 sm:-translate-x-1/2"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative mb-8 flex pl-8 sm:mb-10 sm:w-1/2 sm:pl-0 ${
              index % 2 === 0 ? "sm:mr-auto sm:pr-10" : "sm:ml-auto sm:justify-end sm:pl-10"
            }`}
          >
            {/* Timeline Circle */}
            {/* <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10"> */}
              {/* <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              /> */}
            {/* </div> */}

            {/* Content Section */}
            <div
              className="w-full min-w-0 rounded-2xl border border-white/20 bg-gray-900 p-4 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-[1.01] sm:p-6"
            >
              {/* Flex container for image and text */}
              <div className="flex min-w-0 items-start gap-3 sm:items-center sm:gap-5">
                {/* Company Logo/Image */}
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-md bg-white sm:h-16 sm:w-16">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Role, Company Name, and Date */}
                <div className="min-w-0 flex-1">
                  <div>
                    <h3 className="break-words text-lg font-semibold text-white sm:text-xl">
                      {experience.role}
                    </h3>
                    <h4 className="break-words text-sm text-gray-300">
                      {experience.company}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400">{experience.desc}</p>
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
