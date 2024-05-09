import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import OfferProduct from "../OfferProducts/OfferProducts";

const Home = () => {
    return (
        <div className='theme'>
          <Banner></Banner>
          <Categories></Categories>
          <OfferProduct></OfferProduct>
        </div>
    );
};

export default Home;