import { Code2, Database, Laptop, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming",
      skills: ["HTML", "CSS", "JavaScript", "Java"]
    },
    {
      icon: Laptop,
      title: "Web Development",
      skills: ["React.js", "Node.js", "Express.js"]
    },
    {
      icon: Database,
      title: "Database",
      skills: ["MongoDB", "MySQL"]
    },
    {
      icon: Wrench,
      title: "Core Strengths",
      skills: ["MERN Stack", "REST APIs", "Responsive UI", "Authentication"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Skills & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary transition-all group"
              >
                <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg w-fit mb-4 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
