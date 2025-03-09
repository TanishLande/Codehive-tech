"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  // The exact address to display and for the map
  const fullAddress = "Navnirman housing society, behind Rameshwar temple, Rupeenagar, Talawade, Haveli, Pune 411 062"
  
  // Encode the address for the Google Maps URL
  const encodedAddress = encodeURIComponent(fullAddress)
  
  // Google Maps embed URL with the correct address
  const mapUrl = `https://maps.google.com/maps?width=100%&height=600&hl=en&q=${encodedAddress}&ie=UTF8&t=&z=14&iwloc=B&output=embed`

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      setLoading(true)
      const response = await fetch("/api/mailer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          message: "",
        })
        toast("Message sent successfully")
      } else {
        toast("An error occurred while sending the message.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("An error occurred while sending the message.")
    } finally {
      setLoading(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <motion.section
      initial="hidden"
      id="contact"
      animate="visible"
      variants={containerVariants}
      className="text-gray-300 body-font relative mt-10 md:my-20"
    >
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <motion.div
          variants={itemVariants}
          className="lg:w-2/3 md:w-1/2 bg-zinc-800 rounded-xl overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative md:mr-20"
        >
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            scrolling="no"
            src={mapUrl}
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          ></iframe>
          <motion.div variants={itemVariants} className="bg-black relative flex flex-wrap py-6 rounded-lg shadow-md">
            <div className="px-6">
              <h2 className="title-font font-semibold text-blue-400 tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1">{fullAddress}</p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div variants={itemVariants} className="lg:w-1/3 md:w-1/2 w-full md:py-8 mt-8 md:mt-0 h-full">
          <Card className="bg-black border-zinc-800">
            <CardContent className="p-6">
              <motion.h2 variants={itemVariants} className="text-white text-lg mb-1 font-medium title-font">
                Contact
              </motion.h2>
              <motion.p variants={itemVariants} className="leading-relaxed mb-5 text-gray-400">
                If you are interested in hiring us, please send us a message.
              </motion.p>
              <form onSubmit={handleSubmit} className="flex flex-col">
                <motion.div variants={itemVariants} className="relative mb-4">
                  <Label htmlFor="name" className="text-gray-400 mb-2">
                    Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-zinc-900 border-zinc-800 focus:border-blue-500 text-white"
                  />
                </motion.div>
                <motion.div variants={itemVariants} className="relative mb-4">
                  <Label htmlFor="email" className="text-gray-400 mb-2">
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-zinc-900 border-zinc-800 focus:border-blue-500 text-white"
                  />
                </motion.div>
                <motion.div variants={itemVariants} className="relative mb-4">
                  <Label htmlFor="message" className="text-gray-400 mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-zinc-900 border-zinc-800 focus:border-blue-500 h-32 text-white resize-none"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-900/40 to-blue-700/40 hover:from-blue-800/60 hover:to-blue-600/60 text-white border border-blue-700"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </motion.div>
                <motion.p variants={itemVariants} className="text-xs text-gray-500 mt-3">
                  Your message will be seen as soon as possible.
                </motion.p>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Contact