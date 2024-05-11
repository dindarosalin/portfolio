// import PDFViewer from "tailwind-pdf-viewer"
// import resume from "../assets/docs/resume.pdf";

const experiences = () => {
  const experiencesData = [
    {
      id: 1,
      companyName: "ADS Digital Partner",
      companyLink: "https://adsdigitalpartner.co.id/",
      position: "Fullstack Web Developer",
      type: "Internship",
      duration: "Feb-June 2024",
      imageUrl: "https://karirlab-prod-bucket.s3.ap-southeast-1.amazonaws.com/files/privates/0Mi8MzF6FmwVOWQv4xYbA0vD2Orrg0ASVn2U9oho.png"
    },
    {
      id: 2,
      companyName: "Tinggalklik",
      companyLink: "https://www.linkedin.com/company/tinggalklik/",
      position: "Frontend Web Developer",
      type: "Internship",
      duration: "Jan-March 2024",
      imageUrl: "https://media.licdn.com/dms/image/C560BAQHLZ02Yun0yEQ/company-logo_200_200/0/1639933390165?e=1723680000&v=beta&t=NCnTO8qV6NHlG03FA6eOSRkf_ITNU3LxrcBnE0phzVw"
    },
    {
      id: 3,
      companyName: "Dicoding Indonesia",
      companyLink: "https://www.dicoding.com/",
      position: "Frontend and Backend Web Developer",
      type: "Course",
      duration: "Aug-Dec 2023",
      imageUrl: "https://yt3.ggpht.com/a-/AN66SAxduc7UZqTVgU0IxluPFRLA0Nhn_SWR7tis8g=s900-mo-c-c0xffffffff-rj-k-no"
    },
    {
      id: 4,
      companyName: "Vocational School Graduate Academy",
      companyLink: "https://digitalent.kominfo.go.id/program?akademi=VSGA",
      position: "Junior Web Developer",
      type: "Course",
      duration: "August 2023",
      imageUrl: "https://play-lh.googleusercontent.com/p5E-YoYPD-PUZQw9zb9z4si0JRhkpuivjnEaGYTSoPyv6WyQ4IgVrmARsjXN38KM0Q"
    },
    {
      id: 5,
      companyName: "Vocational School Graduate Academy",
      companyLink: "https://digitalent.kominfo.go.id/program?akademi=VSGA",
      position: "Junior Graphic Designer",
      type: "Course",
      duration: "October 2022",
      imageUrl: "https://play-lh.googleusercontent.com/p5E-YoYPD-PUZQw9zb9z4si0JRhkpuivjnEaGYTSoPyv6WyQ4IgVrmARsjXN38KM0Q"
    },
    {
      id: 6,
      companyName: "Media Center Poliwangi",
      companyLink: "https://www.instagram.com/mediacenter.poliwangi",
      position: "Copywriter",
      type: "Part-time",
      duration: "March 2022 - March 2024",
      imageUrl: "https://media.licdn.com/dms/image/D560BAQEeh-Xblbnlrw/company-logo_200_200/0/1702953433053?e=1723680000&v=beta&t=yI_Oc_pQeB0EJkjXa3k_Ktmx4vhn9p4DyYP2Dk8GwP0"
    },
  ];

  return (
    <section id="experiences" className="mt-7">
      <h1 className="text-3xl">Exepriences and Certifications</h1>
      <div className="flex flex-col md:flex-row lg:flex-row justify-between mt-5 ">
        <div className="flex flex-col gap-10 w-full">
          {experiencesData.map((experience) => (
            <div key={experience.id} className="flex flex-row gap-5 text-start">
              <div>
                <img src={experience.imageUrl} alt="Company" className="rounded-full h-16" />
              </div>
              <div>
                <a href={experience.companyLink} target="_blank" className="font-bold text-xl hover:text-gold ease-in-out duration-300">{experience.companyName}</a>
                <h2 className="subtitle italic">{experience.position}</h2>
                <p className="font-medium mt-1">{experience.type} <span className="italic font-light">{experience.duration}</span></p>
              </div>
            </div>
          ))}
        </div>
        <div className="outline outline-1 outline-gold rounded w-full mt-5 md:mt-1 lg:mt-1">
          <h1 className="text-md m-3">
          {/* <PDFViewer pdfURL={resume} /> */}
          </h1>
        </div>
      </div>

    </section>
  );
}

export default experiences;
