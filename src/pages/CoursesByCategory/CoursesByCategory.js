import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourseByCategory from './SingleCourseByCategory';

const CoursesByCategory = () => {
    const filterdCourses=useLoaderData()
    return (
        <div>
            {
                filterdCourses.map(filterdCourse=><SingleCourseByCategory key={filterdCourse.course_id} filterdCourse={filterdCourse}></SingleCourseByCategory>)
            }
        </div>
    );
};

export default CoursesByCategory;