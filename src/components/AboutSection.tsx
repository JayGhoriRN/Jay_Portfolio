"use client";

import { motion } from "framer-motion";
import { Code } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-600 to-blue-600 rounded-full p-1">
                <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                  <Code className="w-32 h-32 text-purple-400" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Results-driven Software Developer with 4+ years of experience,
              specializing in React Native and React.js. I focus on delivering
              high-performing mobile and web applications with clean
              architecture, smooth user experiences, and production-ready
              quality.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Skilled in Redux Toolkit, Firebase &amp; Firestore, secure payment
              integrations (Stripe, Razorpay, React Native IAP), and
              video/voice call features, with hands-on experience using Expo,
              Xcode, and Android Studio. I collaborate closely with founders,
              designers, and backend teams to ship scalable fintech and
              product-focused solutions end to end.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-purple-400">4+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold text-blue-400">15K+</div>
                <div className="text-gray-300">App Downloads</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
