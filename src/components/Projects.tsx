import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import carRentalImg from "@/assets/project-car-rental.jpg";
import estateImg from "@/assets/project-estate.jpg";
import pharmacyImg from "@/assets/project-pharmacy.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Car Rental Website",
      description: "Built a responsive platform for car rentals with booking functionality, car filters, and an admin dashboard. Implemented authentication, image uploads, and real-time data handling.",
      tech: ["React.js", "Node.js", "MongoDB", "Express"],
      image: carRentalImg,
      github: "#",
      live: "#"
    },
    {
      title: "MERN Estate Project",
      description: "Real-estate management system with property listings, search filters, and role-based authentication. Developed REST APIs for property management and secure JWT-based login.",
      tech: ["React.js", "Node.js", "Express", "MongoDB"],
      image: estateImg,
      github: "#",
      live: "#"
    },
    {
      title: "Pharmacy Inventory Management",
      description: "Created a pharmacy stock management system for tracking medicines, inventory levels, and supplier details. Includes admin dashboard, CRUD operations, and low-stock alerts.",
      tech: ["PHP", "MySQL", "HTML", "CSS"],
      image: pharmacyImg,
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">
            My Recent Work
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary transition-all"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/50 hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-primary to-secondary"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
