import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { posts } from "@/data/posts";

const Blog = () => {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 max-w-4xl mx-auto px-6 py-xl w-full">
        <h1 className="text-4xl font-semibold mb-md text-foreground">Blog</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-2xl max-w-2xl">
          Thoughts on cybersecurity, secure development practices, and technical deep-dives.
        </p>

        <div className="space-y-xl">
          {sortedPosts.map((post) => (
            <Link 
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="block group"
            >
              <article className="border-l-2 border-border pl-md hover:border-accent transition-colors">
                <div className="flex items-baseline gap-2 mb-xs">
                  <h2 className="text-xl font-medium text-foreground group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
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
              </article>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
