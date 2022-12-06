import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Course from './Course';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination} from "swiper";
import Footer from '../Shared/Footer/Footer'


const Courses = () => {
    const courseCategories=useLoaderData()

    return (
        <div>
            <div className="grid grid-cols-8 gap-8 container mx-auto ">
                <div className='col-span-2'>
                    <div className="card bg-base-100 shadow-xl ">
                        <div className="card-body">
                            <>
                                <h2 className="card-title mb-3">Our Top Courses</h2>
                                {
                                    courseCategories.map(course=><Course key={course.id} course={course}></Course>)
                                }
                            </>
                            <Swiper
                                className='w-full mt-8 hover:'
                                spaceBetween={50}
                                loop={true}
                                autoplay={{delay:2500,pauseOnMouseEnter:true, disableOnInteraction:false}}
                                slidesPerView={1}
                                pagination={{type:'progressbar',}}
                                modules={[Autoplay,Pagination]}
                                >
                                {
                                    courseCategories.map(course=><SwiperSlide key={course.id2}>
                                        <img className='w-full ' src={course.icon} alt="" />
                                    </SwiperSlide>)
                                }
                            </Swiper>    
                        </div>
                    </div>
                </div>
                <div className="col-span-6">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Courses;