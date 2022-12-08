import React from 'react';
import { Link } from 'react-router-dom';

const CourseDetail = ({filterdCourse}) => {
    const {courseName, body, img, course_id}=filterdCourse
    return (
        <div className="card dark:bg-indigo-200 bg-amber-100 shadow-xl mt-5 border border-gray-300">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{courseName}</h2>
            <p>{body}</p>
            <div className="card-actions justify-end mt-2">
            <Link to={`/checkout/${course_id}`}><button className="btn btn-primary">Get Premium Access</button></Link>
            </div>
        </div>
        </div>
    );
};

export default CourseDetail;