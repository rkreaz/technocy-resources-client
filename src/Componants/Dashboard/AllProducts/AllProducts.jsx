import { RiDeleteBinLine } from "react-icons/ri";
import useProducts from "../../Hooks/useProducts";
import { useEffect, useState } from "react";

const AllProducts = () => {
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(10);
    const [allProducts, loadingAllProduct, refetch] = useProducts(limit, page);
    console.log(allProducts);

    const handleDeleteUsers = () => {

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

    console.log("PAGE", page);

    return (
        <div>
            {/* <h1 className="text-3xl">Admin All Users: {users.length}</h1> */}

            <div className="flex justify-between bg-[#F02757] text-[#fff] text-lg p-5 mt-10 w-full">
                <h4 className="">Num</h4>
                <h4 className="w-1/12">Image</h4>
                <h4 className=" w-1/5">Name</h4>
                <h4 className="">Price</h4>
                <div className="flex gap-10">
                    <h4 className="">Update</h4>
                    <h4 className="">Delete</h4>
                </div>
            </div>
            <div>
                {
                    loadingAllProduct ? <div className="text-center mt-12"><span className="loading loading-spinner text-error"></span></div> : allProducts?.result?.map((user, index) => <div key={user._id}>
                        <div className=" bg-[#F1F3F8] mt-2 px-8 max-sm:px-4  text-[#000]">
                            <div className="flex items-center justify-between">
                                <p className="">{index + 1}</p>
                                <div className="w-1/12 ">
                                    <img className="w-12 h-12 " src={user.image} alt="" />
                                </div>
                                <h3 className="max-sm:text-sm w-1/5">{user.name}</h3>
                                <h3 className="max-sm:text-sm ">${user.price}</h3>

                                <div className="flex gap-10">
                                    <p onClick={() => handleDeleteUsers(user._id)} className='bg-[#F02757] p-2 rounded-lg '>  <RiDeleteBinLine className=' text-[#fff]'></RiDeleteBinLine></p>

                                    <p onClick={() => handleDeleteUsers(user._id)} className='bg-[#F02757] p-2 rounded-lg '>  <RiDeleteBinLine className=' text-[#fff]'></RiDeleteBinLine></p>

                                </div>
                            </div>
                        </div>
                    </div>)
                }


            </div>
            {loadingAllProduct ? "" : <div>
                <div className="text-center">
                    <div className="join bg-[#F1F3F8] mt-16 mb-10 page_bg">
                        <button disabled={page === 0} onClick={() => setPage(page - 1)} className="join-item btn btn-sm">Prev</button>
                        {
                            pageList.map((p, index) => <button key={index} className={`${page === index ? 'join-item btn btn-sm activePagination' : 'join-item btn btn-sm'} `} onClick={() => setPage(index)}>{index + 1}</button>)
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
        </div>
    );
};

export default AllProducts;