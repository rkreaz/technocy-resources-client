import logoImage from '../../../assets/logo/logo.svg';
import cardImage from '../../../assets/footer/Footer.png';
import { TbTruckDelivery } from "react-icons/tb";
import { GiConfirmed, GiReturnArrow } from "react-icons/gi";
import { MdOutlineContactPhone } from "react-icons/md";
import './footer.css'

const Footer = () => {
    return (
        <div className=' bg-gradient-to-r from-indigo-500 via-[#ea1043e1] to-[#6565EE]'>
            <div className="max-w-6xl mx-auto pt-14">
                <footer className="footer theme_text mx-auto max-sm:text-center">
                    <nav>
                        <h6 className="footer-title">COMPANY</h6>
                        <a className="link link-hover">Careerss</a>
                        <a className="link link-hover">Affiliates</a>
                        <a className="link link-hover">Blog</a>
                        <a className="link link-hover">Contact Us</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">SHOP</h6>
                        <a className="link link-hover">Televisions</a>
                        <a className="link link-hover">Fridges</a>
                        <a className="link link-hover">Washing Machines</a>
                        <a className="link link-hover">Fans</a>
                        <a className="link link-hover">Air Conditioners</a>
                        <a className="link link-hover">Laptops</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">HELP</h6>
                        <a className="link link-hover">Customer Service</a>
                        <a className="link link-hover">My Account</a>
                        <a className="link link-hover">Find a Store</a>
                        <a className="link link-hover">Legal & Privacy</a>
                        <a className="link link-hover">Gift Card</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">MY ACCOUNT</h6>
                        <a className="link link-hover">My Profile</a>
                        <a className="link link-hover">My Order History</a>
                        <a className="link link-hover">My Wish List</a>
                        <a className="link link-hover">Order Tracking</a>
                    </nav>
                    <aside className='aside_footer'>
                        <img src={logoImage} alt=""/>
                        <h3 className=''>Phone: <span>+088-01737929271</span></h3>
                        <h3 >Location: <span>Stand Bazer, Karaniganj, Dhaka</span></h3>
                        <h3 >Email: <span>rkreaz91@gmail.com</span></h3>
                    </aside>
                </footer>
                <p className='border-t-2 border-base-200 mt-5'></p>
                <div className='grid lg:grid-cols-4 py-10 gap-5 p-5 theme_text justify-center'>
                    <div className='flex items-center gap-5'>
                        <TbTruckDelivery className='text-4xl'></TbTruckDelivery>
                        <div>
                            <h2>Free Delivery</h2>
                            <p>Free shipping over $100</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <GiReturnArrow className='text-4xl'></GiReturnArrow>
                        <div>
                            <h2>Free Return</h2>
                            <p>Free return over $100</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <MdOutlineContactPhone className='text-4xl'></MdOutlineContactPhone>
                        <div>
                            <h2>Customer Support</h2>
                            <p>Friendly 24/7 customer support</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <GiConfirmed className='text-4xl'></GiConfirmed>
                        <div>
                            <h2>Money Back Guarantee</h2>
                            <p>Quality checked by our team</p>
                        </div>
                    </div>
                </div>
                <p className='border-t-2 border-base-200 mt-5'></p>

                <footer className="footer px-10 py-4 theme_text">
                    <aside className="items-center grid-flow-col">
                        <p>Copyright © 2023 Technocy. All rights reserved</p>
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