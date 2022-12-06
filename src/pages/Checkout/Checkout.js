import React,{useState} from 'react';
import { useLoaderData } from 'react-router-dom';
import {BiCheckDouble} from "react-icons/bi";

const Checkout = () => {
    const [purchase, setPurchase]=useState(false)
    const handleClick=()=>{
        setPurchase(true)
    }
    const checkoutDetails=useLoaderData()
    return (
        <div className='container mx-auto lg:m-20'>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto border">
                <figure><img src={checkoutDetails.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{checkoutDetails.courseName}</h2>
                    <p>You are about to purchase the course</p>
                    <div className="card-actions justify-end">
                        <button disabled={purchase? true:false} onClick={handleClick} className="btn text-primary hover:bg-gray-200 bg-transparent border-0">
                            {purchase ?<><BiCheckDouble className='text-xl'/>Added</> :'continue'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;