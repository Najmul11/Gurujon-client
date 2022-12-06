import React, { useContext } from 'react';
import {Link} from "react-router-dom"
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { AuthContext } from '../../contexts/AuthProvider';


const Register = () => {
    const {signInWithGoogle, signInWithGithub, createUser,updateUserProfile}=useContext(AuthContext)
    // create user with email/pass
    const handleSubmit=e=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const photo=form.photo.value;
        const email=form.email.value;
        const password=form.password.value;

        createUser(email, password)
        .then(result=>{
            updateProfile(name,photo)
        })
        .catch(error=>{})
    }
    // update name /photo 
    const updateProfile=(name, photo)=>{
        const profile={
            displayName:name,
            photoURL:photo
        }
        updateUserProfile(profile)
        .then(res=>{})
        .then(err=>{})
    }
    // google popup signin
    const googleSignIn=()=>{
        signInWithGoogle()
        .then(result=>{})
        .catch(error=>{})
    }
    // github popup signin
    const githubSignIn=()=>{
        signInWithGithub()
        .then(result=>{})
        .catch(error=>{})
    }
    return (
       <div className='container mx-auto mt-6'>
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto" >
                <form onSubmit={handleSubmit} className="space-y-6" action="#">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Register to our platform</h5>
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full name</label>
                        <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Ariana Grande" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo url</label>
                        <input type="text" name="photo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="url@shutup.com" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Already have an account? <Link to='/login' className="text-blue-700 hover:underline dark:text-blue-500">Log in</Link>
                    </div>
                </form>
                <div>
                    <div className='flex justify-center items-center mt-1'>
                        <hr className='w-24' /><span className='mx-1 text-slate-600 '>Or</span> <hr className='w-24' />
                    </div>
                    <div className='flex justify-center items-center mt-8'>
                        <div className="tooltip" data-tip="Continue with Google">
                            <button onClick={googleSignIn} className='btn bg-transparent btn-circle mx-2 hover:bg-transparent border-inherit'>
                                <FcGoogle className='text-4xl'></FcGoogle>
                            </button>
                        </div>
                        <div className="tooltip" data-tip="Continue with Github">
                            <button onClick={githubSignIn} className='btn bg-transparent btn-circle mx-2 hover:bg-transparent border-inherit'>
                                <AiFillGithub className='text-4xl fill-black'></AiFillGithub>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default Register;