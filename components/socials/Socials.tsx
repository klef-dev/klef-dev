import React from "react";
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Socials = () => {
  const socials = [
    {
      icon: <FaTwitter />,
      url: "https://twitter.com/klefcodes",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/klefcodes",
    },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com/klefcodes",
    },
    {
      icon: <CgMail />,
      url: `
        mailto:me@klefcodes.net?subject=Hello%20Klef%20Codes&body=Hi%20Klef%20Codes,%0D%0A%0D%0A`,
    },
  ];

  return (
    <>
      {socials.map((social) => (
        <a
          href={social.url}
          key={social.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.icon}
        </a>
      ))}
    </>
  );
};

export default Socials;
