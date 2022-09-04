import React from "react";
import { FaReact, FaPython, FaVuejs } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMysql, SiFlask, SiTypescript } from "react-icons/si";

const Languages = () => {
  return (
    <section className="space-y-4 overflow-hidden">
      <section
        className="space-y-2"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h1 className="text-2xl font-semibold">Languages</h1>
        <div className="flex items-center space-x-5 overflow-x-auto pb-3 language-scrollbar">
          <span
            title="JavaScript"
            className="text-6xl text-yellow-500 transform transition duration-500 hover:scale-125 cursor-pointer"
          >
            <SiTypescript />
          </span>
          <span
            title="Python"
            className="text-6xl text-blue-700 transform transition duration-500 hover:scale-125  cursor-pointer"
          >
            <FaPython />
          </span>
          <span
            title="MySql"
            className="text-8xl text-blue-300 transform transition duration-500 hover:scale-125 cursor-pointer"
          >
            <SiMysql />
          </span>
        </div>
      </section>
      <section
        className="space-y-2"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h1 className="text-2xl font-semibold">Frameworks</h1>
        <div className="flex items-center space-x-5 overflow-x-auto pb-3 language-scrollbar">
          <span
            title="Nodejs"
            className="text-8xl text-green-800 transform transition duration-500 hover:scale-125 cursor-pointer"
          >
            <DiNodejs />
          </span>
          <span
            title="Flask"
            className="text-6xl transform transition duration-500 hover:scale-125  cursor-pointer"
          >
            <SiFlask />
          </span>
          <span
            title="React Js"
            className="text-7xl text-blue-900 transform transition duration-500 hover:scale-125 cursor-pointer"
          >
            <FaReact />
          </span>
        </div>
      </section>
    </section>
  );
};

export default Languages;
