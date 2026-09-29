import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
    faArrowUpRightFromSquare,
    faEye,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import Button from './button'

const ProjectCard = ({ project }) => {
    return (
        <div
            className="
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-md
                border
                border-border
                bg-surface
                p-2.5
                font-body
                shadow-soft
            "
        >
            {/* Image */}
            <div
                className="
                    h-40
                    w-full
                    shrink-0
                    overflow-hidden
                    rounded-sm
                "
            >
                {project.image_url ? (
                    <img
                        className="
                            block
                            h-full
                            w-full
                            rounded-sm
                            object-cover
                            transition-all
                            duration-300
                            ease-in-out
                            hover:scale-[1.02]
                            hover:shadow-md
                        "
                        src={project.image_url}
                        alt={project.title}
                    />
                ) : (
                    <div
                        className="
                            flex
                            h-full
                            w-full
                            flex-col
                            items-center
                            justify-center
                            rounded-sm
                            border
                            border-border
                            bg-pink-light/40
                            px-4
                            text-center
                            transition-all
                            duration-300
                            ease-in-out
                            hover:shadow-md
                        "
                    >
                        <p className="text-sm font-medium text-pink-dark">
                            Project Preview
                        </p>

                        <p className="mt-1 text-xs text-muted">
                            Image preview is not available
                        </p>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="mt-3 flex flex-1 flex-col">

                {/* Title */}
                <h3
                    className="
                        min-h-[3.5rem]
                        font-heading
                        text-2xl
                        font-bold
                        leading-tight
                        text-text
                    "
                >
                    {project.title}
                </h3>

                {/* Category */}
                <div className="mt-1 min-h-[1.5rem]">
                    {project.category && (
                        <p className="text-sm italic text-pink-dark underline">
                            {project.category}
                        </p>
                    )}
                </div>

                {/* Description */}
                <p
                    className="
                        mt-2
                        line-clamp-3
                        text-sm
                        leading-relaxed
                        text-text
                    "
                >
                    {project.description}
                </p>

                {/* Skills */}
                <div
                    className="
                        mt-3
                        flex
                        min-h-[2rem]
                        flex-wrap
                        items-start
                        gap-1.5
                    "
                >
                    {project.project_skills?.map((projectSkill) => {
                        const skillName = projectSkill.skills?.name

                        return (
                            <span
                                key={projectSkill.skill_id}
                                className="
                                    inline-flex
                                    items-center
                                    rounded-full
                                    border
                                    border-border
                                    bg-pink-light
                                    px-2.5
                                    py-1
                                    text-[11px]
                                    font-normal
                                    leading-none
                                    text-text
                                "
                            >
                                {skillName}
                            </span>
                        )
                    })}
                </div>
            </div>

            {/* Buttons */}
            <div
                className="
                    mt-4
                    flex
                    flex-wrap
                    justify-center
                    gap-2
                "
            >
                {project.slug && (
                    <Link
                        to={`/projects/${project.slug}`}
                        className="shrink-0"
                    >
                        <Button>
                            <FontAwesomeIcon icon={faEye} />
                            Detail
                        </Button>
                    </Link>
                )}

                {project.project_url && (
                    <Button href={project.project_url}>
                        <FontAwesomeIcon
                            icon={faArrowUpRightFromSquare}
                        />
                        Live Preview
                    </Button>
                )}

                {project.github_url && (
                    <Button href={project.github_url}>
                        <FontAwesomeIcon icon={faGithub} />
                        Repository
                    </Button>
                )}
            </div>
        </div>
    )
}

export default ProjectCard