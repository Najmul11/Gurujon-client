import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from './SingleCourse';

const AllCourses = () => {
  const courseCollection=useLoaderData()
    return (
        <div>
            <h1 className='text-center text-3xl font-bold mt-8 dark:text-white'>Look at the courses we offer</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
                {
                    courseCollection.map(course=><SingleCourse key={course.course_id} course={course}></SingleCourse>)
                }
            </div>
        </div>
        
    );
};

export default AllCourses;

