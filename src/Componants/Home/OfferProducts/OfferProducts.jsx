import { Link } from 'react-router-dom';
import offerImage from '../../../assets/offer/offer.jpg'
import Cart from '../Cart/Cart';


const OfferProducts = () => {
    return (
        <div className="max-w-6xl mx-auto mt-20 pb-20 ">
            <div className="">
                <div className="absolute">
                    <div className='flex flex-col lg:flex-row gap-10'>
                        <div className='container'>
                            <img src={offerImage} className="" />
                        </div>
                        <div className=' space-y-5 p-5 w-full max-sm:text-center'>
                            <h1 className="text-3xl font-bold theme_text">Weekly Sale on 35%</h1>
                            <div className="grid grid-flow-col gap-5 text-center auto-cols-max max-sm:justify-center">
                                <div className="flex flex-col">
                                    <span className="countdown font-mono text-5xl">
                                        <span style={{ "--value": 15 }}></span>
                                    </span>
                                    days
                                </div>
                                <div className="flex flex-col">
                                    <span className="countdown font-mono text-5xl">
                                        <span style={{ "--value": 10 }}></span>
                                    </span>
                                    hours
                                </div>
                                <div className="flex flex-col">
                                    <span className="countdown font-mono text-5xl">
                                        <span style={{ "--value": 24 }}></span>
                                    </span>
                                    min
                                </div>
                                <div className="flex flex-col">
                                    <span className="countdown font-mono text-5xl">
                                        <span style={{ "--value": 55 }}></span>
                                    </span>
                                    sec
                                </div>
                            </div>
                            <Link to={'products/offer'}>
                                <button className="btn btn-slide-left px-8 mt-5 py-3 max-sm:px-2 max-sm:py-1 rounded-full">Limited Offer</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='relative top-60 max-sm:top-[600px] left-44 max-sm:left-10 pb-48 max-sm:pb-[550px]'>
                    <Cart></Cart>
                </div>
            </div>

        </div>
    );
};

export default OfferProducts;