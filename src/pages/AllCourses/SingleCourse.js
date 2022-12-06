import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight} from "react-icons/bs";
const SingleCourse = ({course}) => {
    const {category_id, courseName, ratings }=course
    console.log(course);
    return (
        <div className="card  bg-indigo-200 shadow-xl rounded-md hover:scale-105">
            <div className="card-body">
                <h2 className="card-title text-2xl">{courseName}</h2>
                <p className='font-semibold italic'>Ratings: {ratings}</p>
                <div className="card-actions justify-end">
                    <Link to={`/courses/${category_id}`}><button className="btn text-primary bg-transparent italic border-0 hover:bg-indigo-300 rounded-full ">EXPlORE   <BsArrowRight className='font bold text-2xl'></BsArrowRight></button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;