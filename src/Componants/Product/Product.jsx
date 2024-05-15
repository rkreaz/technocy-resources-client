import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, details, image, price } = product;


    return (

        <div>
            <div className="card card-compact max-sm:w-full shadow-xl theme_text h-[400px]">
                <div className='border container rounded-xl'><Link to={`/details/${_id}`}><img className="h-44 mx-auto " src={image} alt="Shoes" /></Link></div>
                <p className='text-[#fff] bg-[#F90101] absolute left-2 px-1 text-sm
     rounded-lg mr-2 mt-2'>${price}</p>
                <div className="card-body">
                    <Link to={`/details/${_id}`}><h2 className="card-title text-2xl">{name}</h2></Link>
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