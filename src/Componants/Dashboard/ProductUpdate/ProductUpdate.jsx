import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import useAllCategory from "../../Hooks/useAllCategory";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useRef, useState } from "react";



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const ProductUpdate = ({ singleProductStore, refetch }) => {
    const modalRef = useRef(null)
    const [disableClick, setDisableClick] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const [allCategory] = useAllCategory();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { name, price, details, image, category, _id } = singleProductStore;

    const onSubmit = async (data) => {
        setDisableClick(true)
      
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        const productCart = {
            name: data.name,
            details: data.details,
            image: res.data.data.display_url,
            category: data.category,
            price: parseFloat(data.price)
        }
        const productRes = await axiosSecure.patch(`/products/${_id}`, productCart);
        if (productRes.data.modifiedCount > 0) {
            Swal.fire({
                position: "top",
                icon: "success",
                title: `${data.name} has been Updated`,
                showConfirmButton: false,
                timer: 1500
            });
            reset()
            refetch()
            setDisableClick(false)
            modalRef.current.close()
        }
    }

    return (
        <dialog ref={modalRef} id="my_modal_3" className="modal mt-5">
            <div className="modal-box">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className=" btn-sm btn-circle text-sm  absolute right-2 top-2 mt-3 bg-[#F02757] text-[#fff]">✕</button>
                </form>

                <div>
                    <div className=' mt-5'>
                        <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>

                            <div>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="text-xl font-semibold">Product Name*</span>
                                    </div>
                                    <input defaultValue={name} type="text" {...register("name")} placeholder="Product Name" className="input input-bordered w-full bg-[#f3eeee] text-[#000]" />
                                </label>
                            </div>

                            <div className='flex gap-6'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="text-xl font-semibold">Category*</span>
                                    </div>
                                    <select defaultValue={category} {...register("category")} className="select select-bordered w-full bg-[#f3eeee] text-[#000]">
                                        <option>Select a Category</option>P
                                        {
                                            allCategory.map(allCat => <option key={allCat._id} value={allCat.name}>{allCat.name}</option>)
                                        }
                                    </select>
                                </label>

                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="text-xl font-semibold">Price*</span>
                                    </div>
                                    <input defaultValue={price} type="text" {...register("price")} placeholder="Price" className="input input-bordered w-full bg-[#f3eeee] text-[#000]" />
                                </label>

                            </div>

                            <div>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="text-xl font-semibold">Product Details*</span>
                                    </div>
                                    <textarea defaultValue={details} {...register("details")} className="textarea textarea-primary bg-[#f3eeee] text-[#000]" placeholder="Product Details"></textarea>
                                </label>
                            </div>

                            <div className="text-center">
                                <input defaultValue={image} {...register("image")} type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs bg-[#f3eeee] text-[#000]" />
                            </div>

                            <div className="text-center">
                                <button disabled={disableClick} className='btn btn-slide-left px-10 py-0 max-sm:px-2 max-sm:py-1 rounded-full mt-4 disabled:text-white disabled:opacity-60'>
                                    {disableClick ? "Submitting Product" : "Update Product"}
                                    </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </dialog>
    );
};

ProductUpdate.propTypes = {
    singleProductStore: PropTypes.object,
    refetch: PropTypes.object,

};

export default ProductUpdate;