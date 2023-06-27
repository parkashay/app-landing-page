import React from "react";
import Navbar from "../components/Navbar";
import About from "../sections/About";
import DownloadLink from "../sections/DownloadLink";
import FAQs from "../sections/FAQs";
import Footer from "../sections/Footer";
import Landing from "../sections/Landing";
import Mobiles from "../sections/Mobiles";
import Subscribe from "../sections/Subscribe";
import Testimonials from "../sections/Testimonials";
function Home() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Mobiles />
      <About />
      <Testimonials />
      <FAQs />
      <DownloadLink />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Home;
