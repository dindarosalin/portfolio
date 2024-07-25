import React from 'react'

const certifications = () => {
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
        <div>
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
    )
}

export default certifications