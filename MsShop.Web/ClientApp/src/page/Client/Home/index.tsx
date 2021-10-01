import React from "react";
import Announcement from "../../../components/Client/Announcement";
import Categories from "../../../components/Client/Categories";
import Footer from "../../../components/Client/Footer";
import Navbar from "../../../components/Client/Navbar";
import Newsletter from "../../../components/Client/Newsletter";
import Products from "../../../components/Client/Products";
import Slider from "../../../components/Client/Slider";
const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer/>
    </div>
  );
};

export default Home;
