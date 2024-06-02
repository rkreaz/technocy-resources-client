import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import './testimonial.css'
import imageIcon from '../../../assets/icon/profile.png'

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://technocy-resources-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className=''>
            <div className='max-w-6xl mx-auto'>
                <div className=' bg-[#F1F3F8] lg:p-20 md:pt-10  rounded-xl'>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        {
                            reviews.map(review => <SwiperSlide
                                key={review._id}

                            >
                                <div className='flex justify-center items-center lg:mx-20 max-md:mx-12  gap-5 max-sm:pt-24 max-md:pt-20 md:p-10 max-sm:pb-24 max-md:pb-20'>
                                    <div className='w-1/2'>
                                        <img className='w-60 h-60 max-sm:w-40 max-sm:h-40 rounded-full' src={review?.image ? review.image : imageIcon} alt="" />


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
        </div>
    );
};

export default Testimonial;