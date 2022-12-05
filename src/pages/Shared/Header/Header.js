import React, {useContext, useState} from "react";
import './Header.css'
import {NavLink,Link , useNavigate} from "react-router-dom"
import brandLogo from '../../../images/brand-logo.png'
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { AuthContext } from "../../../contexts/AuthProvider";

const Header = () => {
    const [isDark, setIsDark]=useState(false)
    const {user, logout}=useContext(AuthContext)
    const handleDarkMode=()=>{
        setIsDark(!isDark)
    }
    const handleLogout=()=>{
        logout()
        .then(result=>{})
        .catch(error=>{})
    }
  return (
    <div className="bg-amber-200 text-dark">
        <div className="container mx-auto">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to='/courses' className=" btn btn-ghost">Courses</NavLink></li>
                            <li> <NavLink to='/faq' className="btn btn-ghost">Faq</NavLink></li>
                            <li> <NavLink to='/blog' className=" btn btn-ghost">Blog</NavLink></li>
                        </ul>
                    </div>
                    <Link to='/' className="normal-case font-mono text-4xl flex items-center"><img src={brandLogo} style={{height:'60px'}} alt="" /> GURUJON</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li className="px-4"><NavLink to='/courses' className="btn btn-ghost rounded-md">Courses</NavLink></li>
                        <li className="px-4"><NavLink to='/faq' className="btn btn-ghost rounded-md">Faq</NavLink></li>
                        <li className="px-4"><NavLink to='/blog' className="btn btn-ghost rounded-md">Blog</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center">
                        {
                            isDark ? 
                            <HiOutlineSun onClick={handleDarkMode} className="text-2xl mr-4 hover:fill-white cursor-pointer"/> :
                            <HiOutlineMoon onClick={handleDarkMode} className="text-2xl mr-4 hover:fill-black cursor-pointer"/>
                        }
                        {
                            user ?
                            <div className="dropdown dropdown-end">
                                <div className="tooltip tooltip-left" data-tip={user?.displayName}>
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} alt="" title=""/>
                                        </div>
                                    </label>
                                </div>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><Link className="justify-between"> Profile </Link></li>
                                    <button onClick={handleLogout} className="bg-red-600">Logout</button>
                                </ul>
                            </div>
                            :
                            <NavLink to='/login' className="mr-4 btn btn-ghost">Login</NavLink>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Header;
