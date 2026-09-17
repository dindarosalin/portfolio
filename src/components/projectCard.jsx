import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const skillColors = {
    React: 'bg-blue-100 text-blue-700 border-blue-300',
    JavaScript: 'bg-yellow-100 text-yellow-700 border-yellow-300',
    TypeScript: 'bg-blue-100 text-blue-800 border-blue-300',
    PHP: 'bg-indigo-100 text-indigo-700 border-indigo-300',
    Laravel: 'bg-red-100 text-red-700 border-red-300',
    Bootstrap: 'bg-purple-100 text-purple-700 border-purple-300',
    TailwindCSS: 'bg-cyan-100 text-cyan-700 border-cyan-300',
    'Tailwind CSS': 'bg-cyan-100 text-cyan-700 border-cyan-300',
    MySQL: 'bg-orange-100 text-orange-700 border-orange-300',
    Supabase: 'bg-emerald-100 text-emerald-700 border-emerald-300',
    'Node.js': 'bg-green-100 text-green-700 border-green-300',
    Express: 'bg-gray-100 text-gray-700 border-gray-300',
    Vite: 'bg-purple-100 text-purple-700 border-purple-300',
}

const ProjectCard = ({ project }) => {
    return (
        <div className="
            source-sans
            h-full
            flex
            flex-col
            rounded
            overflow-hidden
            p-2
            card
            shadow-md
            hover:shadow-lg
            transition
            duration-500
            ease-in-out
        ">

            {/* Image */}
            {/* Image */}
            <div className="w-full h-40 shrink-0">
                {project.image_url ? (
                    <img
                        className="w-full h-full object-cover rounded-sm"
                        src={project.image_url}
                        alt={project.title}
                    />
                ) : (
                    <div className="
            w-full
            h-full
            rounded-sm
            border
            border-red-dark/20
            bg-pink-light/40
            flex
            flex-col
            items-center
            justify-center
            text-center
            px-4
        ">
                        <p className="text-sm font-medium text-pink-darker">
                            Project Preview
                        </p>

                        <p className="text-xs text-gray-500 mt-1">
                            Image preview is not available
                        </p>
                    </div>
                )}
            </div>


            {/* Content */}
            <div className="mt-3 flex flex-col flex-1">

                {/* Title */}
                <div className="font-bold text-2xl playfair-display min-h-[3.5rem]">
                    {project.title}
                </div>


                {/* Category */}
                <div className="min-h-[1.5rem] mt-1">
                    {project.category && (
                        <p className="text-sm italic underline text-pink-darker">
                            {project.category}
                        </p>
                    )}
                </div>


                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                </p>


                {/* Skills */}
                <div className="mt-3 min-h-[2rem] flex flex-wrap gap-2">
                    {project.project_skills?.map((projectSkill) => {
                        const skillName = projectSkill.skills?.name

                        return (
                            <span
                                key={projectSkill.skill_id}
                                className={`
                                    inline-block
                                    rounded-full
                                    border
                                    px-3
                                    py-1
                                    text-xs
                                    font-medium
                                    ${skillColors[skillName] ||
                                    'bg-gray-100 text-gray-700 border-gray-300'}
                                `}
                            >
                                {skillName}
                            </span>
                        )
                    })}
                </div>

            </div>


            {/* Buttons */}
            <div className="
                mt-4
                flex
                justify-center
                gap-3
                min-h-[2.5rem]
            ">

                {project.project_url && (
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.project_url}
                        className="
                            flex
                            gap-1
                            items-center
                            hover:shadow-lg
                            transition
                            cursor-pointer
                            duration-500
                            ease-in-out
                            shadow-sm
                            rounded-md
                            py-2
                            px-3
                            text-sm
                            bg-pink-darker
                            text-white
                        "
                    >
                        <FontAwesomeIcon
                            icon={faArrowUpRightFromSquare}
                        />

                        <p className="hidden md:block">
                            Demo
                        </p>
                    </a>
                )}


                {project.github_url && (
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.github_url}
                        className="
                            flex
                            gap-1
                            items-center
                            hover:shadow-lg
                            transition
                            cursor-pointer
                            duration-500
                            ease-in-out
                            shadow-sm
                            rounded-md
                            py-2
                            px-3
                            text-sm
                            bg-pink-darker
                            text-white
                        "
                    >
                        <FontAwesomeIcon icon={faGithub} />

                        <p className="hidden md:block">
                            Repository
                        </p>
                    </a>
                )}

            </div>

        </div>
    )
}

export default ProjectCard