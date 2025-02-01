"use client";
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button";
import HowItWorks from "@/components/HowItWorks";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="relative h-screen bg-black text-white overflow-hidden">
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />

      {/* Content */}
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center z-10 relative">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">AI-Powered Financial Advice</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Unlock your financial potential with cutting-edge AI technology
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
          Get Started
        </Button>
      </div>
      <HowItWorks />
    </div>
  )
}

export default Hero

