import { Helmet } from "react-helmet-async";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="theme">
            <Helmet>
                <title>Technocy | Contact</title>
            </Helmet>

            <div>
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/kJnHzgS/shop.png)' }}>
                    <div className="hero-overlay bg-opacity-50"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl text-[#F02757] font-bold">Get In Touch</h1>

                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto mt-20 pb-20">
                    <div className="flex  items-center gap-16 theme_text">
                        <div className="space-y-5">
                            <h1 className="mb-5 text-5xl font-bold">Write us a letter</h1>
                            <p>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <div className="flex gap-5">
                                <input type="text" placeholder="Name*" className="input bg-[#fff] input-bordered w-full" /><input type="text" placeholder="Email Address" className="input bg-[#fff] input-bordered w-full" />
                            </div>
                            <textarea className="textarea textarea-bordered w-full bg-[#fff]" placeholder="Your Message"></textarea>
                            <input className="bg-[#F02757] hover:bg-[#BD1349] text-[#fff] px-6 py-3 max-sm:px-2 max-sm:py-1 rounded-xl" type="submit" value="Submit" />
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <h1 className="mb-5 text-xl font-bold">ADDRESS</h1>
                                <p>Stand Bazer, Karaniganj, <br />
                                Dhaka, Bangladesh.</p>
                            </div>
                            <div>
                                <h1 className="mb-5 text-xl font-bold">EMAIL US</h1>
                                <p>rkreaz91@gmail.com</p>
                                <p>rkrezaulkarimreaz@gmail.com</p>
                            </div>
                            <div>
                                <h1 className="mb-5 text-xl font-bold">TELEPHONE</h1>
                                <p>Hotline: +(88) 01737929271</p>
                                <p>Support: +(88) 01565694542</p>
                            </div>
                            <div>
                                <h1 className="mb-5 text-xl font-bold">WORKING HOURS
                                </h1>
                                <p>Open: 10:00AM – Close: 6:00PM</p>
                                <p>Friday – Saturday: Close</p>
                            </div>
                            <div>
                                <h1 className="mb-5 text-xl font-bold">FOLLOW US
                                </h1>
                                <div className="flex gap-3">
                                      <p className="border p-3 rounded-full text-[#0866FF] hover:bg-[#F02757] hover:text-[#fff] "><FaFacebook className="text-lg"></FaFacebook></p>

                                      <p className="border p-3 rounded-full text-[#0866FF] hover:bg-[#F02757] hover:text-[#fff]"><FaTwitter className="text-lg"></FaTwitter></p>

                                      <p className="border p-3 rounded-full text-[#FD33A5] hover:bg-[#F02757] hover:text-[#fff]"><FaInstagram className="text-lg"></FaInstagram></p>

                                      <p className="border p-3 rounded-full text-[#FF0000] hover:bg-[#F02757] hover:text-[#fff]"><FaYoutube className="text-lg"></FaYoutube></p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <p className='border-t-2 border-base-200 mt-5'></p>
        </div>
    );
};

export default Contact;