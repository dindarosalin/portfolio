import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

const home = () => {
    return (
        <section id="home" className='pt-16'>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="md:w-1/4 me-6">
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={"profile-pink.jpg"} alt="" className="h-80 rounded-md" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={"profile-pink.jpg"} alt="" className="h-80 rounded-md" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={"profile-pink.jpg"} alt="" className="h-80 rounded-md" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={"profile-pink.jpg"} alt="" className="h-80 rounded-md" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={"profile-pink.jpg"} alt="" className="h-80 rounded-md" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="md:w-2/4 text-start m-6">
                    <h1 className="text-h1 font-bold text-heading1 my-heading leading-h1 text-left text-pink-darker playfair-display mb-4">Hello There! My <br />name is Dinda Rosalin. <br /> I’m a Student</h1>
                    <a href="" className="bg-pink-primary p-2 rounded-md text-red-dark cursor-pointer text-start">Button</a>
                </div>
            </div>
        </section>
    )
}

export default home