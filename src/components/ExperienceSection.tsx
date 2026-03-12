"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Onrois",
      position: "Senior Frontend Developer",
      duration: "December 2023 – February 2026",
      location: "Gujarat, India",
      achievements: [
        "Led and managed multiple end-to-end web and mobile app projects using React.js and React Native",
        "Integrated Stripe, Razorpay, and React Native In-App Purchase (IAP) for secure payment flows",
        "Collaborated directly with clients to gather requirements and deliver customized solutions",
        "Coordinated with cross-functional teams for optimized performance and maintainable code architecture",
      ],
    },
    {
      company: "ACRU | Joyeux",
      position: "Software Developer",
      duration: "June 2022 – November 2023",
      location: "Bangalore, Karnataka, India",
      achievements: [
        "Joined as founding team developer in fintech startup, building core architecture from ground up",
        "Led development of Micro Savings & Investment Platform and Digital Gold/Silver Gifting App",
        "Contributed to multiple products including SaaS-based jewellery platform and PWA",
        "Worked closely with founders, designers, and backend teams to deliver high-performing apps",
      ],
    },
    {
      company: "Daydream Soft Infotech",
      position: "React Native Developer",
      duration: "May 2021 – April 2022",
      location: "Gujarat, India",
      achievements: [
        "Worked with Korean-based IT company on Corona Test Claim App maintenance and customization",
        "Built a Wordle-style game from scratch, demonstrating strong frontend development and creative problem-solving skills",
        "Participated in issue tracking with JIRA and practiced Git-based version control in CI/CD workflows",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-white text-xl mb-2">
                        {job.position}
                      </CardTitle>
                      <CardDescription className="text-purple-300 text-lg font-semibold">
                        {job.company}
                      </CardDescription>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <div className="text-gray-300">{job.duration}</div>
                      <div className="text-gray-400 text-sm">
                        {job.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        <span className="text-purple-400 mr-2 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
