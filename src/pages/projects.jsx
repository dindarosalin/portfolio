const projects = () => {
    const projectData = [
        {
            id: 1,
            title: "Medifirst",
            role: "Fullstack Web Developer",
            tech: ['PHP', 'Laravel', 'Laragon', 'Bootstrap', 'mySql', "Rest API"],
            description: "Participated in the development of Medifirst, an internal pharmacy management application, as part of the Medifirst team",
            image: "images/projects/medifirst2.png",
            demoLink: "#",
            repositoryLink: "#"
        },
        {
            id: 2,
            title: "DoneXP",
            role: "Fullstack Web Developer",
            tech: ['PHP', 'Laravel', 'Laragon', 'Bootstrap', 'mySql'],
            description: "Contributed to bug fixing and maintenance tasks for the DenXP national and international shipping web application.",
            image: "images/projects/denxp.png",
            demoLink: "https://denxp.com/",
        },
        {
            id: 3,
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
            title: "Halo Students",
            role: "UI Designer",
            tech: ["Figma", "Prototyping"],
            description: "Designing intuitive and visually appealing user interfaces (UI) and user experiences (UX) with a keen focus on user needs, usability, and accessibility",
            image: "images/projects/halostudents.png",
            demoLink: "https://www.figma.com/proto/LyBLYyD29i3iLUleoNDkLE/Halo-UAJY?type=design&node-id=268-998&t=FdtYroxr2XZ5h6Tk-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=268%3A998&mode=design",
        },
        {
            id: 7,
            title: "Personal Portfolio",
            role: "Front End Web Developer",
            tech: ['Javascript', 'React Js', "Vite", "NPM", "Tailwindcss", "Fetch API"],
            description: "Developing responsive and visually captivating front-end solutions that prioritize, seamless interaction, and aesthetic appeal to deliver an immersive and delightful website.",
            image: "images/projects/portfolio.png",
            demoLink: "https://www.figma.com/proto/LyBLYyD29i3iLUleoNDkLE/Halo-UAJY?type=design&node-id=268-998&t=FdtYroxr2XZ5h6Tk-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=268%3A998&mode=design",
            repositoryLink: "https://github.com/dindarosalin/portfolio"
        },
    ];

    return (
        <section id="projects" className="container px-10">
            <div className="mt-7">
                <h2 className="text-3xl underline decoration-gold">My Recent Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
                    {projectData.map((project) => (
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
                                    <a
                                        target="_blank"
                                        href={project.demoLink}
                                        className="hover:shadow-lg hover:shadow-gold hover:scale-105 transition cursor-pointer duration-500 ease-in-out shadow-md shadow-gold outline outline-gold outline-1 outline-offset-2 rounded py-2 px-3 mt-4"
                                    >
                                        Demo
                                    </a>
                                )}
                                {project.repositoryLink && (
                                    <a
                                        target="_blank"
                                        href={project.repositoryLink}
                                        className="hover:shadow-lg hover:shadow-gold hover:scale-105 transition cursor-pointer duration-500 ease-in-out shadow-md shadow-gold outline outline-gold outline-1 outline-offset-2 rounded py-2 px-3 mt-4"
                                    >
                                        Repository
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
    
}

export default projects;
