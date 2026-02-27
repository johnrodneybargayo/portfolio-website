"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Mail, Phone, MapPin, Facebook, Linkedin } from "lucide-react"
import ShinyText from "./ShinyText"

type FormData = {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitSuccess(true)
      } else {
        throw new Error("Failed to send email")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      alert("Failed to send email. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="w-6 h-6 mr-4 text-blue-400" />
              <span>johnrodney.bargayo@gmail.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 mr-4 text-blue-400" />
              <span>+639661641562</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 mr-4 text-blue-400" />
              <span>Cebu City, Philippines</span>
            </div>
          </div>
          <div className="mt-8">
            <h4 className="text-xl font-semibold mb-4">Connect with me</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/lockdown15100"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/rodbargayo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
          {submitSuccess ? (
            <div className="bg-green-600 text-white p-4 rounded-lg">
              <h4 className="text-xl font-bold mb-2">Thank you for your message!</h4>
              <p>I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
                {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
                {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message", { required: "Message is required" })}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
              >
                <ShinyText text={isSubmitting ? "Sending..." : "Send Message"} speed={3} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

