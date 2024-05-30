
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "aos/dist/aos.css";
import car from '../../../assets/category/about.png'
import HomePageTitle from "../../HomePageTitle/HomePageTitle";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Equipment = () => {
    useEffect(() => {
        AOS.init({
            duration: 8000,
            once: false,
        });
    }, []);
    return (
        <div className="max-w-6xl mx-auto">

            <HomePageTitle
                Heading={'About Us'}
            ></HomePageTitle>

            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row ">
                    <div
                        className="lg:w-1/2  space-y-5"
                        data-aos="fade-right"
                        data-aos-duration="2000"
                        data-aos-delay="300"
                    >
                        <h1 className="font-bold text-3xl text-[#000000] max-sm:text-xl">Innovation quality and exceptional service in electronics.</h1>
                        <p className="font-normal text-base text-[#000000] max-sm:text-sm">Welcome to [Your Company Name] - Learn About Our Journey, Mission, and Team. Discover How We are Revolutionizing the Electronics Market with Innovation, Quality Products, and Exceptional Customer Service.</p>

                        <h1 className="font-bold text-2xl text-[#000000] max-sm:text-xl">Call for book: <span className="text-[#F02757]">8-800-10-500</span></h1>
                        <div className="flex gap-2">

                            <a href="https://www.facebook.com/" target="blank" className="border p-2 rounded-full text-[#0866FF] hover:bg-[#F02757] hover:text-[#fff]"><FaFacebook className="text-lg"></FaFacebook></a>


                            <a href="https://x.com/" target="blank" className="border p-2 rounded-full text-[#0866FF] hover:bg-[#F02757] hover:text-[#fff]"><FaTwitter className="text-lg"></FaTwitter></a>

                            <a href="https://www.instagram.com/" target="blank" className="border p-2 rounded-full text-[#FD33A5] hover:bg-[#F02757] hover:text-[#fff]"><FaInstagram className="text-lg"></FaInstagram></a>

                            <a href="https://www.youtube.com/" target="blank" className="border p-2 rounded-full text-[#FF0000] hover:bg-[#F02757] hover:text-[#fff]"><FaYoutube className="text-lg"></FaYoutube></a>
                        </div>
                    </div>

                    <div
                        className="lg:w-1/2  "
                        data-aos="fade-left"
                        data-aos-duration="2000"
                        data-aos-delay="300"
                    >
                        <div className="">
                            <img
                                src={car}
                                className="w-full lg:h-[470px] rounded-lg container"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Equipment;