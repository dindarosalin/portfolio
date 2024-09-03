import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const home = () => {
    return (
        <section id="home" className="pt-16 container">
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <Swiper
                        // effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={"profile-pink.jpg"} alt="" className="h-40 md:h-60 w-auto rounded-md" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={"profile-pink.jpg"} alt="" className="h-40 md:h-60 w-auto rounded-md" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={"profile-pink.jpg"} alt="" className="h-40 md:h-60 w-auto rounded-md" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={"profile-pink.jpg"} alt="" className="h-40 md:h-60 w-auto rounded-md" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={"profile-pink.jpg"} alt="" className="h-40 md:h-60 w-auto rounded-md" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="w-full text-start md:w-2/4 m-6">
                    <h1 className="text-h1 font-bold text-heading1 my-heading leading-h1 text-left text-pink-darker playfair-display mb-4">
                        Hello There! My <br />name is Dinda Rosalin. <br /> I’m a Student
                    </h1>
                    <button>
                        <a
                            target="_blank"
                            href="https://www.instagram.com/dindarosalin"
                            className="flex flex-row gap-1 justify-center items-center font-medium hover:shadow-lg transition cursor-pointer duration-500 ease-in-out shadow-sm outline-offset-2 rounded-md py-2 px-3 mb-2 text-sm bg-pink-darker text-white">
                            <FontAwesomeIcon icon={faInstagram} className='h-4 w-4' /> <p>Lets be moots</p>
                        </a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default home