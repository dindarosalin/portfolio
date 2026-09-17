import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Navigation, Pagination } from 'swiper/modules'

import { getCertifications } from '../../services/certificationServices'

const Certifications = () => {
    const [certifications, setCertifications] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function loadCertifications() {
            try {
                const data = await getCertifications()

                setCertifications(data)

                console.log('📜 Certifications dari Supabase:', data)
            } catch (err) {
                console.error('❌ Gagal mengambil certifications:', err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        loadCertifications()
    }, [])

    const formatIssueDate = (date) => {
        if (!date) return ''

        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
        })
    }

    if (loading) {
        return (
            <section className="container pt-16">
                <p className="text-center">Loading certifications...</p>
            </section>
        )
    }

    if (error) {
        return (
            <section className="container pt-16">
                <p className="text-center">Failed to load certifications.</p>
            </section>
        )
    }

    return (
        <div className="container pt-16">
            <div className="w-full mt-5 md:mt-1 lg:mt-1">
                <div className="mb-4">
                    <p className="font-medium text-lg source-sans text-red-dark dark:text-white">
                        Certificates and Achivements
                    </p>

                    <h1 className="playfair-display font-bold text-3xl text-center">
                        Certifications
                    </h1>
                </div>

                <div className="flex items-stretch">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        navigation={true}
                        pagination={true}
                        loop={true}
                        className="certificationSwiper"
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
                            {certifications.map((certificate) => (
                                <SwiperSlide key={certificate.id}>
                                    <div className="light:bg-pink-light shadow-md p-4 rounded-md text-center dark:text-white dark:border dark:border-pink-darker">

                                        <div className="block relative flex justify-center">
                                            <div className="w-42 h-24 rounded-md p-3 flex items-center justify-center border">
                                                <span className="text-sm font-medium">
                                                    {certificate.issuer}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <h2 className="capitalize">
                                                {certificate.issuer}
                                            </h2>

                                            <p className="font-medium capitalize">
                                                {certificate.name}
                                            </p>

                                            <p className="font-medium mt-1">
                                                <span className="italic font-normal">
                                                    {formatIssueDate(certificate.issue_date)}
                                                </span>
                                            </p>
                                        </div>

                                        {certificate.credential_url && (
                                            <div className="my-3">
                                                <a
                                                    href={certificate.credential_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:shadow-lg transition cursor-pointer duration-500 ease-in-out shadow-sm outline-offset-2 rounded-md py-2 px-3 mb-2 text-sm bg-pink-darker text-white"
                                                >
                                                    <FontAwesomeIcon icon={faInfoCircle} /> Credential
                                                </a>
                                            </div>
                                        )}
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

export default Certifications