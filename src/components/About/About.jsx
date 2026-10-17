import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import Ikram_Profile_Img from '../../assets/Ikram_Profile_Img.png';



const About = () => {
  return (
    <section
      id="about"
      className="mt-16 px-5 py-8 font-sans sm:px-8 md:mt-20 md:px-12 lg:mt-24 lg:px-20 xl:px-28"
    >
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-10 md:flex-row md:gap-8 lg:gap-16">
        {/* Left Side */}
        <div className="mt-2 w-full text-center md:mt-0 md:w-1/2 md:text-left">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Ikram Ali
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="mb-4 text-xl font-semibold leading-tight text-[#8245ec] sm:text-2xl md:text-3xl">
            <span className="text-white"> </span>
            <ReactTypingEffect
              text={[
                'Java Fullstack Developer....',
                'Frontend Developer..',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="mb-8 mt-6 text-base leading-relaxed text-gray-400 sm:text-lg md:mt-8">
            I am a full-stack developer with over 2 years of experience in
            building scalable web applications. Skilled in both front-end and
            back-end development, I specialize in the MERN stack and other
            modern technologies to create seamless user experiences and
            efficient solutions.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1sWfsad9PAsgEmb_P1OQ5GFl81ohn-KNo/view"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block rounded-full px-7 py-3 text-base font-bold text-white transition duration-300 hover:scale-105 sm:px-8 sm:text-lg"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
          
        </div>
        {/* Right Side */}
        <div className="flex w-full justify-center md:w-1/2 md:justify-end">
          <Tilt
            className="h-48 w-48 rounded-full border-4 border-purple-700 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={false}
          >
            <img
              src={Ikram_Profile_Img}
              alt="Tarun Kaushik"
              className=" w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
