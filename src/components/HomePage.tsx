import {
  ArrowRight,
  ExternalLink,
  Download,
  Mail,
  Linkedin,
  Smartphone,
  Globe,
  Palette,
  LayoutGrid,
  Check,
  Send,
} from "lucide-react";
import { useState } from "react";

interface HomePageProps {
  onNavigate: (page: string) => void;
  onViewProject: (projectId: string) => void;
}

export function HomePage({ onNavigate, onViewProject }: HomePageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://formspree.io/f/mqabooqb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          budget: "",
          message: "",
        });
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to send message. Please try again later.");
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const featuredProjects = [
    {
      id: "1",
      title: "StayEase - Hotel Management System",
      category: "UI/UX",
      tags: ["UI/UX", "Desktop", "Mobile"],
      image:
        "https://usabilitygeek.com/wp-content/uploads/2012/05/paper-prototyping-usability-lead.jpg",
      aspectRatio: "square",
      link: "https://www.figma.com/design/QIR7MEs7007MV2LsSWOuQp/Hotel-Management-System?m=auto&t=oREFqh8BmsALObOs-6",
    },
    {
      id: "2",
      title: "Job Application Tracker",
      category: "Web Design",
      tags: ["Desktop", "Responsive"],
      image:
        "https://task3-job-application-tracker-wc66.vercel.app/assets/landing-image-95x8fT53.png",
      aspectRatio: "square",
      link: "https://task3-job-application-tracker-wc66.vercel.app/",
    },
    {
      id: "3",
      title: "Weather App",
      category: "Web Design",
      tags: ["Forecast", "News"],
      image: "https://cdn-icons-png.flaticon.com/512/7477/7477790.png",
      aspectRatio: "square",
      link: "https://task4-react-weatherapp.vercel.app/",
    },
  ];

  const skills = [
    { category: "Designing", items: ["Figma", "Dribble", "Pinterest"] },
    { category: "Prototyping & Wireframing", items: ["Figma"] },
    {
      category: "Frontend",
      items: ["HTML/CSS", "React", "Tailwind CSS", "JavaScript"],
    },
  ];

  const experiences = [
    {
      year: "Present",
      title: "Full Stack Developer",
      company: "mLab",
      description:
        "Learning and creating web applications that are fully functional, user friendly, and responsive",
      achievements: [
        "Building responsive web applications with React and Tailwind CSS",
        "Creating user-friendly interfaces with modern design patterns",
        "Collaborating with teams to deliver high-quality solutions",
      ],
    },
  ];

  const services = [
    {
      icon: Smartphone,
      title: "UI/UX Design",
      description:
        "Creating intuitive and engaging user experiences through research-driven design solutions.",
      features: [
        "User Research & Personas",
        "Wireframing & Prototyping",
        "User Flow Mapping",
      ],
      deliverables: [
        "High-fidelity mockups",
        "Interactive prototypes",
        "Design specifications",
        "User journey maps",
      ],
      process: [
        "Discovery & research phase",
        "Concept development",
        "Design iterations",
        "Testing & validation",
        "Final delivery & handoff",
      ],
    },
    {
      icon: Globe,
      title: "Web Design",
      description:
        "Designing responsive, modern websites that convert visitors into customers.",
      features: [
        "Responsive Design",
        "Landing Page Design",
        "E-commerce Design",
        "SaaS Platforms",
        "Corporate Websites",
        "Design Systems",
      ],
      deliverables: [
        "Responsive layouts",
        "Design system components",
        "Developer handoff files",
        "Style guide documentation",
      ],
      process: [
        "Brand & competitor analysis",
        "Sitemap & IA planning",
        "Visual design exploration",
        "Responsive breakpoints",
        "Developer collaboration",
      ],
    },
  ];

  const workProcess = [
    {
      step: "01",
      title: "Discovery",
      description:
        "We start by understanding your business goals, target audience, and project requirements through detailed discussions and research.",
    },
    {
      step: "02",
      title: "Strategy",
      description:
        "Based on insights gathered, we develop a strategic approach and create a detailed project roadmap with clear milestones.",
    },
    {
      step: "03",
      title: "Design",
      description:
        "Through iterative design sprints, we create wireframes, mockups, and prototypes while keeping you involved in every decision.",
    },
    {
      step: "04",
      title: "Review",
      description:
        "We present designs for your feedback, refine based on your input, and ensure every detail aligns with your vision.",
    },
    {
      step: "05",
      title: "Delivery",
      description:
        "Final designs are delivered with complete documentation, assets, and developer handoff materials for seamless implementation.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20">
        <div className="max-w-7xl w-full">
          <div className="text-center max-w-5xl mx-auto">
            {/* Name */}
            <h1 className="text-6xl md:text-8xl lg:text-8xl mb-8 tracking-tight">
              Matsekoleng
              <br />
              Ashley
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Showcasing Work with Style, Story & Precision
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => onNavigate("portfolio")}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                View My Work
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => onNavigate("contact")}
                className="px-8 py-4 border border-border rounded-lg hover:bg-muted transition-colors flex items-center gap-2"
              >
                Get In Touch
                <ExternalLink size={20} />
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="text-center mt-24">
            <div className="inline-block">
              <p className="text-sm text-muted-foreground mb-4">Scroll down</p>
              <div className="w-px h-16 bg-border mx-auto"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 lg:px-12 pt-32 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-24">
            <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl">
              A passionate designer Creating meaningful digital experiences
            </p>
          </div>

          {/* Bio Section */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-32">
            {/* Photo */}
            <div className="lg:col-span-2">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-muted sticky top-32">
                <img
                  src="/assets/Ashley.jpg"
                  alt="Matsekoleng Ashley"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bio Content */}
            <div className="lg:col-span-3 space-y-8">
              <div>
                <h3 className="text-3xl md:text-4xl mb-6">Hello! I'm Ashley</h3>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    I'm a UI/UX designer with over 5 months of experience
                    creating beautiful, functional digital products. My passion
                    lies in solving complex problems through thoughtful design
                    and creating experiences that users love.
                  </p>
                  <p>
                    I believe great design is easy - it feels natural,
                    intuitive, and effortless. Whether I'm designing a mobile
                    app, or website, I always put the user first and strive to
                    create solutions that are both aesthetically pleasing and
                    highly functional.
                  </p>
                  <p>
                    When I'm not designing, you'll find me exploring new design
                    trends, or enjoying a good cup of coffee while sketching
                    ideas. I'm always eager to collaborate on exciting projects
                    and help bring visions to life.
                  </p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="/assets/ashley_cv.pdf"
                  download
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  <Download size={18} />
                  Download Resume
                </a>
                <a
                  href="mailto:matsekolengashley28@gmail.com"
                  className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors flex items-center gap-2"
                >
                  <Mail size={18} />
                  Email Me
                </a>
                <a
                  href="https://www.linkedin.com/in/ashley-matsekoleng-568430296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors flex items-center gap-2"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-32">
            <h3 className="text-3xl md:text-4xl mb-12">Skills & Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skillGroup) => (
                <div
                  key={skillGroup.category}
                  className="p-8 rounded-xl bg-muted/50"
                >
                  <h4 className="text-xl mb-4">{skillGroup.category}</h4>
                  <ul className="space-y-3">
                    {skillGroup.items.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="mb-32">
            <h3 className="text-3xl md:text-4xl mb-12">Experience</h3>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 md:pl-12 border-l-2 border-border"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-accent"></div>

                  <div className="pb-4">
                    <p className="text-sm text-accent mb-2">{exp.year}</p>
                    <h4 className="text-2xl md:text-3xl mb-2">{exp.title}</h4>
                    <p className="text-xl text-muted-foreground mb-4">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-muted-foreground"
                        >
                          <span className="text-accent shrink-0">→</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Grid */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4">
                Selected Projects
              </h2>
              <p className="text-lg text-muted-foreground">
                A curated collection of my best work
              </p>
            </div>
            <button
              onClick={() => onNavigate("portfolio")}
              className="hidden md:flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              View All
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <button
                key={project.id}
                onClick={() => onViewProject(project.id)}
                className="group text-left"
              >
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    {project.category}
                  </p>
                  <h3 className="text-xl group-hover:text-muted-foreground transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Mobile View All Button */}
          <button
            onClick={() => onNavigate("portfolio")}
            className="md:hidden w-full mt-12 px-8 py-4 border border-border rounded-lg hover:bg-muted transition-colors flex items-center justify-center gap-2"
          >
            View All Projects
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 lg:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-24 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive design solutions to elevate your digital presence
              and drive business growth
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="p-8 md:p-10 rounded-2xl border border-border hover:border-accent transition-colors"
                >
                  {/* Icon & Title */}
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <Icon size={28} className="text-accent" />
                    </div>
                    <h3 className="text-2xl md:text-3xl mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm mb-4 text-muted-foreground">
                      What's Included
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check
                            size={16}
                            className="text-accent shrink-0 mt-1"
                          />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div className="mb-6 p-4 rounded-lg bg-muted/50">
                    <h4 className="text-sm mb-3 text-muted-foreground">
                      Deliverables
                    </h4>
                    <ul className="space-y-2">
                      {service.deliverables.map((deliverable, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm"
                        >
                          <span className="text-accent">→</span>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Process Preview */}
                  <div>
                    <h4 className="text-sm mb-3 text-muted-foreground">
                      Process
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.process.map((step, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground"
                        >
                          {step}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Work Process Section */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl mb-6">How I Work</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A proven process that ensures quality results and smooth
                collaboration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {workProcess.map((phase, index) => (
                <div key={index} className="relative">
                  <div className="mb-4">
                    <span className="text-5xl text-accent/20">
                      {phase.step}
                    </span>
                  </div>
                  <h4 className="text-xl mb-3">{phase.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {phase.description}
                  </p>
                  {index < workProcess.length - 1 && (
                    <ArrowRight
                      className="hidden md:block absolute top-8 -right-6 text-accent/30"
                      size={24}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Design Principles */}
          <div className="p-12 md:p-16 rounded-2xl bg-muted/50">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl mb-8 text-center">
                Design Principles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <LayoutGrid size={24} className="text-accent" />
                  </div>
                  <h4 className="text-xl mb-3">User-Centered</h4>
                  <p className="text-muted-foreground text-sm">
                    Every decision is driven by user research and real user
                    needs
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Palette size={24} className="text-accent" />
                  </div>
                  <h4 className="text-xl mb-3">Aesthetically Pleasing</h4>
                  <p className="text-muted-foreground text-sm">
                    Beautiful designs that create emotional connections with
                    users
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Check size={24} className="text-accent" />
                  </div>
                  <h4 className="text-xl mb-3">Functionally Sound</h4>
                  <p className="text-muted-foreground text-sm">
                    Designs that work seamlessly and solve real problems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-6 lg:px-12 py-24 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-6">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">
              Have a project in mind? Let's collaborate and create something
              amazing together.
            </p>
          </div>

          <div className="p-8 md:p-10 rounded-2xl border border-border bg-background">
            {submitted ? (
              <div className="p-8 rounded-xl bg-accent/10 text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Send size={32} className="text-accent" />
                </div>
                <h3 className="text-xl mb-2">Thank You!</h3>
                <p className="text-muted-foreground">
                  Your message has been sent. I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block mb-2">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Select budget range</option>
                      <option value="<5k">Less than R5,000</option>
                      <option value="5k-10k">R5,000 - R10,000</option>
                      <option value="10k-25k">R10,000 - R25,000</option>
                      <option value="25k+">R25,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Tell me about your project, goals, and timeline..."
                  />
                </div>

                {error && (
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
