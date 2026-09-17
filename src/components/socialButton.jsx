import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialButton = ({ icon, label, href }) => {
    return (
        <a
            target="_blank"
            rel="noreferrer"
            href={href}
            className="flex flex-row gap-1 justify-center items-center font-medium hover:shadow-lg transition cursor-pointer duration-500 ease-in-out shadow-sm outline-offset-2 rounded-md py-2 px-3 mb-2 text-sm bg-pink-darker text-white"
        >
            <FontAwesomeIcon icon={icon} className="h-4 w-4" />
            <p>{label}</p>
        </a>
    )
}

export default SocialButton