import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Web Development Intern",
      company: "Vtrick's Technologies Pvt. Ltd.",
      location: "Offline",
      duration: "July 2025 - Present",
      description: "Contributing to building dynamic, database-driven web apps using MERN stack.",
      type: "work"
    },
    {
      title: "Full Stack Web Development Intern",
      company: "Prinston Smart Engineers Pvt. Ltd.",
      location: "Offline",
      duration: "Feb 2025 - Mar 2025",
      description: "Worked on full-stack web projects, enhancing skills in React.js, Node.js, and API integration.",
      type: "work"
    }
  ];

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "The Oxford College of Science, Bangalore University",
      duration: "Ongoing - Expected Nov 2025",
      cgpa: "7.34 CGPA (Latest Semester)",
      type: "education"
    },
    {
      degree: "Bachelor of Science in Mathematics",
      institution: "Brahmani Degree College, Utkal University, Odisha",
      duration: "Completed March 2023",
      cgpa: "7.32 CGPA",
      type: "education"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Experience & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-6 flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-primary" />
              Work Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary animate-glow" />
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-semibold">{exp.title}</h4>
                      <span className="text-sm text-primary">{exp.duration}</span>
                    </div>
                    <p className="text-muted-foreground mb-2">
                      {exp.company} • {exp.location}
                    </p>
                    <p className="text-foreground/80">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-secondary/30 last:pb-0"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-secondary" />
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-secondary transition-all">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-semibold">{edu.degree}</h4>
                      <span className="text-sm text-secondary">{edu.duration}</span>
                    </div>
                    <p className="text-muted-foreground mb-2">{edu.institution}</p>
                    <p className="text-foreground/80">{edu.cgpa}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
