import React from "react";
import Experience from "../components/Experience";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import Technicals from "../components/Technicals";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.body.classList.add("home-layout");
    return () => {
      document.body.classList.remove("home-layout");
    };
  }, []);
  return (
    <div className="home-page">
      <div className="page-header container">
        <h1>Hello, I'm Vi</h1>
      </div>
      <Intro />
      <Skills />
      <Experience />
      <Technicals />
    </div>
  );
};

export default Home;
