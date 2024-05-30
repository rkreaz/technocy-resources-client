import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useSingleCategory from "../../Hooks/useSingleCategory";
import { useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const Cart = () => {
    const [singleCategory, isLoading] = useSingleCategory('offer');
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [, refetch] = useCart()


    const handleAddToCard = (offer) => {
        const { _id, name, image, price, } = offer;
        console.log(offer);
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
        <div className=' grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 rounded-xl lg:w-10/12  p-5 '>

            {
                isLoading ?
                    <div className='text-2xl text-center'><span className="loading loading-spinner text-error"></span></div> :
                    singleCategory.slice(0, 4).map(offer => <div key={offer._id}>
                        <div className="card card-compact w-56  max-sm:w-full shadow-xl bg-[#F1F3F8] h-[400px]">

                            <div className='border container rounded-xl'>
                                <img className=" h-36 mx-auto" src={offer.image} alt="Shoes" />
                            </div>

                            <p className='text-[#fff] bg-[#F02757] absolute left-2 px-2 rounded-lg mr-2 mt-2'>${offer.price}</p>
                            <div className="card-body">
                                <h2 className="card-title text-xl text-[#000] ">{offer.name}</h2>
                                <p>{offer.details}</p>
                                <button onClick={() => handleAddToCard(offer)} className="btn btn-slide-left px-4 py-0 max-sm:px-2 max-sm:py-1 rounded-full mt-4">Add to Card</button>
                            </div>
                        </div>

                    </div>)
            }
        </div>
    );
};

export default Cart;