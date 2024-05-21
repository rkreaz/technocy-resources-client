import { NavLink, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useSingleProducts from "../../Hooks/useSingleProducts";
// import { useState } from "react";
import useSingleCategory from "../../Hooks/useSingleCategory";
import useAllCategory from "../../Hooks/useAllCategory";

const ProductDetails = () => {
    const [allCategory] = useAllCategory();
    const { id, category } = useParams();
    

    const [singleProduct, loadingSingleProduct] = useSingleProducts(id);


    const [singleCategory, isLoading] = useSingleCategory(category);

    if (loadingSingleProduct || isLoading) {
        return <div className="text-center">
            <span className=" loading loading-spinner text-error"></span>
        </div>
    }

    return (
        <div>
            <div className="max-w-6xl mx-auto pb-20">
                <Helmet>
                    <title>Technocy | Details</title>
                </Helmet>
                <div className="w-full flex pt-24 gap-5">
                    <div className="w-3/12 flex flex-col items-center bg-[#1D232A] p-5">
                        <h2 className="font-bold text-2xl text-[#000000] mb-5 mt-5">Product categories</h2>
                        {
                            allCategory.length ? allCategory.map((listItem, index) => <NavLink className='text-lg font-semibold m-1 border w-full text-center py-2 hover:bg-[#F02757] hover:text-[#fff] mt-2 rounded-lg' to={`/products/${listItem?.name}`} key={index}>{listItem.name}</NavLink>) : ''
                        }
                    </div>

                    <div className="w-9/12">
                        <div className="flex mt-10 gap-5">
                            <div className='w-1/2 container'>
                                <img className="h-80 w-full" src={singleProduct?.image} alt="Shoes" />
                            </div>

                            <div className=" w-1/2">
                                <h2 className="text-3xl text-[#fff]]">Product Name: {singleProduct?.name}</h2>
                                <p className='text-[#fff] text-4xl mt-5'>${singleProduct?.price}</p>
                                <p className="mt-5">{singleProduct?.details}</p>
                                <p className="mt-5 text-xl">Category: {singleProduct?.category}</p>
                                <button className="btn btn-slide-left px-4 py-0 max-sm:px-2 max-sm:py-1 rounded-full mt-10">Add to Card</button>
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
                                                <div className='border container rounded-xl'><img className="h-44 mx-auto " src={cate.image} alt="Shoes" /></div>
                                                <p className='text-[#fff] bg-[#F90101] absolute left-2 px-1 text-sm rounded-lg mr-2 mt-2'>${cate.price}</p>
                                                <div className="card-body">
                                                    <h2 className="card-title text-2xl">{cate.name}</h2>
                                                    <p>{cate.details}</p>
                                                    <button className="btn btn-slide-left px-4 py-0 max-sm:px-2 max-sm:py-1 rounded-full mt-4">Add to Card</button>
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
        </div>
    );
};

export default ProductDetails;