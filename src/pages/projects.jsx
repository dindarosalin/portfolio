import React, { useState } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
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

    const [filterType, setFilterType] = useState('all');

    const handleFilterChange = (type) => {
        setFilterType(type);
    };

    const filteredProjects = filterType === 'all'
        ? projectData
        : projectData.filter(project => project.type === filterType);

    return (
        <section id="projects" className="container px-5 pt-16">
            <div className="mt-7">
                <h2 className="text-3xl underline decoration-gold">My Recent <span className='text-gold font-bold'>Projects</span></h2>
                <div>
                    <ul className='flex gap-4 mt-4 md:justify-start justify-center'>
                        <li
                            className={`active:text-gold cursor-pointer hover:text-gold active:underline hover:underline transition duration-300 ease-in-out ${filterType === 'all' ? 'text-gold underline' : ''}`}
                            onClick={() => handleFilterChange('all')}
                        >
                            All
                        </li>
                        <li
                            className={`active:text-gold cursor-pointer hover:text-gold active:underline hover:underline transition duration-300 ease-in-out ${filterType === 'frontend' ? 'text-gold underline' : ''}`}
                            onClick={() => handleFilterChange('frontend')}
                        >
                            Front End
                        </li>
                        <li
                            className={`active:text-gold cursor-pointer hover:text-gold active:underline hover:underline transition duration-300 ease-in-out ${filterType === 'fullstack' ? 'text-gold underline' : ''}`}
                            onClick={() => handleFilterChange('fullstack')}
                        >
                            Fullstack
                        </li>
                        <li
                            className={`active:text-gold cursor-pointer hover:text-gold active:underline hover:underline transition duration-300 ease-in-out ${filterType === 'ui_designer' ? 'text-gold underline' : ''}`}
                            onClick={() => handleFilterChange('ui_designer')}
                        >
                            Design
                        </li>
                    </ul>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10 transition ease-in-out duration-300 ">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="hover:scale-105 transition cursor-pointer duration-500 ease-in-out max-w-sm rounded overflow-hidden outline-1 outline p-3 card hover:shadow-gold hover:shadow-lg">
                            <img className="w-full rounded-md" src={project.image} alt={project.title} />
                            <div className="mt-2">
                                <div className="font-bold text-xl">{project.title}</div>
                                <p className="subtitle mb-2 italic text-light">{project.role}</p>
                                <p className="text-white text-light mb-2">
                                    {project.description}
                                </p>
                                <div className='flex flex-wrap gap-1'>
                                    {Array.isArray(project.tech) && project.tech.map((techItem, index) => (
                                        <h5 key={index} className='text-gold italic text-sm'>
                                            #{techItem}
                                        </h5>
                                    ))}
                                </div>
                            </div>
                            <div className="m-4 flex justify-center gap-5">
                                {project.demoLink && (
                                    <a target="_blank" href={project.demoLink}
                                        className="hover:shadow-lg hover:shadow-gold hover:scale-105 transition cursor-pointer duration-500 ease-in-out shadow-md shadow-gold outline outline-gold outline-1 outline-offset-2 rounded py-2 px-3 mt-4">
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Demo
                                    </a>
                                )}
                                {project.repositoryLink && (
                                    <a
                                        target="_blank"
                                        href={project.repositoryLink}
                                        className="hover:shadow-lg hover:shadow-gold hover:scale-105 transition cursor-pointer duration-500 ease-in-out shadow-md shadow-gold outline outline-gold outline-1 outline-offset-2 rounded py-2 px-3 mt-4">
                                        <FontAwesomeIcon icon={faGithub} /> Repository
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
