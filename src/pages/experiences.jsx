import 'swiper/css';

const experiences = () => {
  const experiencesData = [
    {
      id: 1,
      companyName: "Media Center Poliwangi",
      companyLink: "https://www.instagram.com/mediacenter.poliwangi",
      description: "Collaborated with the Media Center team at Poliwangi as a content writer, handling tasks such as planning and managing content for various official platforms of Politeknik Negeri Banyuwangi.",
      position: "Copywriter",
      type: "Part-time",
      duration: "March 2022 - March 2024",
      imageUrl: "https://media.licdn.com/dms/image/v2/D560BAQEeh-Xblbnlrw/company-logo_200_200/company-logo_200_200/0/1702953433053?e=1733356800&v=beta&t=wuhAkpeRmz-_cxKfRrQIvGg7hmYSb2lCJDkqBU_CiWg"
    },
    {
      id: 2,
      companyName: "Vocational School Graduate Academy",
      companyLink: "https://digitalent.kominfo.go.id/",
      description: "Graduated from the Vocational School Graduate Academy program by Kominfo as a Junior Graphic Designer and successfully obtained a BNSP certification for Junior Graphic Designer with a final score of 82.",
      position: "Junior Graphic Designer",
      type: "Course",
      duration: "October 2022",
      imageUrl: "data:image/png;base64,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"
    },
    {
      id: 3,
      companyName: "Vocational School Graduate Academy",
      companyLink: "https://digitalent.kominfo.go.id/",
      description: "Graduated from the Vocational School Graduate Academy program by Kominfo as a junior web developer and successfully earned the BNSP Junior Web Developer Designer certification with a final score of 88.",
      position: "Junior Web Developer",
      type: "Course",
      duration: "August 2023",
      imageUrl: "data:image/png;base64,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"
    },
    {
      id: 4,
      companyName: "Dicoding Indonesia",
      companyLink: "https://www.dicoding.com/",
      description: "Successfully completed the SIB Batch 5 program at Dicoding Indonesia as a Front-End and Back-End Web Developer, finishing all courses materials and projects.",
      position: "Frontend and Backend Web Developer",
      type: "Course",
      duration: "Aug-Dec 2023",
      imageUrl: "https://asset.brandfetch.io/idK1RDMSRY/idPamGvnsf.jpeg?updated=1681745888429"
    },
    {
      id: 5,
      companyName: "Tinggalklik",
      companyLink: "https://tinggalklik.co/",
      description: "Worked as part of the front-end web development team as an intern at TinggalKlik Indonesia, successfully completing several company projects using React JS and TypeScript.",
      position: "Frontend Web Developer",
      type: "Internship",
      duration: "Jan-March 2024",
      imageUrl: "https://tinggalklik.co/assets/logo-CqTHt0f8.png"
    },
    {
      id: 6,
      companyName: "ADS Digital Partner",
      companyLink: "https://adsdigitalpartner.co.id/",
      description: "Successfully completed the MSIB Batch 6 program as a Full-Stack Web Developer, working on several projects using Laravel and Bootstrap in collaboration with the team.",
      position: "Fullstack Web Developer",
      type: "Internship",
      duration: "Feb-June 2024",
      imageUrl: "https://media.licdn.com/dms/image/v2/C560BAQFnyUwWm1LDKA/company-logo_200_200/company-logo_200_200/0/1648799905094/pt_adma_digital_solusi_logo?e=1733356800&v=beta&t=5_WbNNIaPMWimZbC-PUbtpGoBLpuQPlwdZmR3OAJmtE"
    },
    {
      id: 7,
      companyName: "Abarobotics",
      companyLink: "https://www.abarobotics.com/",
      description: "Interned as a Full-Stack Web Developer, developing several web projects with the team using Laravel.",
      position: "Fullstack Web Developer",
      type: "Internship",
      duration: "July 2024 - Present",
      imageUrl: "https://avatars.githubusercontent.com/u/136546652?v=4?s=400"
    },
  ];

  const experiencesDescending = [...experiencesData].sort((a, b) => b.id - a.id);

  return (
    <section id="experiences" className="my-7 container pt-16">
      <div>
        <article className='text-center'>
          <p className="font-medium text-xl source-sans text-red-dark dark:text-white">Experiences</p>
          <h1 className="playfair-display font-bold text-3xl text-center text-pink-primary">My Experiences</h1>
          <div className='flex justify-center'>
            <p className='w-full md:w-1/2 text-md justify-center'>
              Here are some of my most recent internship and work experiences.
            </p>
          </div>
        </article>
        <div className='mt-8'>
          {experiencesDescending.map((experience, index) => (
            <div
              key={experience.id}
              className={`grid grid-cols-1 sm:grid-cols-5 text-${index % 2 === 0 ? 'end' : 'start'} gap-6 mt-6 place-items-center sm:place-items-${index % 2 === 0 ? 'end' : 'start'}`}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="sm:col-span-3 order-2 sm:order-1 md:text-end">
                    <p className="font-medium text-xl source-sans text-red-dark dark:text-white">{experience.position}</p>
                    <a
                      href={experience.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="playfair-display font-bold text-2xl text-pink-primary"
                    >
                      {experience.companyName}
                    </a>
                    <p className="font-medium mt-1">
                      {experience.type} <span className="italic font-light">{experience.duration}</span>
                    </p>
                    <p className="text-md source-sans">{experience.description}</p>
                  </div>
                  <div className="sm:col-span-2 order-1 sm:order-2">
                    <img src={experience.imageUrl} alt={experience.companyName} className="rounded-lg h-32 md:h-52 w-full sm:w-auto" />
                  </div>
                </>
              ) : (
                <>
                  <div className="sm:col-span-2 order-1 sm:order-1">
                    <img src={experience.imageUrl} alt={experience.companyName} className="rounded-lg h-32 md:h-52 w-full sm:w-auto" />
                  </div>
                  <div className="sm:col-span-3 order-2 sm:order-2 text-center md:text-start">
                    <p className="font-medium text-xl source-sans text-red-dark dark:text-white">{experience.position}</p>
                    <a
                      href={experience.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="playfair-display font-bold text-2xl md:text-start text-pink-primary"
                    >
                      {experience.companyName}
                    </a>
                    <p className="font-medium mt-1">
                      {experience.type} <span className="italic font-light">{experience.duration}</span>
                    </p>
                    <p className="text-md source-sans">{experience.description}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}

export default experiences;
