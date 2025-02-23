"use client";

import HeroSection from "@/components/hero";
import Testimonial from "@/components/Testimonial";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { featuresData, howItWorksData, statsData } from "@/data/landing";
import { ArrowRight, BarChart3, Brain, CreditCard, DollarSign, Sparkles } from "lucide-react";
import React from "react";
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <HeroSection />
      

      {/* Features Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-bold">Key Features</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <Card key={index} className="p-6 bg-white shadow-md">
              <CardContent className="flex flex-col items-center">
                {index === 0 && <Brain className="h-12 w-12 text-primary" />}
                {index === 1 && <Sparkles className="h-12 w-12 text-primary" />}
                {index === 2 && <DollarSign className="h-12 w-12 text-primary" />}
                <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-200 px-6">
        <h2 className="text-4xl font-bold text-center">How It Works</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {howItWorksData.map((step, index) => (
            <Card key={index} className="p-6 bg-white shadow-md">
              <CardContent>
                {index === 0 && <CreditCard className="h-12 w-12 text-primary" />}
                {index === 1 && <BarChart3 className="h-12 w-12 text-primary" />}
                {index === 2 && <ArrowRight className="h-12 w-12 text-primary" />}
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-600 mt-2">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold">Our Achievements</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {statsData.map((stat, index) => (
            <div key={index} className="text-center p-4 bg-white shadow-md rounded-lg">
              <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
     <Testimonial />
      {/* CTA Section */}
      <section className="py-20 text-center bg-gray-100 text-gray-900">
        <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
        <p className="mt-4 text-lg">Sign up today and experience the power of AI-driven efficiency.</p>
        <Button className="mt-6 bg-white text-gray-900 hover:bg-gray-200">Start Free Trial</Button>
      </section>
    </div>
  );
};

export default LandingPage;
