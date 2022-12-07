import React, {createRef} from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetail from './CourseDetail';
import { BsDownload } from "react-icons/bs";
import Pdf from "react-to-pdf";


const ref =createRef()


const CoursesByCategory = () => {
    
    const filterdCourses=useLoaderData()
    return (
        <div>
           <div className='flex  items-center md:justify-center justify-start gap-8 m-10'>
                <Pdf targetRef={ref} filename="course.pdf">
                    {({toPdf})=><button onClick={toPdf} className='bg-transparent border-inherit hover:bg-transparent text-black btn'><BsDownload className=' text-3xl font-bold'></BsDownload>
                    </button>}
                </Pdf>
                <h1 className='md:text-center md:text-3xl text-2xl font-bold '>Course in  Details</h1>
           </div>
            <div ref={ref} className='grid md:grid-cols-2 gap-5' >
                {
                    filterdCourses.map(filterdCourse=><CourseDetail key={filterdCourse.course_id} filterdCourse={filterdCourse}></CourseDetail>)
                }
            </div>
        </div>

    );
};

export default CoursesByCategory;