import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faTable, faList, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let currentSection = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 60) { // Sesuaikan dengan tinggi navbar
                    currentSection = section.getAttribute('id');
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="z-10 bg-white rounded-full px-5 py-3 w-max mx-auto bg-white/25 backdrop-blur-sm sticky top-4 mb-5 duration-300 ease-in-out">
            <ul className="flex text-white text-md font-light justify-between gap-5">
                <li className={`hover:font-medium hover:text-gold duration-300 ease-in-out ${activeSection === 'about' ? 'text-gold font-medium' : ''}`}>
                    <a href="#about" className="sm:hidden">
                        <FontAwesomeIcon icon={faUser} />
                    </a>
                    <a href="#about" className="hidden md:inline-block">
                        <FontAwesomeIcon icon={faUser} className='me-2'/>
                        About
                    </a>
                </li>
                <li className={`hover:font-medium hover:text-gold duration-300 ease-in-out ${activeSection === 'projects' ? 'text-gold font-medium' : ''}`}>
                    <a href="#projects" className="sm:hidden">
                        <FontAwesomeIcon icon={faTable} />
                    </a>
                    <a href="#projects" className="hidden md:inline-block">
                        <FontAwesomeIcon icon={faTable} className='me-2'/>
                        Projects
                    </a>
                </li>
                <li className={`hover:font-medium hover:text-gold duration-300 ease-in-out ${activeSection === 'experiences' ? 'text-gold font-medium' : ''}`}>
                    <a href="#experiences" className="sm:hidden">
                        <FontAwesomeIcon icon={faList} />
                    </a>
                    <a href="#experiences" className="hidden md:inline-block">
                        <FontAwesomeIcon icon={faList} className='me-2'/>
                        Experiences
                    </a>
                </li>
                <li className={`hover:font-medium hover:text-gold duration-300 ease-in-out ${activeSection === 'contact' ? 'text-gold font-medium' : ''}`}>
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

export default Navbar;
