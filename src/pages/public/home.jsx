import { useEffect, useState } from 'react'

import { getProfile } from '../../services/profileServices'

import Button from '../../components/button'

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
    const [profile, setProfile] = useState(null)
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

    if (error) {
        return (
            <section
                id="home"
                className="mx-auto flex min-h-[80vh] max-w-content items-center px-6 sm:px-8 lg:px-10"
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
                className="mx-auto flex min-h-[80vh] max-w-content items-center px-6 sm:px-8 lg:px-10"
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
            className=" mx-auto flex min-h-[80vh] max-w-content items-center px-6 py-16 sm:px-8 lg:px-10"
        >
            <div className="w-full">

                {/* Introduction */}
                <div className="max-w-3xl">

                    <p
                        className=" font-body text-lg text-muted sm:text-xl"
                    >
                        Hello B!
                    </p>

                    <h1
                        className=" mt-2 font-heading text-4xl font-bold leading-tight text-pink-dark sm:text-5xl md:text-h1 md:leading-h1"
                    >
                        My name is {profile.name}.
                    </h1>

                    <p
                        className="
                            mt-5
                            font-body
                            text-xl
                            leading-relaxed
                            text-text
                            sm:text-2xl
                        "
                    >
                            {profile.headline}
                    </p>

                    {/* Social Media */}
                    <div
                        className="
                            mt-4
                            flex
                            justify-start
                            gap-2
                        "
                    >
                        <Button href={profile.github_url} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                            <span>View My GitHub</span>
                        </Button>
                        <Button href={profile.linkedin_url} target="_blank" rel="noopener noreferrer" className="ml-4">
                            <FontAwesomeIcon icon={faLinkedin} />
                            <span>View My LinkedIn</span>
                        </Button>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Home