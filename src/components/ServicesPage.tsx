import { Smartphone, Globe, Palette, LayoutGrid, ArrowRight, Check } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      icon: Smartphone,
      title: 'UI/UX Design',
      description: 'Creating intuitive and engaging user experiences through research-driven design solutions.',
      features: [
        'User Research & Personas',
        'Wireframing & Prototyping',
        'User Flow Mapping'
      ],
      deliverables: [
        'High-fidelity mockups',
        'Interactive prototypes',
        'Design specifications',
        'User journey maps'
      ],
      process: [
        'Discovery & research phase',
        'Concept development',
        'Design iterations',
        'Testing & validation',
        'Final delivery & handoff'
      ]
    },
    {
      icon: Globe,
      title: 'Web Design',
      description: 'Designing responsive, modern websites that convert visitors into customers.',
      features: [
        'Responsive Design',
        'Landing Page Design',
        'E-commerce Design',
        'SaaS Platforms',
        'Corporate Websites',
        'Design Systems'
      ],
      deliverables: [
        'Responsive layouts',
        'Design system components',
        'Developer handoff files',
        'Style guide documentation'
      ],
      process: [
        'Brand & competitor analysis',
        'Sitemap & IA planning',
        'Visual design exploration',
        'Responsive breakpoints',
        'Developer collaboration'
      ]
    },
  ];

  const workProcess = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your business goals, target audience, and project requirements through detailed discussions and research.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Based on insights gathered, we develop a strategic approach and create a detailed project roadmap with clear milestones.'
    },
    {
      step: '03',
      title: 'Design',
      description: 'Through iterative design sprints, we create wireframes, mockups, and prototypes while keeping you involved in every decision.'
    },
    {
      step: '04',
      title: 'Review',
      description: 'We present designs for your feedback, refine based on your input, and ensure every detail aligns with your vision.'
    },
    {
      step: '05',
      title: 'Delivery',
      description: 'Final designs are delivered with complete documentation, assets, and developer handoff materials for seamless implementation.'
    }
  ];

  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on scope and complexity. A typical project can range from 2-3 weeks for a simple landing page to 2-3 months for a complex web or mobile application.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes! I work with clients globally and am experienced in remote collaboration across different time zones. We can schedule calls at convenient times and use async communication tools.'
    },
    {
      question: 'What information do you need to get started?',
      answer: 'To begin, I need to understand your business goals, target audience, project requirements, timeline, and budget. Any existing brand assets or competitor references are also helpful.'
    },
    {
      question: 'Do you offer revisions?',
      answer: 'Yes, my design process includes multiple revision rounds at key milestones. The exact number of revisions depends on the project scope and is outlined in the project proposal.'
    },
    {
      question: 'Can you help with development?',
      answer: 'While my primary focus is design, I work closely with development teams to ensure smooth handoff. I can also recommend trusted development partners if needed.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'Pricing varies based on project scope, complexity, and timeline. I offer both fixed-price projects and hourly rates for ongoing work. Contact me for a detailed quote.'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive design solutions to elevate your digital presence and drive business growth
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
                  <h2 className="text-2xl md:text-3xl mb-3">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-sm mb-4 text-muted-foreground">What's Included</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check size={16} className="text-accent shrink-0 mt-1" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div className="mb-6 p-4 rounded-lg bg-muted/50">
                  <h3 className="text-sm mb-3 text-muted-foreground">Deliverables</h3>
                  <ul className="space-y-2">
                    {service.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <span className="text-accent">→</span>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process Preview */}
                <div>
                  <h3 className="text-sm mb-3 text-muted-foreground">Process</h3>
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
            <h2 className="text-4xl md:text-5xl mb-6">How I Work</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven process that ensures quality results and smooth collaboration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {workProcess.map((phase, index) => (
              <div key={index} className="relative">
                <div className="mb-4">
                  <span className="text-5xl text-accent/20">{phase.step}</span>
                </div>
                <h3 className="text-xl mb-3">{phase.title}</h3>
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
        <div className="mb-32 p-12 md:p-16 rounded-2xl bg-muted/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-8 text-center">Design Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <LayoutGrid size={24} className="text-accent" />
                </div>
                <h3 className="text-xl mb-3">User-Centered</h3>
                <p className="text-muted-foreground text-sm">
                  Every decision is driven by user research and real user needs
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Palette size={24} className="text-accent" />
                </div>
                <h3 className="text-xl mb-3">Aesthetically Pleasing</h3>
                <p className="text-muted-foreground text-sm">
                  Beautiful designs that create emotional connections with users
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Check size={24} className="text-accent" />
                </div>
                <h3 className="text-xl mb-3">Functionally Sound</h3>
                <p className="text-muted-foreground text-sm">
                  Designs that work seamlessly and solve real problems
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-12 md:p-16 rounded-2xl bg-accent text-accent-foreground">
          <h2 className="text-3xl md:text-4xl mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how I can help bring your vision to life with exceptional design.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-background text-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}
