import React from "react";

const Newsletter: React.FC = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Want tips & tricks to optimize your flow?</h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-2">
            <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder="Enter Email" />
            <button className="bg-accent text-black hover:text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 transition-all duration-300">
              Notify Me
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our <span className="text-accent">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
