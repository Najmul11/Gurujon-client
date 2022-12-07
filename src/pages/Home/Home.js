import React from 'react';
import Footer from '../Shared/Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination} from "swiper";



const Home = () => {
    const courseCategories=useLoaderData()
    return (
        <div className='bg-gray-200'>
            <div className='container mx-auto'>
                <div>
                    <h1 className='text-4xl md:text-8xl font-semibold text-center  text-primary'>Welcome to Gurujon</h1>
                    <h4 className='text-center text-3xl font-semibold'>Best learning environment since 2010</h4>
                </div>
                <p className='text-2xl font-medium text-center'>Check out fency slider</p>
                <Swiper
                    className='md:w-1/2 mt-8 hover:'
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
            <Footer></Footer>
        </div>
    );
};

export default Home;