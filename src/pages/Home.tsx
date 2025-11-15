import { Link } from "react-router-dom";
import { Github, Linkedin, FileText } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getFeaturedProjects } from "@/data/projects";
import { getLatestPosts } from "@/data/posts";

const Home = () => {
  const featuredProjects = getFeaturedProjects().slice(0, 3);
  const latestPosts = getLatestPosts(3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 max-w-4xl mx-auto px-6 py-xl w-full">
        {/* Introduction */}
        <section className="mb-3xl">
          <h1 className="text-4xl font-semibold mb-md text-foreground">
            Hi, I'm Saqib.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-lg max-w-2xl">
           I’m an IT student @ Conestoga College and currently serve as the Cybersecurity Program
          Lead @ Muslims Achieving Excellence. I’m passionate about threat intelligence and incident response, 
          and I spend much of my free time building homelabs, breaking down the latest CVEs, or being yelled 
          at by my family while my IDS blocks legitimate traffic. 
          </p>
          
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/saqibcyber"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/saqibmajeed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="Resume"
            >
              <FileText className="h-5 w-5" />
            </a>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-3xl">
          <div className="flex items-center justify-between mb-lg">
            <h2 className="text-2xl font-semibold text-foreground">Featured Projects</h2>
            <Link 
              to="/projects" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View all →
            </Link>
          </div>
          
          <div className="space-y-lg">
            {featuredProjects.map((project) => (
              <Link 
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="block group"
              >
                <div className="border-l-2 border-border pl-md hover:border-accent transition-colors">
                  <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors mb-xs">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Latest Blog Posts */}
        <section className="mb-2xl">
          <div className="flex items-center justify-between mb-lg">
            <h2 className="text-2xl font-semibold text-foreground">Latest Posts</h2>
            <Link 
              to="/blog" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View all →
            </Link>
          </div>
          
          <div className="space-y-lg">
            {latestPosts.map((post) => (
              <Link 
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="block group"
              >
                <div className="border-l-2 border-border pl-md hover:border-accent transition-colors">
                  <div className="flex items-baseline gap-2 mb-xs">
                    <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
