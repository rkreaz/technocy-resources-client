import { useForm } from "react-hook-form";
import HomePageTitle from "../../HomePageTitle/HomePageTitle";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
   

    const onSubmit = async (data) => {
      
        const reviewCart = {
            name: data.name,
            rating: data.rating,
            category: data.category,
            suggestions: data.suggestions,
            details: data.details,
        }
        const reviewsRes = await axiosPublic.post('/reviews', reviewCart);
        console.log(reviewsRes.data);
        if (reviewsRes.data.insertedId) {
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
                    Heading={'Add Review'}
                ></HomePageTitle>
                <div className="mx-auto px-5">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="lg:flex max-md:flex md:flex max-sm:flex-col justify-between gap-5">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="lg:text-xl max-sm:text-sm font-semibold text-[#000]">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" {...register("name", { required: true })} name='name' className="input input-bordered bg-white" />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="text-xl max-sm:text-sm font-semibold text-[#000]">Rating</span>
                                </label>
                                <input type="text" placeholder="Rating" {...register("rating", { required: true })} name='rating' className="input input-bordered bg-white" />
                            </div>
                        </div>

                        <div className="lg:flex max-md:flex md:flex max-sm:flex-col justify-between gap-5 mt-5">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="text-xl max-sm:text-sm font-semibold text-[#000]">Which Product do you like most?</span>
                                </label>
                                <input type="text" placeholder="The product you liked most" {...register("category", { required: true })} name='category' className="input input-bordered bg-white" />
                            </div>

                            <div className="form-control  w-full">
                                <label className="label">
                                    <span className="text-xl max-sm:text-sm font-semibold text-[#000]">Any suggestions for us?</span>
                                </label>
                                <input type="text" placeholder="Suggestion" {...register("suggestions", { required: true })} name='suggestions' className="input input-bordered bg-white" />
                            </div>
                        </div>

                        <div>
                            <label className="form-control w-full mt-5">
                                <div className="label">
                                    <span className="text-xl max-sm:text-sm font-semibold">Product Details</span>
                                </div>
                                <textarea {...register("details", { required: true })} className="textarea textarea-primary bg-[#f3eeee] text-[#000]" placeholder="Product Details"></textarea>
                            </label>
                        </div>

                        <div className="form-control mt-10 lg:w-1/3 max-sm:w-1/2 max-md:w-1/3 md:w-1/3 mx-auto">
                            <button className="btn btn-slide-left rounded-full">Send Review</button>

                        </div>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default AddReview;