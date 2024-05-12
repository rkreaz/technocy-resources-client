
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


                {/* <div className="card card-compact max-sm:w-full shadow-xl theme_text">
                    <figure className='border container'><img src={offerImage5} alt="Shoes" /></figure>
                    <p className='text-[#fff] bg-[#F90101] absolute left-2 px-2 rounded-lg mr-2 mt-2'>$1500</p>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">Mobile</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <button className="btn btn-slide-left px-4 py-0 max-sm:px-2 max-sm:py-1 rounded-full mt-4">Add to Card</button>
                    </div>
                </div> */}

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