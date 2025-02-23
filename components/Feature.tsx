"use client"

import { motion } from "framer-motion"
import { BarChart3, PieChart, CreditCard } from 'lucide-react'
import React from "react"

const features = [
  {
    title: "Smart Budgeting",
    description: "AI-powered budgeting that learns from your spending patterns and helps you save more.",
    icon: BarChart3,
  },
  {
    title: "Real-time Tracking",
    description: "Track your expenses and income in real-time with automatic categorization.",
    icon: PieChart,
  },
  {
    title: "Secure Transactions",
    description: "Bank-level security ensures your financial data is always protected.",
    icon: CreditCard,
  },
]

export function Features() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Powerful Features for Your Financial Success
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl border p-8 hover:border-primary/50 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              {React.createElement(feature.icon, { className: "h-10 w-10 mb-4 text-primary" })}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
