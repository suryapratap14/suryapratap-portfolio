import { Globe, Layers, Code } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Responsive website creation using HTML, CSS, and React.js. Building modern, fast, and accessible web applications with attention to detail and user experience."
    },
    {
      icon: Layers,
      title: "MERN Stack Development",
      description: "Full-stack solutions using MongoDB, Express, React, and Node.js. End-to-end application development with scalable architecture and clean code."
    },
    {
      icon: Code,
      title: "Full-Stack Projects",
      description: "Complete application development including authentication, dashboards, and database integration. From concept to deployment with modern best practices."
    }
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            What I <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized services in modern web development and full-stack solutions
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-xl bg-card border border-border hover:border-primary transition-all relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
