import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="bg-skills-gradient px-5 py-16 font-sans sm:px-8 sm:py-20 md:px-12 lg:px-20 lg:py-24 xl:px-28"
    >
      {/* Section Title */}
      <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="mt-4 text-base font-semibold text-gray-400 sm:text-lg">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative mx-auto max-w-5xl">
        {/* Vertical line */}
        <div className="absolute bottom-0 left-3 top-0 w-px bg-purple-400/60 sm:left-1/2 sm:-translate-x-1/2"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative mb-8 flex pl-8 sm:mb-10 sm:w-1/2 sm:pl-0 ${
              index % 2 === 0 ? "sm:mr-auto sm:pr-10" : "sm:ml-auto sm:justify-end sm:pl-10"
            }`}
          >
            {/* Timeline Circle */}
            {/* <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div> */}

            {/* Content Section */}
            <div
              className="w-full min-w-0 rounded-2xl border border-white/20 bg-gray-900 p-4 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-[1.01] sm:p-6"
            >
              {/* Flex container for image and text */}
              <div className="flex min-w-0 items-start gap-3 sm:items-center sm:gap-5">
                {/* School Logo/Image */}
                <div className="h-14 w-16 shrink-0 overflow-hidden rounded-md bg-white sm:h-16 sm:w-20">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="min-w-0 flex-1">
                  <div>
                    <h3 className="break-words text-lg font-semibold text-white sm:text-xl">
                      {edu.degree}
                    </h3>
                    <h4 className="break-words text-sm text-gray-300">
                      {edu.school}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
              <p className="mt-4 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
