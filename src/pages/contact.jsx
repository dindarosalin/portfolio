import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faDownload, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const contact = () => {
  return (
    <section id="contact" className="mt-9">
        <div className='border border-1 border-gold mb-5'></div>
        <h3 className="uppercase text-gold font-bold text-md">Contact Me</h3>
        <h1 className="text-3xl font-bold">Hire Me as Your Partner</h1>
        <p className="font-light text-md text-center mt-5">Anda dapat menyesuaikan properti dalam objek  sesuai dengan informasi <br/> yang ingin Anda tampilkan di komponen experiences.</p>
        <div className='mt-7 flex justify-center flex-col gap-3 md:flex-row lg:flex-row md:gap-7 lg:gap-7'>
            <button className="hover:shadow-lg hover:shadow-gold hover:scale-105 transition cursor-pointer duration-500 ease-in-out shadow-md shadow-gold outline outline-gold outline-1 outline-offset-2 rounded py-2 px-3 mt-4 text-gold">
                <FontAwesomeIcon icon={faDownload} className='h-4'/> Get My Curricullum Vitae
            </button>
            <button className="hover:shadow-lg hover:shadow-gold hover:scale-105 transition cursor-pointer duration-500 ease-in-out shadow-md shadow-gold outline outline-gold outline-1 outline-offset-2 rounded py-2 px-3 mt-4 text-gold">
                <FontAwesomeIcon icon={faPhone} className='h-4'/> Contact Me
            </button>
        </div>
        <div className='mt-5'>
            <p className='text-gold italic'>Feel Free to connect with me</p>
            <div className='m-2 flex justify-center gap-8'>
                <a href="https://www.linkedin.com/in/dindarosalin/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className='h-6 hover:text-gold ease-in-out duration-300'/>
                </a>
                <a href="mailto:dindarosalin24@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} className='h-6 hover:text-gold ease-in-out duration-300 '/>
                </a>
                <a href="https://github.com/dindarosalin/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className='h-6 hover:text-gold ease-in-out duration-300'/>
                </a>
                <a href="https://www.instagram.com/dindarosalin" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className='h-6 hover:text-gold ease-in-out duration-300'/>
                </a>
            </div>
        </div>

    </section>
  )
}

export default contact