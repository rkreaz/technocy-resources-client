import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('/reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='theme'>
            <div className='max-w-6xl mx-auto pb-20'>
                <div className='theme_text bg-[#F02757] p-20 rounded-xl'>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        {
                            reviews.map(review => <SwiperSlide
                                key={review._id}

                            >
                                <div className='flex justify-center items-center mx-20 gap-10'>
                                    <div className='w-1/2 container  h-60 rounded-xl'>
                                        <img className='w-60 mx-auto' src={review.image} alt="" />


                                    </div>

                                    <div className='w-1/2'>
                                        <h2 className='text-3xl font-bold text-[#D29B1C] mb-4 max-sm:text-xl'>{review.name}</h2>
                                        <Rating
                                            style={{ maxWidth: 150 }}
                                            value={review.rating}
                                            readOnly />
                                        <p className='max-sm:text-sm mt-5'>{review.details}</p>

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