import HomePageTitle from '../../HomePageTitle/HomePageTitle';

const OurStatistics = () => {
    return (
        <div className="">
            <div className="max-w-6xl mx-auto">
                  <HomePageTitle
                     Heading={'Our Statistics'}
                  ></HomePageTitle>
                <div className="lg:mt-20">
                    <div className='flex flex-col lg:flex-row gap-10 p-5'>
                        <div className=' space-y-5 w-full text-center'>
                            <h1 className="lg:text-5xl text-[#000] font-bold text-center mb-3 max-sm:text-2xl md:text-3xl max-md:text-3xl">Professional Service & Care
                                In A Pleasant Ambience</h1>
                            <p className='lg:text-base max-sm:text-sm'>Ensuring every customer feels valued and appreciated. Our dedicated team of experts is committed to providing top-notch assistance, tailored to meet your individual needs and preferences. We believe that a welcoming and comfortable environment is essential for a satisfying shopping experience, which is why we have meticulously designed our store to be both inviting and functional. Whether you are seeking the latest in electronics or need expert advice, our friendly staff is here to make your visit enjoyable and successful.</p>
                            
                            <div className="stats shadow bg-gradient-to-r from-[#6465EF] to-[#F02757] text-white">

                                <div className="stat place-items-center">
                                    <div className="stat-value max-sm:text-xl">31K</div>
                                    <div className="stat-title text-[#000] mt-2 max-sm:text-sm">Downloads</div>
                                </div>

                                <div className="stat place-items-center">
                                    <div className="stat-value max-sm:text-xl">4,200</div>
                                    <div className="stat-title text-[#000] mt-2 max-sm:text-sm">Downloads</div>
                                </div>

                                <div className="stat place-items-center">
                                    <div className="stat-value max-sm:text-xl">1,200</div>
                                    <div className="stat-title text-[#000] mt-2 max-sm:text-sm">Downloads</div>
                                </div>

                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-5 w-full rounded-xl'>
                            <div className='container bg-[#F1F3F8] rounded-xl'>
                                <img src="https://i.ibb.co/8M1c6PW/cat-1.jpg" className="" />
                            </div>
                            <div className='container bg-[#F1F3F8] rounded-xl'>
                                <img src="https://i.ibb.co/C7cM0y0/cat-2.jpg" className="" />
                            </div>
                            <div className='container bg-[#F1F3F8] rounded-xl'>
                                <img src="https://i.ibb.co/pP1S45f/cat-4.jpg" className="" />
                            </div>
                            <div className='container bg-[#F1F3F8] rounded-xl'>
                                <img src="https://i.ibb.co/pXmW9L1/cat-3.jpg" className="" />
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default OurStatistics;