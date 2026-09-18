import { useEffect, useState } from 'react'
import { getProfile } from '../../services/profileServices'
import { getEducation } from '../../services/educationServices'

const About = () => {
    const [profile, setProfile] = useState(null)
    const [education, setEducation] = useState([])
    const [error, setError] = useState(null)
    const [educationError, setEducationError] = useState(null)

    useEffect(() => {
        async function loadProfile() {
            try {
                const data = await getProfile()
                setProfile(data)
            } catch (err) {
                console.error('Failed to load profile:', err)
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
                console.error('Failed to load education:', err)
                setEducationError(err.message)
            }
        }

        loadEducation()
    }, [])

    if (error) {
        return (
            <section
                id="about"
                className="mx-auto max-w-content px-6 py-16 sm:px-8 lg:px-10"
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
                className="mx-auto max-w-content px-6 py-16 sm:px-8 lg:px-10"
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
            className="mx-auto max-w-content px-6 py-16 sm:px-8 lg:px-10"
        >
            <div className="grid gap-10 md:grid-cols-2">

                {/* About */}
                <div>
                    <h2
                        className="
                            font-heading
                            text-h3
                            font-bold
                            leading-h3
                            text-pink-dark
                        "
                    >
                        Hi, I am {profile.name},
                    </h2>

                    <p
                        className="
                            mt-5
                            font-body
                            text-lg
                            leading-relaxed
                            text-text
                        "
                    >
                        {profile.bio}
                    </p>
                </div>

                {/* Profile & Education */}
                <div className="space-y-6">

                    {/* Profile */}
                    <div>
                        <h3
                            className="
                                mb-3
                                font-heading
                                text-h5
                                font-bold
                                text-text
                            "
                        >
                            Profile
                        </h3>

                        <div className="overflow-hidden rounded-md border border-border shadow-soft">
                            <table className="w-full text-left">
                                <tbody>
                                    <tr className="border-b border-border">
                                        <th className="w-1/3 px-4 py-3 font-medium text-muted">
                                            Headline
                                        </th>
                                        <td className="px-4 py-3 text-text">
                                            {profile.headline}
                                        </td>
                                    </tr>

                                    <tr className="border-b border-border">
                                        <th className="px-4 py-3 font-medium text-muted">
                                            Location
                                        </th>
                                        <td className="px-4 py-3 text-text">
                                            {profile.location}
                                        </td>
                                    </tr>

                                    <tr>
                                        <th className="px-4 py-3 font-medium text-muted">
                                            Email
                                        </th>
                                        <td className="px-4 py-3 text-text break-words">
                                            {profile.email}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Education */}
                    <div>
                        <h3
                            className="
                                mb-3
                                font-heading
                                text-h5
                                font-bold
                                text-text
                            "
                        >
                            Education
                        </h3>

                        <div className="overflow-hidden rounded-md border border-border shadow-soft">
                            <table className="w-full text-left">
                                <tbody>
                                    {educationError ? (
                                        <tr>
                                            <td className="px-4 py-3 text-muted">
                                                Failed to load education.
                                            </td>
                                        </tr>
                                    ) : education.length === 0 ? (
                                        <tr>
                                            <td className="px-4 py-3 text-muted">
                                                No education data available.
                                            </td>
                                        </tr>
                                    ) : (
                                        education.map((item) => (
                                            <tr
                                                key={item.id}
                                                className="border-b border-border last:border-b-0"
                                            >
                                                <th className="w-1/3 px-4 py-3 font-medium text-muted">
                                                    University
                                                </th>

                                                <td className="px-4 py-3 text-text">
                                                    {item.institution}
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About