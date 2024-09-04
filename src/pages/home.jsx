import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCreative } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const home = () => {
    return (
        <section id="home" className="pt-16 container">
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <Swiper
                        grabCursor={true}
                        effect={'creative'}
                        creativeEffect={{
                          prev: {
                            shadow: false,
                            translate: ['-80%', 0, -200],
                          },
                          next: {
                            shadow: false,
                            translate: ['80%', 0, -200],
                          },
                        }}
                        modules={[EffectCreative]}
                        className="mySwiper2"
                    >
                        <SwiperSlide>
                            <img src={"images/galleries/profile-pink.jpg"} alt="" className="h-40 md:h-60 w-auto rounded-md" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={"images/galleries/profile-1.jpg"} alt="" className="h-40 md:h-60 w-auto rounded-md" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={"images/galleries/profile-2.jpg"} alt="" className="h-40 md:h-60 w-auto rounded-md" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={"images/galleries/profile-3.jpg"} alt="" className="h-40 md:h-60 w-auto rounded-md" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={"images/galleries/profile-4.jpg"} alt="" className="h-40 md:h-60 w-auto rounded-md" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={"images/galleries/profile-5.jpg"} alt="" className="h-40 md:h-60 w-auto rounded-md" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={"images/galleries/profile-6.jpg"} alt="" className="h-40 md:h-60 w-auto rounded-md" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="w-full text-start md:w-2/4 m-6">
                    <h1 className="text-h2 md:text-h1 font-bold text-heading2 md:text-heading1 my-heading leading-h2 md:leading-h1 text-left text-pink-darker playfair-display mb-4">
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