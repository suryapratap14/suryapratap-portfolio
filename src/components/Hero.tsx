import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <div className="inline-block">
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">
              Full Stack Developer
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold">
            Surya Pratap{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Mallick
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-lg">
            Building scalable, user-friendly, and efficient web solutions with the MERN stack.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90"
            >
              Get in Touch
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/suryapratap14"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/surya-pratap-mallick"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:suryapratapmallick0@gmail.com"
              className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="relative animate-slide-in-right">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl" />
          <div className="relative aspect-[3/4] overflow-hidden border-2 border-primary/40">
            <img
              src={profileImage}
              alt="Surya Pratap Mallick"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
