import { faLinkedin, faMediumM, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { faDownload, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const contact = () => {
    return (
        <section id="contact" className="h-screen pt-20">
            <div className='flex flex-col md:flex-row place-items-start gap-4'>
                <div className="md:w-2/3 me-6 flex flex-col justify-center place-content-center">
                    <h1 className="playfair-display font-bold text-2xl text-center mb-2">Connect With Me</h1>
                    <form action="" className="flex flex-col space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            name="senderName"
                            className="border-0 bg-pink-light p-2 rounded-md focus:ring focus:ring-pink-darker w-full"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            name="email"
                            className="border-0 bg-pink-light p-2 rounded-md focus:ring focus:ring-pink-darker w-full"
                        />
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Write your message"
                            className="border-0 bg-pink-light p-2 rounded-md focus:ring focus:ring-pink-darker w-full h-32 resize-none"
                        ></textarea>
                        <div className='place-self-end'>
                            <button
                                type="submit"
                                className="hover:shadow-lg m-2 transition cursor-pointer duration-500 ease-in-out shadow-sm outline-offset-2 rounded-md py-2 px-3 text-sm bg-pink-darker text-white flex items-center justify-center space-x-2"
                            >
                                <FontAwesomeIcon icon={faPaperPlane} />
                                <span>Send</span>
                            </button>
                        </div>
                        
                    </form>

                </div>
                <div className="md:w-1/3 justify-center flex flex-col place-content-center">
                    <table className='text-start table-auto border-separate border-spacing-2 border border-2 border-red-dark rounded-md'>
                        <caption className='caption-top font-bold uppercase'>Get In Touch</caption>
                        <tr className="shadow-sm m-3">
                            <th className="text-start font-medium">Address:</th>
                            <td>Jawa Timur Indonesia</td>
                        </tr>
                        <tr className="shadow-sm">
                            <th className="text-start font-medium">Email:</th>
                            <td className='hover:text-pink-darker transition ease-in-out duration-300'>
                                <a href="mailto:dindarosalin24@gmail.com" target="_blank" rel="noopener noreferrer">dindarosalin24@gmail.com</a>
                            </td>
                        </tr>
                        <tr className="shadow-sm">
                            <th className="text-start font-medium">Website:</th>
                            <td className='hover:text-pink-darker transition ease-in-out duration-300'>
                                <a href="dindarosalin.vercel.app" target="_blank" rel="noopener noreferrer">dindarosalin.vercel.app</a>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className=''>
                                <a href="https://www.linkedin.com/in/dindarosalin/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} className='h-6 text-pink-primary hover:text-pink-darker transition ease-in-out duration-300 m-1' />
                                </a>
                                <a href="https://www.instagram.com/dindarosalin" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faSquareInstagram} className='h-6 text-pink-primary hover:text-pink-darker transition ease-in-out duration-300 m-1' />
                                </a>
                                <a href="https://medium.com/@dindarosalin" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faMediumM} className='h-6 text-pink-primary hover:text-pink-darker transition ease-in-out duration-300 m-1' />
                                </a>
                            </td>
                        </tr>
                    </table>
                    <div className='mt-4'>
                        <a
                            target="_blank"
                            href='docs/RESUME_DINDA_ROSALIN_HUSNA_2024.pdf' download="RESUME_DINDA_ROSALIN_HUSNA_2024.pdf"
                            className="hover:shadow-lg m-2 transition cursor-pointer duration-500 ease-in-out shadow-sm outline-offset-2 rounded-md py-2 px-3 mb-2 text-sm bg-pink-darker text-white">
                            <FontAwesomeIcon icon={faDownload} /> Get My CV
                        </a>
                        <a
                            target="_blank"
                            href="https://wa.me/+6282333525346"
                            className="hover:shadow-lg m-2 transition cursor-pointer duration-500 ease-in-out shadow-sm outline-offset-2 rounded-md py-2 px-3 mb-2 text-sm bg-pink-darker text-white">
                            <FontAwesomeIcon icon={faPhone} /> Contact Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default contact