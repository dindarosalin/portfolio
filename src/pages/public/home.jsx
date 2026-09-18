import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

// import SocialButton from '../../components/socialButton'
import Button from '../../components/button'

const Home = () => {
    return (
        <section
            id="home"
            className="mx-auto min-h-[80vh] max-w-content px-6 sm:px-8 lg:px-10"
        >
             <div className="grid min-h-[80vh] items-center gap-10 md:grid-cols-2">

                {/* Introduction */}
                <div className="text-center md:text-left">
                    <h1
                        className="
                            font-heading
                            text-h2
                            font-bold
                            leading-h2
                            text-pink-dark
                            md:text-h1
                            md:leading-h1
                        "
                    >
                        Hello There! My <br />
                        name is Dinda Rosalin. <br />
                        I’m a Student
                    </h1>

                    {/* <div className="mt-6">
                        <SocialButton
                            icon={faInstagram}
                            label="Lets be moots"
                            href="https://www.instagram.com/dindarosalin"
                        />
                    </div> */}
                <div className="mt-6">
                    <Button href="https://www.instagram.com/dindarosalin">
                        <FontAwesomeIcon
                            icon={faInstagram}
                        />
                        Lets be moots
                    </Button>
                </div>

                </div>

                {/* Visual Area */}
                <div className="flex min-h-[280px] items-center justify-center">
                    {/* Profile photo / illustration can be added here */}
                </div>

            </div>
        </section>
    )
}

export default Home