const projects = () => {
    // Data array untuk daftar proyek
    const projectData = [
        {
            id: 1,
            title: "Mountain",
            role: "Front End Web Developer",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
            image: "src/assets/images/profile.jpeg",
            demoLink: "#",
            repositoryLink: "#"
        },
        {
            id: 2,
            title: "Mountain",
            role: "Front End Web Developer",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
            image: "src/assets/images/profile.jpeg",
            demoLink: "#",
            repositoryLink: "#"
        },
        {
            id: 3,
            title: "Mountain",
            role: "Front End Web Developer",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
            image: "src/assets/images/profile.jpeg",
            demoLink: "#",
            repositoryLink: "#"
        },
        {
            id: 4,
            title: "Mountain",
            role: "Front End Web Developer",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
            image: "src/assets/images/profile.jpeg",
            demoLink: "#",
            repositoryLink: "#"
        },
        {
            id: 5,
            title: "Mountain",
            role: "Front End Web Developer",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.",
            image: "src/assets/images/profile.jpeg",
            demoLink: "#",
            repositoryLink: "#"
        },
    ];

    return (
        <section id="projects" className="container px-10">
            <div className="mt-7">
                <h2 className="text-3xl underline decoration-gold">My Recent Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
                    {projectData.map((project) => (
                        <div key={project.id} className="max-w-sm rounded overflow-hidden outline-1 outline p-3 card hover:shadow-gold hover:shadow-lg">
                            <img className="w-full" src={project.image} alt={project.title} />
                            <div className="">
                                <div className="font-bold text-xl">{project.title}</div>
                                <p className="subtitle mb-2 italic text-light">{project.role}</p>
                                <p className="text-white text-light">
                                    {project.description}
                                </p>
                            </div>
                            <div className="m-4 flex justify-center gap-5">
                                <button className="shadow-md shadow-gold outline outline-1 outline-offset-2 rounded py-2 px-3 outline-button">Demo</button>
                                <button className="shadow-md shadow-gold outline outline-1 outline-offset-2 rounded py-2 px-3 outline-button">Repository</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default projects;
