import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, Eye } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilter, setActiveFilter] = useState('all')

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

  const projects = [
    {
      id: 1,
      title: "Meallens Recipe Database and Data Pipeline System",
      description: "Comprehensive RDBMS schema with 20 tables using SQL Server, incorporating user management, recipe tracking, and nutritional data. Developed ETL pipelines processing 1M+ recipes with AI-powered ingredient substitutions.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      technologies: ["Python", "SQL Server", "Docker", "pandas", "scikit-learn", "sentence-transformers"],
      category: "fullstack",
      liveUrl: "#",
      githubUrl: "https://github.com/joel-joe-tech/portfolio"
    },
    {
      id: 2,
      title: "Adaptive Skill Prediction System",
      description: "Workforce analytics platform integrating Python-based AI modules for job-skill forecasting. Built conversational AI chatbot with <2s response time for resume scoring and salary insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Python", "Neo4j", "FastAPI", "Azure", "AI/ML"],
      category: "fullstack",
      liveUrl: "#",
      githubUrl: "https://github.com/joel-joe-tech/SkillExtraction"
    },
    {
      id: 3,
      title: "Semantic Credit Card Matching Platform",
      description: "Java/Swing desktop application to match users with best-fit credit cards, improving match relevance by 40%. Features automated web crawling, spell check, and ranking modules.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["Java", "Swing", "JSoup", "Regex", "Data Analytics"],
      category: "backend",
      liveUrl: "#",
      githubUrl: "https://github.com/joel-joe-tech/jobextraction"
    },
    {
      id: 4,
      title: "Brain Tumor Diagnosis Research",
      description: "Published research paper on brain tumor diagnosis using machine learning techniques. Presented at 2024 Second ICETITE - IEEE Explore conference.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      technologies: ["Machine Learning", "Medical Imaging", "Research", "IEEE Publication"],
      category: "research",
      liveUrl: "https://ieeexplore.ieee.org/document/10493599",
      githubUrl: "https://github.com/joel-joe-tech"
    },
    {
      id: 5,
      title: "SharePoint Content Management System",
      description: "Enterprise Content Management System implementation for Sparient Global, streamlining content workflows and improving team collaboration with Power Platform integration.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["SharePoint", "Power Platform", "Microsoft Azure", "Enterprise Solutions"],
      category: "fullstack",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Cloud-Based Forms System",
      description: "Secure, cloud-based forms for Cayman Islands client with 100% on-time deployment. Achieved 15% increase in data entry accuracy through collaborative QA processes.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Cloud Computing", "Forms Management", "QA", "Remote Collaboration"],
      category: "fullstack",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 7,
      title: "Brain Tumor Detection using XAI",
      description: "Constructed a brain tumor classification system using ResNet-50 and Grad-CAM, achieving 97.04% classification accuracy across a dataset of 7,000+ MRI scans. Demonstrated hands-on ML lifecycle from data preprocessing to interpretability.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      technologies: ["ResNet-50", "Grad-CAM", "Computer Vision", "Deep Learning", "XAI", "Medical Imaging"],
      category: "research",
      liveUrl: "#",
      githubUrl: "https://github.com/joel-joe-tech"
    },
    {
      id: 8,
      title: "E-Commerce Platform for Online Bookstore",
      description: "Developed a full-stack online bookstore using ASP.NET MVC and JavaScript, ensuring cross-browser compatibility and responsive UI. Built robust backend to manage inventory and sales with Stripe integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["ASP.NET MVC", "JavaScript", "Stripe", "Full-Stack", "E-Commerce", "Responsive Design"],
      category: "fullstack",
      liveUrl: "#",
      githubUrl: "https://github.com/joel-joe-tech/BooksKart"
    },
    {
      id: 9,
      title: "University Enrollment Dashboard",
      description: "Designed and implemented a Power BI project to create a comprehensive university enrolment dashboard. Developed interactive interface reducing time spent exploring enrolment data and empowered data-driven decision-making.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Power BI", "Data Visualization", "Excel", "PowerPoint", "Analytics", "Dashboard"],
      category: "backend",
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'backend', label: 'Backend' },
    { id: 'research', label: 'Research' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" ref={ref} className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work and side projects that demonstrate my skills 
              and passion for web development.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="card group cursor-pointer"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink className="h-5 w-5 text-gray-700" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                      aria-label={`View source code of ${project.title}`}
                    >
                      <Github className="h-5 w-5 text-gray-700" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <a
              href="https://github.com/joel-joe-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <Github className="h-5 w-5" />
              <span>View More on GitHub</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
