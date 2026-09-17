import { useEffect, useState } from 'react'
import { getProjects } from '../../services/projectServices'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
    faArrowUpRightFromSquare,
    faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Projects = () => {
    const [projects, setProjects] = useState([])
    const [filterType, setFilterType] = useState([])
    const [visibleProjects, setVisibleProjects] = useState(2)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function loadProjects() {
            try {
                const data = await getProjects()

                setProjects(data)

                console.log('📁 Projects dari Supabase:', data)
            } catch (err) {
                console.error('❌ Gagal mengambil projects:', err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        loadProjects()
    }, [])

    const loadMore = () => {
        setVisibleProjects(prevVisible => prevVisible + 5)
    }

    const handleFilterChange = (type) => {
        setFilterType(prevFilters =>
            prevFilters.includes(type)
                ? prevFilters.filter(filter => filter !== type)
                : [...prevFilters, type]
        )
    }

    const filteredProjects =
        filterType.length === 0
            ? projects
            : projects.filter(project =>
                filterType.includes(project.type)
            )

    const projectsToShow = filteredProjects.slice(0, visibleProjects)

    return (
        <section id="projects" className="px-5 pt-16 container">

            <div className="grid grid-cols-3 gap-4">

                <div className="col-span-3 md:col-span-2">

                    <div className="p-2 border rounded-md border-red-dark dark:border-pink-primary">
                        <h2 className="text-3xl playfair-display font-bold">
                            Projects
                        </h2>
                    </div>

                    {/* Loading */}
                    {loading && (
                        <p className="mt-10 text-center">
                            Loading projects...
                        </p>
                    )}

                    {/* Error */}
                    {error && (
                        <p className="mt-10 text-center">
                            Failed to load projects.
                        </p>
                    )}

                    {/* Projects */}
                    {!loading && !error && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-10 transition ease-in-out duration-300">

                            {projectsToShow.map((project) => (

                                <div
                                    key={project.id}
                                    className="source-sans hover:shadow-lg transition duration-500 ease-in-out max-w-sm rounded overflow-hidden p-2 card shadow-md"
                                >

                                    {/* Image */}
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

                                        <p className="m-2">
                                            {project.description}
                                        </p>

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

                            ))}

                        </div>
                    )}

                </div>

                {/* Sidebar */}
                <div className="col-span-3 md:col-span-1 source-sans hidden md:block">

                    <form className="max-w-md mx-auto">

                        <label
                            htmlFor="default-search"
                            className="mb-2 text-sm font-medium text-gray-900 sr-only"
                        >
                            Search
                        </label>

                        <div className="relative">

                            <input
                                type="search"
                                disabled
                                id="default-search"
                                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-red-dark rounded-md focus:ring-pink-darker focus:border-pink-darker"
                                placeholder="Search Projects"
                            />

                            <button
                                type="submit"
                                className="text-white absolute end-2.5 bottom-2.5 bg-pink-darker hover:bg-pink-darker focus:outline-none font-medium rounded-md text-sm px-4 py-2"
                            >
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>

                        </div>

                    </form>

                    <div className="border border-red-dark p-2 rounded-md mt-10">

                        <h2 className="text-lg font-bold uppercase text-red-dark">
                            Projects Category
                        </h2>

                        <p className="text-sm mt-2">
                            Category filtering akan kita aktifkan lagi
                            setelah field category ditambahkan ke database.
                        </p>

                    </div>

                </div>

            </div>

            {/* Load More */}
            {!loading &&
                !error &&
                visibleProjects < projects.length && (
                    <div className="mt-4 flex justify-center">

                        <button
                            onClick={loadMore}
                            className="flex-auto p-2 hover:shadow-lg transition duration-300 ease-in-out justify-center border text-center border-red-dark dark:border-pink-darker rounded-md"
                        >
                            Load More
                        </button>

                    </div>
                )}

        </section>
    )
}

export default Projects