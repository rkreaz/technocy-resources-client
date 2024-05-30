
import { Link } from 'react-router-dom';
import Product from '../../Product/Product';
import useSingleCategory from '../../Hooks/useSingleCategory';
import HomePageTitle from '../../HomePageTitle/HomePageTitle';

const PopularProducts = () => {
    const [singleCategory, isLoading] = useSingleCategory('popular');

    return (
        <div className='max-w-6xl mx-auto'>

            <HomePageTitle
                Heading={'Popular Products'}
            ></HomePageTitle>

            <div>
                <div className=' md:grid-cols-2 sm:grid-cols-1 gap-5 rounded-xl grid lg:grid-cols-4 p-5'>

                    {isLoading ? <div className='text-2xl text-center'><span className="loading loading-spinner text-error"></span></div> :
                        singleCategory.slice(0, 8).map(popular => <Product key={popular._id} product={popular}></Product>)

                    }
                </div>

                <div className='text-center text-xl'>
                    <Link to={'/products/popular'} className="btn btn-slide-left px-10 max-sm:px-2 max-sm:py-1 rounded-full mt-4">See All Products</Link>
                </div>
            </div>
        </div>
    );
};

export default PopularProducts;