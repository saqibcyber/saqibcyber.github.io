import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 max-w-4xl mx-auto px-6 py-xl w-full">
        <h1 className="text-4xl font-semibold mb-md text-foreground">Projects</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-2xl max-w-2xl">
          A collection of cybersecurity projects, tools, and research I've worked on.
        </p>

        <div className="space-y-xl">
          {projects.map((project) => (
            <Link 
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="block group"
            >
              <article className="border-l-2 border-border pl-md hover:border-accent transition-colors">
                <div className="flex items-baseline gap-2 mb-xs">
                  <h2 className="text-xl font-medium text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h2>
                  <span className="text-xs text-muted-foreground">
                    {new Date(project.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short' 
                    })}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
