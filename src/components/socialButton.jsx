import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialButton = ({ icon, label, href }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-md
                border
                border-red-dark
                bg-pink-primary
                px-4
                py-2
                text-sm
                font-medium
                text-red-dark
                shadow-md
                outline-offset-2
                transition-all
                duration-300
                ease-in-out
                hover:-translate-y-0.5
                hover:bg-pink-secondary
                hover:shadow-lg
                focus:outline-none
                focus:ring-2
                focus:ring-pink-primary
            "
        >
            <FontAwesomeIcon
                icon={icon}
                className="h-4 w-4"
            />

            <span>{label}</span>
        </a>
    )
}

export default SocialButton