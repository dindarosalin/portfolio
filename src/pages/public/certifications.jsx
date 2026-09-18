import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination } from 'swiper/modules'

import { getCertifications } from '../../services/certificationServices'

import CertificationCard from '../../components/certificationCard'
import SectionTitle from '../../components/sectionTitle'

const Certifications = () => {
    const [certifications, setCertifications] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const swiperRef = useRef(null)

    const [isBeginning, setIsBeginning] = useState(true)
    const [isEnd, setIsEnd] = useState(false)

    useEffect(() => {
        async function loadCertifications() {
            try {
                const data = await getCertifications()

                // Sort certifications from newest to oldest
                const certificationsDescending = [...data].sort(
                    (a, b) =>
                        new Date(b.issue_date) -
                        new Date(a.issue_date)
                )

                setCertifications(certificationsDescending)

                console.log(
                    '📜 Certifications dari Supabase:',
                    certificationsDescending
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

    const updateSliderState = (swiper) => {
        setIsBeginning(swiper.isBeginning)
        setIsEnd(swiper.isEnd)
    }

    const handleSwiperInit = (swiper) => {
        swiperRef.current = swiper
        updateSliderState(swiper)
    }

    const handlePrevious = () => {
        swiperRef.current?.slidePrev()
    }

    const handleNext = () => {
        swiperRef.current?.slideNext()
    }

    return (
        <section
            id="certifications"
            className="
                mx-auto
                max-w-content
                px-6
                py-16
                font-body
                sm:px-8
                lg:px-10
            "
        >
            <SectionTitle
                title="Certifications"
                subtitle="Certificates and achievements I have earned"
            />

            {/* Loading */}
            {loading && (
                <div className="mt-10 text-center">
                    <p className="text-sm text-muted">
                        Loading certifications...
                    </p>
                </div>
            )}

            {/* Error */}
            {!loading && error && (
                <div className="mt-10 text-center">
                    <p className="text-sm text-muted">
                        Failed to load certifications.
                    </p>
                </div>
            )}

            {/* Certifications */}
            {!loading && !error && (
                <div className="relative mt-10">

                    {/* Previous Button */}
                    <button
                        type="button"
                        onClick={handlePrevious}
                        disabled={isBeginning}
                        aria-label="Previous certification"
                        className="
                            absolute
                            left-0
                            top-1/2
                            z-10
                            hidden
                            h-10
                            w-10
                            -translate-x-1/2
                            -translate-y-1/2
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-border
                            bg-surface/90
                            text-pink-dark
                            shadow-soft
                            backdrop-blur-sm
                            transition
                            duration-300
                            hover:bg-pink-light
                            focus:outline-none
                            focus:ring-2
                            focus:ring-pink-primary
                            disabled:cursor-not-allowed
                            disabled:opacity-30
                            sm:flex
                        "
                    >
                        ←
                    </button>

                    <Swiper
                        onSwiper={handleSwiperInit}
                        onSlideChange={updateSliderState}
                        onResize={updateSliderState}
                        slidesPerView={1}
                        spaceBetween={16}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
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

                    {/* Next Button */}
                    <button
                        type="button"
                        onClick={handleNext}
                        disabled={isEnd}
                        aria-label="Next certification"
                        className="
                            absolute
                            right-0
                            top-1/2
                            z-10
                            hidden
                            h-10
                            w-10
                            translate-x-1/2
                            -translate-y-1/2
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-border
                            bg-surface/90
                            text-pink-dark
                            shadow-soft
                            backdrop-blur-sm
                            transition
                            duration-300
                            hover:bg-pink-light
                            focus:outline-none
                            focus:ring-2
                            focus:ring-pink-primary
                            disabled:cursor-not-allowed
                            disabled:opacity-30
                            sm:flex
                        "
                    >
                        →
                    </button>
                </div>
            )}
        </section>
    )
}

export default Certifications