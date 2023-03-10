import { Spinner } from 'flowbite-react';
import React, {useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    if (user && user.email){
        return children
    }
    if (loading) {
        return <>
                    <div className="text-center w-10  mx-auto  container mt-28 ">
                        <Spinner aria-label="Extra large Center-aligned spinner example" />
                    </div>
               </>
    }
    return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
};

export default PrivateRoute;