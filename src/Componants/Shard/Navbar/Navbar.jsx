import { Link, NavLink } from 'react-router-dom';
import logoIcon from '../../../assets/logo/logo.svg';
import './navbar.css'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import logoMan from '../../../assets/icon/profile.png'
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../Hooks/useCart';
import useAdmin from '../../Hooks/useAdmin';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }


    const navLink = <>
        <NavLink to={'/'} className="navbar_button ">Home</NavLink>
        <NavLink to={'/products/popular'} className="navbar_button">Products</NavLink>
        <NavLink to={'/contact'} className="navbar_button">Contact</NavLink>

        {
            user && isAdmin && <NavLink className='navbar_button' to={'/dashboard/adminHome'}>Dashboard</NavLink>
        }
        {
            user && !isAdmin && <NavLink className='navbar_button' to={'/dashboard/myProfile'}>Dashboard</NavLink>
        }

    </>

    return (
        <div className="w-full fixed z-10 bg-opacity-90 bg-[#fff] py-5">
            <div className="max-w-6xl mx-auto flex justify-between max-sm:justify-around items-center ">
                <div className="flex justify-between items-center">
                    <div className="dropdown w-full flex justify-center items-center">
                        <div tabIndex={0} role="button" className="btn btn-ghost hidden max-sm:block mt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#000000]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] p-2 shadow rounded-box w-full bg-[#F1F3F8] mt-36">
                              {navLink}
                        </ul>
                        <div className=''>
                            <img className='' src={logoIcon} alt="" />
                        </div>
                    </div>
                </div>
                {/* <div className='lg:hidden'>
                    <img className='max-sm:h-8 max-sm:w-32' src={logoIcon} alt="" />
                </div> */}
                <div className="navbar-center max-sm:hidden block">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="flex items-center">
                    {/* <Link>
                        <p className="text-lg font-semibold text-[#000] hover:text-[#EA1044] cursor-pointer max-sm:text-base">Login</p>
                    </Link> */}

                    <div>
                        {
                            user?.email ?
                                <>
                                    <div className="dropdown">
                                        <div tabIndex={0} role="button">
                                            <div>
                                                <img className="rounded-full w-8 h-8" src={user?.photoURL ? user.photoURL : `${logoMan}`} />
                                            </div>
                                        </div>
                                        <div tabIndex={0} className="dropdown-content z-[1] card card-compact max-w-64 shadow bg-[#EE6585] text-primary-content mt-2">
                                            <div className="card-body text-center">
                                                <img className="w-16 h-16 rounded-full mx-auto" src={user?.photoURL ? user?.photoURL : `${logoMan}`} />
                                                <h3 className="text-[#fff] text-xl font-semibold">{user.displayName}</h3>
                                                <p className="text-[#fff] text-base font-semibold">{user.email}</p>
                                                <h2 onClick={handleLogOut} className="bg-[#F02757] text-[#fff] hover:bg-[#BD1349] text-lg font-semibold rounded-lg py-1 cursor-pointer">Log Out</h2>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                : <NavLink className={"navMenu"} to='/login'>Login</NavLink>
                        }
                    </div>
                    <Link to={'/dashboard/orderProduct'}>
                        <button className="flex gap-1 ml-4">
                            <FaShoppingCart className='text-xl text-[#F02757]'></FaShoppingCart>
                            <div className="badge bg-[#F02757] border-0 text-[#fff]">+{cart.length}</div>
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Navbar;