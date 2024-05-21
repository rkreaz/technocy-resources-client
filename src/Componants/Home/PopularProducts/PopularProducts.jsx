
import { Link } from 'react-router-dom';
import Product from '../../Product/Product';
import useSingleCategory from '../../Hooks/useSingleCategory';

const PopularProducts = () => {
    const [singleCategory, isLoading] = useSingleCategory('popular');

    return (
        <div className='max-w-6xl mx-auto mt-14'>
            <div className="text-center">
                <h1 className="max-sm:text-xl md:text-2xl lg:text-5xl font-bold theme_text">Popular Products</h1>
            </div>
            <div className='grid lg:grid-cols-4 gap-5  p-5 rounded-xl'>

                {isLoading ? <div className='text-2xl text-center'><span className="loading loading-spinner text-error"></span></div> :
                    singleCategory.slice(0, 8).map(popular => <Product key={popular._id} product={popular}></Product>)

                }
            </div>

            <div className='text-center text-xl mt-10'>
                <Link to={'/products/popular'} className=" bg-[#F02757] hover:bg-[#BD1349] text-[#fff] px-6 py-3 max-sm:px-2 max-sm:py-1 rounded-full">See All Products</Link>
            </div>
        </div>
    );
};

export default PopularProducts;