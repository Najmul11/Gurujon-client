import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    const {id, name}=course
    return (
       <div className='mt-2'>
            <Link to={`/courses/${id}`}>
                <button className='btn bg-transparent border-inherit  text-black hover:bg-transparent'>{name}</button>
            </Link>
       </div>
    );
};

export default Course;