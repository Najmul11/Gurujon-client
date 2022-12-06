import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetail from './CourseDetail';

const CoursesByCategory = () => {
    const filterdCourses=useLoaderData()
    return (
        <div className='mt-8'>
            <h1 className='text-center text-3xl font-bold m-10'>Look at the courses we offer</h1>
            <div>
                {
                    filterdCourses.map(filterdCourse=><CourseDetail key={filterdCourse.course_id} filterdCourse={filterdCourse}></CourseDetail>)
                }
            </div>
        </div>

    );
};

export default CoursesByCategory;