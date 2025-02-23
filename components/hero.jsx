"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const imageElement = imageRef.current;
    if (!imageElement) return;

    const handleScroll = () => {
      imageElement.classList.toggle("scrolled", window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50 tracking-tight">
            Smart Budget Management
            <br /> Made Simple
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            Take control of your finances with AI-powered insights, real-time tracking, and intelligent recommendations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors animate-shimmer hover:bg-primary/90"
          >
            Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">Watch Demo</Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-16 relative"
        >
          <div className="relative mx-auto max-w-6xl">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/50 to-primary opacity-75 blur-2xl" />
            <Image
              ref={imageRef}
              src="/placeholder.svg?height=720&width=1280"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="relative rounded-xl border shadow-2xl"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
