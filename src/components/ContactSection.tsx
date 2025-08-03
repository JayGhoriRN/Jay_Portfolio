"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate and create
            something amazing together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.a
            href="mailto:jayghori2662@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            Send Email
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/jay-ghori-99b7641a0/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg transition-all duration-300 backdrop-blur-sm"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </motion.a>

          <motion.a
            href="tel:+917405399873"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg transition-all duration-300 backdrop-blur-sm"
          >
            <Phone className="w-5 h-5" />
            Call Me
          </motion.a>
        </motion.div>

        {/* Education & Certification */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Education</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <div className="space-y-2">
                <div className="font-semibold">
                  Bachelor of Engineering in Information Technology
                </div>
                <div className="text-purple-300">
                  Gujarat Technological University
                </div>
                <div className="text-sm text-gray-400">
                  Aug 2018 – May 2022 | CGPA: 8.66/10.0
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Certification</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <div className="space-y-2">
                <div className="font-semibold">
                  Mobile App Development (Android)
                </div>
                <div className="text-purple-300">Microsoft & Certipor</div>
                <div className="text-sm text-gray-400">Aug 2020 – Feb 2022</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
