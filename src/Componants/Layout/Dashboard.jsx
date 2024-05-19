import { NavLink, Outlet } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { FaCartPlus, FaCcApplePay, FaHistory, FaHome, FaShoppingCart, FaUser, FaUsers } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";
import logoIcon from '../../../src/assets/logo/logo.svg';
import useCart from "../Hooks/useCart";
import { VscPreview } from "react-icons/vsc";

const Dashboard = () => {
    const [card] = useCart();
    const isAdmin = true;
    return (
        <div className="theme">
            <div className="max-w-6xl mx-auto">
                <div className="flex gap-5">
                    <div className="lg:drawer-open">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col items-center justify-center px-3">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-2" className="text-3xl px-4 py-1 hover:bg-[#F02757] text-[#F02757] hover:text-[#FFFFFF] lg:hidden rounded-xl cursor-pointer"><IoMdMenu></IoMdMenu></label>
                        </div>

                        <div className="drawer-side">

                            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu w-56 min-h-full bg-[#F1F3F8] text-[#000] text-lg font-medium space-y-2">
                                {/* Sidebar content here */}
                                <div className="mx-auto mt-10 mb-5">
                                    <img className='w-full h-6' src={logoIcon} alt="" />
                                </div>

                                {
                                    isAdmin ? <>
                                        <NavLink className='px-2 flex items-center gap-3 border hover:bg-[#F02757] hover:text-[#FFFFFF] p-1 rounded-xl' to={'/dashboard/adminHome'}><FaHome></FaHome>Admin Home</NavLink>

                                        <NavLink className='px-2 flex items-center gap-3 border hover:bg-[#F02757] hover:text-[#FFFFFF] p-1 rounded-xl' to={'/dashboard/addProduct'}><FaCartPlus></FaCartPlus>Add Product</NavLink>

                                        <NavLink className='px-2 flex items-center gap-3 border hover:bg-[#F02757] hover:text-[#FFFFFF] p-1 rounded-xl' to={'/dashboard/allProducts'}><FaShoppingCart></FaShoppingCart>All Products</NavLink>

                                        <NavLink className='px-2 flex items-center gap-3 border hover:bg-[#F02757] hover:text-[#FFFFFF] p-1 rounded-xl' to={'/dashboard/allUsers'}><FaUsers></FaUsers>All Users</NavLink>

                                    </>
                                        :
                                        <>
                                            <NavLink className='px-2 flex items-center gap-3 border hover:bg-[#F02757] hover:text-[#FFFFFF] p-1 rounded-xl' to={'/dashboard/myProfile'}><FaUser></FaUser>My Profile</NavLink>

                                            <NavLink className='px-2 flex items-center gap-3 border hover:bg-[#F02757] hover:text-[#FFFFFF] p-1 rounded-xl' to={'/dashboard/orderProduct'}><FaShoppingCart></FaShoppingCart>Order Product({card.length})</NavLink>

                                            <NavLink className='px-2 flex items-center gap-3 border hover:bg-[#F02757] hover:text-[#FFFFFF] p-1 rounded-xl' to={'/dashboard/payment'}><FaCcApplePay></FaCcApplePay>Payment</NavLink>

                                            <NavLink className='px-2 flex items-center gap-3 border hover:bg-[#F02757] hover:text-[#FFFFFF] p-1 rounded-xl' to={'/dashboard/paymentHistory'}><FaHistory></FaHistory>Payment History</NavLink>

                                            <NavLink className='px-2 flex items-center gap-3 border hover:bg-[#F02757] hover:text-[#FFFFFF] p-1 rounded-xl' to={'/dashboard/addReview'}><VscPreview></VscPreview>Add Review</NavLink>

                                            
                                        </>
                                }

                                <p className='pb-10'></p>
                                <p className='border-t-2 border-bg-[#F02757] pb-10'></p>


                                <NavLink className='px-2 flex items-center gap-3 border hover:bg-[#F02757] hover:text-[#FFFFFF] p-1 rounded-xl' to={'/'}><FaHome></FaHome>Home</NavLink>

                                <NavLink className='px-2 flex items-center gap-3 border hover:bg-[#F02757] hover:text-[#FFFFFF] p-1 rounded-xl' to={'/products/popular'}><AiOutlineProduct></AiOutlineProduct>Products</NavLink>

                                <NavLink className='px-2 flex items-center gap-3 border hover:bg-[#F02757] hover:text-[#FFFFFF] p-1 rounded-xl' to={'/contact'}><MdEmail></MdEmail>Contact</NavLink>


                            </ul>

                        </div>
                    </div>


                    <div className="flex-1">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;