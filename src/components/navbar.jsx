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
        <nav
            className="
                sticky top-4 z-10
                mx-auto mb-5 w-max
                rounded-full
                border border-border
                bg-surface/80
                px-5 py-3
                font-body
                shadow-soft
                backdrop-blur-sm
            "
        >
            <ul
                className="
                    flex
                    justify-between
                    gap-5
                    text-sm
                    font-normal
                    text-pink-primary
                "
            >
                {navItems.map((item) => (
                    <li
                        key={item.id}
                        className={`
                            duration-300
                            ease-in-out
                            hover:font-medium
                            hover:text-pink-dark
                            ${
                                activeSection === item.id
                                    ? 'font-medium text-pink-dark'
                                    : ''
                            }
                        `}
                    >
                        <a
                            href={`#${item.id}`}
                            className="sm:hidden"
                            aria-label={item.label}
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