import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Building2, Award } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const experiences = [
    {
      id: 1,
      title: "Business Applications Intern",
      company: "Sparient Global",
      location: "Chennai, India",
      period: "Jul 2022 - Aug 2022",
      type: "Internship",
      description: "Gained hands-on experience with Enterprise Content Management Systems, including SharePoint and the Power Platform, contributing to streamlining content workflows for a team of employees.",
      achievements: [
        "Led implementation of SharePoint for content management and collaboration, improving document accessibility and team communication",
        "Designed and deployed custom business solutions on the Power Platform, decreasing manual processes and boosting efficiency",
        "Streamlined content workflows for a team of employees, enhancing productivity and collaboration"
      ],
      technologies: ["SharePoint", "Power Platform", "Microsoft Azure", "Enterprise Solutions", "Content Management"]
    },
    {
      id: 2,
      title: "Cloud Solutions Intern",
      company: "Sparient Global",
      location: "Chennai, India",
      period: "Jul 2020 - Aug 2020",
      type: "Internship",
      description: "Built secure, cloud-based forms for a Cayman Islands client, achieving 100% on-time deployment within 4 weeks.",
      achievements: [
        "Built secure, cloud-based forms for a Cayman Islands client, achieving 100% on-time deployment within 4 weeks",
        "Collaborated with 6-member remote team and QA to detect and resolve forms issues, increasing data entry accuracy by 15%",
        "Streamlined data collection workflows, reducing manual processing time for client teams"
      ],
      technologies: ["Cloud Computing", "Forms Management", "QA", "Remote Collaboration", "Data Collection"]
    }
  ]

  const education = [
    {
      degree: "Master of Applied Computing",
      school: "University of Windsor",
      location: "Windsor, Ontario",
      period: "Sep 2024 - Present",
      gpa: "In Progress",
      relevant: ["Advanced Database Topics", "Software Engineering", "Systems Programming", "AI/ML Applications"],
      note: "Available for 4- or 8-month internship starting September 2025"
    },
    {
      degree: "Bachelor of Engineering",
      school: "Easwari Engineering College",
      location: "Chennai, India",
      period: "Sep 2020 - May 2024",
      gpa: "8.8/10",
      relevant: ["Data Science", "Software Engineering", "Computer Networks", "Programming in Java"]
    }
  ]

  const certifications = [
    {
      name: "Azure AI and Fundamentals",
      issuer: "Microsoft Ignite",
      date: "Nov 2021",
      credential: "Microsoft Certified"
    },
    {
      name: "Problem-Solving Through Coding in Python",
      issuer: "CCC Digital Coding School",
      date: "Mar 2022",
      credential: "Python Certification"
    },
    {
      name: "Data Analytics using Python",
      issuer: "Swayam NPTEL",
      date: "Nov 2022",
      credential: "NPTEL Certified"
    },
    {
      name: ".NET Core MVC - The Complete Guide 2024",
      issuer: "Udemy",
      date: "Jun 2024",
      credential: "Udemy Certified"
    }
  ]

  return (
    <section id="experience" ref={ref} className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              My professional journey and the experiences that have shaped my career 
              as a full-stack developer.
            </p>
          </motion.div>

          {/* Work Experience Timeline */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className="relative"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="card">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h4>
                        <div className="flex items-center text-primary-600 font-medium mb-2">
                          <Building2 className="h-4 w-4 mr-2" />
                          {exp.company}
                        </div>
                        <div className="flex items-center text-gray-600 text-sm mb-2">
                          <MapPin className="h-4 w-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>
                      <div className="flex flex-col lg:items-end">
                        <div className="flex items-center text-gray-600 text-sm mb-1">
                          <Calendar className="h-4 w-4 mr-2" />
                          {exp.period}
                        </div>
                        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Key Achievements:</h5>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education and Certifications */}
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                <Award className="h-6 w-6 inline mr-2" />
                Education
              </h3>
              {education.map((edu) => (
                <div key={edu.degree} className="card">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{edu.degree}</h4>
                  <div className="text-primary-600 font-medium mb-2">{edu.school}</div>
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    {edu.location}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {edu.period} • GPA: {edu.gpa}
                  </div>
                  {edu.note && (
                    <div className="text-sm text-primary-600 font-medium mb-4 p-2 bg-primary-50 rounded-lg">
                      {edu.note}
                    </div>
                  )}
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Relevant Coursework:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevant.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                <Award className="h-6 w-6 inline mr-2" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.name} className="card">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{cert.name}</h4>
                    <div className="text-primary-600 font-medium mb-1">{cert.issuer}</div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{cert.date}</span>
                      <span className="font-mono text-xs">{cert.credential}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
