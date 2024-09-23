import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/contact-us', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Something went wrong');
            }

          
            toast.success('Message sent successfully.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } catch (error: any) {
         
            toast.error(`Error: ${error.message}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <div className="flex justify-center items-center h-screen mt-24 bg-colors-surface">
            <div className="bg-colors-background-con p-8 rounded-lg shadow-lg max-w-2xl w-full">

                <div className="text-center mb-8">
                    <h2 className="text-5xl font-medium font-poppins mb-7">Contact our team</h2>
                    <p className="text-colors-text-secondary text-lg font-poppins mb-16">
                        Feel free to reach out using the contact form below or via the provided contact
                        information. We'll respond promptly to ensure you have a seamless and enjoyable
                        experience engaging with VisionIQ. Let's connect and bring your AI aspirations to life!
                    </p>
                </div>

                <div className='mx-16'>
                    <form onSubmit={handleSubmit}>
                        <div className='flex gap-3 justify-between'>
                            <div className="mb-4">
                                <label className="block text-colors-text-secondary text-sm font-bold mb-2" htmlFor="firstName">
                                    First Name*
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-colors-text-secondary leading-tight focus:outline-none focus:shadow-outline"
                                    id="firstName"
                                    type="text"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="Jane"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-colors-text-secondary text-sm font-bold mb-2" htmlFor="lastName">
                                    Last Name*
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-colors-text-secondary leading-tight focus:outline-none focus:shadow-outline"
                                    id="lastName"
                                    type="text"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Doe"
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-colors-text-secondary text-sm font-bold mb-2" htmlFor="email">
                                Email*
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-colors-text-secondary leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="jane@example.com"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-colors-text-secondary text-sm font-bold mb-2" htmlFor="company">
                                Company*
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-colors-text-secondary leading-tight focus:outline-none focus:shadow-outline"
                                id="company"
                                type="text"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder="Company name"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-colors-text-secondary text-sm font-bold mb-2" htmlFor="message">
                                Message*
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-colors-text-secondary leading-tight focus:outline-none focus:shadow-outline"
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your message"
                                rows={4}
                                required
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                className=" bg-black hover:bg-colors-text-secondary text-colors-text-plain font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}
