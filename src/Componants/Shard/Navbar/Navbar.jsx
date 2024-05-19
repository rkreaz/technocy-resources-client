import { Link, NavLink } from 'react-router-dom';
import logoIcon from '../../../assets/logo/logo.svg';
import './navbar.css'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import logoMan from '../../../assets/icon/profile.png'
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../Hooks/useCart';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const getThemeData = localStorage.getItem('theme');
    const [checked, setChecked] = useState(JSON.parse(getThemeData) || false);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        localStorage.setItem('theme', checked)
        if (checked) {
            document.body.classList.add(
                'dark_mood'
            );
            document.body.classList.remove(
                'white_mood'
            );
        } else {
            document.body.classList.remove(
                'dark_mood'

            );
            document.body.classList.add(
                'white_mood'
            );
        }
    }, [checked])

    const navLink = <>
        <NavLink to={'/'} className="navbar_button ">Home</NavLink>
        <NavLink to={'/products/popular'} className="navbar_button">Products</NavLink>
        <NavLink to={'/contact'} className="navbar_button">Contact</NavLink>

        <NavLink to={'/extra'} className="navbar_button">Extra</NavLink>

    </>

    return (
        <div className="w-full fixed z-10 bg-opacity-90 bg-[#fff] py-5">
            <div className="max-w-6xl mx-auto flex justify-between max-sm:justify-around items-center ">
                <div className="flex justify-between items-center">
                    <div className="dropdown w-full flex justify-center items-center">
                        <div tabIndex={0} role="button" className="btn btn-ghost hidden max-sm:block mt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#000000]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow rounded-box w-52 bg-[#2c0c13]">
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
                    <Link to={'/dashboard'}>
                        <button className="flex gap-1 mr-4">
                            <FaShoppingCart className='text-xl text-[#F02757]'></FaShoppingCart>
                            <div className="badge bg-[#F02757] border-0 text-[#fff]">+{cart.length}</div>
                        </button>
                    </Link>
                    <div>
                        {
                            user?.email ?
                                <>
                                    <div className="dropdown">
                                        <div tabIndex={0} role="button">
                                            <div>
                                                <img className="rounded-full w-10 h-10" src={user?.photoURL ? user.photoURL : `${logoMan}`} />
                                            </div>
                                        </div>
                                        <div tabIndex={0} className="profile_tab dropdown-content z-[1] card card-compact max-w-64 shadow bg-[#EE6585] text-primary-content mt-2">
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

                    <div className="form-control ml-3 mr-5">
                        <label className="swap swap-rotate">

                            {/* this hidden checkbox controls the state */}
                            {/* <input type="checkbox" /> */}
                            <input onClick={() => setChecked(!checked)} type="checkbox" checked={checked} />

                            {/* sun icon */}
                            <svg className="swap-on fill-current w-8 h-8 max-sm:w-5 max-sm:h-5 text-[#000000]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            {/* moon icon */}
                            <svg className="swap-off fill-current w-8 h-8 max-sm:w-5 max-sm:h-5 text-[#000000]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Navbar;