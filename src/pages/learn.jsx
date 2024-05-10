import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faLaravel, faReact, faPhp, faJs, faHtml5, faCss3, faNodeJs, faBootstrap, faGitAlt } from '@fortawesome/free-brands-svg-icons';

const icons = [faPhp, faLaravel, faJs, faReact, faNodeJs, faHtml5, faCss3, faBootstrap, faGitAlt];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPreviousSlide = () => {
        const index = (currentIndex === 0) ? icons.length - 1 : currentIndex - 1;
        setCurrentIndex(index);
    };

    const goToNextSlide = () => {
        const index = (currentIndex === icons.length - 1) ? 0 : currentIndex + 1;
        setCurrentIndex(index);
    };

    return (
        <section id="learn" className="bg-gold my-10 py-3 w-full p-0 rounded-lg">
            <div>
                <h1 className="font-medium text-3xl">I Learn</h1>
            </div>
            <div className="relative m-4 overflow-hidden">
                <div className="flex gap-5 p-3 transition-transform ease-in-out duration-300 transform" style={{ width: `${icons.length * 100}%`, marginLeft: `-${currentIndex * (100 / icons.length)}%` }}>
                    {icons.map((icon, index) => (
                        <div key={index} className="max-w-44 rounded overflow-hidden outline-white outline outline-1 p-2" style={{ width: `calc(100% / ${icons.length})` }}>
                            <FontAwesomeIcon icon={icon} className='h-24 text-white' />
                        </div>
                    ))}
                </div>
                <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2" onClick={goToPreviousSlide}>
                    <FontAwesomeIcon icon={faChevronLeft} className="text-gray-800" />
                </button>
                <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2" onClick={goToNextSlide}>
                    <FontAwesomeIcon icon={faChevronRight} className="text-gray-800" />
                </button>
            </div>
        </section>
    );
};

export default Slider;
