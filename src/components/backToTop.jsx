import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

import Button from './button'

const BackToTop = () => {
    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div
            className="
                fixed
                bottom-6
                left-0
                z-50
                w-full
            "
        >
            <div
                className="
                    container
                    mx-auto
                    flex
                    justify-end
                    px-6
                    sm:px-8
                    lg:px-10
                "
            >
                <Button
                    onClick={handleBackToTop}
                    aria-label="Back to top"
                >
                    <FontAwesomeIcon icon={faArrowUp} className="text-xl" />
                </Button>
            </div>
        </div>
    )
}

export default BackToTop