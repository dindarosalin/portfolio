import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

import SocialButton from '../../components/socialButton'

const Home = () => {
    return (
        <section id="home" className="pt-16 container">
            <div className="flex flex-col md:flex-row items-center justify-center">
                
                <div className="w-full text-start md:w-2/4 m-6">
                    <h1 className="text-h2 md:text-h1 font-bold text-heading2 md:text-heading1 my-heading leading-h2 md:leading-h1 text-left text-pink-darker playfair-display mb-4">
                        Hello There! My <br />
                        name is Dinda Rosalin. <br />
                        I’m a Student
                    </h1>

                    <SocialButton
                        icon={faInstagram}
                        label="Lets be moots"
                        href="https://www.instagram.com/dindarosalin"
                    />
                </div>

            </div>
        </section>
    )
}

export default Home