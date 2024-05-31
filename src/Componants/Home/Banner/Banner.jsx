import banner1 from '../../../assets/slider/homeslide2.jpg'
import banner2 from '../../../assets/slider/slider-1.1.jpg'
import banner3 from '../../../assets/slider/slider-3.jpg'
import banner4 from '../../../assets/slider/slider-2.jpg'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Banner = () => {
    useEffect(() => {
        AOS.init({
            duration: 8000,
            once: false,
        });
    }, []);
    return (
        <div className=''>
            
            <div className="carousel lg:h-[600px] max-sm:h-[300px] max-sm:mt-24 max-md:mt-24 md:mt-24 max-sm:pb-12 w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full" />
                    <div className="absolute flex lg:items-center bg-gradient-to-r from-indigo-500 via-[#ea1043e1] to-[rgba(21, 21, 21, 0)] h-full w-full lg:justify-center">

                        <div className="space-y-5 max-sm:pl-8 max-md:pl-8 max-sm:w-4/5 md:w-full text-white max-sm:space-y-2  lg:space-y-7 max-md:mt-10"
                            data-aos="zoom-in-down"
                            data-aos-duration="2000"
                            data-aos-delay="500">
                            <div className='max-w-6xl mx-auto max-sm:mt-2 md:px-5 md:mt-12'>

                                <h1 className="max-sm:text-base md:text-4xl lg:text-5xl font-bold text-white mb-5">Best Phone collection<br /> Staring</h1>
                                <p className="max-sm:text-xs max-sm:mt-2 max-sm:mb-2 max-md:mt-2 mb-7 text-[#fff] text-base">There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
                                <button className="btn btn-slide-left px-8 py-3 max-sm:px-2  max-sm:py-1 rounded-full ">Discover More</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-center items-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className=" px-2 py-2 rounded-full mr-5 border-none text-[#fff] bg-gradient-to-r from-[#ea1043e1] to-[rgba(21, 21, 21, 0)] hover:bg-[#F02757]"><FaArrowLeft className='text-sm'></FaArrowLeft></a>
                        <a href="#slide2" className=" px-2 py-2 rounded-full mr-5 border-none text-[#fff] bg-gradient-to-r from-[#ea1043e1] to-[rgba(21, 21, 21, 0)] hover:bg-[#F02757]"><FaArrowRight className='text-sm'></FaArrowRight></a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full" />
                    <div className="  absolute flex lg:items-center  bg-gradient-to-r from-indigo-500 via-[#ea1043e1] to-[rgba(21, 21, 21, 0)] h-full w-full lg:justify-center">

                        <div className=" space-y-5 max-sm:pl-8 max-md:pl-8 max-sm:w-4/5 text-white max-sm:space-y-2 lg:space-y-7  md:w-full max-md:mt-10"
                            data-aos="zoom-in-down"
                            data-aos-duration="2000"
                            data-aos-delay="500">
                            <div className='max-w-6xl mx-auto max-sm:mt-2 md:px-5 md:mt-12'>

                                <h1 className="max-sm:text-base md:text-4xl lg:text-5xl font-bold text-white mb-5">Best Phone collection<br /> Staring</h1>
                                <p className="max-sm:text-xs max-sm:mt-2 max-sm:mb-2 mt-7 mb-7 max-md:mt-3 text-[#fff] text-base">There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
                                <button className="btn btn-slide-left px-8 py-3 max-sm:px-2 max-sm:py-1 rounded-full">Discover More</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-center items-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className=" px-2 py-2 rounded-full mr-5 border-none text-[#fff] bg-gradient-to-r from-[#ea1043e1] to-[rgba(21, 21, 21, 0)] hover:bg-[#F02757]"><FaArrowLeft className='text-sm'></FaArrowLeft></a>
                        <a href="#slide3" className=" px-2 py-2 rounded-full mr-5 border-none text-[#fff] bg-gradient-to-r from-[#ea1043e1] to-[rgba(21, 21, 21, 0)] hover:bg-[#F02757]"><FaArrowRight className='text-sm'></FaArrowRight></a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full" />
                    <div className="  absolute flex lg:items-center  bg-gradient-to-r from-indigo-500 via-[#ea1043e1] to-[rgba(21, 21, 21, 0)] h-full w-full lg:justify-center">

                        <div className=" space-y-5 max-sm:pl-8 max-md:pl-8 max-sm:w-4/5 text-white max-sm:space-y-2 lg:space-y-7  md:w-full max-md:mt-10"
                            data-aos="zoom-in-down"
                            data-aos-duration="2000"
                            data-aos-delay="500">
                            <div className='max-w-6xl mx-auto max-sm:mt-2 md:px-5 md:mt-12'>

                                <h1 className="max-sm:text-base md:text-4xl lg:text-5xl font-bold text-white mb-5">Best Phone collection<br /> Staring</h1>
                                <p className="max-sm:text-xs max-sm:mt-2 max-md:mt-3 max-sm:mb-2 mt-7 mb-7 text-[#fff] text-base">There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
                                <button className="btn btn-slide-left px-8 py-3 max-sm:px-2 max-sm:py-1 rounded-full">Discover More</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-center items-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className=" px-2 py-2 rounded-full mr-5 border-none text-[#fff] bg-gradient-to-r from-[#ea1043e1] to-[rgba(21, 21, 21, 0)] hover:bg-[#F02757]"><FaArrowLeft className='text-sm'></FaArrowLeft></a>
                        <a href="#slide4" className=" px-2 py-2 rounded-full mr-5 border-none text-[#fff] bg-gradient-to-r from-[#ea1043e1] to-[rgba(21, 21, 21, 0)] hover:bg-[#F02757]"><FaArrowRight className='text-sm'></FaArrowRight></a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner4} className="w-full" />
                    <div className="  absolute flex lg:items-center  bg-gradient-to-r from-indigo-500 via-[#ea1043e1] to-[rgba(21, 21, 21, 0)] h-full w-full lg:justify-center">

                        <div className=" space-y-5 max-sm:pl-8 max-md:pl-8 max-sm:w-4/5 text-white max-sm:space-y-2 lg:space-y-7  md:w-full max-md:mt-10"
                            data-aos="zoom-in-down"
                            data-aos-duration="2000"
                            data-aos-delay="500">
                            <div className='max-w-6xl mx-auto max-sm:mt-2 md:px-5 md:mt-12'>

                                <h1 className="max-sm:text-base md:text-4xl lg:text-5xl font-bold text-white mb-5">Best Phone collection<br /> Staring</h1>
                                <p className="max-sm:text-xs max-sm:mt-2 max-sm:mb-2 max-md:mt-3 mt-7 mb-7 text-[#fff] text-base">There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
                                <button className="btn btn-slide-left px-8 py-3 max-sm:px-2 max-sm:py-1 rounded-full">Discover More</button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-center items-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className=" px-2 py-2 rounded-full mr-5 border-none text-[#fff] bg-gradient-to-r from-[#ea1043e1] to-[rgba(21, 21, 21, 0)] hover:bg-[#F02757]"><FaArrowLeft className='text-sm'></FaArrowLeft></a>
                        <a href="#slide1" className=" px-2 py-2 rounded-full mr-5 border-none text-[#fff] bg-gradient-to-r from-[#ea1043e1] to-[rgba(21, 21, 21, 0)] hover:bg-[#F02757]"><FaArrowRight className='text-sm'></FaArrowRight></a>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;