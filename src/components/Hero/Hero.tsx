import React from "react";
import styles from "./Hero.module.css";
import Typed from "react-typed";
const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.main_container}>
        <p className="text-accent font-semibold p-2">GROWING WITH DATA ANALYTICS</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with data</h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-6">Fast, flexible financing for</p>
          <Typed
            className="md:text-4xl sm:text-3xl text-xl font-bold px-3"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-xl text-lg font-bold text-gray-500 px-2">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.
        </p>
        <button className="bg-accent text-lg w-[200px] rounded-md font-semibold my-3 mx-auto py-2 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
