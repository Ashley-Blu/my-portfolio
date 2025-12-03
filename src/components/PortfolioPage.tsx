import { useState } from 'react';
import Masonry from 'react-responsive-masonry';

interface PortfolioPageProps {
  onViewProject: (projectId: string) => void;
}

export function PortfolioPage({ onViewProject }: PortfolioPageProps) {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const categories = ['All', 'Mobile App', 'Web Design', 'UI/UX'];

  const projects = [
    {
      id: '1',
      title: 'StayEase - Hotel Management System',
      category: 'UI/UX',
      tags: ['UI/UX', 'Desktop', 'Mobile'],
      image: 'https://usabilitygeek.com/wp-content/uploads/2012/05/paper-prototyping-usability-lead.jpg',
      aspectRatio: 'square',
      link: 'https://www.figma.com/design/QIR7MEs7007MV2LsSWOuQp/Hotel-Management-System?m=auto&t=oREFqh8BmsALObOs-6'
    },
    {
      id: '2',
      title: 'Computer Board - Build a Board',
      category: 'Web Design',
      tags: ['Dashboard', 'SaaS', 'B2B'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Raspberry-Pi-2-Bare-BR.jpg/1200px-Raspberry-Pi-2-Bare-BR.jpg',
      aspectRatio: 'square',
      link: 'https://build-a-board-ebon.vercel.app/'
    },
    {
      id: '3',
      title: 'Job Application Tracker',
      category: 'Web Design',
      tags: ['Desktop', 'Responsive'],
      image: 'https://task3-job-application-tracker-wc66.vercel.app/assets/landing-image-95x8fT53.png',
      aspectRatio: 'square',
      link: 'https://task3-job-application-tracker-wc66.vercel.app/'
    },
    {
      id: '4',
      title: 'Poster - Simple UI Challenge',
      category: 'UI/UX',
      tags: ['UI/UX', 'UI Challenge'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6eCCrq_LqY8vfVFb8DACC1mELaWq4LnYSpUV28AmbyOFfdYHcfFUEbnkxA6u6_amVe0U&usqp=CAU',
      aspectRatio: 'square',
      link: 'https://task1-react-uichallenge.vercel.app/'
    },
    {
      id: '5',
      title: 'Task Tracker',
      category: 'UI/UX',
      tags: ['Organize', 'Track'],
      image: 'https://png.pngtree.com/png-vector/20220621/ourmid/pngtree-web-checklist-icon-on-clipboard-for-efficient-task-management-vector-png-image_47179994.jpg',
      aspectRatio: 'square',
      link: 'https://task-4-4-starter.vercel.app/'
    },
    {
      id: '6',
      title: 'Binary Convertor - Calculator',
      category: 'Web Design',
      tags: ['UI/UX', 'Conversion'],
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/20230731110443/Java-Program-for-Decimal-to-Binary-Conversion-300.png',
      aspectRatio: 'square',
      link: 'https://4-2-binary-conveter.vercel.app/'
    },
    {
      id: '7',
      title: 'Weather App',
      category: 'Web Design', 
      tags: ['Forecast', 'News'],
      image: 'https://cdn-icons-png.flaticon.com/512/7477/7477790.png',
      aspectRatio: 'square',
      link: 'https://task4-react-weatherapp.vercel.app/'
    },
    {
      id: '8',
      title: 'Electrical SDS',
      category: 'Mobile App',
      tags: ['Safety', 'OSHA', 'Electricity'],
      image: 'https://cdn11.bigcommerce.com/s-za3wv/images/stencil/1280x1280/products/19143/361757/IS1023-__49939.1552699559.jpg?c=2',
      aspectRatio: 'square',
      link: 'https://electrical-sds-ashley.vercel.app/'
    },
    {
      id: '9',
      title: 'Log in Form',
      category: 'Web Design',
      tags: ['UI/UX', 'Web'],
      image: 'https://login-form-brown-theta.vercel.app/assets/original-pic.png',
      aspectRatio: 'square',
      link: 'https://login-form-brown-theta.vercel.app/'
    }
  ];

  const filteredProjects =
    selectedFilter === 'all'
      ? projects
      : projects.filter(project =>
          project.category.toLowerCase() === selectedFilter.toLowerCase() ||
          project.tags.some(tag =>
            tag.toLowerCase().includes(selectedFilter.toLowerCase())
          )
        );

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A showcase of my design work across mobile apps and web platforms.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category.toLowerCase())}
              className={`px-6 py-3 rounded-lg transition-all ${
                selectedFilter === category.toLowerCase()
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid (Desktop) */}
        <Masonry columnsCount={3} gutter="2rem" className="max-md:hidden">
          {filteredProjects.map(project => (
            <div key={project.id} className="group text-left mb-8 w-full">
              <button
                onClick={() => onViewProject(project.id)}
                className="w-full"
              >
                <div
                  className={`rounded-lg overflow-hidden mb-4 bg-muted ${
                    project.aspectRatio === 'square'
                      ? 'aspect-[16/9]'
                      : 'aspect-square'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </button>

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{project.category}</p>
                <h3 className="text-xl group-hover:text-muted-foreground transition-colors">
                  {project.title}
                </h3>

                {/* Hosted Link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm text-primary hover:underline"
                  >
                    View Live →
                  </a>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Masonry>

        {/* Mobile Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:hidden">
          {filteredProjects.map(project => (
            <div key={project.id} className="group text-left">
              <button onClick={() => onViewProject(project.id)} className="w-full">
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </button>

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{project.category}</p>
                <h3 className="text-xl group-hover:text-muted-foreground transition-colors">
                  {project.title}
                </h3>

                {/* Hosted Link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm text-primary hover:underline"
                  >
                    View Live →
                  </a>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-24">
            <p className="text-xl text-muted-foreground">No projects found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
