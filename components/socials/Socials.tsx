import React from "react";
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Socials = () => {
  return (
    <>
      <span className="cursor-pointer" title="Twitter">
        <FaTwitter />
      </span>
      <span className="cursor-pointer" title="Github">
        <FaGithub />
      </span>
      <span className="cursor-pointer" title="Instagram">
        <FaInstagram />
      </span>
      <span className="cursor-pointer" title="Instagram">
        <CgMail />
      </span>
    </>
  );
};

export default Socials;
