import offerImage1 from '../../../assets/offer/watch.jpg'
import offerImage2 from '../../../assets/offer/laptop.jpg'
import offerImage4 from '../../../assets/offer/head-phone.jpg'
import offerImage5 from '../../../assets/offer/g20.jpg'

const PopularProducts = () => {
    return (
        <div className='max-w-6xl mx-auto mt-14'>
            <div className="text-center">
                <h1 className="max-sm:text-xl md:text-2xl lg:text-5xl font-bold theme_text">Popular Products</h1>

            </div>
            <div className='grid lg:grid-cols-4 gap-5  p-5 rounded-xl mt-14'>
                <div className="card card-compact max-sm:w-full shadow-xl theme_text">
                    <figure className='border container'><img src={offerImage5} alt="Shoes" /></figure>
                    <p className='text-[#fff] bg-[#F90101] absolute left-2 px-2
     rounded-lg mr-2 mt-2'>$1500</p>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">Mobile</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <button className="btn btn-slide-left px-4 py-0 max-sm:px-2 max-sm:py-1 rounded-full mt-4">Add to Card</button>
                    </div>
                </div>
                <div className="card card-compact max-sm:w-full shadow-xl theme_text">
                    <figure className='border container'><img src={offerImage4} alt="Shoes" /></figure>
                    <p className='text-[#fff] bg-[#F90101] absolute left-2 px-2
     rounded-lg mr-2 mt-2'>$500</p>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">Head-Phone</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <button className="btn btn-slide-left px-4 py-0 max-sm:px-2 max-sm:py-1 rounded-full mt-4">Add to Card</button>
                    </div>
                </div>
                <div className="card card-compact max-sm:w-full shadow-xl theme_text">
                    <figure className='border container'><img src={offerImage2} alt="Shoes" /></figure>
                    <p className='text-[#fff] bg-[#F90101] absolute left-2 px-2
     rounded-lg mr-2 mt-2'>$5000</p>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">Laptop</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <button className="btn btn-slide-left px-4 py-0 max-sm:px-2 max-sm:py-1 rounded-full mt-4">Add to Card</button>
                    </div>
                </div>
                <div className="card card-compact max-sm:w-full shadow-xl theme_text">
                    <figure className='border container'><img src={offerImage1} alt="Shoes" /></figure>
                    <p className='text-[#fff] bg-[#F90101] absolute left-2 px-2
     rounded-lg mr-2 mt-2'>$200</p>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">Watch</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <button className="btn btn-slide-left px-4 py-0 max-sm:px-2 max-sm:py-1 rounded-full mt-4">Add to Card</button>
                    </div>
                </div>
                <div className="card card-compact max-sm:w-full shadow-xl theme_text">
                    <figure className='border container'><img src={offerImage1} alt="Shoes" /></figure>
                    <p className='text-[#fff] bg-[#F90101] absolute left-2 px-2
     rounded-lg mr-2 mt-2'>$200</p>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">Watch</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <button className="btn btn-slide-left px-4 py-0 max-sm:px-2 max-sm:py-1 rounded-full mt-4">Add to Card</button>
                    </div>
                </div>
                <div className="card card-compact max-sm:w-full shadow-xl theme_text">
                    <figure className='border container'><img src={offerImage1} alt="Shoes" /></figure>
                    <p className='text-[#fff] bg-[#F90101] absolute left-2 px-2
     rounded-lg mr-2 mt-2'>$200</p>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">Watch</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <button className="btn btn-slide-left px-4 py-0 max-sm:px-2 max-sm:py-1 rounded-full mt-4">Add to Card</button>
                    </div>
                </div>
                <div className="card card-compact max-sm:w-full shadow-xl theme_text">
                    <figure className='border container'><img src={offerImage1} alt="Shoes" /></figure>
                    <p className='text-[#fff] bg-[#F90101] absolute left-2 px-2
     rounded-lg mr-2 mt-2'>$200</p>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">Watch</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <button className="btn btn-slide-left px-4 py-0 max-sm:px-2 max-sm:py-1 rounded-full mt-4">Add to Card</button>
                    </div>
                </div>
                <div className="card card-compact max-sm:w-full shadow-xl theme_text">
                    <figure className='border container'><img src={offerImage1} alt="Shoes" /></figure>
                    <p className='text-[#fff] bg-[#F90101] absolute left-2 px-2
     rounded-lg mr-2 mt-2'>$200</p>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">Watch</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <button className="btn btn-slide-left px-4 py-0 max-sm:px-2 max-sm:py-1 rounded-full mt-4">Add to Card</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PopularProducts;