import { useForm } from "react-hook-form";
import HomePageTitle from "../../HomePageTitle/HomePageTitle";
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
                <HomePageTitle
                    Heading={'Add Category'}
                ></HomePageTitle>
                <div className="w-3/4 mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>

                       
                            <div className="form-control w-full">
                                <label className="label text-center">
                                    <span className="text-xl font-semibold text-[#000]">Add Category</span>
                                </label>
                                <input type="text" placeholder="Add Category" {...register("name", { required: true })} name='name' className="input input-bordered bg-white" />
                            </div>

                         
                        <div className="form-control mt-10 w-1/3 mx-auto">
                            <button className="btn btn-slide-left rounded-full">Add Category</button>

                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddCategory;