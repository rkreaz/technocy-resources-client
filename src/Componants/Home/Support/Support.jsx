import messages1 from '../../../assets/icon/message-16.png'
import messages2 from '../../../assets/icon/3178167.png'

const Support = () => {
    return (
        <div>
            <div className="">
                <div className="hero h-[600px] bg-fixed mb-20" style={{ backgroundImage: 'url(https://i.ibb.co/4V7mfJb/homeslide2.jpg)' }}>
                    <div className="hero-overlay bg-[#F02757] opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content max-w-6xl mx-auto">
                        <div className="">
                            <h1 className="text-5xl text-white font-bold text-center mb-3 max-sm:text-3xl">Get support for your problem</h1>
                            <p className="text-center font-medium text-base text-white mt-5 mb-12">Broken tech? Our trusted experts are here to help. Select your device to schedule an appointment at any <br />uBreakiFix® by Asurion or Asurion Tech Repair & Solutions™ store.</p>


                            <div className="text-center justify-center flex gap-10">
                                <div className=" transition duration-300 bg-white rounded-lg">
                                    <div className="hero-content flex-col lg:flex-row gap-6 px-10 max-sm:px-5">
                                        <img className="h-24 w-24 p-4 rounded-full shadow-2xl bg-[#F02757] " src={messages1} />

                                        <div>
                                            <h1 className="font-bold text-xl text-[#000000] ">Send us an email</h1>
                                            <p className="py-3">contact@gmail.com</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="">
                                    <div className="hero-content flex-col lg:flex-row gap-6 bg-white px-10 max-sm:px-5 rounded-lg">
                                        <img className="h-24 w-24 p-4 rounded-full shadow-2xl bg-[#F02757] container " src={messages2} />
                                        <div>
                                            <h1 className="font-bold text-xl text-[#000000]">
                                                Give us a call.....</h1>
                                            <p className="py-3">+012 (435) 7689</p>
                                        </div>
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