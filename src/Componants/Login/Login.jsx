import { Helmet } from "react-helmet-async";
// import loginImg from '../../assets/image/shop.jpg'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const Login = () => {
    const [disable, setDisable] = useState(true);
    const { login, loginWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPublic = useAxiosPublic();

    const from = location.state?.from?.pathname || '/';
    console.log(from);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "User Login SuccessFul",
                    icon: "success"
                });
                navigate(from, { replace: true })
            })
    }

    useEffect(() => {
        loadCaptchaEnginge(5);
    }, [])


    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisable(false)
        }
        else {
            setDisable(true)
        }
    }


    const handleLoginWithGoogle = () => {
        // console.log('handle Login With Google');
        loginWithGoogle()
            .then(result => {
                console.log(result.user);
                const userinfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userinfo)
                    .then(res => {
                        console.log(res.data);
                        Swal.fire({
                            title: "Success",
                            text: "Your Google Login has been successfully.",
                            icon: "success"
                        });
                        navigate(location?.state ? location?.state : '/')

                    })
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>

            <div className="max-w-6xl mx-auto pt-28">
                <div className="card flex-shrink-0 lg:w-1/2 max-sm:w-10/12 mx-auto max-w-lg border border-[#F02757] rounded-lg p-5">
                    <div className="lg:card-body">
                        <h1 className="lg:text-4xl max-sm:text-xl font-semibold text-center">Login now!</h1>

                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="lg:text-xl max-sm:text-sm font-semibold text-[#000]">Email</span>
                                </label>
                                <input type="email" placeholder="Type Here email" name='email' className="input input-bordered bg-white border-[#F02757]" required />
                            </div>

                            <div className="form-control mt-3">
                                <label className="label">
                                    <span className="lg:text-xl max-sm:text-sm font-semibold text-[#000]">Password</span>
                                </label>
                                <input type="Password" placeholder="Enter your password" name='password' className="input input-bordered bg-white border-[#F02757]" required />
                            </div>


                            <div className="form-control mt-3">
                                <label className="label lg:text-xl max-sm:text-sm">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" placeholder="Type The Captcha Above" name='captcha' className="input input-bordered bg-white border-[#F02757]" required />
                            </div>

                            <div className="form-control mt-8">
                                <input disabled={disable} className="text-white btn btn-slide-left text-2xl" type="submit" value="Login" />
                            </div>

                        </form>
                    </div>

                    <div className='text-center mt-5'>
                        <p>New here? <Link to={'/register'} className='font-bold text-[#2CA04E] lg:text-xl max-sm:text-sm'> Create a New Account</Link></p>
                        <h2 className='lg:text-xl max-sm:text-sm font-semibold text-[#000] mt-5'>Or sign in with</h2>
                        <div className='flex gap-5 justify-center items-center mb-11 mt-8'>

                            <a onClick={handleLoginWithGoogle} className="border p-2 rounded-full text-[#FCD050] hover:bg-[#2CA04E] hover:text-[#fff]"> <FaGoogle className='text-2xl'></FaGoogle></a>

                            <a className="border p-2 rounded-full text-[#0866FF] hover:bg-[#F02757] hover:text-[#fff]"><FaFacebook className='text-2xl'></FaFacebook></a>

                            <a className="border p-2 rounded-full text-[#000] hover:bg-[#F02757] hover:text-[#fff]"><FaGithub className='text-2xl'></FaGithub> </a>
                        </div>
                    </div>

                </div>
            </div>
            <p className='border-b-2 border-[#F1F3F8] mt-20'></p>
        </div>
    );
};

export default Login;