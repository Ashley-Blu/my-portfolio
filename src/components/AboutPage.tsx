import { Download, Linkedin, Mail } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const skills = [
    { category: 'Designing', items: ['Figma', 'Dribble', 'Pinterest'] },
    { category: 'Prototyping & Wireframing', items: ['Figma'] },
    { category: 'Frontend', items: ['HTML/CSS', 'React', 'Tailwind CSS', 'JavaScript'] }
  ];

  const experiences = [
    {
      year: 'Present',
      title: 'Full Stack Developer',
      company: 'mLab',
      description: 'Learning and creating web applications that are fully functional, user friendly, and responsive',
      achievements: [
        'Building responsive web applications with React and Tailwind CSS',
        'Creating user-friendly interfaces with modern design patterns',
        'Collaborating with teams to deliver high-quality solutions'
      ]
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24">
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            A passionate designer Creating meaningful digital experiences
          </p>
        </div>

        {/* Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-32">
          {/* Photo */}
          <div className="lg:col-span-2">
            <div className="aspect-3/4 rounded-2xl overflow-hidden bg-muted sticky top-32">
              <img
                src="src/assets/Ashley.jpg"
                alt="Matsekoleng Ashley"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bio Content */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Hello! I'm Ashley</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a UI/UX designer with over 5 years of experience creating beautiful, functional digital products. 
                  My passion lies in solving complex problems through thoughtful design and creating experiences that 
                  users love.
                </p>
                <p>
                  I believe great design is invisible - it feels natural, intuitive, and effortless. Whether I'm 
                  designing a mobile app, website, or brand identity, I always put the user first and strive to 
                  create solutions that are both aesthetically pleasing and highly functional.
                </p>
                <p>
                  When I'm not designing, you'll find me exploring new design trends, mentoring aspiring designers, 
                  or enjoying a good cup of coffee while sketching ideas. I'm always eager to collaborate on exciting 
                  projects and help bring visions to life.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
                <a href="src/assets/ashley_cv.pdf"
                download
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                <Download size={18} />
                Download Resume
                </a>
              </button>
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
          <h2 className="text-3xl md:text-4xl mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="p-8 rounded-xl bg-muted/50">
                <h3 className="text-xl mb-4">{skillGroup.category}</h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-muted-foreground">
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
          <h2 className="text-3xl md:text-4xl mb-12">Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-12 border-l-2 border-border">
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-accent"></div>
                
                <div className="pb-4">
                  <p className="text-sm text-accent mb-2">{exp.year}</p>
                  <h3 className="text-2xl md:text-3xl mb-2">{exp.title}</h3>
                  <p className="text-xl text-muted-foreground mb-4">{exp.company}</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                  
                  {/* Achievements */}
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex gap-3 text-muted-foreground">
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

       
        {/* CTA Section */}
        <div className="text-center p-12 md:p-16 rounded-2xl bg-muted/50">
          <h2 className="text-3xl md:text-4xl mb-4">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}