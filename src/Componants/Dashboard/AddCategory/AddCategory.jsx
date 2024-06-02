import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddCategory = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {

        const categoryAdd = {
            name: data.name,
        }
        const categoryRes = await axiosSecure.post('/category', categoryAdd);
        console.log(categoryRes.data);
        if (categoryRes.data.insertedId) {
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
            <div className="bg-[#F1F3F8] rounded-xl py-5">
                <div className="text-center mt-10 pb-10">
                    <h1 className="text-3xl max-md:text-2xl max-sm:text-xl  font-bold text-[#F02757]">Add Category</h1>
                    <p className='w-1/2 mx-auto border-t-2 border-[#F02757] mt-4'></p>
                </div>
                <div className="w-3/4 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div className="form-control w-full">
                            <label className="label text-center">
                                <span className="text-xl font-semibold text-[#000]">Add Category</span>
                            </label>
                            <input type="text" placeholder="Add Category" {...register("name", { required: true })} name='name' className="input input-bordered bg-white" />
                        </div>


                        <div className="form-control mt-10 lg:w-1/3 max-md:w-1/2 max-sm:w-9/12 md:w-1/3 mx-auto">
                            <button className="btn btn-slide-left rounded-full">Add Category</button>

                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddCategory;