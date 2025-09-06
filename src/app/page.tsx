import { 
  Mail, 
  Github, 
  Linkedin, 
  Download, 
  Code, 
  Database, 
  Server, 
  Globe,
  Shield,
  Calendar,
  MapPin,
  ExternalLink,
  Phone
} from "lucide-react";

export default function Home() {
  const skills = [
    { 
      category: "Languages & Frameworks", 
      items: ["C++", "C", "Java", "TypeScript", "JavaScript", "Python", "Node.js", "Express.js", "Django", "Next.js", "React Native", "HTML", "CSS", "Tailwind", "SQL"] 
    },
    { 
      category: "Authentication/SSO", 
      items: ["Passport.js", "BetterAuth", "Django-allauth", "JWT", "RBAC"] 
    },
    { 
      category: "DevOps/Tools", 
      items: ["Docker", "Kubernetes", "Nginx", "Git", "GitHub", "Postman", "VScode", "AWS"] 
    },
    { 
      category: "Deployment Platforms", 
      items: ["Vercel", "Render", "XAMPP"] 
    },
    { 
      category: "Databases/ORMs", 
      items: ["PostgreSQL", "MySQL", "MongoDB", "Sequelize ORM", "Drizzle ORM"] 
    },
    { 
      category: "Data/ETL/Analytics", 
      items: ["dbt", "Airbyte", "Snowflake"] 
    },
    { 
      category: "Testing/Automation", 
      items: ["Playwright", "Selenium", "Jest"] 
    },
    {
      category: "Relevant Coursework",
      items: ["Data Structures & Algorithms", "Operating Systems", "OOPs", "DBMS"]
    }
  ];

  const experiences = [
    {
      title: "Data Engineer (Product Development Focus)",
      company: "Anjane Technologies",
      location: "Chennai, India",
      period: "November 2023 - Present",
      description: [
        "Leading backend and fullstack feature development for internal platforms using Django, Node.js, and PostgreSQL",
        "Containerized and deployed applications using Docker, with orchestration via Kubernetes, and server configuration using Nginx",
        "Developed and maintained SSO integration (Django-allauth) with Google, GitHub, Microsoft, and Snowflake OAuth",
        "Built secure role-based user management, feature flag logic, and Slack notifications using Webhooks",
        "Implemented CI/CD pipelines and YAML-driven feature configuration for dynamic content and automation",
        "Built and tested data workflows using dbt, integrated with Airbyte for external data ingestion",
        "Contributed to internal tooling using Java and Spring Boot to handle data validations and logging workflows"
      ]
    }
  ];

  const education = [
    {
      degree: "MCA (Master of Computer Applications)",
      institution: "SRM Institute of Science And Technology",
      period: "Dec 2023 – Dec 2025",
      status: "Pursuing"
    },
    {
      degree: "BSc. in Mathematics",
      institution: "Sri Sathya Sai Institute of Higher Learning",
      period: "Jun 2019 – Aug 2023",
      status: "Completed"
    }
  ];

  const projects = [
    {
      title: "DataOpsly",
      subtitle: "Self-Managed dbt-Core Services",
      description: "A comprehensive data operations platform with SSO integration, automated workflows, and user management capabilities.",
      features: [
        "SSO integration with multiple OAuth providers",
        "Slack alerts and Airbyte triggers for workflow automation",
        "Advanced profile and permission management systems",
        "YAML upload capability for configuration management",
        "Interactive UI built with JavaScript, HTML, and Tailwind CSS",
        "Comprehensive testing with Playwright and Selenium"
      ],
      tech: ["Django", "Nginx", "PostgreSQL", "dbt", "Airbyte", "Playwright", "Selenium", "JavaScript", "HTML", "Tailwind CSS"],
      link: "https://dataopsly.com",
      documentation: "Built with MkDocs and demo videos via Loom"
    },
    {
      title: "PerksPe",
      subtitle: "Reward Redemption App (In Progress)",
      description: "Mobile application for reward claiming and tracking with secure transaction management and role-based access control.",
      features: [
        "React Native mobile frontend for cross-platform compatibility",
        "JWT-based authentication with Passport.js integration",
        "Dynamic perk logic and secure transaction tracking",
        "Role-Based Access Control (RBAC) with hierarchical permissions",
        "Real-time user session and balance history management",
        "Comprehensive error handling and user feedback systems"
      ],
      tech: ["React Native", "Node.js", "Express.js", "PostgreSQL", "Sequelize ORM", "Passport.js", "JWT"],
      link: "https://perkspe.com",
      status: "In Development"
    }
  ];

  const publications = [
    {
      title: "Django application with allauth configuration",
      date: "Jul 2024",
      link: "https://github.com/saiprasath/django-allauth",
      description: "Comprehensive guide for implementing Django allauth configuration"
    },
    {
      title: "Integrating Snowflake OAuth with Django",
      date: "Aug 2024", 
      link: "https://github.com/saiprasath/snowflake-oauth",
      description: "Technical implementation guide for Snowflake OAuth integration"
    }
  ];

  const interests = [
    "Web Design and Development",
    "Blender & 3D Modeling", 
    "Graphic Designing",
    "Problem Solving & Algorithms",
    "IoT Development",
    "System Design and Development"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-slate-900 dark:text-white">
              Saiprasath B
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
              <a href="#experience" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
              <a href="#education" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Education</a>
              <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
              <a href="#publications" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Publications</a>
              <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Saiprasath B</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-8">
              Data Engineer • Full Stack Developer • Backend Engineer
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-4xl mx-auto mb-8">
              Versatile and results-driven fullstack developer with around 2 years of hands-on experience in backend development 
              using Node.js, Django, and PostgreSQL. Experienced in building authentication systems (SSO, RBAC), 
              integrating third-party APIs, and managing infrastructure for high-performance systems. Passionate about 
              solving real-world problems through robust backend systems and intuitive user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
              <a 
                href="/saiprasath_b_resume.pdf" 
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                I'm a passionate data engineer and full stack developer with proven ability to architect, implement, 
                and scale production-ready web applications. My expertise spans backend development with Node.js and Django, 
                mobile development with React Native, and comprehensive DevOps practices.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                I have strong experience with Docker, Kubernetes, and CI/CD pipelines, and I'm adept at writing clean, 
                maintainable code while collaborating across cross-functional teams in agile environments. 
                I've deployed applications on AWS EC2 with Nginx and Docker for containerization.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                Familiar with building secure and compliant data systems, with particular interest in financial regulatory 
                platforms such as AML and Tax compliance. I'm always eager to learn new technologies and tackle complex challenges.
              </p>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Areas of Interest:</h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <span 
                      key={index}
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <Database className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Data Engineering</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">ETL pipelines, dbt workflows, and data analytics solutions</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <Code className="w-8 h-8 text-green-600 dark:text-green-400 mb-3" />
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Full Stack Development</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">Complete web applications from frontend to backend</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                <Server className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-3" />
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">DevOps & Infrastructure</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">Docker, Kubernetes, CI/CD, and AWS deployment</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
                <Shield className="w-8 h-8 text-orange-600 dark:text-orange-400 mb-3" />
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Authentication & Security</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">SSO integration, RBAC, and secure systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                    <div className="flex items-center gap-4 mt-2 text-slate-600 dark:text-slate-300">
                      <div className="flex items-center gap-1">
                        <Globe className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                    <p className="text-slate-600 dark:text-slate-300 mt-1">{edu.institution}</p>
                  </div>
                  <div className="flex items-center gap-4 mt-2 md:mt-0">
                    <div className="flex items-center gap-1 text-slate-600 dark:text-slate-300">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      edu.status === 'Completed' 
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                        : 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-600 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{project.subtitle}</p>
                    {project.status && (
                      <span className="inline-block mt-2 px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-sm font-medium">
                        {project.status}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                {project.documentation && (
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 italic">{project.documentation}</p>
                )}
                <div className="mb-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">Publications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {publications.map((pub, index) => (
              <div key={index} className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{pub.title}</h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{pub.date}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">{pub.description}</p>
                <a 
                  href={pub.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Get In Touch</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            I'm always interested in new opportunities and exciting projects. 
            Feel free to reach out if you'd like to collaborate or just want to say hello!
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center justify-center gap-2 text-slate-600 dark:text-slate-300">
              <Mail className="w-5 h-5" />
              <span>sp.pers23@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-600 dark:text-slate-300">
              <Phone className="w-5 h-5" />
              <span>+91 9962441790</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-600 dark:text-slate-300">
              <MapPin className="w-5 h-5" />
              <span>Chennai, India</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:sp.pers23@gmail.com" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a 
              href="https://github.com/saiprasath2304" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/saiprasath2304" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a 
              href="https://medium.com/@sp.pers23" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-5 h-5" />
              Medium
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900 dark:bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Saiprasath B. Built with ❤ using Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
