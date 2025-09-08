import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Palette, Zap, Users } from 'lucide-react'

const About = () => {
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

  const values = [
    {
      icon: Code,
      title: "Clean Code",
      description: "I believe in writing maintainable, scalable, and well-documented code that stands the test of time."
    },
    {
      icon: Palette,
      title: "Design Excellence",
      description: "Creating beautiful, intuitive user experiences that delight users and drive business results."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency to provide the best possible user experience."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with teams to deliver exceptional products through effective communication and teamwork."
    }
  ]

  return (
    <section id="about" ref={ref} className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I'm a Master of Applied Computing student at the University of Windsor, passionate about 
              AI, machine learning, and building innovative solutions with modern technologies.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                <p className="text-lg leading-relaxed mb-6">
                  I began my journey with a Bachelor of Engineering from Easwari Engineering College in Chennai, 
                  where I developed a strong foundation in computer science and software engineering. 
                  My passion for technology led me to pursue advanced studies in Applied Computing.
                </p>
                <p className="text-lg leading-relaxed">
                  Currently pursuing my Master's at the University of Windsor, I'm focused on AI, machine learning, 
                  and building innovative solutions. I love tackling complex problems and turning ideas into reality 
                  through cutting-edge technologies.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="card">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Current Education</h4>
                <p className="text-gray-600">Master of Applied Computing</p>
                <p className="text-sm text-gray-500">University of Windsor • Sep 2024 - Present</p>
                <p className="text-sm text-gray-500">Available for 4- or 8-month internship starting September 2025</p>
              </div>
              
              <div className="card">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Previous Education</h4>
                <p className="text-gray-600">Bachelor of Engineering</p>
                <p className="text-sm text-gray-500">Easwari Engineering College • Sep 2020 - May 2024</p>
                <p className="text-sm text-gray-500">GPA: 8.8/10</p>
              </div>
              
              <div className="card">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Location</h4>
                <p className="text-gray-600">Windsor, Ontario, Canada</p>
                <p className="text-sm text-gray-500">Originally from Chennai, India</p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              What I <span className="gradient-text">Value</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
