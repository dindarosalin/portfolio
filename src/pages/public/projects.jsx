import { useEffect, useState } from 'react'
import { getProjects } from '../../services/projectServices'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SectionTitle from '../../components/sectionTitle'
import ProjectCard from '../../components/projectCard'

import Button from '../../components/button'

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
            className="
                mx-auto
                max-w-content
                px-6
                py-16
                font-body
                sm:px-8
                lg:px-10
            "
        >
            <SectionTitle title="Projects" subtitle="Explore our latest projects" />
                <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center">

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
                                placeholder="Search Projects"
                                className="
                                    shadow-soft
                                    block
                                    w-full
                                    rounded-md
                                    border
                                    border-border
                                    bg-background
                                    py-3
                                    pe-3
                                    ps-10
                                    text-sm
                                    text-text
                                    placeholder:text-muted
                                    outline-none
                                    transition
                                    focus:border-pink-dark
                                    focus:ring-2
                                    focus:ring-pink-primary
                                "
                            />

                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    inset-y-0
                                    start-0
                                    flex
                                    items-center
                                    ps-3
                                "
                            >
                                <FontAwesomeIcon
                                    icon={faMagnifyingGlass}
                                    className="text-pink-dark"
                                />
                            </div>
                        </div>
                    </form>

                    {/* Category */}
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                        <span className="text-sm font-bold text-text">
                            Category:
                        </span>

                        {categories.map(category => (
                            <label
                                key={category}
                                className="
                                    flex
                                    cursor-pointer
                                    items-center
                                    gap-2
                                    text-sm
                                    text-text
                                "
                            >
                                <input
                                    type="checkbox"
                                    checked={filterType.includes(category)}
                                    onChange={() =>
                                        handleFilterChange(category)
                                    }
                                    className="
                                        h-4
                                        w-4
                                        cursor-pointer
                                        accent-pink-dark
                                    "
                                />

                                <span>{category}</span>
                            </label>
                        ))}
                    </div>
                </div>

            {/* Loading */}
            {loading && (
                <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {[1, 2, 3, 4].map(item => (
                        <div
                            key={item}
                            className="
                                animate-pulse
                                overflow-hidden
                                rounded-md
                                border
                                border-border
                                p-2
                                shadow-soft
                            "
                        >
                            <div className="h-40 w-full rounded-sm bg-pink-light" />

                            <div className="mt-4 space-y-3">
                                <div className="h-6 w-3/4 rounded bg-pink-light" />

                                <div className="h-4 w-full rounded bg-pink-light" />

                                <div className="h-4 w-5/6 rounded bg-pink-light" />

                                <div className="flex gap-2">
                                    <div className="h-6 w-16 rounded-full bg-pink-light" />
                                    <div className="h-6 w-20 rounded-full bg-pink-light" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Error */}
            {!loading && error && (
                <p className="mt-10 text-center text-muted">
                    Failed to load projects.
                </p>
            )}

            {/* Projects */}
            {!loading && !error && (
                <>
                    {projectsToShow.length > 0 ? (
                        <div
                            className={`
                                mt-10
                                grid
                                grid-cols-1
                                gap-7
                                sm:grid-cols-2
                                lg:grid-cols-3
                                xl:grid-cols-4
                                transition-all
                                duration-300
                                ease-in-out
                                ${
                                    isFiltering
                                        ? 'translate-y-1 opacity-40'
                                        : 'translate-y-0 opacity-100'
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
                        <div className="mt-10 text-center">
                            <p className="text-muted">
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
                            <Button
                                onClick={handleLoadMore}
                                disabled={isFiltering}
                            >
                                Load More
                            </Button>
                        </div>
                    )}
        </section>
    )
}

export default Projects