import React from "react"
import Feature from "./Feature"
import { BarChart3, PieChart, CreditCard } from "lucide-react"

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
          {features.map((feature) => (
            <Feature key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
