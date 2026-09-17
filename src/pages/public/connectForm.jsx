import { useState } from 'react'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { supabase } from '../../library/supabase'

const ConnectForm = () => {
    const [formData, setFormData] = useState({
        senderName: '',
        email: '',
        message: '',
    })

    const [status, setStatus] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        setStatus('Sending...')

        const { error } = await supabase
            .from('messages')
            .insert([
                {
                    sender_name: formData.senderName,
                    email: formData.email,
                    message: formData.message,
                },
            ])

        if (error) {
            console.error('🔴 Failed to send message:', error)
            setStatus('Failed to send message. Please try again.')
            return
        }

        console.log('🟢 Message sent successfully')

        setStatus('Message sent successfully!')

        setFormData({
            senderName: '',
            email: '',
            message: '',
        })
    }

    return (
        <section id="contact" className="pt-20 container">
            <div className="flex flex-col items-center">
                <div className="w-full md:w-2/3">
                    <h1 className="playfair-display font-bold text-2xl text-center mb-6">
                        Connect With Me
                    </h1>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-4"
                    >
                        <input
                            type="text"
                            placeholder="Your Name"
                            name="senderName"
                            value={formData.senderName}
                            onChange={handleChange}
                            required
                            className="border-0 dark:border dark:border-pink-darker bg-pink-light dark:bg-inherit p-2 rounded-md focus:ring focus:ring-pink-darker w-full"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="border-0 dark:border dark:border-pink-darker bg-pink-light dark:bg-inherit p-2 rounded-md focus:ring focus:ring-pink-darker w-full"
                        />

                        <textarea
                            name="message"
                            placeholder="Write your message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="border-0 dark:border dark:border-pink-darker bg-pink-light dark:bg-inherit p-2 rounded-md focus:ring focus:ring-pink-darker w-full h-32 resize-none"
                        />

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="hover:shadow-lg transition cursor-pointer duration-500 ease-in-out shadow-sm outline-offset-2 rounded-md py-2 px-3 text-sm bg-pink-darker text-white flex items-center justify-center space-x-2"
                            >
                                <FontAwesomeIcon icon={faPaperPlane} />
                                <span>Send</span>
                            </button>
                        </div>

                        {status && (
                            <p className="text-center text-sm text-pink-darker">
                                {status}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ConnectForm