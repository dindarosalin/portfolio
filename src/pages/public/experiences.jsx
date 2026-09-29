import { useEffect, useState } from 'react'

import { getExperiences } from '../../services/experienceServices'

import ExperienceCard from '../../components/experienceCard'
import SectionTitle from '../../components/sectionTitle'
import Button from '../../components/button'

import {
    faChevronDown,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Experiences = () => {
    const [experiences, setExperiences] = useState([])
    const [visibleExperiences, setVisibleExperiences] =
        useState(2)
    const [newExperienceIds, setNewExperienceIds] =
        useState([])

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

    const experiencesToShow =
        experiencesDescending.slice(
            0,
            visibleExperiences
        )

    const handleLoadMore = () => {
        const nextVisibleExperiences =
            experiencesDescending.slice(
                visibleExperiences,
                visibleExperiences + 2
            )

        setNewExperienceIds(
            nextVisibleExperiences.map(
                (experience) => experience.id
            )
        )

        setVisibleExperiences(
            visibleExperiences +
                nextVisibleExperiences.length
        )
    }

    return (
        <section
            id="experiences"
            className="container mx-auto px-6 py-16 font-body sm:px-8 lg:px-10"
        >
            <SectionTitle
                title="Experiences"
                subtitle="My Lastest Professional Experiences"
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
                <>
                    <div className="mt-10">
                        {experiencesToShow.map(
                            (experience, index) => {
                                const isNewExperience =
                                    newExperienceIds.includes(
                                        experience.id
                                    )

                                return (
                                    <div
                                        key={experience.id}
                                        className={
                                            isNewExperience
                                                ? 'animate-fade-in'
                                                : ''
                                        }
                                    >
                                        <ExperienceCard
                                            experience={
                                                experience
                                            }
                                            reverse={
                                                index % 2 !== 0
                                            }
                                            isLast={
                                                index ===
                                                experiencesToShow.length -
                                                    1
                                            }
                                        />
                                    </div>
                                )
                            }
                        )}
                    </div>

                    {/* Load More */}
                    {visibleExperiences <
                        experiencesDescending.length && (
                        <div className="mt-8 flex justify-center">
                            <Button
                                onClick={
                                    handleLoadMore
                                }
                            >
                                <span>
                                    Load More
                                </span>

                                <FontAwesomeIcon
                                    icon={
                                        faChevronDown
                                    }
                                />
                            </Button>
                        </div>
                    )}
                </>
            )}
        </section>
    )
}

export default Experiences