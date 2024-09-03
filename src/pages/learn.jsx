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
        <section id="learn" className="my-10 py-2 w-full p-0 rounded-lg pt-12 bg-pink-secondary">
            <div className=''>
                <p className="font-medium text-lg source-sans text-red-dark">Tools</p>
                <h1 className="playfair-display font-bold text-3xl text-center">My Tools and Contibution.</h1>
            </div>
            <div className="m-5">
                <Marquee behavior="" direction="left">
                    <div className="flex gap-4 my-4">
                        {svgIcons.map((icon, index) => (
                            <div key={index} className="max-w-24 md:max-w-32 w-full bg-gold p-4 rounded-md outline outline-1 outline-offset-4 outline-gold me-2">
                                <img src={`${svgIconDirectory}${icon}`} alt={icon} className="w-18 md:w-24" />
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
            <div id="contributions" className="justify-center">
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
