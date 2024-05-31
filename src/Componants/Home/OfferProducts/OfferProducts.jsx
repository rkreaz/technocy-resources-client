import { Link } from 'react-router-dom';
import offerImage from '../../../assets/offer/Offered.png'
import Cart from '../Cart/Cart';
import HomePageTitle from '../../HomePageTitle/HomePageTitle';

import Countdown from "react-countdown";

const Completionist = () => <span>You are good to go!</span>;


const OfferProducts = () => {
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return <div className=''>
                <span className='text-6xl max-sm:text-4xl max-md:text-4xl md:text-4xl text-[#F02757] font-bold'>{days}: {hours}: {minutes}: {seconds}</span>
            </div>;
        }
    };
    return (
        <div className="max-w-6xl mx-auto mt-20 lg:pb-20 max-sm:pb-5 ">

            <div className="">
                <HomePageTitle Heading={'Offer Products'}
                ></HomePageTitle>
                <div className="absolute mt-4">
                    <div className='flex max-sm:flex-col lg:flex-row max-md:flex-col gap-10 px-5'>
                        <div className='container bg-[#F1F3F8]'>
                            <img src={offerImage} className="" />
                        </div>
                        <div className=' p-5 w-full max-sm:text-center'>

                            <Link to={'products/offer'}>
                                <button className="btn btn-slide-left px-8 py-3 max-sm:px-2 max-sm:py-1 rounded-full">Limited Offer</button>
                            </Link>

                            <h1 className="lg:text-4xl text-[#000] font-bold max-sm:text-2xl md:text-3xl max-md:text-3xl mt-5 mb-5">Weekly Sale on <span className='text-[#F02757]'>35%</span></h1>

                            <div>
                                <Countdown date={Date.now() + 5000000000}
                                    renderer={renderer}
                                />
                            </div>

                        </div>
                    </div>
                </div>
                <div className='relative top-60 max-sm:top-[530px] lg:left-44 max-sm:left-0 pb-48 max-sm:pb-[550px]'>
                    <Cart></Cart>
                </div>
            </div>

        </div>
    );
};

export default OfferProducts;