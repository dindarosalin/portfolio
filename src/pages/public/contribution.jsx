import { useEffect, useState } from 'react'

import { getSkills } from '../../services/skillServices'

import GithubContribution from '../../components/githubContribution'
import SkillTag from '../../components/skillTag'

const Contribution = () => {
    const [skills, setSkills] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function loadSkills() {
            try {
                const data = await getSkills()

                setSkills(data)

                console.log(
                    '🛠️ Skills dari Supabase:',
                    data
                )
            } catch (err) {
                console.error(
                    '❌ Gagal mengambil skills:',
                    err
                )

                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        loadSkills()
    }, [])

    return (
        <section
            id="contribution"
            className="w-full font-body"
        >
            {/* Section Title */}
            <div
                className="
                    mx-auto
                    max-w-content
                    sm:px-8
                    lg:px-10
                "
            >
                
            </div>

            {/* Full Width Background */}
            <div className="w-full bg-pink-primary">
                <div
                    className="container mx-auto py-8 font-body sm:px-8 lg:px-10"
                >
                    {/* GitHub Contributions */}
                    <div>
                        <div className="rounded-md p-2 text-center">
                            <h2 className="font-heading text-3xl font-bold text-text">
                                Contributions & Skills
                            </h2>
                                <h3 className="mt-1 font-body text-lg text-muted">
                                   My GitHub activity and technical skills
                                </h3>
                        </div>

                        <div className="mt-6">
                            <GithubContribution />
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="mt-10">
                        {loading && (
                            <p className="mt-5 text-sm text-surface/70">
                                Loading skills...
                            </p>
                        )}

                        {!loading && error && (
                            <p className="mt-5 text-sm text-surface/70">
                                Failed to load skills.
                            </p>
                        )}

                        {!loading && !error && (
                            <div
                                className="
                                    mt-5
                                    flex
                                    flex-wrap
                                    gap-2
                                "
                            >
                                {skills.map((skill) => (
                                    <SkillTag
                                        key={skill.id}
                                        name={skill.name}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contribution