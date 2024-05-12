
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import Product from '../../Product/Product';

const PopularProducts = () => {
    const [allProducts] = useProducts();
    const popularProducts = allProducts.filter(popular => popular.category === 'popular');

    return (
        <div className='max-w-6xl mx-auto mt-14'>
            <div className="text-center">
                <h1 className="max-sm:text-xl md:text-2xl lg:text-5xl font-bold theme_text">Popular Products</h1>
            </div>
            <div className='grid lg:grid-cols-4 gap-5  p-5 rounded-xl'>

                {
                    popularProducts.slice(0, 8).map(popular => <Product key={popular._id} product={popular}></Product>)
                }
            </div>

            <div className='text-center text-xl mt-10'>
                <Link to={'/products'} className=" bg-[#F02757] hover:bg-[#BD1349] text-[#fff] px-6 py-3 max-sm:px-2 max-sm:py-1 rounded-full">See All Products</Link>
            </div>
        </div>
    );
};

export default PopularProducts;