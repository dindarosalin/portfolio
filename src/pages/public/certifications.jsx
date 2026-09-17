import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Pagination } from 'swiper/modules'

import { getCertifications } from '../../services/certificationServices'
import CertificationCard from '../../components/certificationCard'

const Certifications = () => {
    const [certifications, setCertifications] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function loadCertifications() {
            try {
                const data = await getCertifications()

                setCertifications(data)

                console.log(
                    '📜 Certifications dari Supabase:',
                    data
                )
            } catch (err) {
                console.error(
                    '❌ Gagal mengambil certifications:',
                    err
                )

                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        loadCertifications()
    }, [])

    if (loading) {
        return (
            <section className="container pt-16">
                <p className="text-center">
                    Loading certifications...
                </p>
            </section>
        )
    }

    if (error) {
        return (
            <section className="container pt-16">
                <p className="text-center">
                    Failed to load certifications.
                </p>
            </section>
        )
    }

    return (
        <section className="container pt-16">

            {/* Section Header */}
            <div className="mb-6 text-center">

                <p className="font-medium text-lg source-sans text-red-dark dark:text-white">
                    Certificates and Achievements
                </p>

                <h1 className="playfair-display font-bold text-3xl">
                    Certifications
                </h1>

            </div>


            {/* Certifications */}
            <Swiper
                slidesPerView={1}
                spaceBetween={16}
                navigation
                pagination={{
                    clickable: true,
                }}
                modules={[
                    Pagination,
                    Navigation,
                ]}
                className="certificationSwiper pb-10"
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 16,
                    },

                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },

                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                    },
                }}
            >
                {certifications.map((certificate) => (
                    <SwiperSlide
                        key={certificate.id}
                        className="h-auto"
                    >
                        <CertificationCard
                            certificate={certificate}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    )
}

export default Certifications