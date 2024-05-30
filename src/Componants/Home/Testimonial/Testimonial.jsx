import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import useAuth from '../../Hooks/useAuth';
import './testimonial.css'

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    const {user} = useAuth()
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className=''>
            <div className='max-w-6xl mx-auto'>
                <div className=' bg-[#F1F3F8] lg:p-20 md:pt-10 rounded-xl'>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        {
                            reviews.map(review => <SwiperSlide
                                key={review._id}

                            >
                                <div className='flex justify-center items-center lg:mx-20 max-md:mx-12  gap-5 max-sm:pt-24 max-md:pt-20 md:p-10'>
                                    <div className='w-1/2'>
                                        <img className='lg:w-52 lg:h-52 max-md:w-40 max-md:h-40 md:w-40 md:h-40 mx-auto rounded-xl' src={review?.image ? review.image : user?.photoURL} alt="" />


                                    </div>

                                    <div className='w-1/2 lg:space-y-5 max-sm:space-y-1 md:space-y-3'>
                                        <h2 className='text-3xl font-bold text-[#F02757]  max-sm:text-xl'>{review.name}</h2>
                                        <Rating
                                            style={{ maxWidth: 150 }}
                                            value={review.rating}
                                            readOnly />
                                        <p className='max-sm:text-sm '>{review.details}</p>

                                    </div>
                                </div>


                            </SwiperSlide>
                            )
                        }
                    </Swiper>

                </div>
            </div>
            <p className='border-t-2 border-base-200 mt-5'></p>
        </div>
    );
};

export default Testimonial;