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
        <div className="source-sans hover:shadow-lg transition duration-500 ease-in-out max-w-sm rounded overflow-hidden p-2 card shadow-md">

            {project.image_url && (
                <img
                    className="w-full rounded-sm"
                    src={project.image_url}
                    alt={project.title}
                />
            )}

            <div className="mt-2">
                <div className="font-bold text-2xl playfair-display">
                    {project.title}
                </div>

                {project.category && (
                    <p className="mt-1 text-sm italic underline text-pink-darker">
                        {project.category}
                    </p>
                )}

                <p className="m-2">
                    {project.description}
                </p>

                {project.project_skills?.length > 0 && (
                    <div className="m-2 flex flex-wrap gap-2">
                        {project.project_skills.map((projectSkill) => {
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
                                        ${skillColors[skillName] || 'bg-gray-100 text-gray-700 border-gray-300'}
                                    `}
                                >
                                    {skillName}
                                </span>
                            )
                        })}
                    </div>
                )}
            </div>

            <div className="m-4 flex justify-center gap-5 mb-0">

                {project.project_url && (
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.project_url}
                        className="flex flex-row gap-1 items-center hover:shadow-lg transition cursor-pointer duration-500 ease-in-out shadow-sm outline-offset-2 rounded-md py-2 px-3 mb-2 text-sm bg-pink-darker text-white"
                    >
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
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
                        className="flex flex-row gap-1 items-center hover:shadow-lg transition cursor-pointer duration-500 ease-in-out shadow-sm outline-offset-2 rounded-md py-2 px-3 mb-2 text-sm bg-pink-darker text-white"
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