import React from 'react';
import { Link } from 'react-router-dom';

const CourseDetail = ({filterdCourse}) => {
    const {courseName, body, img, course_id}=filterdCourse
    return (
        <div className="card lg:card-side bg-amber-100 shadow-xl mt-5">
            <figure className='lg:w-1/2'><img className='w-full h-full w-50 hover:translate-105' src={img} alt="Album"/></figure>
            <div className="card-body lg:w-1/2">
                <h2 className="card-title">{courseName}</h2>
                <p>{body}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${course_id}`}><button className="btn btn-primary">Get Premium Access</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;