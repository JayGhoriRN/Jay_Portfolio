"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages",
      skills: ["TypeScript", "JavaScript", "HTML", "CSS", "Java"],
    },
    {
      icon: Smartphone,
      title: "Frontend",
      skills: ["React Native", "React.js", "Vue.js", "Android Native"],
    },
    {
      icon: Globe,
      title: "Libraries",
      skills: ["Redux", "Redux Toolkit", "Context API", "Axios", "Expo"],
    },
    {
      icon: Code,
      title: "Tools",
      skills: ["VS Code", "Git", "GitHub", "JIRA", "Postman", "Firebase"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full">
                <CardHeader className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mx-auto mb-4 p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full w-fit"
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-white">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-white/10 text-gray-300 hover:bg-white/20 transition-colors"
                      >
                        {skill}
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
