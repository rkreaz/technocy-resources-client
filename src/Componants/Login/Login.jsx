import { Helmet } from "react-helmet-async";
import loginImg from '../../assets/image/shop.jpg'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";

const Login = () => {
    // const  captchaRef  = useRef(null);
    const [disable, setDisable] = useState(true);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

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
        console.log('handle Login With Google');
    }

    return (
        <div className="theme">
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-16 mt-40 max-sm:mt-20">
                    <div className="text-center lg:text-left w-1/2">
                        <img src={loginImg} alt="" />
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-lg border rounded-lg p-5">
                        <div className="card-body mt-12">
                            <h1 className="text-4xl font-semibold text-center">Login now!</h1>

                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Type Here email" name='email' className="input input-bordered bg-white" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="Password" placeholder="Enter your password" name='password' className="input input-bordered bg-white" required />
                                </div>


                                <div className="form-control mt-5">
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>
                                    <input onBlur={handleValidateCaptcha} type="text" placeholder="Type The Captcha Above" name='captcha' className="input input-bordered bg-white" required />
                                </div>

                                <div className="form-control mt-6">
                                    <input disabled={disable} className="text-white btn btn-slide-left text-2xl" type="submit" value="Login" />
                                </div>

                            </form>
                        </div>

                        <div className='text-center'>
                            <p>New here? <Link to={'/register'} className='font-bold'> Create a New Account</Link></p>
                            <h2 className='text-xl font-semibold mt-5'>Or sign in with</h2>
                            <div className='flex gap-5 justify-center items-center mb-11 mt-8'>

                                <a onClick={handleLoginWithGoogle} className="border p-3 rounded-full text-[#FCD050] hover:bg-[#F02757] hover:text-[#fff]"> <FaGoogle className='text-2xl'></FaGoogle></a>

                                <a className="border p-3 rounded-full text-[#0866FF] hover:bg-[#F02757] hover:text-[#fff]"><FaFacebook className='text-2xl'></FaFacebook></a>

                                <a className="border p-3 rounded-full text-[#0866FF] hover:bg-[#F02757] hover:text-[#fff]"><FaGithub className='text-2xl'></FaGithub> </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;