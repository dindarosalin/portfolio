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
      companyLink: "https://digitalent.kominfo.go.id/",
      position: "Junior Web Developer",
      type: "Course",
      duration: "August 2023",
      imageUrl: "data:image/png;base64,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"
    },
    {
      id: 5,
      companyName: "Vocational School Graduate Academy",
      companyLink: "https://digitalent.kominfo.go.id/",
      position: "Junior Graphic Designer",
      type: "Course",
      duration: "October 2022",
      imageUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACQCAMAAACF3Kb9AAADAFBMVEUAAAAAfv8AAAACJkeM1fz////l9v/r+P/t+f/q9P/n9f/V7//M7P/M6//i9//Z8v/R7v/R8P/K7P/f9P/V8f/c8v/Y8P/1uhb0thnh9P/H6v/G6f205P2w4/7w+P+25P275v3C6P2/6P285/3A6P2t4f7zshyu4v6r3/4BVqwCNmkCM2HxrR/ysB245f0BZ8/3wBIBWrMCNGUBVaiq4P7wqiEBUJ+T2PwBY8b4wxABXbkCOGwBYMACOnH/2QCP1vyR1/wBU6UBZcwAadOZ2fyn3vz5xw2V2Pyc2/wCMF0BZMkBWK+e2/v2vRSk3vwBPXcBXryN1fwBW7YCLlia2fy45f2j3f0BYcOm3v0AbNn8zweg3P2z4v7w9//6ygux4vyv4fzvpSWt4fwBS5UBRYcBTprtoCgBR42q4P391AQBQoKo3/0BSpGe2/zrmiwAfv8Afv/okDQCKU4AAACAgICWn6WZqLFqam9Xrf+h3fyXrrxra2xpaW0DgP+63vEBZstoaGwBfv+b2vwCXbgAfv+UscKarrqYo6hqamwAfv9mZmbg8PcAgP/O5fKNudJwcHAAf//Y7venuMRkZG3K2OACL1sAf/8Agf8AAAChs76dpaux2u4Afv8Egf8AAACK0fi94fSeqbCxy9kAAAAAff8ASJcANmyxvcOPscShvM3F4vGz1OayyNTB1+UDMV8AAAAAff8DLlalsLfT4eyGvtwAfv+04PhdXV2t3PfT7PkAVf+Bw+gAAAAAVqoCO3UBWrMCM2f61AeXzOkAIGDQ7fnxqiECNWcAatGj3v3S7f8AAACcw9oARHezydIBZcmU1fySu9EAVVUDNWXM3+wAHlG7zNamzeOmwtHBztcAfv8AXbLwpSRVVYCd1f1Fo/+q//+LgVdVVXEAQEC8w8sA///2vBV2vf9yhpgDKU68nGq3iEYCOnKAgIABVqz0zzEUNVSoyNf///8Abdv/2gAAVab4xBCxpoDD6f8AO2Kc4//dtiz6yxUAZcUCRIVHpP8AM02BBCedAAABAHRSTlMA//////86JiswNWBucz5RaWR4SFtNVv//Q3yBp6wiopmGj5SKtf+xuv//////nf//////v///7//////////48////+XE/+rc////1//I///9///gns3/2v//0rsh/8HG/8v//////9D//9X/6P/cs///BAN6kjWT4qRAJu6LgBv47oBps5eFS5QJPARe3hBTS34SSpiJIXWFb52vyO//e3qB1UISHl3BommRdmpmXS1Pa0XoEaELqFwD/0CRVfo849MIP/TXHWMUlcEGcuzb0wPHVA1iq5NWPyHaBp+FA08JBEQBVID/up+DkgjEu/+ZAgdFQt+GLw0S/+o1oZ8KeR2M8wAADfNJREFUeJztnQl8FUcdxzcRT6gFRRNrteUotknQFEw1WNSCoqlELEiVisDDGi1tQwMhUQIJGAqUm2BrAZFAbZGzcpRCtf20Vmlra2219vC+7/u+9T/3vTuz75EXyP7K2/3v/GdnZ775z7zNe/90o0yZMmXKlClTpkyZMvUB9SMqdjd6vSgnoWJ3qNfKIJXxcsmBKsNlKgZVhktTAquMllAiqgwXlxerPk6rje49WfVtWmXVeHeZvwrfhxKLtSHenXB2tCzendCkVa0NNSPL6ydE0ZtClNjsEu8ORNF1JSVRCQj1m4haaINN2X0Ds276JCtEhnQOsZxNztXcS6nlRytXVR5Fbw5TUqv1IbBQn/kPWOzQEKSjeLdRy+lGsKJojeH2UmND7kvR6wKV0Oaq8hBarM/oP/RvKbFwIfmh43Lm/oTq/qzmJjZxX8cKqZteCP14aD2YrOw0DzU3Nbflore5dcRaGtfkkl/makaUrffGRKYKnxySxQ/Tube53DCXQWtEoacWoddbYlRebS2Oa7O5MVfjj0qECQuDDWDCbME/e1Z4B1iLWZTQMJHcMOINd2juuYqbTzrmlq8Y0Nt/vNulI2T9t3ji2lvV1NbgT4tPCrFDM825Gjl2z8TX4oTImmXW8tXb3TqC1n+rJ6a9tuboThSxfgJY+H2J9pztpSVauJfZ3Tdp1TS30gqBVfKMcEPA+uvBiTGC9b9KLSHrwcSQK6RSwlKSn3vuDaHdoXpfjCY2TVyXkwu+KlbWPqnLY/QF+uISb0Pwnt339M4QCVZ9M7TeGiIXLHAVqfs9q9eGSIZFacnuY0UdycnXg+eHyIBl1MCNNr+R6E/FHNlJ0HlB0mDZqtx3FSVFVewBFlKvCpIKy/Sfd8VVIEHqvtZNxR5gIfWKICmwDO+xK0ASrO8vujOKZhR7hAXU2UFSYGm+YzNmUFiUFkIVrYdPFj01b57NjNMUELectQ7W1dV5dyJW5wRJgaV4jk6YAZJCqxWhippba317Mu/n0bwnAmABHUSI03JUezyqrIzwK3+9OkgKLNlxdMIEREuE1pJm3Pym+uq/+HUE8Zl3kB7ExAnDg7ZSxLiCh4IqDKxzt54bIAUW+qrnHFK+tbaWw8Khxdb1RWX15AuRRPGJdJCGTHRgyo1aAOFimFQITF3dDwmh+/EWaFRCdQyGMsKtjRqF/uFXFFVUoM3fo4roXrAqbguFNez6YQEyYGGdD6wAlhRaR4eR1pvbyst8P2KegtkAlf9NYXjQDrGpuxFzORCdgC2NoXtZzLDQOVE5KnqEgaGMsADRAUyJ0HoDCDbICIU1tLx+qL/ssLZXV6uw2ocOJa1vGlFeXvYT79C6H7YIBwYCL2lHuFSiABIzSsLCTEoEXjiMkBgYmdHYseQVoiWNuaoRZbuH+8oKa3s9giXRah8+vH1JQ0MuV1NTNXIExBb4JyTfQuDpxeYYbAgXigcjqqyUI4ZOrorbKB1GqEKA4bAInXs4o0BYQ4YMgW3zwlzNXjD91M8Ga3s9wJBDqx1qDv/9ypWAi9ICXK0e32CIuJEoicihOx4xgpAZOgCCs2B0aNmkSXCINtjw0MuZoqbGhhp+FK+h9q/zP1eGaInQ2ktqr29DtHKYVnnZIvLmmEgLBQ8YJh4WNdL0UgmhUDnBI0aGxeiQf6GwzhJqf+qs7oXSsUtKSJmSQ4ueEf26VdDy+KVHMOJ4kBgetCzzyGFvYwQLEjJ/RY6isQQEZzGJU0Ii5fdgw4PWiwKVAIriwqEFsLrpWXCZnQvJwjVylcdPsOJxeH3No6JT2tA9J1m8zgiSFylKC4eWdG738sZGvHCd4dOvCr4i9yINCJA3Kh5a/S4TZ+9samxsbEG0BhR70Ck1MEABrEpKyBIPSTbs7AGbm5oau5YDrdzAgcUedjoN8lYQKjoPUUbSAHr+npampv2D9mwGWoMGFXvYqdTfW4GsyDzEGUm0gX1NXWthd3xfS1euf/9iDzyNBvsqlBXcPgAskpKEGzje9ZXjpKn9XWsHDy7wOOYgFbhNQy/1VDArDKv2Y0S4ibW8sbVgpuksJmJDMudKrFvzY5GoM/0Uzuqf6Mb0Wipbk6E9JaRcAURo5Y0jXi9xaodkh7Mqwb/zMFjXWtoP6+ecOf+BrRvJh7Dy5xGrFztVXi/scFb4F8TqjzJZ2g/qJiVUZFgvs2sLSsSqr6VHwajQBwuI1nu5zEuE9PJKisGN5BqsvHHE64UO7fpFruqv1LbQEBRkrauqGjlyBHyqALBwaAmXeYWATnI+CJUdyQew8sYRr+e41AiZoNQ0UF3NpJUKWDS0eMWrzQsEdJLzccdPj8B6gUOrm1ZvaUBG99nf1VB9WEgrp7BEaElVjSsEdBLxufUaQOFG8kGswjBx6vkO/Qhel8/G0liRQotr9ux1NWpoVUtVjSsEdJIworDsSBCqiy4qDBOnnufULCaVFS82XLNmPUZh8dCSqhrtB3SShA1AkuPnEUQHRI6wyWBh+xIQObwbmZf8GSzYjR49GpXBjloBeq5DM7lUVqLc8M2c+Rh8xq4s8VJV4wohvcSM4P5cQsIs6ZDCIZAwIFxAuCAy1Lggii6gCoP1frumC6mwJIfumz79YQaL0Kqvl+vqlwjqJkWkwRJoJDaAhO5E7BAwjBCy3kEUBssu30wZzffwZ7TQkusWol94bvH4YQGEDgUajkgKHWRhMoLRhVgF6JN3pozme1KGhUNLqluAfhlzS4ojjuY3zJBCB1kXfhOMTo4IdpMnT07VCyW3xTdTxvAdw7Dk0JLqpuqXJmlqCTpYPHYwGbS7WwodbnYCIIIIdmPGjEnTiR+USQdTVck8Fsf4SqZOPXp9jRZaUt00/dIlrcrYEosOjh1lVmFANHQ4ok4ARBBhIxzW/Fb0N27VPMssJlMmNosGjp8EWurdg6gb3C+LyLpMbIKH8dGXIIwHgocccTCdY94FQhbaEytQK+Gvvfif5mqJMt+RecRm0cDxViO0RN0U/TKE6ChTS40dtgRhNHLocDCd3LoYK0Ufvg1/v8QP4jJlYrNoUMFuPbRE3TRwdMl41OCR0KDgQXspdDiYTm69BytFH1pb16/8FrXjM2WSfHuV0ELzkNdNh0eVPLUYIIJIzCo1dkhNDqaDW6/HStEH9HU6m4ZGqowCJNG3e6F2Y8qq/o00/oc0jLi0VZkQIog4GjV2SEUOpoNbl2Ll1RspoYZJAZLoawdYamix/Jw9IlUntfRVWSw8FzM0ApEUOsjCYDo4onFYKfsBiS5fhN1DCQkzMT5S9BQPLXZjaubgpOyiZVXGaB5FBkOD9/9GPil0kIXBdHBEr8FK0wmeIfO9pKSZGB8p6l6+ULsxtWXipIRlrMo8erCB0IjpdakIHY6ogyNC+/Hjw7sQlDjjdvFcGT20LG2mhCVWZTq/BBkWPHx6jRsnQocj6hiPhCxshMMKTJ1xuniyzHL9Yy1Lo2lhCTg8eHDIYAPxeJTML6bxEQLCwQhY07CiaWEdCM6dcbl46c4W/RNTS6upYD0gphaJIB48YgkiIQNE2F6GRRgJa9ofg67/UHj6jMMjive16B/Gm42mghVJU0tbosWkUoPHhghbD3DLX6nyZ6w1xCEkyrRoX4oZjaaDVWSlzqD570eYfkqqyGfs39wif2KKvsrXGy32wFOoUCk0UEk5ZW3XihVKaFXXao0We+QpVLAkmjNLtHO+sWOF/H0rSkDKK4umF8idRaPIg5ZxzkbAtUKEFs4x/W3aLJpeIXcWjapkWJaTNj59aMeCBSK0ICH3X+myaHqHHFk0hvD/Cy9W9vM2Pr3r0JYFVFsO7fp6qiyaXiJXFo2hxYm0nKeuPnz446DDG1enzKIx9ay0yuuqziwaUwmstgU0FZhFUzBUedJyZdHYFA8rpKXALJoUrH52Mmi5smisioUV1FJYFo2qJ/i4nw1ihiiiDlpC9tyfFy13Fo1VblaBDQVl0agSw2ZIfiehobA4v0LCcmXROOWCFdxQIWYhJSJHGLJkNCas9LRemUKW24gUrRRixZLiiLMisGKmYX7viKeWDFhow5GwEjXYxJqWwaKRw8iJ4gyWBkvQ4BZH1+enob7AW2CJYMtgGe+GEgzpPssFq9j971klw1LuUvs2rLx+N+xrrPKiVeyuF0MZqkyZMmVKodLSUkfx/B7uSW8WoQTb0s/bvVaI/hVOKwlYcSycSDxhnSZME2jQ4gwWlvdg+zYsPgE91nS51qdKS2+3UTCAfFkcn+KwUPfRCLRpSIvn09GRHS1kFZEAhLrYyXX4AT2+RXHaZXva4Kfj3QlnS49HtLoTmpQkDUeGJRdbYdkryOWW1pNgFfn5hnMTHvRCu67Dul0vN94NHRVkSqzWzbx20jTs5c83VCaM5Q7CBctVQYbpaD4G1hrW5555vuFdyvMNYa4LbLGs0GqtwlJrOGGpFfRi5dhjgf9xTz7f8C5kkecbSuf4wFIXeB9YtgryGpUGlvX5hvjRcEHPN1wGIaq4FytuPumYW7ri0lMGVoGeb4if5ud2p32+4cmAZW/fF5b8ZMKef77hthhW5tKjL8yBa9bN+cFyKXYpyde92Pv5hqzzaH3XYN2S9G4o7qREBcutQwFg9RJpa0zCTal2X2Wp4DhNb7enh1kgsZGxCaSETgys+ArmbZXabg8OsKCS3riUlZuW6yEixuqoQMvJr9gmLKmB00+n8dAKrwxWopTpY/tMPpMkSgst+1lgJUm7ocgUq4xVmDJUmTJlypQpU6ZMmTIVWf8HIKTnfO8FHF0AAAAASUVORK5CYII="
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
    <section id="experiences" className="my-7 container pt-16">
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
                  <p className="font-medium">{certificate.instansi} - <span>
                    <a href={certificate.credentialUrl} target="_blank" rel="noopener noreferrer" className="font-normal hover:text-normal italic decoration-white hover:font-medium transition ease-in-out duration-300 mt-3 underline underline-1">Credential</a>
                  </span>
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
