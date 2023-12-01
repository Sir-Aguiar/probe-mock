import React, { useState } from "react";
import styles from "./NavigationBar.module.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/logo.png"
const NavigationBar: React.FC = () => {
  const [isListOpen, setListOpen] = useState(false);

  const handleList = () => {
    setListOpen((value) => !value);
  };

  return (
    <nav className={styles.navigation}>
      <img src={logo} className="max-w-[200px]"/>
      <ul className="hidden md:flex">
        <li className="p-4 cursor-not-allowed">Home</li>
        <li className="p-4 cursor-not-allowed">Company</li>
        <li className="p-4 cursor-not-allowed">Resources</li>
        <li className="p-4 cursor-not-allowed">About</li>
        <li className="p-4 cursor-not-allowed">Contact</li>
      </ul>
      <button onClick={handleList} className="block md:hidden">
        {isListOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </button>

      <div className={`${styles.mobile_menu} ${!isListOpen && styles.menu_closed}`}>
        <h1 className="uppercase text-3xl font-bold text-accent m-4">Probe</h1>
        <ul>
          <li className="p-4 border-b border-gray-600 cursor-not-allowed">Home</li>
          <li className="p-4 border-b border-gray-600 cursor-not-allowed">Company</li>
          <li className="p-4 border-b border-gray-600 cursor-not-allowed">Resources</li>
          <li className="p-4 border-b border-gray-600 cursor-not-allowed">About</li>
          <li className="p-4 cursor-not-allowed">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
