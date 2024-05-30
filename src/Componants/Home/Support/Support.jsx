import messages1 from '../../../assets/icon/message-16.png'
import messages2 from '../../../assets/icon/3178167.png'
import { Link } from 'react-router-dom';
import HomePageTitle from '../../HomePageTitle/HomePageTitle';

const Support = () => {
    return (
        <div>
            <div className="">
                <HomePageTitle
                    Heading={'Contact Section'}
                ></HomePageTitle>
                <div className="hero lg:h-[600px] max-sm:h-[450px]  md:h-[450px] max-md:h-[500px]  bg-fixed lg:mb-20" style={{ backgroundImage: 'url(https://i.ibb.co/4V7mfJb/homeslide2.jpg)' }}>
                    <div className="hero-overlay bg-[#F02757] opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content max-w-6xl mx-auto">
                        <div className="">
                            <h1 className="lg:text-5xl text-white font-bold text-center mb-3 max-sm:text-2xl md:text-3xl max-md:text-3xl">Get support for your problem</h1>
                            <p className="lg:text-base max-sm:text-sm font-medium text-base text-white mt-5 mb-12">Broken tech? Our trusted experts are here to help. Select your device to schedule an appointment at any <br />uBreakiFix® by Asurion or Asurion Tech Repair & Solutions™ store.</p>


                            <div className="text-center justify-center flex gap-5">
                                <div className="hero-content flex-col lg:flex-row gap-6 bg-white px-10 max-sm:px-5 rounded-lg">
                                    <img className="lg:h-24 lg:w-24 max-sm:w-16 md:w-24 max-md:w-24 p-4 rounded-full shadow-2xl bg-[#F02757] " src={messages1} />

                                    <Link to={'/contact'}>
                                        <h1 className="font-bold text-xl text-[#000000] max-sm:text-base">Send us an email</h1>
                                        <h5 className="py-1 text-[#000000] lg:text-base max-sm:text-xs">rkrezaulkarimreaz@gmail.com</h5>
                                    </Link>
                                </div>

                                <div className="">
                                    <div className="hero-content flex-col lg:flex-row gap-6 bg-white px-10 max-sm:px-5 rounded-lg">
                                        <img className="lg:h-24 lg:w-24 max-md:w-24 max-sm:w-16 md:w-24 p-4 rounded-full shadow-2xl bg-[#F02757] container " src={messages2} />
                                        <Link to={'/contact'}>
                                            <h1 className="font-bold text-xl text-[#000000] max-sm:text-base">
                                            Call us for any need</h1>
                                            <h5 className="py-1 text-[#000000] lg:text-base max-sm:text-xs">+088 01737929271</h5>
                                        </Link>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;