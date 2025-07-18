"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  const projects = [
    {
      title: "SportEco",
      description:
        "India's largest sports community platform enabling athletes, coaches, and organizations to collaborate and grow",
      tech: [
        "React Native",
        "Razorpay",
        "Push Notifications",
        "Event Management",
      ],
      image: "/placeholder.svg?height=200&width=300",
      year: "2025",
    },
    {
      title: "Livway Healthcare",
      description:
        "Healthcare platform delivering smart, tech-driven medical services with doctor-patient interaction features",
      tech: [
        "React Native",
        "Healthcare APIs",
        "Real-time Chat",
        "Task Management",
      ],
      image: "/placeholder.svg?height=200&width=300",
      year: "2024",
    },
    {
      title: "ACRU - Save Now Buy Later",
      description:
        "Digital micro-savings and investment platform for Indians, NRIs offering Digital Gold, Silver, and Mutual Funds",
      tech: [
        "React Native",
        "React.js",
        "Financial APIs",
        "Cross-border Payments",
      ],
      image: "/placeholder.svg?height=200&width=300",
      year: "2024",
    },
    {
      title: "Joyeux - Financial Gifting",
      description:
        "Digital gold/silver gifting app with 15K+ downloads, featuring seamless payment integration",
      tech: [
        "React Native",
        "Java Backend",
        "Paytm Integration",
        "Digital Gifting",
      ],
      image: "/placeholder.svg?height=200&width=300",
      year: "2023",
    },
    {
      title: "Duka E-commerce Platform",
      description:
        "Comprehensive retail system with admin panel, cashier portal, and customer website",
      tech: ["React.js", "Node.js", "Inventory Management", "Role Management"],
      image: "/placeholder.svg?height=200&width=300",
      year: "2022",
    },
    {
      title: "Time Sheets Tracker",
      description:
        "Web-based time tracking system with role-based workflows and enhanced API handling",
      tech: ["React", "TypeScript", "REST API", "Clean Code"],
      image: "/placeholder.svg?height=200&width=300",
      year: "2021",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-2 py-1 rounded text-sm">
                    {project.year}
                  </div>
                  <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/20 hover:bg-white/30"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/20 hover:bg-white/30"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-purple-400/50 text-purple-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
