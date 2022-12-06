import React from 'react';
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';
import brandLogo from '../../../images/brand-logo.svg'
const Footer = () => {
    return (
        <div className='bg-neutral'>
            <footer className="footer mt-10 p-10 bg-neutral text-neutral-content container mx-auto">
                <div>
                    <img className='m-0' src={brandLogo} alt="" />
                    <p>GURUJON Industries Ltd.<br/>Providing reliable learning environment  1992</p>
                </div> 
                <div>
                    <span className="footer-title">Social</span> 
                    <div className="grid grid-flow-col gap-4">
                        <Link className='text-2xl'><FaTwitter></FaTwitter></Link>
                        <Link className='text-2xl'><FaYoutube></FaYoutube></Link>
                        <Link className='text-2xl'><FaFacebook></FaFacebook></Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;