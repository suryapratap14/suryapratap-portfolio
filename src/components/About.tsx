import { Code2, Briefcase, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 rounded-xl bg-card border border-border hover:border-primary transition-all group">
            <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-all">
              <Code2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Tech Enthusiast</h3>
            <p className="text-muted-foreground">
              Passionate about modern web technologies and building innovative solutions with React, Node.js, and MongoDB.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-card border border-border hover:border-primary transition-all group">
            <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-all">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Experience</h3>
            <p className="text-muted-foreground">
              Currently contributing to real-world projects as a Full Stack Developer, with hands-on experience in MERN stack.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-card border border-border hover:border-primary transition-all group">
            <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-all">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Career Goal</h3>
            <p className="text-muted-foreground">
              To secure a challenging role where I can utilize my skills in React, Node.js, and MongoDB to contribute to innovative projects.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-serif font-semibold mb-4">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Surya Pratap Mallick is an aspiring Full Stack Developer passionate about creating modern, 
              responsive, and efficient web applications using React, Node.js, Express, and MongoDB. With a 
              strong foundation in programming and mathematics, he focuses on crafting seamless user experiences 
              and optimized back-end solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I enjoy working with agencies and enthusiastic people who want to solve problems through 
              thoughtful design and experiences. My approach combines technical expertise with creative 
              problem-solving to deliver exceptional web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
