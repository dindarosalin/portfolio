import { useState } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Projects = () => {
    const projectData = [
        {
            id: 1,
            type: "fullstack",
            title: "Medifirst",
            role: "Fullstack Web Developer",
            tech: ['PHP', 'Laravel', 'Laragon', 'Bootstrap', 'mySql', "Rest API"],
            description: "Participated in the development of Medifirst, an internal pharmacy management application, as part of the Medifirst team",
            image: "images/projects/medifirst2.png",
            demoLink: "https://medifirst.adslink.id/",
        },
        {
            id: 2,
            type: "fullstack",
            title: "DoneXP",
            role: "Fullstack Web Developer",
            tech: ['PHP', 'Laravel', 'Laragon', 'Bootstrap', 'mySql'],
            description: "Contributed to bug fixing and maintenance tasks for the DenXP national and international shipping web application.",
            image: "images/projects/denxp.png",
            demoLink: "https://denxp.com/",
        },
        {
            id: 3,
            type: "frontend",
            title: "DetikHealth Landing Page",
            role: "Front End Web Developer",
            tech: ['Javascript', 'React Js', "Vite", "NPM", "Bootstrap", "Fetch API"],
            description: "Translating Figma UI/UX designs into clean,responvie, semantic, and user-friendly web interfaces and Integrating API consumtion for dinamic content with a focus on optimal performance",
            image: "images/projects/hero.png",
            demoLink: "https://detikhealth-dindarosalin.vercel.app/",
            repositoryLink: "https://github.com/dindarosalin/Detikcom_FrontendDesignAssignment_dindarosalin"
        },
        {
            id: 4,
            type: "frontend",
            title: "Udara Kita Web App",
            role: "Front End Web Developer",
            tech: ['Javascript', 'React Js', "Vite", "NPM", "Bootstrap", "Fetch API"],
            description: "Translating Figma UI/UX designs into clean,responvie, semantic, and user-friendly web interfaces and Integrating API consumtion for dinamic content with a focus on optimal performance",
            image: "images/projects/udarakita.png",
            demoLink: "https://cek-udara.my.id/",
            repositoryLink: "https://github.com/Cepu-Developer"
        },
        {
            id: 5,
            type: "frontend",
            title: "Tinggalklik Landing Page",
            role: "Front End Web Developer",
            tech: ['Typescript', 'React Js', "Vite", "Yarn", "Bootstrap", "Fetch API"],
            description: "Translating Figma UI/UX designs into clean,responvie, semantic, and user-friendly web interfaces and Integrating API consumtion for dinamic content with a focus on optimal performance",
            image: "images/projects/tinggalklik.png",
            demoLink: "https://play.google.com/store/apps/details?id=com.tinggalklik_user.app&pcampaignid=web_share",
            repositoryLink: "https://www.linkedin.com/company/tinggalklik/"
        },
        {
            id: 6,
            type: "ui_designer",
            title: "Halo Students",
            role: "UI Designer",
            tech: ["Figma", "Prototyping"],
            description: "Designing intuitive and visually appealing user interfaces (UI) and user experiences (UX) with a keen focus on user needs, usability, and accessibility",
            image: "images/projects/halostudents.png",
            demoLink: "https://www.figma.com/proto/LyBLYyD29i3iLUleoNDkLE/Halo-UAJY?type=design&node-id=268-998&t=FdtYroxr2XZ5h6Tk-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=268%3A998&mode=design",
        },
        {
            id: 7,
            type: "frontend",
            title: "Personal Portfolio",
            role: "Front End Web Developer",
            tech: ['Javascript', 'React Js', "Vite", "NPM", "Tailwindcss", "Fetch API"],
            description: "Developing responsive and visually captivating front-end solutions that prioritize, seamless interaction, and aesthetic appeal to deliver an immersive and delightful website.",
            image: "images/projects/portfolio.png",
            demoLink: "https://dindarosalin.vercel.app/",
            repositoryLink: "https://github.com/dindarosalin/portfolio"
        },
        {
            id: 8,
            type: "frontend",
            title: "Restaurant catalogue",
            role: "Front End Web Developer",
            tech: ['Javascript', 'React Js', "Vite", "NPM", "Tailwindcss", "Fetch API"],
            description: "Developing responsive and visually captivating front-end solutions that prioritize, seamless interaction, and aesthetic appeal to deliver an immersive and delightful website.",
            image: "images/projects/restaurant.PNG",
            demoLink: "https://frontend-dev-reactjs-dinda-rosalin-husna.vercel.app/",
            repositoryLink: "https://github.com/dindarosalin/FrontendDevReactjs-DindaRosalinHusna"
        },
    ];

    const [filterType, setFilterType] = useState([]);
    const [visibleProjects, setVisibleProjects] = useState(2);
    const [projectsToShow, setProjectsToShow] = useState(projectData.slice(0, visibleProjects));

    const loadMore = () => {
        setVisibleProjects(prevVisible => prevVisible + 5);
        setProjectsToShow(projectData.slice(0, visibleProjects + 5));
    };

    const handleFilterChange = (type) => {
        setFilterType(prevFilters =>
            prevFilters.includes(type)
                ? prevFilters.filter(filter => filter !== type)
                : [...prevFilters, type]
        );
    };

    const filteredProjects = filterType.length === 0
        ? projectsToShow
        : projectsToShow.filter(project => filterType.includes(project.type));

    return (
        <section id="projects" className='px-5 pt-16 container'>
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-3 md:col-span-2">
                    <div className='p-2 border rounded-md border-red-dark'>
                        <h2 className="text-3xl playfair-display font-bold">Projects</h2>
                    </div>
                    <div className='md:hidden'>
                        <ul className='flex mt-4 md:justify-start justify-center'>
                            <li>
                                <label
                                    className={`checkbox flex justify-between items-center px-3 cursor-pointer active:text-pink-darker transition duration-300 ease-in-out ${filterType.includes('fullstack') ? 'text-pink-darker' : ''}`}
                                >
                                    <p className="text-md me-1">Fullstack</p>
                                    <input
                                        type="checkbox"
                                        className="text-pink-darker w-4 h-4 bg-pink-secondary checked:text-pink-primary focus:ring-pink-primary"
                                        checked={filterType.includes('fullstack')}
                                        onChange={() => handleFilterChange('fullstack')}
                                    />
                                </label>
                            </li>
                            <li>
                                <label
                                    className={`checkbox flex justify-between items-center px-3 cursor-pointer active:text-pink-darker transition duration-300 ease-in-out ${filterType.includes('fullstack') ? 'text-pink-darker' : ''}`}
                                >
                                    <p className="text-md me-1">Frontend</p>
                                    <input
                                        type="checkbox"
                                        className="text-pink-darker w-4 h-4 bg-pink-secondary checked:text-pink-primary focus:ring-pink-primary"
                                        checked={filterType.includes('frontend')}
                                        onChange={() => handleFilterChange('frontend')}
                                    />
                                </label>
                            </li>
                            <li>
                                <label
                                    className={`checkbox flex justify-between items-center px-3 cursor-pointer active:text-pink-darker transition duration-300 ease-in-out ${filterType.includes('fullstack') ? 'text-pink-darker' : ''}`}
                                >
                                    <p className="text-md me-1">Design</p>
                                    <input
                                        type="checkbox"
                                        className="text-pink-darker w-4 h-4 bg-pink-secondary checked:text-pink-primary focus:ring-pink-primary"
                                        checked={filterType.includes('ui_designer')}
                                        onChange={() => handleFilterChange('ui_designer')}
                                    />
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-10 transition ease-in-out duration-300 ">
                        {filteredProjects.map((project) => (
                            <div key={project.id} className="source-sans hover:shadow-lg transition duration-500 ease-in-out max-w-sm rounded overflow-hidden p-2 card shadow-md">
                                <img className="w-full rounded-sm" src={project.image} alt={project.title} />
                                <div className="mt-2">
                                    <p className="font-md text-red-dark text-lg">{project.role}</p>
                                    <div className="font-bold text-2xl playfair-display">{project.title}</div>
                                    <p className="m-2">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="m-4 flex justify-center gap-5 mb-0">
                                    {project.demoLink && (
                                        <a target="_blank" href={project.demoLink}
                                            className="flex flex-row gap-1 items-center hover:shadow-lg transition cursor-pointer duration-500 ease-in-out shadow-sm outline-offset-2 rounded-md py-2 px-3 mb-2 text-sm bg-pink-darker text-white">
                                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> <p className='hidden md:block'>Demo</p>
                                        </a>
                                    )}
                                    {project.repositoryLink && (
                                        <a
                                            target="_blank"
                                            href={project.repositoryLink}
                                            className="flex flex-row gap-1 items-center hover:shadow-lg transition cursor-pointer duration-500 ease-in-out shadow-sm outline-offset-2 rounded-md py-2 px-3 mb-2 text-sm bg-pink-darker text-white">
                                            <FontAwesomeIcon icon={faGithub} /> <p className='hidden md:block'>Repository</p>
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-span-3 md:col-span-1 source-sans hidden md:block">
                    <form className="max-w-md mx-auto">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                        <div className="relative">
                            <input type="search" disabled id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-red-dark rounded-md focus:ring-pink-darker focus:border-pink-darker " placeholder="Search Projects" required />
                            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-pink-darker hover:bg-pink-darker focus:outline-none focus:pink-secondary font-medium rounded-md text-sm px-4 py-2">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </form>
                    <div className='border border-red-dark p-2 rounded-md mt-10'>
                        <h2 className="text-lg font-bold uppercase text-red-dark">Projects Category</h2>
                        <ul>
                            <li>
                                <label
                                    className={`checkbox flex justify-between items-center px-3 cursor-pointer active:text-pink-darker transition duration-300 ease-in-out ${filterType.includes('fullstack') ? 'text-pink-darker' : ''}`}
                                >
                                    <p className="text-lg">Full Stack</p>
                                    <input
                                        type="checkbox"
                                        className="text-pink-darker w-4 h-4 bg-pink-secondary checked:text-pink-primary focus:ring-pink-primary"
                                        checked={filterType.includes('fullstack')}
                                        onChange={() => handleFilterChange('fullstack')}
                                    />
                                </label>
                            </li>
                            <li>
                                <label
                                    className={`checkbox flex justify-between items-center px-3 cursor-pointer active:text-pink-darker transition duration-300 ease-in-out ${filterType.includes('frontend') ? 'text-pink-darker' : ''}`}
                                >
                                    <p className="text-lg">Front End</p>
                                    <input
                                        type="checkbox"
                                        className="text-pink-darker w-4 h-4 bg-pink-secondary checked:text-pink-primary focus:ring-pink-primary"
                                        checked={filterType.includes('frontend')}
                                        onChange={() => handleFilterChange('frontend')}
                                    />
                                </label>
                            </li>
                            <li>
                                <label
                                    className={`checkbox flex justify-between items-center px-3 cursor-pointer active:text-pink-darker transition duration-300 ease-in-out ${filterType.includes('ui_designer') ? 'text-pink-darker' : ''}`}
                                >
                                    <p className="text-lg">Design</p>
                                    <input
                                        type="checkbox"
                                        className="text-pink-darker w-4 h-4 bg-pink-secondary checked:text-pink-primary focus:ring-pink-primary"
                                        checked={filterType.includes('ui_designer')}
                                        onChange={() => handleFilterChange('ui_designer')}
                                    />
                                </label>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className='mt-4 flex justify-center'>
                {visibleProjects < projectData.length && (
                    <button onClick={loadMore} className='flex-auto p-2 hover:shadow-lg transition duration-300 ease-in-out justify-center border text-center border-red-dark rounded-md'>Load More</button>
                )}
            </div>
        </section>

    );
};

export default Projects;
