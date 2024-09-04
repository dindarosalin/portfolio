import Marquee from "react-fast-marquee";
import GitHubCalendar from 'react-github-calendar';

const learn = () => {
    // Array of SVG file names
    const svgIcons = [
        'html.svg',
        'css.svg',
        'javascript.svg',
        'vite.svg',
        'reactjs.svg',
        'nodejs.svg',
        'webpack.svg',
        'php.svg',
        'laravel.svg',
        'laragon.svg',
        'mysql.svg',
        'xampp.svg',
        'postman.svg',
        'tailwindcss.svg',
        'bootsrap.svg',
        'git.svg',
        'github.svg',
        'gitlab.svg',
        'vscode.svg',
    ];

    // Path to your SVG icons directory
    const svgIconDirectory = 'images/icon_svg/';

    return (
        <section id="learn" className="my-10 py-2 w-full p-0 bg-pink-light dark:text-red-dark dark:bg-pink-darker">
            <div className="justify-center container">
                <div>
                    <p className="font-medium text-lg source-sans text-red-dark">Tools</p>
                    <h1 className="playfair-display font-bold text-3xl text-center">My Tools and Contibution.</h1>
                </div>
                <div>
                    <Marquee behavior="" direction="left">
                        <div className="flex">
                            {svgIcons.map((icon, index) => (
                                <div key={index} className="max-w-24 md:max-w-32 w-full p-4 rounded-md me-2">
                                    <img src={`${svgIconDirectory}${icon}`} alt={icon} className="w-18 md:w-24" />
                                </div>
                            ))}
                        </div>
                    </Marquee>
                </div>
            </div>
            
            <div id="contributions" className="justify-center container">
                <div className="flex justify-center">
                    <GitHubCalendar 
                        username="dindarosalin" 
                        blockSize={15} 
                        blockMargin={5} 
                        fontSize={16} 
                        colorScheme="light" 
                        className="place-self-center" 
                    />
                </div>
            </div>
        </section>
    );
};

export default learn;
