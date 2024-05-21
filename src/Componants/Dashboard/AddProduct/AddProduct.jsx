import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAllCategory from "../../Hooks/useAllCategory";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProduct = () => {
    const { register, handleSubmit, reset} = useForm();
    const [allCategory] = useAllCategory();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();


    const onSubmit = async (data) => {
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
        const productRes = await axiosSecure.post('/products', productCart);
        console.log(productRes.data);
        if (productRes.data.insertedId) {
            reset()
            Swal.fire({
                position: "top",
                icon: "success",
                title: `${data.name} has been added`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    return (
        <div>
            <h1 className="text-3xl">Dashboard Add Product</h1>
            <div className='px-20 mt-16'>
                <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="text-xl font-semibold">Product Name*</span>
                            </div>
                            <input type="text" {...register("name", { required: true })} placeholder="Product Name" className="input input-bordered w-full bg-[#f3eeee] text-[#000]" />
                        </label>
                    </div>

                    <div className='flex gap-6'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="text-xl font-semibold">Category*</span>
                            </div>
                            <select defaultValue={'default'} {...register("category", { required: true })} className="select select-bordered w-full bg-[#f3eeee] text-[#000]">
                                <option disabled value={'default'}>Select a Category</option>P
                                {
                                    allCategory.map(allCat => <option key={allCat._id} value={allCat.name}>{allCat.name}</option>)
                                }
                            </select>
                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="text-xl font-semibold">Price*</span>
                            </div>
                            <input type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full bg-[#f3eeee] text-[#000]" />
                        </label>

                    </div>

                    <div>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="text-xl font-semibold">Product Details*</span>
                            </div>
                            <textarea {...register("details", { required: true })} className="textarea textarea-primary bg-[#f3eeee] text-[#000]" placeholder="Product Details"></textarea>
                        </label>
                    </div>

                    <div>
                        <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs bg-[#f3eeee] text-[#000]" />
                    </div>

                    <button className='btn btn-slide-left px-10 py-0 max-sm:px-2 max-sm:py-1 rounded-full mt-4'>
                        Add Item <FaUtensils></FaUtensils>
                    </button>

                </form>
            </div>
        </div>
    );
};

export default AddProduct;