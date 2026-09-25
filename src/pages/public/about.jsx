import { useEffect, useState } from 'react'

import { getProfile } from '../../services/profileServices'
import { getEducation } from '../../services/educationServices'

import SectionTitle from '../../components/sectionTitle'
import Button from '../../components/button'

import {
    faDownload,
    faEye,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
    const [profile, setProfile] = useState(null)
    const [education, setEducation] = useState([])
    const [error, setError] = useState(null)
    const [educationError, setEducationError] = useState(null)
    const [isCvOpen, setIsCvOpen] = useState(false)

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
        async function loadEducation() {
            try {
                const data = await getEducation()
                setEducation(data)
            } catch (err) {
                console.error(
                    'Failed to load education:',
                    err
                )

                setEducationError(err.message)
            }
        }

        loadEducation()
    }, [])

    if (error) {
        return (
            <section
                id="about"
                className=" mx-auto max-w-content px-6 py-16 sm:px-8 lg:px-10"
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
                id="about"
                className=" mx-auto max-w-content px-6 py-16 sm:px-8 lg:px-10"
            >
                <p className="text-muted">
                    Loading...
                </p>
            </section>
        )
    }

    return (
        <section
            id="about"
            className=" mx-auto max-w-content px-6 py-16 font-body sm:px-8 lg:px-10"
        >
            <SectionTitle
                title="About Me"
                subtitle="A little bit about me"
            />

            <div
                className=" mt-10 grid items-center gap-10 md:grid-cols-2 md:gap-14"
            >
                {/* Profile Image */}
                <div className="flex justify-center">
                    {profile.profile_image_url ? (
                        <img
                            src={profile.profile_image_url}
                            alt={profile.name}
                            className=" h-64 w-64 rounded-md object-cover shadow-soft md:h-80 md:w-80"
                        />
                    ) : (
                        <div
                            className=" flex h-64 w-64 items-center justify-center rounded-md border border-border bg-pink-light text-sm text-muted md:h-80 md:w-80"
                        >
                            No profile image
                        </div>
                    )}
                </div>

                {/* About Content */}
                <div>
                    <h2
                        className=" font-heading text-h3 font-bold leading-h3 text-pink-dark"
                    >
                        Hi, I am {profile.name},
                    </h2>

                    <p
                        className=" mt-5 font-body text-lg leading-relaxed text-text"
                    >
                        {profile.bio}
                    </p>

                    {/* Profile Information */}
                    <div
                        className=" mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3"
                    >
                        {/* Headline */}
                        <div
                            className=" rounded-md border border-border bg-surface p-4 shadow-soft"
                        >
                            <p
                                className=" text-xs font-medium text-muted"
                            >
                                Headline
                            </p>

                            <p
                                className=" mt-1 text-sm font-medium text-text"
                            >
                                {profile.headline}
                            </p>
                        </div>

                        {/* Location */}
                        <div
                            className=" rounded-md border border-border bg-surface p-4 shadow-soft"
                        >
                            <p
                                className=" text-xs font-medium text-muted"
                            >
                                Location
                            </p>

                            <p
                                className="mt-1 text-sm font-medium text-text"
                            >
                                {profile.location}
                            </p>
                        </div>

                        {/* Education */}
                        <div
                            className="rounded-md border border-border bg-surface p-4 shadow-soft"
                        >
                            <p
                                className=" text-xs font-medium text-muted"
                            >
                                Education
                            </p>

                            {educationError ? (
                                <p className="mt-1 text-sm text-muted">
                                    Not available
                                </p>
                            ) : education.length === 0 ? (
                                <p className="mt-1 text-sm text-muted">
                                    Not available
                                </p>
                            ) : (
                                <p
                                    className=" mt-1 text-sm font-medium text-text"
                                >
                                    {education[0].institution}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="mt-5 flex gap-2">
                        <Button
                            href={profile.cv_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faDownload} />
                            <span>Download My CV</span>
                        </Button>
                        <Button
                            onClick={() => setIsCvOpen(true)}
                        >
                            <FontAwesomeIcon icon={faEye} />
                            <span>View My CV</span>
                        </Button>
                    </div>
                </div>
            </div>

            {/* CV Modal */}
            {isCvOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6"
                    onClick={() => setIsCvOpen(false)}
                >
                    <div
                        className="relative flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-lg bg-surface shadow-soft"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between border-b border-border px-5 py-4">
                            <h3 className="font-heading text-lg font-bold text-pink-dark">
                                Dinda Rosalin Curiculum Vitae
                            </h3>

                            <button
                                type="button"
                                onClick={() => setIsCvOpen(false)}
                                className="text-2xl text-muted transition hover:text-pink-dark"
                                aria-label="Close CV"
                            >
                                &times;
                            </button>
                        </div>

                        {/* PDF */}
                        <div className="min-h-0 flex-1">
                            <iframe
                                src={profile.cv_url}
                                title="Dinda Rosalin CV"
                                className="h-full w-full border-0"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default About