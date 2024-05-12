
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "aos/dist/aos.css";
import car from '../../../assets/category/iphone-x-600x598.png'

const Equipment = () => {
    useEffect(() => {
        AOS.init({
            duration: 8000,
            once: false,
        });
    }, []);
    return (
        <div className="max-w-6xl mx-auto">
            <div className="hero mt-14">
                <div className="hero-content flex-col lg:flex-row p-0">
                    <div
                        className="lg:w-1/2 space-y-5 "
                        data-aos="zoom-in-up"
                        data-aos-duration="3000"
                        data-aos-delay="200"
                    >
                        <h1 className="theme_text font-bold text-4xl text-[#000000] max-sm:text-3xl">Professional washing and cleaning of your car</h1>
                        <p className="theme_text py-4 font-medium text-base text-[#000000] max-sm:text-lg">Phasellus in arcu dapibus, lobortis est in, suscipit diam. Vivamus faucibus faucibus eros et porttitor. Sed est nulla, tincidunt ac ex eget, dictum mollis tortor. Vivamus faucibus nec ipsum id aliquam lobortis est.</p>

                        <h1 className="theme_text font-bold text-3xl text-[#000000] max-sm:text-3xl pb-4">Call for book: <span className="text-[#E81C2E]">8-800-10-500</span></h1>

                        <button className="btn btn-slide-left px-8 py-3 max-sm:px-2 max-sm:py-1 rounded-full">Limited Offer</button>
                    </div>

                    <div
                        className="lg:w-1/2  relative"
                        data-aos="zoom-in-up"
                        data-aos-duration="3000"
                        data-aos-delay="200"
                    >
                        <div className="">
                            <img
                                src={car}
                                className="w-full h-[500px] rounded-lg container"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Equipment;