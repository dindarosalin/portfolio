import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const certifications = () => {
    const certificateData = [
        {
            id: 1,
            name: 'Menjadi Front-End Web Developer Expert',
            instansi: 'Dicoding Academy',
            publishDate: '2023',
            expDate: '*',
            credentialUrl: 'https://www.dicoding.com/certificates/2VX36ENEVXYQ',
            instansiImg: 'https://asset.brandfetch.io/idK1RDMSRY/idPamGvnsf.jpeg?updated=1681745888429',
        },
        {
            id: 2,
            name: 'Belajar Fundamental Aplikasi Web dengan React',
            instansi: 'Dicoding Academy',
            publishDate: '2023',
            expDate: '*',
            credentialUrl: 'https://www.dicoding.com/certificates/53XEYWYQ9PRN',
            instansiImg: 'https://asset.brandfetch.io/idK1RDMSRY/idPamGvnsf.jpeg?updated=1681745888429',
        },
        {
            id: 3,
            name: 'Junior Web Developer',
            instansi: 'BNSP',
            publishDate: '2023',
            expDate: '2026',
            credentialUrl: 'https://drive.google.com/file/d/16nirxSnIg-mYhRIdMSywxObth_rru4A_/view',
            instansiImg: 'https://bnsp.go.id/images/logo.png',
        },
        {
            id: 4,
            name: 'Junior Graphic Designer',
            instansi: 'BNSP',
            publishDate: '2022',
            expDate: '2025',
            credentialUrl: 'https://drive.google.com/file/d/16vArotl0IEqtaT1pzmZv1S1Ah6sO-Jol/view',
            instansiImg: 'https://bnsp.go.id/images/logo.png',
        },
        {
            id: 5,
            name: 'Kompetensi Keahlian Teknik Komputer dan Jaringan',
            instansi: 'BNSP',
            publishDate: '2021',
            expDate: '2024',
            credentialUrl: 'https://drive.google.com/file/d/1OWPOZwF4rulda2vdkPQIHwBBOeK246Fh/view',
            instansiImg: 'https://bnsp.go.id/images/logo.png',
        }
    ]

    return (
        <div>
            <div className="w-full mt-5 md:mt-1 lg:mt-1">
                <h1 className="text-xl text-start m-5 mt-0">Certificate</h1>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    navigation={true}
                    loop={true}
                    className='certificationSwiper'
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    keyboard={{
                        enabled: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                >
                    <div className="mt-4">
                        {certificateData.map((certificate) => (
                            <SwiperSlide key={certificate.id}>
                                <div className="p-3 m-5 flex flex-row justify-between gap-5 rounded">
                                    <div className="block relative">
                                        <img src={certificate.instansiImg} alt="" className='w-20' />
                                    </div>
                                    <div className="text-start">
                                        <h2 className="font-gold font-normal capitalize">{certificate.instansi} + 
                                            <a href={certificate.credentialUrl} target="_blank" rel="noopener noreferrer"> {certificate.name} </a>
                                        </h2>
                                        <p className="font-medium">
                                            <a href="" target="_blank" rel="noopener noreferrer" className="font-normal hover:text-normal italic decoration-white hover:font-medium transition ease-in-out duration-300 mt-3 underline underline-1"></a>
                                        </p>
                                    </div>
                                    <div className="flex justify-end">
                                        <p className="font-medium mt-1"><span className="italic font-normal">{certificate.publishDate} - {certificate.expDate}</span></p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>
        </div>
    )
}

export default certifications