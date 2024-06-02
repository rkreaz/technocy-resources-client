import carIcon1 from '../../../assets/category/iphone-x-600x598.png'
import carIcon2 from '../../../assets/category/tablet-removebg-preview.png'
import carIcon3 from '../../../assets/category/laptop.png'
import carIcon4 from '../../../assets/category/television.png'
import carIcon5 from '../../../assets/category/washing_machine-removebg-preview.png'
import carIcon6 from '../../../assets/category/airconditioner-removebg-preview.png'
import carIcon7 from '../../../assets/category/kitchen.png'
import Marquee from "react-fast-marquee";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom'

const Categories = () => {
    useEffect(() => {
        AOS.init({
            duration: 20000,
            once: false,
        });
    }, []);
    
    return (
            <div className="max-w-6xl mx-auto font-poppins">
                <div className="flex-col lg:flex-row">
                    <div>
                        <Marquee pauseOnHover>
                            <div className='grid gap-9 grid-cols-7 max-sm:mt-0 mt-8 max-sm:px-5'>

                                <Link to={'/products/phone'}>
                                    <div className="card border mx-auto p-2 cursor-pointer hover:bg-[#ee708d23]">
                                        <div data-aos="zoom-in"
                                            data-aos-easing="ease-out-cubic"
                                            data-aos-duration="3000" className=' rounded-lg'>
                                            <img src={carIcon1} className="w-28 h-28 " />
                                        </div>
                                        <h2 className="font-bold text-xl text-center text-[#000]">Phones</h2>
                                    </div>
                                </Link>

                                <Link to={'/products/laptop'}>
                                    <div className="card border mx-auto p-2 cursor-pointer hover:bg-[#ee708d23]">
                                        <div data-aos="zoom-in"
                                            data-aos-easing="ease-out-cubic"
                                            data-aos-duration="3000" className=' rounded-lg'>
                                            <img src={carIcon2} className="w-28 h-28 " />
                                        </div>
                                        <h2 className="font-bold text-xl text-center text-[#000]">Tablets</h2>
                                    </div>
                                </Link>

                                <Link to={'/products/laptop'}>
                                    <div className="card border mx-auto p-2 cursor-pointer hover:bg-[#ee708d23]">
                                        <div data-aos="zoom-in"
                                            data-aos-easing="ease-out-cubic"
                                            data-aos-duration="3000" className=' rounded-lg'>
                                            <img src={carIcon3} className="w-28 h-28 " />
                                        </div>
                                        <h2 className="font-bold text-xl text-center text-[#000]">Laptop</h2>
                                    </div>
                                </Link>

                                <Link to={'/products/television'}>
                                    <div className="card border mx-auto p-2 cursor-pointer hover:bg-[#ee708d23]">
                                        <div data-aos="zoom-in"
                                            data-aos-easing="ease-out-cubic"
                                            data-aos-duration="3000" className=' rounded-lg'>
                                            <img src={carIcon4} className="w-28 h-28 " />
                                        </div>
                                        <h2 className="font-bold text-xl text-center text-[#000]">Television</h2>
                                    </div>
                                </Link>

                                <Link to={'/products/washing'}>
                                    <div className="card border mx-auto p-2 cursor-pointer hover:bg-[#ee708d23]">
                                        <div data-aos="zoom-in"
                                            data-aos-easing="ease-out-cubic"
                                            data-aos-duration="3000" className=' rounded-lg'>
                                            <img src={carIcon5} className="w-28 h-28 " />
                                        </div>
                                        <h2 className="font-bold text-xl text-center text-[#000]">Washing</h2>
                                    </div>
                                </Link>

                                <Link to={'/products/aircold'}>
                                    <div className="card border mx-auto p-2 cursor-pointer hover:bg-[#ee708d23]">
                                        <div data-aos="zoom-in"
                                            data-aos-easing="ease-out-cubic"
                                            data-aos-duration="3000" className=' rounded-lg'>
                                            <img src={carIcon6} className="w-28 h-28 " />
                                        </div>
                                        <h2 className="font-bold text-xl text-center text-[#000]">AirCold</h2>
                                    </div>
                                </Link>

                                <Link to={'/products/kitchen'}>
                                    <div className="card border mx-auto p-2 cursor-pointer hover:bg-[#ee708d23]">
                                        <div data-aos="zoom-in"
                                            data-aos-easing="ease-out-cubic"
                                            data-aos-duration="3000" className=' rounded-lg'>
                                            <img src={carIcon7} className="w-28 h-28 " />
                                        </div>
                                        <h2 className="font-bold text-xl text-center text-[#000]">Kitchen</h2>
                                    </div>
                                </Link>
                            </div>
                        </Marquee>
                    </div>
                </div>
            </div>
    );
};

export default Categories;