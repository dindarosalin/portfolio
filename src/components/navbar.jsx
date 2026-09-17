import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser,
    faTable,
    faList,
    faAddressBook,
} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]')
            let currentSection = ''

            sections.forEach((section) => {
                const sectionTop = section.offsetTop

                if (window.scrollY >= sectionTop - 60) {
                    currentSection = section.getAttribute('id')
                }
            })

            setActiveSection(currentSection)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const navItems = [
        {
            id: 'about',
            label: 'About',
            icon: faUser,
        },
        {
            id: 'projects',
            label: 'Projects',
            icon: faTable,
        },
        {
            id: 'experiences',
            label: 'Experiences',
            icon: faList,
        },
        {
            id: 'contact',
            label: 'Connect to Me',
            icon: faAddressBook,
        },
    ]

    return (
        <nav className="z-10 bg-white/25 backdrop-blur-sm rounded-full px-5 py-3 w-max mx-auto sticky top-4 mb-5 duration-300 ease-in-out">
            <ul className="flex text-md font-normal text-pink-primary justify-between gap-5">
                {navItems.map((item) => (
                    <li
                        key={item.id}
                        className={`
                            hover:font-medium
                            hover:text-pink-darker
                            duration-300
                            ease-in-out
                            ${activeSection === item.id
                                ? 'text-pink-darker font-medium'
                                : ''
                            }
                        `}
                    >
                        <a
                            href={`#${item.id}`}
                            className="sm:hidden"
                        >
                            <FontAwesomeIcon icon={item.icon} />
                        </a>

                        <a
                            href={`#${item.id}`}
                            className="hidden md:inline-block"
                        >
                            <FontAwesomeIcon
                                icon={item.icon}
                                className="me-2"
                            />
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar