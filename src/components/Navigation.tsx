import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

const Navigation = () => {
  return (
    <nav className="w-full border-b border-border bg-background">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center hover:opacity-70 transition-opacity">
          <img src={logo} alt="Logo" className="h-8 w-8" />
        </Link>
        
        <div className="flex items-center gap-8">
          <Link 
            to="/projects" 
            className="text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            Projects
          </Link>
          <Link 
            to="/blog" 
            className="text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
