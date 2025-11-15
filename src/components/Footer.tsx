import { Github, Linkedin, FileText } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background mt-auto">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex items-center justify-center gap-6 mb-4">
          <a
            href="https://github.com/saqibcyber"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com/in/saqibmajeed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Resume"
          >
            <FileText className="h-4 w-4" />
          </a>
        </div>
        <p className="text-center text-xs text-muted-foreground">
          © {currentYear}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
