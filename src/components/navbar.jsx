import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faTable, faList, faAddressBook, faCertificate } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <nav className="z-10 bg-white rounded px-5 py-3 w-max mx-auto bg-white/25 backdrop-blur-sm sticky top-5 mb-5 transition duration-150 ease-out">
            <ul className="flex text-white text-md font-light justify-between gap-5">
                <li className=' hover:font-medium hover:text-gold active:text-gold active:font-medium transition duration-150 ease-out hover:ease-in'>
                    <a href="#about" className="sm:hidden">
                        <FontAwesomeIcon icon={faUser} />
                    </a>
                    <a href="#about" className="hidden md:inline-block">
                    <FontAwesomeIcon icon={faUser} className='me-2'/>
                        About
                    </a>
                </li>
                <li className=' hover:font-medium hover:text-gold active:text-gold active:font-medium transition duration-150 ease-out hover:ease-in'>
                    <a href="#projects" className="sm:hidden">
                        <FontAwesomeIcon icon={faTable} />
                    </a>
                    <a href="#projects" className="hidden md:inline-block">
                    <FontAwesomeIcon icon={faTable}  className='me-2'/>
                        Projects
                    </a>
                </li>
                <li className=' hover:font-medium hover:text-gold active:text-gold active:font-medium transition duration-150 ease-out hover:ease-in'>
                    <a href="#experiences" className="sm:hidden">
                        <FontAwesomeIcon icon={faList} />
                    </a>
                    <a href="#experiences" className="hidden md:inline-block">
                    <FontAwesomeIcon icon={faList} className='me-2'/>
                        Experiences
                    </a>
                </li>
                <li className=' hover:font-medium hover:text-gold active:text-gold active:font-medium transition duration-150 ease-out hover:ease-in'>
                    <a href="#cetrtificate" className="sm:hidden">
                        <FontAwesomeIcon icon={faCertificate} />
                    </a>
                    <a href="#cetrtificate" className="hidden md:inline-block">
                    <FontAwesomeIcon icon={faCertificate} className='me-2'/>
                        Certifications
                    </a>
                </li>
                <li className=' hover:font-medium hover:text-gold active:text-gold active:font-medium transition duration-150 ease-out hover:ease-in'>
                    <a href="#contact" className="sm:hidden">
                        <FontAwesomeIcon icon={faAddressBook} />
                    </a>
                    <a href="#contact" className="hidden md:inline-block">
                    <FontAwesomeIcon icon={faAddressBook} className='me-2'/>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
