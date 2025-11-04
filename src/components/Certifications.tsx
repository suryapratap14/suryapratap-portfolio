import { Award, BookOpen } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Full Stack Web Development Internship",
      issuer: "Prinston Smart Engineers Pvt. Ltd.",
      description: "Completed comprehensive internship focusing on MERN stack development and real-world project implementation."
    },
    {
      title: "FDP on AI & Digital Tools",
      issuer: "AICTE ATAL Academy",
      description: "Faculty Development Program covering artificial intelligence applications and modern digital tools for web development."
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Certifications & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all">
                  {index === 0 ? (
                    <Award className="h-6 w-6 text-primary" />
                  ) : (
                    <BookOpen className="h-6 w-6 text-primary" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                  <p className="text-primary text-sm mb-3">{cert.issuer}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block p-6 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <p className="text-lg font-medium mb-2">
              Continuously expanding knowledge through hands-on projects and industry experience
            </p>
            <p className="text-muted-foreground">
              Currently pursuing MCA with focus on modern web technologies and full-stack development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
