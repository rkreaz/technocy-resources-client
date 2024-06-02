import PropTypes from 'prop-types';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useCart from '../Hooks/useCart';

const Product = ({ product }) => {
    const { _id, name, details, image, price, category } = product;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart()


    const handleAddToCard = () => {
        if (user && user.email) {
            console.log('handle AddTo Card');
            const cartItem = {
                productId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top",
                            icon: "success",
                            title: `${name} Add to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not logged in!",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Please login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (

        <div className=''>
            <div className="card card-compact max-sm:w-full shadow-xl theme_text h-[380px]">
                <div className='border container rounded-xl'>
                    <Link to={`/products/singleProduct/${_id}/${category}`}>
                        <img className="h-36 mx-auto p-5" src={image} alt="Shoes" />
                    </Link>
                </div>
                <p className='text-[#fff] bg-[#F02757] absolute left-2 px-1 text-sm rounded-lg mr-2 mt-2'>${price}</p>
                <div className="card-body">
                    <Link to={`/products/singleProduct/${_id}/${category}`}><h2 className="card-title text-xl text-[#000] ">{name}</h2></Link>
                    <p>{details}</p>
                    <button onClick={() => handleAddToCard(product)} className="btn btn-slide-left px-4 py-0 max-sm:px-2 max-sm:py-1 rounded-full mt-4">Add to Card</button>
                </div>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object,
};

export default Product;