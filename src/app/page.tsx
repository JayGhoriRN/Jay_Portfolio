"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Code,
  Smartphone,
  MapPin,
  Phone,
  Download,
  Database,
  Monitor,
  Zap,
  Users,
  Award,
  Calendar,
  ArrowRight,
  Star,
  Heart,
  Coffee,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "../components/theme-toggle"; // Import ThemeToggle
import TestimonialsSection from "../components/TestimonialsSection"; // Import TestimonialsSection

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "experience",
        "skills",
        "projects",
        "testimonials",
        "contact",
      ]; // Added 'testimonials'
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {" "}
      {/* Removed hardcoded background */}
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10 dark:bg-white/10 dark:border-black/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              className="text-2xl font-bold text-white dark:text-black"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Jay Ghori
              </span>
            </motion.div>
            <div className="hidden md:flex space-x-8 items-center">
              {" "}
              {/* Added items-center for alignment */}
              {[
                { id: "hero", label: "Home" },
                { id: "about", label: "About" },
                { id: "experience", label: "Experience" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
                { id: "testimonials", label: "Testimonials" }, // Added Testimonials to navigation
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`capitalize transition-colors relative ${activeSection === item.id
                    ? "text-purple-400"
                    : "text-white hover:text-purple-300 dark:text-black dark:hover:text-purple-600"
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"
                      layoutId="activeSection"
                    />
                  )}
                </motion.button>
              ))}
              <ThemeToggle /> {/* Add ThemeToggle here */}
            </div>
            <div className="md:hidden">
              <ThemeToggle /> {/* Add ThemeToggle for mobile too if needed */}
            </div>
          </div>
        </div>
      </motion.nav>
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-gray-100 dark:via-gray-200 dark:to-gray-100"
      >
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 dark:from-purple-300/20 dark:to-blue-300/20" />
          <motion.div
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl dark:bg-purple-400/30"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl dark:bg-blue-400/30"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: 2,
            }}
          />
        </motion.div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <motion.div
                  className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 rounded-full p-1 animate-pulse-glow dark:from-purple-400 dark:to-blue-400"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center dark:bg-gray-50">
                    <Code className="w-16 h-16 text-purple-400 dark:text-purple-700" />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 dark:text-gray-900"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm{" "}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient-x dark:from-purple-700 dark:via-pink-700 dark:to-blue-700"
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Jay Ghori
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto dark:text-gray-700"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Senior Frontend Developer with{" "}
              <span className="text-purple-400 font-semibold dark:text-purple-700">
                4+ years
              </span>{" "}
              of experience in React.js, React Native, and modern web
              technologies
            </motion.p>

            <motion.div
              className="flex items-center justify-center gap-6 text-gray-400 mb-8 flex-wrap dark:text-gray-600"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05, color: "#a855f7" }}
              >
                <MapPin className="w-4 h-4" />
                <span>Surat, Gujarat</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05, color: "#3b82f6" }}
              >
                <Phone className="w-4 h-4" />
                <span>+91-74053 99873</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05, color: "#10b981" }}
              >
                <Coffee className="w-4 h-4" />
                <span>Available for work</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 dark:from-purple-700 dark:to-blue-700 dark:hover:from-purple-800 dark:hover:to-blue-800"
                  onClick={() => scrollToSection("projects")}
                >
                  <Briefcase className="w-4 h-4 mr-2" />
                  View My Work
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-3 bg-transparent backdrop-blur-sm dark:border-gray-400 dark:text-gray-800 dark:hover:bg-gray-200"
                  onClick={() => scrollToSection("contact")}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/jayghori",
                  color: "hover:text-gray-400 dark:hover:text-gray-600",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/jay-ghori-99b7641a0/",
                  color: "hover:text-blue-400 dark:hover:text-blue-600",
                },
                {
                  icon: Mail,
                  href: "mailto:jayghori2662@gmail.com",
                  color: "hover:text-purple-400 dark:hover:text-purple-600",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`text-gray-500 ${social.color} transition-colors p-2 rounded-full bg-white/5 backdrop-blur-sm dark:bg-gray-200/50 dark:text-gray-700`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float"
          onClick={() => scrollToSection("about")}
        >
          <ChevronDown className="w-8 h-8 text-white/60 dark:text-gray-700 cursor-pointer hover:text-white dark:hover:text-gray-900 transition-colors" />
        </motion.div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-background dark:bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 dark:text-gray-900">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 dark:from-purple-700 dark:to-blue-700">
                Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8 dark:from-purple-700 dark:to-blue-700" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto dark:text-gray-600">
              Passionate about creating exceptional digital experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <motion.div
                  className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-600 to-blue-600 rounded-full p-1 dark:from-purple-700 dark:to-blue-700"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center relative overflow-hidden dark:bg-gray-100">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 dark:from-purple-300/20 dark:to-blue-300/20"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    />
                    <Code className="w-32 h-32 text-purple-400 relative z-10 dark:text-purple-700" />
                  </div>
                </motion.div>
                <motion.div
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-3 dark:from-purple-700 dark:to-blue-700"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Star className="w-6 h-6 text-white" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-3 dark:from-blue-700 dark:to-purple-700"
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 1,
                  }}
                >
                  <Heart className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <p className="text-lg text-foreground leading-relaxed dark:text-gray-700">
                  Results-driven Software Developer with{" "}
                  <span className="text-purple-400 font-semibold dark:text-purple-700">
                    4+ years
                  </span>{" "}
                  of experience in building scalable web and mobile applications
                  using{" "}
                  <span className="text-blue-400 font-semibold dark:text-blue-700">
                    React.js
                  </span>
                  ,{" "}
                  <span className="text-blue-400 font-semibold dark:text-blue-700">
                    React Native
                  </span>
                  , JavaScript, and TypeScript.
                </p>
                <p className="text-lg text-foreground leading-relaxed dark:text-gray-700">
                  Experienced in integrating RESTful APIs and GraphQL, managing
                  state with Redux and Context API.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  {
                    number: "4",
                    label: "Years Experience",
                    icon: Calendar,
                    color: "text-purple-400 dark:text-purple-700",
                  },
                  {
                    number: "15K+",
                    label: "App Downloads",
                    icon: Download,
                    color: "text-blue-400 dark:text-blue-700",
                  },
                  {
                    number: "30+",
                    label: "Projects Completed",
                    icon: Briefcase,
                    color: "text-green-400 dark:text-green-700",
                  },
                  {
                    number: "100%",
                    label: "Client Satisfaction",
                    icon: Award,
                    color: "text-yellow-400 dark:text-yellow-700",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 dark:bg-gray-100/50 dark:border-gray-300 dark:hover:bg-gray-200/50"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <stat.icon
                      className={`w-8 h-8 ${stat.color} mx-auto mb-2`}
                    />
                    <div className={`text-3xl font-bold ${stat.color}`}>
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground text-sm dark:text-gray-700">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 px-4 bg-background dark:bg-gray-200"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 dark:text-gray-900">
              Work{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 dark:from-purple-700 dark:to-blue-700">
                Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8 dark:from-purple-700 dark:to-blue-700" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto dark:text-gray-600">
              My professional journey and key achievements
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                company: "Onrois",
                position: "Senior Frontend Developer",
                duration: "December 2023 – February 2026",
                location: "Gujarat, India",
                logo: "🚀",
                achievements: [
                  "Led and managed multiple end-to-end web and mobile app projects using React.js and React Native",
                  "Integrated Stripe, Razorpay, and React Native In-App Purchase (IAP) for secure payment flows",
                  "Collaborated directly with clients to gather requirements and deliver customized solutions",
                  "Coordinated with cross-functional teams for optimized performance and maintainable code architecture",
                ],
                skills: [
                  "React.js",
                  "React Native",
                  "Stripe",
                  "Razorpay",
                  "Team Leadership",
                ],
              },
              {
                company: "ACRU | Joyeux",
                position: "Software Developer",
                duration: "June 2022 – November 2023",
                location: "Bangalore, Karnataka, India",
                logo: "💎",
                achievements: [
                  "Joined as founding team developer in fintech startup, building core architecture from ground up",
                  "Led development of Micro Savings & Investment Platform and Digital Gold/Silver Gifting App",
                  "Contributed to multiple products including SaaS-based jewellery platform and PWA",
                  "Worked closely with founders, designers, and backend teams to deliver high-performing apps",
                ],
                skills: [
                  "React Native",
                  "Fintech",
                  "PWA",
                  "Digital Payments",
                  "Startup",
                ],
              },
              {
                company: "Daydream Soft Infotech",
                position: "React Native Developer",
                duration: "August 2021 – April 2022",
                location: "Gujarat, India",
                logo: "💭",
                achievements: [
                  "Worked with Korean-based IT company on Corona Test Claim App maintenance and customization",
                  "Built Wordle-style game from scratch showcasing frontend development skills",
                  "Participated in issue tracking with JIRA and practiced Git-based version control in CI/CD workflows",
                ],
                skills: [
                  "React Native",
                  "JIRA",
                  "Git",
                  "Game Development",
                  "International Team",
                ],
              },
            ].map((job, index) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="backdrop-blur-sm hover:bg-card/90 transition-all duration-300 group dark:bg-gray-100/50 dark:border-gray-300 dark:hover:bg-gray-200/50">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl">{job.logo}</div>
                        <div>
                          <CardTitle className="text-foreground text-xl mb-2 group-hover:text-purple-700 transition-colors dark:text-gray-900 dark:group-hover:text-purple-700">
                            {job.position}
                          </CardTitle>
                          <CardDescription className="text-purple-600 text-lg font-semibold dark:text-purple-600">
                            {job.company}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="text-right mt-2 md:mt-0">
                        <div className="text-gray-700 font-medium dark:text-gray-700">
                          {job.duration}
                        </div>
                        <div className="text-gray-600 text-sm flex items-center gap-1 justify-end dark:text-gray-600">
                          <MapPin className="w-3 h-3" />
                          {job.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-4">
                      {job.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          className="text-gray-700 flex items-start dark:text-gray-700"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-purple-700 mr-3 mt-1 text-lg dark:text-purple-700">
                            •
                          </span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, i) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-purple-100 text-purple-800 border-purple-300 hover:bg-purple-200 transition-colors dark:bg-purple-200/50 dark:text-purple-700 dark:border-purple-500/50 dark:hover:bg-purple-300/50"
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
      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-background dark:bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 dark:text-gray-900">
              Technical{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 dark:from-purple-700 dark:to-blue-700">
                Skills
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8 dark:from-purple-700 dark:to-blue-700" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto dark:text-gray-600">
              Technologies and tools I work with
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Code,
                title: "Languages",
                skills: ["TypeScript", "JavaScript", "HTML5", "CSS3", "Java"],
                color: "from-yellow-500 to-orange-500",
                darkColor: "from-yellow-600 to-orange-600",
              },
              {
                icon: Smartphone,
                title: "Frontend",
                skills: [
                  "React Native",
                  "React.js",
                  "Vue.js",
                  "Next.js",
                  "Android",
                ],
                color: "from-blue-500 to-cyan-500",
                darkColor: "from-blue-600 to-cyan-600",
              },
              {
                icon: Database,
                title: "Backend & DB",
                skills: [
                  "Node.js",
                  "Firebase",
                  "SQLite",
                  "MongoDB",
                  "PostgreSQL",
                ],
                color: "from-green-500 to-emerald-500",
                darkColor: "from-green-600 to-emerald-600",
              },
              {
                icon: Zap,
                title: "Tools & Others",
                skills: ["Git", "Docker", "Figma", "JIRA", "Postman"],
                color: "from-purple-500 to-pink-500",
                darkColor: "from-purple-600 to-pink-600",
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="backdrop-blur-sm hover:bg-white/10 transition-all duration-300 h-full group dark:bg-gray-100/50 dark:border-gray-300 dark:hover:bg-gray-200/50">
                  <CardHeader className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`mx-auto mb-4 p-4 bg-gradient-to-br ${category.color} dark:${category.darkColor} rounded-full w-fit shadow-lg`}
                    >
                      <category.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-foreground group-hover:text-purple-300 transition-colors dark:text-gray-900 dark:group-hover:text-purple-700">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors cursor-default dark:bg-gray-200/50 dark:text-gray-700 dark:hover:bg-gray-300/50"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 bg-black/20 dark:bg-gray-200"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 dark:text-gray-900">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 dark:from-purple-700 dark:to-blue-700">
                Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8 dark:from-purple-700 dark:to-blue-700" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto dark:text-gray-600">
              Some of my recent work and achievements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
                status: "Live",
                category: "Mobile App",
                gradient: "from-green-500 to-emerald-500",
                darkGradient: "from-green-600 to-emerald-600",
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
                status: "Live",
                category: "Healthcare",
                gradient: "from-blue-500 to-cyan-500",
                darkGradient: "from-blue-600 to-cyan-600",
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
                status: "Live",
                category: "Fintech",
                gradient: "from-yellow-500 to-orange-500",
                darkGradient: "from-yellow-600 to-orange-600",
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
                status: "Live",
                category: "Fintech",
                gradient: "from-purple-500 to-pink-500",
                darkGradient: "from-purple-600 to-pink-600",
              },
              {
                title: "Duka E-commerce Platform",
                description:
                  "Comprehensive retail system with admin panel, cashier portal, and customer website",
                tech: [
                  "React.js",
                  "Node.js",
                  "Inventory Management",
                  "Role Management",
                ],
                image: "/placeholder.svg?height=200&width=300",
                year: "2022",
                status: "Completed",
                category: "E-commerce",
                gradient: "from-indigo-500 to-purple-500",
                darkGradient: "from-indigo-600 to-purple-600",
              },
              {
                title: "Time Sheets Tracker",
                description:
                  "Web-based time tracking system with role-based workflows and enhanced API handling",
                tech: ["React", "TypeScript", "REST API", "Clean Code"],
                image: "/placeholder.svg?height=200&width=300",
                year: "2021",
                status: "Completed",
                category: "Productivity",
                gradient: "from-teal-500 to-green-500",
                darkGradient: "from-teal-600 to-green-600",
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="backdrop-blur-sm hover:bg-card/90 transition-all duration-300 group overflow-hidden h-full dark:bg-gray-100/50 dark:border-gray-300 dark:hover:bg-gray-200/50">
                  <div className="relative overflow-hidden">
                    <div
                      className={`w-full h-48 bg-gradient-to-br ${project.gradient} dark:${project.darkGradient} flex items-center justify-center`}
                    >
                      <Monitor className="w-16 h-16 text-white/80" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Status Badge */}
                    <div
                      className={`absolute top-4 right-4 px-2 py-1 rounded text-xs font-medium ${project.status === "Live"
                        ? "bg-green-600 text-white dark:bg-green-700"
                        : "bg-gray-600 text-white dark:bg-gray-700"
                        }`}
                    >
                      {project.status}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-xs backdrop-blur-sm dark:bg-white/50 dark:text-gray-900">
                      {project.category}
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm dark:bg-gray-200/50 dark:hover:bg-gray-300/50 dark:text-gray-800"
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm dark:bg-gray-200/50 dark:hover:bg-gray-300/50 dark:text-gray-800"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </motion.div>
                    </div>

                    {/* Year Badge */}
                    <div className="absolute bottom-4 right-4 bg-purple-600 text-white px-2 py-1 rounded text-sm font-medium dark:bg-purple-700">
                      {project.year}
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-foreground group-hover:text-purple-300 transition-colors dark:text-gray-900 dark:group-hover:text-purple-700">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground line-clamp-3 dark:text-gray-700">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Badge
                            variant="outline"
                            className="border-purple-400/50 text-purple-600 hover:bg-purple-400/10 transition-colors dark:border-purple-600/50 dark:text-purple-600 dark:hover:bg-purple-600/10"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <TestimonialsSection />
      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-background dark:bg-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 dark:text-gray-900">
              Get In{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 dark:from-purple-700 dark:to-blue-700">
                Touch
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8 dark:from-purple-700 dark:to-blue-700" />
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto dark:text-gray-700">
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
            {[
              {
                icon: Mail,
                label: "Send Email",
                href: "mailto:jayghori2662@gmail.com",
                gradient: "from-purple-600 to-blue-600",
                hoverGradient: "from-purple-700 to-blue-700",
                darkGradient: "from-purple-700 to-blue-700",
                darkHoverGradient: "from-purple-800 to-blue-800",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/jay-ghori-99b7641a0/",
                gradient: "from-blue-600 to-cyan-600",
                hoverGradient: "from-blue-700 to-cyan-700",
                darkGradient: "from-blue-700 to-cyan-700",
                darkHoverGradient: "from-blue-800 to-cyan-800",
              },
              {
                icon: Phone,
                label: "Call Me",
                href: "tel:+917405399873",
                gradient: "from-green-600 to-emerald-600",
                hoverGradient: "from-green-700 to-emerald-700",
                darkGradient: "from-green-700 to-emerald-700",
                darkHoverGradient: "from-green-800 to-emerald-800",
              },
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-3 bg-gradient-to-r ${contact.gradient} hover:${contact.hoverGradient} text-white px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl dark:${contact.darkGradient} dark:hover:${contact.darkHoverGradient}`}
              >
                <contact.icon className="w-5 h-5" />
                {contact.label}
              </motion.a>
            ))}
          </motion.div>

          {/* Education & Certification */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <Card className="backdrop-blur-sm hover:bg-white/10 transition-all duration-300 dark:bg-gray-100/50 dark:border-gray-300 dark:hover:bg-gray-200/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg dark:from-blue-700 dark:to-purple-700">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-foreground dark:text-gray-900">
                    Education
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-foreground dark:text-gray-700">
                <div className="space-y-3">
                  <div className="font-semibold text-lg">
                    Bachelor of Engineering in Information Technology
                  </div>
                  <div className="text-purple-600 font-medium dark:text-purple-600">
                    Gujarat Technological University
                  </div>
                  <div className="text-muted-foreground text-sm flex items-center gap-2 dark:text-gray-600">
                    <Calendar className="w-4 h-4" />
                    Aug 2018 – May 2022 | CGPA: 8.66/10.0
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm hover:bg-white/10 transition-all duration-300 dark:bg-gray-100/50 dark:border-gray-300 dark:hover:bg-gray-200/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg dark:from-green-700 dark:to-blue-700">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-foreground dark:text-gray-900">
                    Certification
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-foreground dark:text-gray-700">
                <div className="space-y-3">
                  <div className="font-semibold text-lg">
                    Mobile App Development (Android)
                  </div>
                  <div className="text-purple-600 font-medium dark:text-purple-600">
                    Microsoft & Certipor
                  </div>
                  <div className="text-muted-foreground text-sm flex items-center gap-2 dark:text-gray-600">
                    <Calendar className="w-4 h-4" />
                    Aug 2020 – Feb 2022
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10 bg-black/30 dark:bg-gray-300 dark:border-black/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-center md:text-left dark:text-black-900">
              <p>
                © 2024 Jay Ghori. Built with ❤️ using React, Next.js, and Framer
                Motion.
              </p>
            </div>
            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/jayghori" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/jay-ghori-99b7641a0/",
                },
                { icon: Mail, href: "mailto:jayghori2662@gmail.com" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-gray-500 hover:text-purple-400 transition-colors p-2 rounded-full hover:bg-white/5 dark:text-gray-600 dark:hover:text-purple-700 dark:hover:bg-gray-200/50"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
