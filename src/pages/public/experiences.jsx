import { useEffect, useState } from 'react'

import { getExperiences } from '../../services/experienceServices'

import ExperienceCard from '../../components/experienceCard'

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
        (a, b) => b.id - a.id
    )

    if (loading) {
        return (
            <section
                id="experiences"
                className="my-7 container pt-16"
            >
                <p className="text-center">
                    Loading experiences...
                </p>
            </section>
        )
    }

    if (error) {
        return (
            <section
                id="experiences"
                className="my-7 container pt-16"
            >
                <p className="text-center">
                    Failed to load experiences.
                </p>
            </section>
        )
    }

    return (
        <section
            id="experiences"
            className="my-7 container pt-16"
        >
            <article className="text-center">

                <p className="font-medium text-xl source-sans text-red-dark dark:text-white">
                    Experiences
                </p>

                <h1 className="playfair-display font-bold text-3xl text-center text-pink-primary">
                    My Experiences
                </h1>

                <div className="flex justify-center">
                    <p className="w-full md:w-1/2 text-md">
                        Here are some of my most recent internship
                        and work experiences.
                    </p>
                </div>

            </article>

            <div className="mt-8">

                {experiencesDescending.map(
                    (experience, index) => (
                        <ExperienceCard
                            key={experience.id}
                            experience={experience}
                            reverse={index % 2 !== 0}
                        />
                    )
                )}

            </div>
        </section>
    )
}

export default Experiences