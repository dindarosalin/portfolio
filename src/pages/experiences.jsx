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
      imageUrl: "https://asset.brandfetch.io/idK1RDMSRY/idPamGvnsf.jpeg?updated=1681745888429"
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

  const certificateData = [
    {
      id: 1,
      name: 'MENJADI FRONT-END WEB DEVELOPER EXPERT',
      instansi: 'Dicoding Academy',
      publishDate: '2023',
      expDate: '*',
      credentialUrl: 'https://www.dicoding.com/certificates/2VX36ENEVXYQ',
    },
    {
      id: 2,
      name: 'BELAJAR FUNDAMENTAL APLIKASI WEB DENGAN REACT',
      instansi: 'Dicoding Academy',
      publishDate: '2023',
      expDate: '*',
      credentialUrl: 'https://www.dicoding.com/certificates/53XEYWYQ9PRN',
    },
    {
      id: 3,
      name: 'JUNIOR WEB DEVELOPER',
      instansi: 'BNSP',
      publishDate: '2023',
      expDate: '2026',
      credentialUrl: 'https://drive.google.com/file/d/16nirxSnIg-mYhRIdMSywxObth_rru4A_/view',
    },
    {
      id: 4,
      name: 'Junior Graphic Designer',
      instansi: 'BNSP',
      publishDate: '2022',
      expDate: '2025',
      credentialUrl: 'https://drive.google.com/file/d/16vArotl0IEqtaT1pzmZv1S1Ah6sO-Jol/view',
    },
    {
      id: 5,
      name: 'Kompetensi Keahlian Teknik Komputer dan Jaringan',
      instansi: 'BNSP',
      publishDate: '2021',
      expDate: '2024',
      credentialUrl: 'https://drive.google.com/file/d/1OWPOZwF4rulda2vdkPQIHwBBOeK246Fh/view',
    }
  ]

  return (
    <section id="experiences" className="my-7 container">
      <h1 className="text-3xl">Exepriences and Certifications</h1>
      <div className="flex flex-col md:flex-row lg:flex-row justify-between mt-5 ">
        <div className="flex flex-col gap-10 w-full">
          {experiencesData.map((experience) => (
            <div key={experience.id} className="flex flex-row gap-5 text-start">
              <div className="block relative">
                <img src={experience.imageUrl} alt="Company" className="rounded-full w-16" />
              </div>
              <div>
                <a href={experience.companyLink} target="_blank" className="font-bold text-xl hover:text-gold ease-in-out duration-300">{experience.companyName}</a>
                <h2 className="subtitle italic">{experience.position}</h2>
                <p className="font-medium mt-1">{experience.type} <span className="italic font-light">{experience.duration}</span></p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full mt-5 md:mt-1 lg:mt-1">
          <h1 className="text-xl text-start m-5 mt-0">Certificate</h1>
          <div className="mt-4">
          {certificateData.map((certificate) => (
            <div key={certificate.id} className="p-3 m-5 flex flex-row justify-between gap-5 bg-gold rounded outline outline-offset-4 outline-1 outline-gold">
              <div className="text-start">
                <h2 className="font-gold font-normal uppercase">{certificate.name}</h2>
                <p className="font-medium">{certificate.instansi} - 
                  <a href={certificate.credentialUrl} target="_blank" rel="noopener noreferrer" className="font-normal hover:text-normal italic decoration-white hover:font-medium transition ease-in-out duration-300 mt-3 underline underline-1"> Credential</a>
                </p>
              </div>
              <div className="flex justify-end">
                <p className="font-medium mt-1"><span className="italic font-normal">{certificate.publishDate} - {certificate.expDate}</span></p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default experiences;
