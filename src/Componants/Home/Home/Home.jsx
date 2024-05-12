import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Contact from "../Contact/Contact";
import Equipment from "../Equipment/Equipment";
import OfferProduct from "../OfferProducts/OfferProducts";
import OurStatistics from "../OurStatistics/OurStatistics";
import PopularProducts from "../PopularProducts/PopularProducts";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className='theme'>
       <Helmet>
        <title>Technocy | Home</title>
      </Helmet>
      <Banner></Banner>
      <Categories></Categories>
      <Equipment></Equipment>
      <PopularProducts></PopularProducts>
      <OfferProduct></OfferProduct>
      <OurStatistics></OurStatistics>
      <Contact></Contact>
      <Testimonial></Testimonial>
     
    </div>
  );
};

export default Home;