import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();


    const onSubmit = async (data) => {
        console.log(data)
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
                                <option disabled value={'default'}>Select a Category</option>
                                <option value="salad">popular</option>
                                <option value="pizza">aircold</option>
                                <option value="soup">laptop</option>
                                <option value="dessert">offer</option>
                                <option value="drinks">tablets</option>
                                <option value="popular">kitchen</option>
                                <option value="popular">television</option>
                                <option value="popular">phone</option>
                                <option value="popular">washing</option>
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
                            <textarea {...register("recipe", { required: true })} className="textarea textarea-primary bg-[#f3eeee] text-[#000]" placeholder="Product Details"></textarea>
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