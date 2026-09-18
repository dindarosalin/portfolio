import { useState } from 'react'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { supabase } from '../../library/supabase'
import Button from '../../components/button'
import SectionTitle from '../../components/sectionTitle'

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
            console.error(
                '🔴 Failed to send message:',
                error
            )

            setStatus(
                'Failed to send message. Please try again.'
            )

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
        <section
            id="contact"
            className="
                mx-auto
                max-w-content
                px-6
                py-16
                font-body
                sm:px-8
                lg:px-10
            "
        >
            <SectionTitle
                title="Connect With Me"
                subtitle="Have something to discuss? Feel free to send me a message."
            />

            <div className="mx-auto mt-10 w-full md:max-w-2xl">
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >
                    {/* Name */}
                    <div>
                        <label
                            htmlFor="senderName"
                            className="
                                mb-1.5
                                block
                                text-sm
                                font-medium
                                text-text
                            "
                        >
                            Your Name
                        </label>

                        <input
                            type="text"
                            id="senderName"
                            name="senderName"
                            placeholder="Enter your name"
                            value={formData.senderName}
                            onChange={handleChange}
                            required
                            className="
                                block
                                w-full
                                rounded-md
                                border
                                border-border
                                bg-pink-light
                                px-3
                                py-3
                                text-sm
                                text-text
                                placeholder:text-muted
                                outline-none
                                transition
                                duration-300
                                focus:border-pink-dark
                                focus:ring-2
                                focus:ring-pink-primary
                            "
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="
                                mb-1.5
                                block
                                text-sm
                                font-medium
                                text-text
                            "
                        >
                            Your Email
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="
                                block
                                w-full
                                rounded-md
                                border
                                border-border
                                bg-pink-light
                                px-3
                                py-3
                                text-sm
                                text-text
                                placeholder:text-muted
                                outline-none
                                transition
                                duration-300
                                focus:border-pink-dark
                                focus:ring-2
                                focus:ring-pink-primary
                            "
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label
                            htmlFor="message"
                            className="
                                mb-1.5
                                block
                                text-sm
                                font-medium
                                text-text
                            "
                        >
                            Your Message
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            placeholder="Write your message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="
                                block
                                h-32
                                w-full
                                resize-none
                                rounded-md
                                border
                                border-border
                                bg-pink-light
                                px-3
                                py-3
                                text-sm
                                text-text
                                placeholder:text-muted
                                outline-none
                                transition
                                duration-300
                                focus:border-pink-dark
                                focus:ring-2
                                focus:ring-pink-primary
                            "
                        />
                    </div>

                    {/* Submit */}
                    <div className="flex justify-end pt-2">
                        <Button type="submit">
                            <FontAwesomeIcon icon={faPaperPlane} />
                            <span>Send</span>
                        </Button>
                    </div>

                    {/* Status */}
                    {status && (
                        <p className="pt-1 text-center text-sm text-muted">
                            {status}
                        </p>
                    )}
                </form>
            </div>
        </section>
    )
}

export default ConnectForm