import Marquee from "react-fast-marquee";

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
        <section id="learn" className="my-10 py-3 w-full p-0 rounded-lg pt-16">
            <div className='m-5'>
                <h1 className="font-medium text-3xl text-center md:text-start underline decoration-gold"><span className="text-gold font-bold">My Stucks</span> and Tools.</h1>
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
        </section>
    );
};

export default learn;
