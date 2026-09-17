import { useEffect, useState } from 'react'
import { getProjects } from '../../services/projectServices'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SectionTitle from '../../components/sectionTitle'
import ProjectCard from '../../components/projectCard'

const Projects = () => {
    const [projects, setProjects] = useState([])
    const [filterType, setFilterType] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [visibleProjects, setVisibleProjects] = useState(4)

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const [isFiltering, setIsFiltering] = useState(false)

    useEffect(() => {
        async function loadProjects() {
            try {
                setLoading(true)

                const data = await getProjects()

                setProjects(data)
            } catch (err) {
                console.error('❌ Gagal mengambil projects:', err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        loadProjects()
    }, [])

    const categories = [
        ...new Set(
            projects
                .map(project => project.category)
                .filter(Boolean)
        ),
    ]

    const filteredProjects = projects.filter(project => {
        const matchesCategory =
            filterType.length === 0 ||
            filterType.includes(project.category)

        const search = searchQuery.toLowerCase().trim()

        const matchesSearch =
            project.title?.toLowerCase().includes(search) ||
            project.description?.toLowerCase().includes(search) ||
            project.category?.toLowerCase().includes(search)

        return matchesCategory && matchesSearch
    })

    const projectsToShow = filteredProjects.slice(0, visibleProjects)

    const handleFilterChange = (category) => {
        setIsFiltering(true)

        setFilterType(prevFilters =>
            prevFilters.includes(category)
                ? prevFilters.filter(filter => filter !== category)
                : [...prevFilters, category]
        )

        setVisibleProjects(4)

        setTimeout(() => {
            setIsFiltering(false)
        }, 250)
    }

    const handleSearchChange = (event) => {
        setIsFiltering(true)

        setSearchQuery(event.target.value)
        setVisibleProjects(4)

        setTimeout(() => {
            setIsFiltering(false)
        }, 250)
    }

    const handleLoadMore = () => {
        setIsFiltering(true)

        setTimeout(() => {
            setVisibleProjects(prevVisible => prevVisible + 4)
            setIsFiltering(false)
        }, 150)
    }

    return (
        <section
            id="projects"
            className="px-5 pt-16 container"
        >

            <SectionTitle title="Projects" />

            {/* Filter */}
            <div className="mt-6 border border-red-dark p-4 rounded-md source-sans">

                <div className="flex flex-col lg:flex-row lg:items-center gap-4">

                    {/* Search */}
                    <form
                        className="w-full lg:w-1/3"
                        onSubmit={(event) => event.preventDefault()}
                    >
                        <label
                            htmlFor="project-search"
                            className="sr-only"
                        >
                            Search Projects
                        </label>

                        <div className="relative">

                            <input
                                type="search"
                                id="project-search"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="block w-full p-3 ps-10 text-sm text-gray-900 border border-red-dark rounded-md focus:ring-pink-darker focus:border-pink-darker transition"
                                placeholder="Search Projects"
                            />

                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <FontAwesomeIcon
                                    icon={faMagnifyingGlass}
                                    className="text-pink-darker"
                                />
                            </div>

                        </div>
                    </form>

                    {/* Category */}
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">

                        <span className="text-sm font-bold text-red-dark">
                            Category:
                        </span>

                        {categories.map(category => (
                            <label
                                key={category}
                                className="flex items-center gap-2 cursor-pointer text-sm"
                            >
                                <input
                                    type="checkbox"
                                    checked={filterType.includes(category)}
                                    onChange={() =>
                                        handleFilterChange(category)
                                    }
                                    className="accent-pink-darker"
                                />

                                <span>
                                    {category}
                                </span>
                            </label>
                        ))}

                    </div>

                </div>
            </div>

            {/* Loading */}
            {loading && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mt-10">

                    {[1, 2, 3, 4].map(item => (
                        <div
                            key={item}
                            className="rounded overflow-hidden p-2 shadow-md animate-pulse"
                        >
                            <div className="w-full h-40 rounded-sm bg-gray-200" />

                            <div className="mt-4 space-y-3">
                                <div className="h-6 w-3/4 bg-gray-200 rounded" />

                                <div className="h-4 w-full bg-gray-200 rounded" />

                                <div className="h-4 w-5/6 bg-gray-200 rounded" />

                                <div className="flex gap-2">
                                    <div className="h-6 w-16 bg-gray-200 rounded-full" />
                                    <div className="h-6 w-20 bg-gray-200 rounded-full" />
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            )}

            {/* Error */}
            {!loading && error && (
                <p className="mt-10 text-center">
                    Failed to load projects.
                </p>
            )}

            {/* Projects */}
            {!loading && !error && (
                <>
                    {projectsToShow.length > 0 ? (

                        <div
                            className={`
                                grid
                                grid-cols-1
                                sm:grid-cols-2
                                lg:grid-cols-3
                                xl:grid-cols-4
                                gap-7
                                mt-10
                                transition-all
                                duration-300
                                ease-in-out
                                ${
                                    isFiltering
                                        ? 'opacity-40 translate-y-1'
                                        : 'opacity-100 translate-y-0'
                                }
                            `}
                        >

                            {projectsToShow.map(project => (
                                <div
                                    key={project.id}
                                    className="animate-[fadeIn_0.3s_ease-in-out]"
                                >
                                    <ProjectCard
                                        project={project}
                                    />
                                </div>
                            ))}

                        </div>

                    ) : (

                        <div className="mt-10 text-center source-sans">
                            <p className="text-gray-500">
                                No projects found.
                            </p>
                        </div>

                    )}
                </>
            )}

            {/* Load More */}
            {!loading &&
                !error &&
                visibleProjects < filteredProjects.length && (
                    <div className="mt-8 flex justify-center">

                        <button
                            onClick={handleLoadMore}
                            disabled={isFiltering}
                            className="
                                px-6
                                py-2
                                border
                                border-red-dark
                                dark:border-pink-darker
                                rounded-md
                                transition-all
                                duration-300
                                ease-in-out
                                hover:shadow-lg
                                hover:-translate-y-0.5
                                disabled:opacity-50
                                disabled:cursor-not-allowed
                            "
                        >
                            Load More
                        </button>

                    </div>
                )}

        </section>
    )
}

export default Projects