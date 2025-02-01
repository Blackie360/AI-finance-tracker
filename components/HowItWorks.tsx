import { Cpu, BarChart, PiggyBank } from "lucide-react"

const steps = [
  {
    icon: Cpu,
    title: "AI Analysis",
    description: "Our advanced AI analyzes your financial data and market trends.",
  },
  {
    icon: BarChart,
    title: "Personalized Insights",
    description: "Receive tailored financial insights and recommendations.",
  },
  {
    icon: PiggyBank,
    title: "Optimize & Grow",
    description: "Implement strategies to optimize your finances and grow your wealth.",
  },
]

const HowItWorks = () => {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-blue-600 rounded-full p-6 mb-4">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

