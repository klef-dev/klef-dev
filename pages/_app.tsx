import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import AOS from "aos";
import "aos/dist/aos.css";
import dynamic from "next/dynamic";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="container mx-auto space-y-10">
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
