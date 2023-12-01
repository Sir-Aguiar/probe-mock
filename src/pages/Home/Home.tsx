import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Hero from "../../components/Hero/Hero";
import Analytics from "../../components/Analytics/Analytics";
import Newsletter from "../../components/Newsletter/Newsletter";
import Services from "../../components/Services/Services";
import Footer from "../../components/Footer/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
