import { useState } from 'react'

import {
    faEnvelope,
    faMessage,
    faPaperPlane,
    faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { supabase } from '../../library/supabase'

import Button from '../../components/button'
import FormInput from '../../components/formInput'
import SectionTitle from '../../components/sectionTitle'

const ConnectForm = () => {
    const [formData, setFormData] = useState({
        senderName: '',
        email: '',
        message: '',
    })

    const [status, setStatus] = useState('')

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

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
                    className="space-y-5"
                >
                    <FormInput
                        id="senderName"
                        name="senderName"
                        label="Your Name"
                        placeholder="Enter your name"
                        value={formData.senderName}
                        onChange={handleChange}
                        icon={faUser}
                        required
                    />

                    <FormInput
                        id="email"
                        name="email"
                        type="email"
                        label="Your Email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        icon={faEnvelope}
                        required
                    />

                    <FormInput
                        id="message"
                        name="message"
                        label="Your Message"
                        placeholder="Write your message"
                        value={formData.message}
                        onChange={handleChange}
                        icon={faMessage}
                        textarea
                        required
                    />

                    <div className="flex justify-end pt-2">
                        <Button type="submit">
                            <FontAwesomeIcon
                                icon={faPaperPlane}
                            />
                            <span>Send</span>
                        </Button>
                    </div>

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