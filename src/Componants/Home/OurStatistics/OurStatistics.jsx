import offerImage from '../../../assets/offer/offer.jpg'

const OurStatistics = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="max-w-6xl mx-auto mt-20 pb-20 ">
                <div className="">
                    <div className='flex flex-col lg:flex-row gap-10'>
                        <div className=' space-y-5 w-full max-sm:text-center'>
                            <h1 className="text-3xl font-bold theme_text">Professional Service & Care
                                In A Pleasant Ambience</h1>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan</p>
                            <button className="btn btn-slide-left px-8 py-3 max-sm:px-2 max-sm:py-1 rounded-full">Limited Offer</button>
                            <div className="stats shadow bg-gradient-to-r from-indigo-500 via-[#ea1043e1] to-[rgba(21, 21, 21, 0)]">

                                <div className="stat place-items-center">
                                    <div className="stat-title">Downloads</div>
                                    <div className="stat-value">31K</div>
                                    <div className="stat-desc">From January 1st to February 1st</div>
                                </div>

                                <div className="stat place-items-center">
                                    <div className="stat-title">Users</div>
                                    <div className="stat-value text-secondary">4,200</div>
                                    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                                </div>

                                <div className="stat place-items-center">
                                    <div className="stat-title">New Registers</div>
                                    <div className="stat-value">1,200</div>
                                    <div className="stat-desc">↘︎ 90 (14%)</div>
                                </div>

                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-5 w-full p-10 bg-[#e3315292] rounded-xl'>
                            <div className='container'>
                                <img src={offerImage} className="" />
                            </div>
                            <div className='container'>
                                <img src={offerImage} className="" />
                            </div>
                            <div className='container'>
                                <img src={offerImage} className="" />
                            </div>
                            <div className='container'>
                                <img src={offerImage} className="" />
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default OurStatistics;