import { useEffect, useState } from 'react'

import { getExperiences } from '../../services/experienceServices'

import ExperienceCard from '../../components/experienceCard'
import SectionTitle from '../../components/sectionTitle'

const Experiences = () => {
    const [experiences, setExperiences] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function loadExperiences() {
            try {
                const data = await getExperiences()

                setExperiences(data)

                console.log(
                    '💼 Experiences dari Supabase:',
                    data
                )
            } catch (err) {
                console.error(
                    '❌ Gagal mengambil experiences:',
                    err
                )

                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        loadExperiences()
    }, [])

    const experiencesDescending = [...experiences].sort(
        (a, b) =>
            new Date(b.start_date) -
            new Date(a.start_date)
    )

    return (
        <section
            id="experiences"
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
                title="Experiences"
                subtitle="My professional and learning experiences"
            />

            {/* Loading */}
            {loading && (
                <div className="mt-10 text-center">
                    <p className="text-sm text-muted">
                        Loading experiences...
                    </p>
                </div>
            )}

            {/* Error */}
            {!loading && error && (
                <div className="mt-10 text-center">
                    <p className="text-sm text-muted">
                        Failed to load experiences.
                    </p>
                </div>
            )}

            {/* Experiences */}
            {!loading && !error && (
                <div className="mt-10">
                    {experiencesDescending.map(
                        (experience, index) => (
                            <ExperienceCard
                                key={experience.id}
                                experience={experience}
                                reverse={index % 2 !== 0}
                                isLast={index === experiencesDescending.length - 1}
                            />
                        )
                    )}
                </div>
            )}
        </section>
    )
}

export default Experiences