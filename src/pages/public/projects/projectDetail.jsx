import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { getProjectBySlug } from '../../../services/projectServices'

import Button from '../../../components/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const ProjectDetail = () => {
    const { slug } = useParams()

    const [project, setProject] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function loadProject() {
            try {
                const data = await getProjectBySlug(slug)

                setProject(data)
            } catch (err) {
                console.error(
                    '❌ Gagal mengambil project:',
                    err
                )

                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        loadProject()
    }, [slug])

    if (loading) {
        return (
            <section
                className="container mx-auto px-6 py-16 font-body sm:px-8 lg:px-10"
            >
                <p className="text-center text-sm text-muted">
                    Loading project...
                </p>
            </section>
        )
    }

    if (error || !project) {
        return (
            <section
                className="container mx-auto px-6 py-16 font-body sm:px-8 lg:px-10"
            >
                <p className="text-center text-sm text-muted">
                    Project not found.
                </p>

                
                <div className="mt-6 flex justify-center">
                    <Link
                        to="/#projects"
                        className="
                            inline-flex
                            items-center
                            text-sm
                            text-muted
                            transition-colors
                            hover:text-pink-dark
                        "
                    >
                        ← Back to Projects
                    </Link>
                </div>
            </section>
        )
    }

    return (
        <section
            id="project-detail"
            className="container mx-auto px-6 py-16 font-body sm:px-8 lg:px-10"
        >
            {/* Back */}
            <Link
                to="/#projects"
                className="
                    inline-flex
                    items-center
                    text-sm
                    text-muted
                    transition-colors
                    hover:text-pink-dark
                "
            >
                ← Back to Projects
            </Link>

            {/* Header */}
            <div className="mt-8">
                <p
                    className="
                        text-sm
                        font-medium
                        uppercase
                        tracking-wide
                        text-pink-primary
                    "
                >
                    {project.category}
                </p>

                <h1
                    className="
                        mt-2
                        font-heading
                        text-4xl
                        font-bold
                        leading-tight
                        text-text
                        sm:text-5xl
                    "
                >
                    {project.title}
                </h1>
            </div>

            {/* Image */}
            {project.image_url && (
                <div
                    className="
                        mt-8
                        overflow-hidden
                        rounded-2xl
                        border
                        border-border
                        bg-surface
                        shadow-soft
                    "
                >
                    <img
                        src={project.image_url}
                        alt={project.title}
                        className="
                            block
                            h-auto
                            w-full
                            object-cover
                        "
                    />
                </div>
            )}

            {/* Description */}
            <div className="mt-10">
                <h2
                    className="
                        font-heading
                        text-2xl
                        font-bold
                        text-text
                    "
                >
                    About the Project
                </h2>

                <p
                    className="
                        mt-4
                        max-w-3xl
                        whitespace-pre-line
                        leading-relaxed
                        text-muted
                    "
                >
                    {project.description}
                </p>
            </div>

            {/* Project Information */}
            <div
                className="
                    mt-10
                    grid
                    gap-4
                    sm:grid-cols-2
                "
            >
                <div
                    className="
                        rounded-xl
                        border
                        border-border
                        bg-surface
                        p-5
                        shadow-soft
                    "
                >
                    <p className="text-xs text-muted">
                        Category
                    </p>

                    <p
                        className="
                            mt-1
                            font-medium
                            capitalize
                            text-text
                        "
                    >
                        {project.category?.replace(
                            '_',
                            ' '
                        )}
                    </p>
                </div>

                <div
                    className="
                        rounded-xl
                        border
                        border-border
                        bg-surface
                        p-5
                        shadow-soft
                    "
                >
                    <p className="text-xs text-muted">
                        Role
                    </p>

                    <p
                        className="
                            mt-1
                            font-medium
                            text-text
                        "
                    >
                        {project.description
                            ?.split('\n')[0]
                            ?.replace('Role:', '')
                            ?.trim()}
                    </p>
                </div>
            </div>

            {/* Links */}
            <div
                className="
                    mt-10
                    flex
                    flex-wrap
                    gap-2
                "
            >
                {project.project_url && (
                    <Button href={project.project_url}>
                        <FontAwesomeIcon
                            icon={faExternalLinkAlt}
                            className="mr-2"
                        />
                        View Live Project
                    </Button>
                )}

                {project.github_url && (
                    <Button href={project.github_url}>
                        <FontAwesomeIcon
                            icon={faGithub}
                        />
                        View GitHub
                    </Button>
                )}
            </div>
        </section>
    )
}

export default ProjectDetail