import { Helmet } from "react-helmet-async";
import registerImg from '../../assets/image/shop.jpg'
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";





const Register = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const { createUser } = useContext(AuthContext);


    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
    };

    const handleLoginWithGoogle = () => {
        console.log('handle Login With Google');
    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Register</title>
            </Helmet>

            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-16 mt-40 max-sm:mt-20">

                    <div className="text-center lg:text-left w-1/2">
                        <img src={registerImg} alt="" />
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-lg border rounded-lg theme_text">

                        <div className="card-body">
                            <h1 className="text-4xl font-semibold text-[#444] text-center">Register now!</h1>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Your name" {...register("name", { required: true })} name='name' className="input input-bordered bg-white" />
                                    {errors.name && <span className='text-[#f64a4a]'>This name field is required</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="text" placeholder="Photo URL" {...register("photo", { required: true })} name='photo' className="input input-bordered bg-white" />
                                    {errors.photo && <span className='text-[#f64a4a]'>This Photo URL is required</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Your email" {...register("email", { required: true })} name='email' className="input input-bordered bg-white" required />
                                    {errors.email && <span className='text-[#f64a4a]'>This email field is required</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="Your password" {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]{8,20}/

                                    })} name='password' className="input input-bordered bg-white" required />


                                    {errors.password?.type === "required" && (
                                        <p className='text-[#f64a4a]'>password is required</p>
                                    )}

                                    {errors.password?.type === "minLength" && (
                                        <p className='text-[#f64a4a]'>This password minLength 6 characters is required</p>
                                    )}

                                    {errors.password?.type === "maxLength" && (
                                        <p className='text-[#f64a4a]'>This password less then 20 characters is required</p>
                                    )}

                                    {errors.password?.type === "pattern" && (
                                        <p className='text-[#f64a4a]'>password must have one uppercase, one lowercase, one numbers one special characters is required</p>
                                    )}



                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-slide-left">Register </button>

                                </div>
                            </form>
                        </div>


                        <div className='text-center'>
                            <p>Already registered?<Link to={'/login'} className='font-bold'> Go to Login</Link></p>
                            <h2 className='text-xl font-semibold mt-5'>Or sign in with</h2>
                            <div className='flex gap-5 justify-center items-center mb-11 mt-8'>

                                <a onClick={handleLoginWithGoogle} className="btn btn-slide-left"> <FaGoogle className='text-[#444444] text-2xl'></FaGoogle></a>
                                <a className="btn btn-slide-left"><FaFacebook className='text-[#444444] text-2xl'></FaFacebook></a>
                                <a className="btn btn-slide-left"><FaGithub className='text-[#444444] text-2xl'></FaGithub> </a>
                            </div>
                        </div>



                        <div className='text-center'>
                            <p>Already have an account? <Link to={'/login'} className='text-[#FF3811]'>Login</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;