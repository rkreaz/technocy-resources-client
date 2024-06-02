import { Link, NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useSingleProducts from "../../Hooks/useSingleProducts";
import useSingleCategory from "../../Hooks/useSingleCategory";
import useAllCategory from "../../Hooks/useAllCategory";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import useCart from "../../Hooks/useCart";
import Swal from "sweetalert2";
import { useEffect } from "react";

const ProductDetails = () => {
    const [allCategory] = useAllCategory();
    const { id, category } = useParams();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [, refetch] = useCart()
    const location = useLocation();


    const [singleProduct, loadingSingleProduct, singleRefetch] = useSingleProducts(id);


    const [singleCategory, isLoading] = useSingleCategory(category);

    useEffect(() => {
        singleRefetch()
    }, [id, singleRefetch])

    if (loadingSingleProduct || isLoading) {
        return <div className="text-center">
            <span className=" loading loading-spinner text-error"></span>
        </div>
    }

    const handleAddToCard = (offer) => {
        const { _id, name, image, price, } = offer;
        console.log(offer);
        if (user && user.email) {
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
        <div>
            <div className="max-w-6xl mx-auto pb-20">
                <Helmet>
                    <title>Technocy | Details</title>
                </Helmet>
                <div className="w-full flex pt-24 gap-5">
                    <div className="w-3/12 flex flex-col items-center bg-[#F1F3F8] p-5">
                        <h2 className="font-bold text-2xl text-[#000] mb-5 mt-5">Product categories</h2>
                        {
                            allCategory.length ? allCategory.map((listItem, index) => <NavLink className='text-lg  font-semibold text-[#000] m-1 border w-full text-center py-2 hover:bg-[#F02757] hover:text-[#fff] mt-2 rounded-lg capitalize' to={`/products/${listItem?.name}`} key={index}>{listItem.name}</NavLink>) : ''
                        }
                    </div>

                    <div className="w-9/12">
                        <div className="flex mt-10 gap-5">
                            <div className='w-1/2 container'>
                                <img className="h-full w-full" src={singleProduct?.image} alt="Shoes" />
                            </div>

                            <div className=" w-1/2">
                                <h2 className="text-3xl font-semibold text-[#000]">Product Name: {singleProduct?.name}</h2>
                                <p className='text-[#000] text-4xl font-semibold mt-5'>${singleProduct?.price}</p>
                                <p className="mt-5">{singleProduct?.details}</p>
                                <p className="mt-5 text-xl font-medium">Category: {singleProduct?.category}</p>
                                <button onClick={() => handleAddToCard(singleProduct)} className="btn btn-slide-left px-4 py-0 max-sm:px-2 max-sm:py-1 rounded-full mt-10 w-1/2">Add to Card</button>
                            </div>
                        </div>

                        <p className='border-b-2 border-red-500 mt-10'></p>
                        <div>
                            <h2 className="font-bold text-2xl text-[#ffff] mb-5 mt-5">Related products</h2>
                            <div className="grid lg:grid-cols-3 gap-5 rounded-xl">
                                {
                                    singleCategory.slice(0, 3).map(cate => <div key={cate._id}>
                                        <div >
                                            <div className="card card-compact max-sm:w-full shadow-xl h-[400px]">

                                                <Link to={`/products/singleProduct/${cate._id}/${cate.category}`}>
                                                    <div className='border container rounded-xl'><img className="h-44 mx-auto " src={cate.image} alt="Shoes" /></div>
                                                </Link>

                                                <p className='text-[#fff] bg-[#F90101] absolute left-2 px-1 text-sm rounded-lg mr-2 mt-2'>${cate.price}</p>

                                                <div className="card-body">
                                                    <Link to={`/products/singleProduct/${cate._id}/${cate.category}`}>
                                                        <h2 className="card-title text-2xl">{cate.name}</h2>
                                                    </Link>
                                                    <Link to={`/products/singleProduct/${cate._id}/${cate.category}`}>
                                                        <p>{cate.details}</p>
                                                    </Link>
                                                    <button onClick={() => handleAddToCard(cate)} className="btn btn-slide-left px-4 py-0 max-sm:px-2 max-sm:py-1 rounded-full mt-4">Add to Card</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='border-b-2 border-red-500 mt-10'></p>
        </div>
    );
};

export default ProductDetails;