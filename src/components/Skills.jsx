import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 90 },
        { name: "C++", level: 85 },
        { name: "SQL", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 90 }
      ]
    },
    {
      title: "Frameworks & Platforms",
      skills: [
        { name: "ASP.NET MVC", level: 85 },
        { name: "Power Platform", level: 90 },
        { name: "Power BI", level: 85 },
        { name: "Neo4j", level: 80 },
        { name: "FastAPI", level: 85 },
        { name: "SharePoint", level: 90 },
        { name: "Microsoft Azure", level: 85 }
      ]
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "PyTorch", level: 85 },
        { name: "TensorFlow", level: 80 },
        { name: "OpenCV", level: 75 },
        { name: "ResNet-50", level: 85 },
        { name: "Grad-CAM", level: 80 },
        { name: "RAG", level: 80 },
        { name: "Prompt Engineering", level: 85 },
        { name: "Knowledge Graphs", level: 80 }
      ]
    }
  ]

  return (
    <section id="skills" ref={ref} className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of the technologies and tools I work with in AI, machine learning, 
              and software development.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="card"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1,
                            delay: 0.5 + (categoryIndex * 0.2) + (skillIndex * 0.1)
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-16">
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Always Learning
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                I'm passionate about continuous learning in AI and machine learning. I regularly work on 
                projects involving RAG, knowledge graphs, and advanced ML techniques. I also stay updated 
                with the latest developments in cloud computing and data analytics.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
