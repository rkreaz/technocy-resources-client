import PropTypes from 'prop-types';

const Product = ({ product }) => {
    const { name, details, image, price } = product;
    return (

        <div>
            <div className="card card-compact max-sm:w-full shadow-xl theme_text h-[400px]">
                <div className='border container rounded-xl'><img className="h-44 mx-auto " src={image} alt="Shoes" /></div>
                <p className='text-[#fff] bg-[#F90101] absolute left-2 px-1 text-sm
     rounded-lg mr-2 mt-2'>${price}</p>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{name}</h2>
                    <p>{details}</p>
                    <button className="btn btn-slide-left px-4 py-0 max-sm:px-2 max-sm:py-1 rounded-full mt-4">Add to Card</button>
                </div>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object,
};

export default Product;