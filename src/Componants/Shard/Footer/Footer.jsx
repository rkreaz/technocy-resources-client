import logoImage from '../../../assets/logo/logo.svg';
import cardImage from '../../../assets/footer/Footer.png';
import { TbTruckDelivery } from "react-icons/tb";
import { GiConfirmed, GiReturnArrow } from "react-icons/gi";
import { MdOutlineContactPhone } from "react-icons/md";
import './footer.css'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className=''>
            <div className="max-w-6xl mx-auto pt-14">
                <footer className="footer mx-auto max-sm:text-center aside_footer">
                    <nav>
                        <h6 className="w-full font-bold hover:text-[#F02757] hover:underline cursor-pointer text-[#000]">COMPANY</h6>
                        <a className="link link-hover">Careerss</a>
                        <a className="link link-hover">Affiliates</a>
                        <a className="link link-hover">Blog</a>
                        <a className="link link-hover">Contact Us</a>
                    </nav>
                    <nav>
                        <h6 className="w-full font-bold hover:text-[#F02757] hover:underline cursor-pointer text-[#000]">SHOP</h6>
                        <a className="link link-hover">Televisions</a>
                        <a className="link link-hover">Fridges</a>
                        <a className="link link-hover">Washing Machines</a>
                        <a className="link link-hover">Fans</a>
                        <a className="link link-hover">Air Conditioners</a>
                        <a className="link link-hover">Laptops</a>
                    </nav>
                    <nav>
                        <h6 className="w-full font-bold hover:text-[#F02757] hover:underline cursor-pointer text-[#000]">HELP</h6>
                        <a className="link link-hover">Customer Service</a>
                        <a className="link link-hover">My Account</a>
                        <a className="link link-hover">Find a Store</a>
                        <a className="link link-hover">Legal & Privacy</a>
                        <a className="link link-hover">Gift Card</a>
                    </nav>
                    <nav>
                        <h6 className="w-full font-bold hover:text-[#F02757] hover:underline cursor-pointer text-[#000]">MY ACCOUNT</h6>
                        <a className="link link-hover">My Profile</a>
                        <a className="link link-hover">My Order History</a>
                        <a className="link link-hover">My Wish List</a>
                        <a className="link link-hover">Order Tracking</a>
                    </nav>
                    <aside className='aside_footer'>
                        <img src={logoImage} alt="" />
                        <h3 className='hover:text-[#F02757] hover:underline cursor-pointer'>Phone: <span>+088-01737929271</span></h3>
                        <h3 className='hover:text-[#F02757] hover:underline cursor-pointer' >Location: <span>Stand Bazer, Karaniganj, Dhaka</span></h3>
                        <h3 className='hover:text-[#F02757] hover:underline cursor-pointer'>Email: <span>rkreaz91@gmail.com</span></h3>
                        <div className="flex mx-auto gap-2">

                            <a href="https://www.facebook.com/" target="blank" className="border p-2 rounded-full text-[#0866FF] hover:bg-[#F02757] hover:text-[#fff]"><FaFacebook className="text-lg"></FaFacebook></a>


                            <a href="https://x.com/" target="blank" className="border p-2 rounded-full text-[#0866FF] hover:bg-[#F02757] hover:text-[#fff]"><FaTwitter className="text-lg"></FaTwitter></a>

                            <a href="https://www.instagram.com/" target="blank" className="border p-2 rounded-full text-[#FD33A5] hover:bg-[#F02757] hover:text-[#fff]"><FaInstagram className="text-lg"></FaInstagram></a>

                            <a href="https://www.youtube.com/" target="blank" className="border p-2 rounded-full text-[#FF0000] hover:bg-[#F02757] hover:text-[#fff]"><FaYoutube className="text-lg"></FaYoutube></a>
                        </div>
                    </aside>
                </footer>
                <p className='border-t-2 border-base-200 mt-5'></p>
                <div className='grid lg:grid-cols-4 py-10 gap-5 p-5 theme_text justify-center'>
                    <div className='flex items-center gap-5'>
                        <TbTruckDelivery className='text-4xl text-[#F02757]'></TbTruckDelivery>
                        <div>
                            <h2 className='hover:text-[#F02757] hover:underline cursor-pointer'>Free Delivery</h2>
                            <p className='hover:text-[#F02757] hover:underline cursor-pointer'>Free shipping over $100</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <GiReturnArrow className='text-4xl text-[#F02757]'></GiReturnArrow>
                        <div>
                            <h2 className='hover:text-[#F02757] hover:underline cursor-pointer'>Free Return</h2>
                            <p className='hover:text-[#F02757] hover:underline cursor-pointer'>Free return over $100</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <MdOutlineContactPhone className='text-4xl text-[#F02757]'></MdOutlineContactPhone>
                        <div>
                            <h2 className='hover:text-[#F02757] hover:underline cursor-pointer'>Customer Support</h2>
                            <p className='hover:text-[#F02757] hover:underline cursor-pointer'>Friendly 24/7 customer support</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <GiConfirmed className='text-4xl text-[#F02757]P'></GiConfirmed>
                        <div>
                            <h2 className='hover:text-[#F02757] hover:underline cursor-pointer'>Money Back Guarantee</h2>
                            <p className='hover:text-[#F02757] hover:underline cursor-pointer'>Quality checked by our team</p>
                        </div>
                    </div>
                </div>
                <p className='border-t-2 border-base-200 mt-5'></p>

                <footer className="footer px-10 py-4 theme_text">
                    <aside className="items-center grid-flow-col">
                        <p>Copyright © 2023 Technocy. All right reserved by Rzaul Karim Reaz</p>
                    </aside>
                    <nav className="md:place-self-center md:justify-self-end">
                        <div className="grid grid-flow-col gap-4">
                            <p>
                                Privacy Policy
                                Terms & Conditions
                                Cookie</p>
                            <img src={cardImage} alt="" />
                        </div>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Footer;