import React from "react";
import laptop from "../../assets/laptop.jpg";

const Analytics: React.FC = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={laptop} alt="/" />
        <div className="flex flex-col justify-center gap-3">
          <p className="text-[#00df9a] font-bold ">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum molestiae delectus culpa hic assumenda,
            voluptate reprehenderit dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit, eveniet ex
            deserunt fuga?
          </p>
          <button className="bg-black text-[#00df9a] hover:bg-[#00df9a] hover:text-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
