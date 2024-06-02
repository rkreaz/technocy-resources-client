import { RiDeleteBinLine } from "react-icons/ri";
import useProducts from "../../Hooks/useProducts";
import { useEffect, useState } from "react";
import { FaEdit, FaEye} from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ProductUpdate from "../ProductUpdate/ProductUpdate";
import ViewProduct from "../ViewProduct/ViewProduct";

const AllProducts = () => {
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(30);
    const [singleProductStore, setSingleProductStore] = useState({});
    const [viewProduct, setViewProduct] = useState({});
    const [allProducts, loadingAllProduct, refetch] = useProducts(limit, page);
    const axiosSecure = useAxiosSecure();

    const handleUpdateProduct = (product) => {
       document.getElementById('my_modal_3').showModal();
       setSingleProductStore(product)
    } 

    const handleViewProduct = (product) => {
       document.getElementById('my_modal_5').showModal();
       setViewProduct(product)
    } 

    const handleDeleteProduct = (product) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/products/${product._id}`)
                if (res.data.deletedCount) {
                    refetch();
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: `${product.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }


    // const pageNumber = Math.ceil(allProducts?.pageCount / limit);
    const pageList = [...Array(allProducts?.pageCount).keys()];

    const handleLimit = (e) => {
        setLimit(e.target.value)
        setPage(0)
    }

    useEffect(() => {
        refetch()
    }, [page, limit, refetch])

    return (
        <div>
            <div className="text-center mt-10 pb-10">
                <h1 className="text-3xl max-md:text-2xl max-sm:text-xl  font-bold text-[#F02757]">All Products</h1>
                <p className='w-1/2 mx-auto border-t-2 border-[#F02757] mt-4'></p>
            </div>

            <div className="flex justify-between bg-[#F02757] text-[#fff] text-lg p-5 w-full">
                <h4 className="max-sm:text-sm ">Num</h4>
                <h4 className="w-1/12 max-sm:text-sm">Image</h4>
                <h4 className=" w-1/5 max-sm:text-sm">Name</h4>
                <h4 className="max-sm:text-sm">Price</h4>
                <div className="flex gap-5">
                    <h4 className="max-sm:text-sm">View</h4>
                    <h4 className="max-sm:text-sm">Update</h4>
                    <h4 className="max-sm:text-sm">Delete</h4>
                </div>
            </div>
            <div>
                {
                    loadingAllProduct ? <div className="text-center mt-12"><span className="loading loading-spinner text-error"></span></div> : allProducts?.result?.map((product, index) => <div key={product._id}>
                        <div className=" bg-[#F1F3F8] mt-2 px-8 max-sm:px-4  text-[#000]">
                            <div className="flex items-center justify-between">
                                <p className="">{index + 1}</p>
                                <div className="w-1/12 ">
                                    <img className="w-12 h-12 " src={product.image} alt="" />
                                </div>
                                <h3 className="max-sm:text-sm w-1/5">{product.name}</h3>
                                <h3 className="max-sm:text-sm ">${product.price}</h3>

                                <div className="flex gap-10">
                                    <p onClick={() => handleViewProduct(product)} className='bg-[#008000d7] p-2 rounded-lg '>  <FaEye  className=' text-[#fff]'></FaEye  ></p>

                                    <p onClick={() => handleUpdateProduct(product)} className='bg-[#3D6ED7] p-2 rounded-lg '>  <FaEdit className=' text-[#fff]'></FaEdit ></p>

                                    <p onClick={() => handleDeleteProduct(product)} className='bg-[#F02757] p-2 rounded-lg '>  <RiDeleteBinLine className=' text-[#fff]'></RiDeleteBinLine></p>

                                </div>
                            </div>
                        </div>
                    </div>)
                }


            </div>
            {loadingAllProduct ? "" : <div>
                <div className="text-center p-5">
                    <div className="join bg-[#F1F3F8] mt-10 mb-10 page_bg">
                        <button disabled={page === 0} onClick={() => setPage(page - 1)} className="join-item btn btn-sm">Prev</button>
                        {
                            pageList.map((p, index) => <button key={index} className={`${page === index ? 'join-item btn btn-sm activePagination ' : 'join-item btn btn-sm'} `} onClick={() => setPage(index)}>{index + 1}</button>)
                        }

                        <button disabled={allProducts?.pageCount === page + 1} onClick={() => setPage(page + 1)} className="join-item btn btn-sm">Next</button>

                        <select onChange={handleLimit} defaultValue={limit} className="page_option px-2">
                            <option className="join-item btn btn-sm " value={10}>10</option>
                            <option className="join-item btn btn-sm" value={15}>15</option>
                            <option className="join-item btn btn-sm" value={20}>20</option>
                            <option className="join-item btn btn-sm" value={30}>30</option>
                            <option className="join-item btn btn-sm" value={40}>40</option>
                            <option className="join-item btn btn-sm" value={50}>50</option>
                        </select>
                    </div>
                    <div>

                    </div>
                </div>
            </div>}
            <ProductUpdate singleProductStore={singleProductStore} refetch={refetch}/>
            <ViewProduct viewProduct={viewProduct} />
        </div>
    );
};

export default AllProducts;