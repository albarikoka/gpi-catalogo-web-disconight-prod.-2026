import { Link } from "react-router";
import { Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-4 md:relative md:flex-row md:justify-between">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            © 2026 DISCONIGHT PROD.
          </p>

          <div className="flex items-center gap-6 md:absolute md:left-1/2 md:-translate-x-1/2 md:gap-4">
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/disconight.prod/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/disconight.prod/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>

            <Link to="/contacto" className="text-xs uppercase tracking-wide hover:text-accent transition-colors md:hidden">
              CONTACTO
            </Link>
          </div>

          <Link to="/contacto" className="hidden md:block text-xs uppercase tracking-wide hover:text-accent transition-colors">
            CONTACTO
          </Link>
        </div>
      </div>
    </footer>
  );
}
