import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Navigation, Pagination } from 'swiper/modules';

const certifications = () => {
    const certificateData = [
        {
            id: 1,
            name: 'Menjadi Front-End Web Developer Expert',
            instansi: 'Dicoding Academy',
            publishDate: '2023',
            expDate: '*',
            credentialUrl: 'https://www.dicoding.com/certificates/2VX36ENEVXYQ',
            instansiImg: 'https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/certificate_logo.png',
        },
        {
            id: 2,
            name: 'Belajar Fundamental Aplikasi Web dengan React',
            instansi: 'Dicoding Academy',
            publishDate: '2023',
            expDate: '*',
            credentialUrl: 'https://www.dicoding.com/certificates/53XEYWYQ9PRN',
            instansiImg: 'https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/certificate_logo.png',
        },
        {
            id: 3,
            name: 'Junior Web Developer',
            instansi: 'BNSP',
            publishDate: '2023',
            expDate: '2026',
            credentialUrl: 'https://drive.google.com/file/d/16nirxSnIg-mYhRIdMSywxObth_rru4A_/view',
            instansiImg: 'https://bnsp.go.id/assets/landing-page/img/logo.png',
        },
        {
            id: 4,
            name: 'Junior Graphic Designer',
            instansi: 'BNSP',
            publishDate: '2022',
            expDate: '2025',
            credentialUrl: 'https://drive.google.com/file/d/16vArotl0IEqtaT1pzmZv1S1Ah6sO-Jol/view',
            instansiImg: 'https://bnsp.go.id/assets/landing-page/img/logo.png',
        },
        {
            id: 5,
            name: 'Kompetensi Keahlian Teknik Komputer dan Jaringan',
            instansi: 'BNSP',
            publishDate: '2021',
            expDate: '2024',
            credentialUrl: 'https://drive.google.com/file/d/1OWPOZwF4rulda2vdkPQIHwBBOeK246Fh/view',
            instansiImg: 'https://bnsp.go.id/assets/landing-page/img/logo.png',
        }
    ]

    return (
        <div className='container pt-16'>
            <div className="w-full mt-5 md:mt-1 lg:mt-1">
                <div className='mb-4'>
                    <p className="font-medium text-lg source-sans text-red-dark dark:text-white">Certificates and Achivements</p>
                    <h1 className="playfair-display font-bold text-3xl text-center">Certifications</h1>
                </div>
                <div className='flex items-stretch'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        navigation={true}
                        pagination={true}
                        loop={true}
                        className='certificationSwiper'
                        modules={[
                            Pagination,
                            Navigation
                        ]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        keyboard={{
                            enabled: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                        }}
                    >
                        <div className="mt-4">
                            {certificateData.map((certificate) => (
                                <SwiperSlide key={certificate.id}>
                                    <div className="bg-pink-light p-4 rounded-md text-center dark:text-red-dark">
                                        <div className="block relative flex justify-center">
                                            <img src={certificate.instansiImg} alt="" className='w-42 rounded-md p-3' />
                                        </div>
                                        <div className="text-center">
                                            <h2 className="capitalize">{certificate.instansi}</h2>
                                            <p className="font-medium capitalize">{certificate.name}</p>
                                            <p className="font-medium mt-1"><span className="italic font-normal">{certificate.publishDate} - {certificate.expDate}</span></p>
                                        </div>
                                        <div className="mt-3">
                                            <a href={certificate.credentialUrl} target="_blank" rel="noopener noreferrer" className="hover:shadow-lg transition cursor-pointer duration-500 ease-in-out shadow-sm outline-offset-2 rounded-md py-2 px-3 mb-2 text-sm bg-pink-darker text-white">
                                                <FontAwesomeIcon icon={faInfoCircle} /> Credential
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default certifications