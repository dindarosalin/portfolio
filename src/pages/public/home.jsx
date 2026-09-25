import { useEffect, useState } from 'react'

import { getProfile } from '../../services/profileServices'

import {
    getProjectCount,
    getExperienceCount,
    getCertificationCount,
    getYearsExperience,
} from '../../services/statisticServices'

import { getTools } from '../../services/toolServices'

import Button from '../../components/button'
import StatCard from '../../components/statCard'
import ToolIcon from '../../components/toolIcon'

import {
    faGithub,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
    const [profile, setProfile] = useState(null)

    const [stats, setStats] = useState({
        projects: 0,
        experiences: 0,
        yearsExperience: 0,
        certifications: 0,
    })

    const [tools, setTools] = useState([])

    const [error, setError] = useState(null)

    useEffect(() => {
        async function loadProfile() {
            try {
                const data = await getProfile()
                setProfile(data)
            } catch (err) {
                console.error(
                    'Failed to load profile:',
                    err
                )

                setError(err.message)
            }
        }

        loadProfile()
    }, [])

    useEffect(() => {
        async function loadTools() {
            try {
                const data = await getTools()
                setTools(data)
            } catch (err) {
                console.error(
                    'Failed to load tools:',
                    err
                )
            }
        }

        loadTools()
    }, [])

    useEffect(() => {
        async function loadStats() {
            try {
                const [
                    projects,
                    experiences,
                    yearsExperience,
                    certifications,
                ] = await Promise.all([
                    getProjectCount(),
                    getExperienceCount(),
                    getYearsExperience(),
                    getCertificationCount(),
                ])

                setStats({
                    projects,
                    experiences,
                    yearsExperience,
                    certifications,
                })
            } catch (err) {
                console.error(
                    'Failed to load statistics:',
                    err
                )
            }
        }

        loadStats()
    }, [])

    if (error) {
        return (
            <section
                id="home"
                className="
                    mx-auto
                    flex
                    min-h-screen
                    max-w-content
                    items-center
                    px-6
                    sm:px-8
                    lg:px-10
                "
            >
                <p className="text-muted">
                    Failed to load profile.
                </p>
            </section>
        )
    }

    if (!profile) {
        return (
            <section
                id="home"
                className="
                    mx-auto
                    flex
                    min-h-screen
                    max-w-content
                    items-center
                    px-6
                    sm:px-8
                    lg:px-10
                "
            >
                <p className="text-muted">
                    Loading...
                </p>
            </section>
        )
    }

    return (
        <section
            id="home"
            className="
                mx-auto
                flex
                min-h-screen
                max-w-content
                flex-col
                justify-center
                px-6
                py-16
                sm:px-8
                sm:py-20
                lg:px-10
                lg:py-24
            "
        >
            {/* Introduction */}
            <div className="w-full">

                <p className=" font-body text-base text-muted sm:text-lg">
                    Hello B!
                </p>

                <h1
                    className=" mt-2 max-w-4xl font-heading text-4xl font-bold leading-tight text-pink-dark sm:text-5xl md:text-6xl lg:text-h1 lg:leading-h1"
                >
                    My name is {profile.name}.
                </h1>

                <p
                    className="
                        mt-5
                        max-w-3xl
                        font-body
                        text-lg
                        leading-relaxed
                        text-text
                        sm:text-xl
                        md:text-2xl
                    "
                >
                    {profile.headline}
                </p>

                {/* Social Media */}
                <div
                    className="
                        mt-6
                        flex
                        flex-wrap
                        gap-3
                    "
                >
                    {profile.github_url && (
                        <Button
                            href={profile.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                            <span>
                                View My GitHub
                            </span>
                        </Button>
                    )}

                    {profile.linkedin_url && (
                        <Button
                            href={profile.linkedin_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                            <span>
                                View My LinkedIn
                            </span>
                        </Button>
                    )}
                </div>
            </div>

            {/* Statistics */}
            <div
                className="
                    mt-10
                    grid
                    w-full
                    grid-cols-2
                    gap-3
                    sm:mt-12
                    sm:gap-4
                    lg:grid-cols-4
                "
            >
                <StatCard
                    number={stats.projects}
                    label="Projects"
                    description="Projects I've worked on."
                />

                <StatCard
                    number={stats.experiences}
                    label="Experiences"
                    description="Professional experiences I've gained."
                />

                <StatCard
                    number={stats.yearsExperience}
                    label="Years Experience"
                    description="Years of professional experience."
                />

                <StatCard
                    number={stats.certifications}
                    label="Certifications"
                    description="Certifications I've earned."
                />
            </div>

            {/* Tools */}
            <div
                className="
                    mt-8
                    w-full
                    sm:mt-10
                "
            >
                <p
                    className="
                        mb-3
                        text-center
                        font-body
                        text-sm
                        font-medium
                        text-muted
                        sm:text-base
                    "
                >
                    Tools I Use
                </p>

                <div
                    className="
                        flex
                        flex-wrap
                        justify-center
                        gap-2
                        sm:gap-3
                    "
                >
                    {tools.map((tool) => (
                        <ToolIcon
                            key={tool.id}
                            name={tool.name}
                            iconUrl={tool.icon_url}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Home
