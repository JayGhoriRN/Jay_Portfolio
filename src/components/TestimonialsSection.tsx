"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonial = {
    name: "Harit Vaibhav Singh",
    title: "Fintech | Product | Strategy",
    relationship: "Mentor & Colleague",
    quote:
      "I’ve had the pleasure of mentoring Jay, and I can confidently say he’s one of the most talented and driven individuals I’ve worked with. With deep expertise in mobile app development, Jay consistently delivers high-quality work and brings a sharp problem-solving mindset to every project. He’s a quick learner and an even better listener—traits that make him an invaluable team player. Whether it’s building fintech solutions, mutual fund investment platforms, gold savings apps, B2B fintech web applications for corporates, or SaaS tools for jewellers, Jay brings a thoughtful, user-centric approach and a strong technical foundation. What sets Jay apart is his ability to think beyond code. He regularly shares insightful suggestions that have positively impacted our products and processes. His commitment to excellence and continuous growth makes him a standout professional in the tech space.",
  }

  return (
    <section id="testimonials" className="py-20 px-4 bg-background dark:bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 dark:text-gray-900">
            What People{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 dark:from-purple-700 dark:to-blue-700">
              Say
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8 dark:from-purple-700 dark:to-blue-700" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto dark:text-gray-600">
            Hear from those I've worked with and mentored.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card className="bg-card border-border backdrop-blur-sm hover:bg-card/90 transition-all duration-300 dark:bg-gray-100/50 dark:border-gray-300 dark:hover:bg-gray-200/50">
            <CardHeader className="relative pb-4">
              <Quote className="absolute -top-4 -left-4 w-16 h-16 text-purple-400/20 dark:text-purple-700/20 rotate-180" />
              <CardTitle className="text-foreground text-2xl mb-2 dark:text-gray-900">{testimonial.name}</CardTitle>
              <CardDescription className="text-purple-300 text-lg font-semibold dark:text-purple-600">
                {testimonial.title}
              </CardDescription>
              <p className="text-sm text-muted-foreground dark:text-gray-600">{testimonial.relationship}</p>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-lg text-foreground leading-relaxed dark:text-gray-700">{testimonial.quote}</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
