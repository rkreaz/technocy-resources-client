import { Helmet } from "react-helmet-async";
// import loginImg from '../../assets/image/shop.jpg'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";
// import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const Login = () => {
    const [disable, setDisable] = useState(true);
    const { login, loginWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();

    const from = location.state?.from?.pathname || '/';
    // console.log("from", from);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        login(email, password)
            .then(result => {
                console.log(result.user);
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
                // console.log('handle Login With Google', result.user);
                const userinfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosSecure.post('/users', userinfo)
                    .then(res => {
                        console.log(res.data);

                        navigate(from, { replace: true })

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
                            <a onClick={handleLoginWithGoogle} className="btn btn-slide-left text-white bg-[#FF3811] hover:bg-[#c94646]"> <FaGoogle className='text-[#2CA04E] text-2xl'></FaGoogle>Sign With Google</a>
                        </div>
                    </div>

                </div>
            </div>
            <p className='border-b-2 border-[#F1F3F8] mt-20'></p>
        </div>
    );
};

export default Login;

