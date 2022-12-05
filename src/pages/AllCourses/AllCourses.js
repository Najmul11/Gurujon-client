import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from './SingleCourse';

const AllCourses = () => {
  const courseCollection=useLoaderData()
    return (
        <div className='grid grid-cols-2 gap-3'>
            {
                courseCollection.map(course=><SingleCourse key={course.course_id} course={course}></SingleCourse>)
            }
        </div>
    );
};

export default AllCourses;

