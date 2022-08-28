import React from "react";
import Languages from "../Languages";

const Hero = () => {
  return (
    <main className="w-full min-h-screen flex flex-col items-center  p-5 ">
      <section className="w-full flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between space-y-5 md:space-y-0">
        <div data-aos="zoom-in" className="md:w-1/4">
          <img
            src="../../images/pic.jpg"
            alt=""
            className="w-36 h-36 rounded-full"
          />
        </div>
        <div className="flex flex-col justify-between md:p-5 space-y-5 h-fit md:w-8/12">
          <h1
            data-aos="zoom-in"
            className="text-3xl  md:text-left text-center font-semibold  md:w-fit"
          >
            Hey! I'm Abraham Ugbeshe
          </h1>
          <p data-aos="flip-up">
            Also called Klef! I build stuff that works on the web! 😉
          </p>

          <p>
            My passion for problem solving began since my 10th grade and that
            have made me better today than I was yesterday. I code, build,
            design & scale full-stack web applications.
          </p>
          <p>
            I am a focused driven developer, and I currently work at RBCUK LTD,
            United Kingdom.
          </p>
          <p>
            I love my work, it has allowed me to understand development of
            digital products and how it affects our users.
          </p>
          <Languages />
          <p>
            Previously, I've worked with startups and participate in community
            driven initiatives. I worked multiple roles; ranging from being a
            Backend, DevOps to Full-stack developer. These days, I am more
            focused on experimentation, strategy, analysis and backend
            implementation of products.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Hero;
