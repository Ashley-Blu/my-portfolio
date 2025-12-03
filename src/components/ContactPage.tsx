import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Send } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', budget: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'matsekolengashley28@gmail.com',
      link: 'mailto:matsekolengashley28@gmail.com'
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+27 82 361 0290',
      link: 'https://wa.me/27823610290'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Polokwane, South Africa',
      link: null
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/ashley-matsekoleng-568430296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      username: '@ashleymatsekoleng'
    },
    {
      name: 'Github',
      icon: Github,
      url: 'https://github.com/Ashley-Blu',
      username: '@Ashley-Blu'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/user_ashleym?igsh=dHFmdnVsd243dGZ5',
      username: '@user_ashleym'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">Let's Talk</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-24">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="p-8 md:p-10 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl mb-6">Send Me a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and I'll get back to you within 24 hours.
              </p>

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
                        className="w-full px-4 py-3 rounded-lg bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-accent"
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
                        className="w-full px-4 py-3 rounded-lg bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-accent"
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
                        className="w-full px-4 py-3 rounded-lg bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-accent"
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
                        className="w-full px-4 py-3 rounded-lg bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-accent"
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
                      className="w-full px-4 py-3 rounded-lg bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                      placeholder="Tell me about your project, goals, and timeline..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Details */}
            <div className="p-8 rounded-2xl bg-muted/50">
              <h3 className="text-xl mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index}>
                      <div className="flex items-center gap-3 mb-2">
                        <Icon size={18} className="text-accent" />
                        <span className="text-sm text-muted-foreground">{info.label}</span>
                      </div>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="hover:text-accent transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p>{info.value}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="p-8 rounded-2xl bg-muted/50">
              <h3 className="text-xl mb-6">Follow Me</h3>
              <div className="space-y-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-background transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                        <Icon size={20} className="group-hover:text-accent transition-colors" />
                      </div>
                      <div>
                        <p className="group-hover:text-accent transition-colors">{social.name}</p>
                        <p className="text-sm text-muted-foreground">{social.username}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick CTA */}
            <div className="p-8 rounded-2xl bg-accent text-accent-foreground">
              <h3 className="text-xl mb-3">Quick Response?</h3>
              <p className="mb-6 opacity-90 text-sm">
                For urgent inquiries, reach out via WhatsApp or email for a faster response.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/27823610290"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-background text-foreground rounded-lg hover:opacity-90 transition-opacity text-center"
                >
                  WhatsApp Me
                </a>
                <a
                  href="mailto:matsekolengashley28@gmail.com"
                  className="px-6 py-3 border border-accent-foreground/20 rounded-lg hover:bg-accent-foreground/10 transition-colors text-center"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Availability Section */}
        <div className="text-center p-12 md:p-16 rounded-2xl border border-border">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span>Currently Available for New Projects</span>
            </div>
            <h2 className="text-3xl md:text-4xl mb-4">Let's Create Together</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm currently available for freelance projects and long-term collaborations. 
              Whether you need a complete design system, a mobile app, or a website redesign, 
              I'd love to hear about your vision.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => onNavigate('portfolio')}
                className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                View My Work
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                See Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
