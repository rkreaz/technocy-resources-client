// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaArrowRight } from "react-icons/fa";
// import { RiDeleteBinLine } from "react-icons/ri";

const DashboardCart = () => {
    const [card, refetch] = useCart();
    const price = card.reduce((total, item) => total + item.price, 0);
    const totalPrice = price.toFixed(2);
    const axiosSecure = useAxiosSecure();

    const handleDeleteProduct = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#F02757",
            cancelButtonColor: "#3D6ED7",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        refetch()
                    })
            }
        });
    }

    return (
        <div className="mr-5">
            <h1 className="text-2xl font-bold  text-[#000] mt-10 mb-5">Order Products:</h1>
            <div className="lg:flex gap-5">
                <div className="lg:w-9/12">
                    <div className="">
                        {
                            card.length ? card.map((item, index) => <div key={item._id}>
                                <div className=" bg-[#F1F3F8] mt-2 px-8 max-sm:px-4 py-4  text-[#000]">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <p>{index + 1}</p>
                                            <img className="w-20 h-20 max-sm:w-14 max-sm:h-14" src={item.image} alt="" />
                                            <h3 className="max-sm:text-sm">{item.name}</h3>
                                        </div>

                                        <h3 className="max-sm:text-sm">Price: ${item.price}</h3>
                                        <p onClick={() => handleDeleteProduct(item._id)} className='bg-[#F02757] p-2 rounded-lg'>  <RiDeleteBinLine className=' text-[#fff]'></RiDeleteBinLine></p>
                                    </div>
                                </div>

                            </div>) :

                                <div className="text-center">
                                    <h3 className="text-xl max-sm:text-sm">There are no orders placed yet. Please add to card.</h3>
                                    <Link to={'/products/popular'}>
                                        <button className="text-center btn btn-slide-left px-4 py-0 max-sm:px-2 max-sm:py-1 rounded-full mt-12 ">CONTINUE SHOPPING <FaArrowRight className="text-base mt-2"></FaArrowRight ></button>
                                    </Link>
                                </div>


                        }
                    </div>
                </div>

                <div className="lg:w-3/12 mt-2">
                    <div className='flex flex-col justify-center lg:w-[305px] bg-[#F1F3F8] text-[#000] px-5 py-10'>
                        <h2 className='text-center text-2xl font-bold w-full'>Order Summary</h2>

                        <div className="flex items-center justify-between mt-12">
                            <h2 className=' text-lg font-bold'>Total Products: </h2>
                            <span>{card.length} Item</span>
                        </div>

                        <div className="flex items-center justify-between mt-5 mb-8">
                            <h2 className=' text-lg font-bold'>Price: </h2>
                            <span>${totalPrice}</span>
                        </div>

                        <p className='border-t-2 border-red-600 pb-5 w-full'></p>

                        <div className="flex items-center justify-between mb-12">
                            <h2 className='text-lg font-bold'>Total price: </h2>
                            <span className="text-[#F02757]">${totalPrice}</span>
                        </div>

                        {/* <h2 className=' text-xl font-bold'>total price: ${totalPrice}</h2> */}

                        <div className="text-center text-sm">
                            {card.length ? <Link to={'/dashboard/payment'}>
                                <p className='bg-[#F02757] text-[#fff] font-semibold p-3 rounded-lg'>PROCEED TO CHECKOUT ({card.length}) </p>
                            </Link>
                                :
                                <p disabled className='bg-[#af2243dc] text-[#c7bfbf] font-semibold p-3 rounded-lg'>PROCEED TO CHECKOUT ({card.length}) </p>
                            }
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardCart;
