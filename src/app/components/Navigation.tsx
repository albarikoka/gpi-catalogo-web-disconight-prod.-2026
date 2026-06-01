import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logoImg from "@/imports/favicon.png";
import { LazyImage } from "./LazyImage";

const navItems = [
  { path: "/", label: "HOME" },
  { path: "/catalogo", label: "SERVICIOS" },
  { path: "/djs", label: "DJS" },
  { path: "/galeria", label: "GALERÍA" },
  { path: "/test", label: "TEST" },
  { path: "/contacto", label: "CONTACTO" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Coordinated scroll lock
  useEffect(() => {
    const adjustScrollLock = (lock: boolean) => {
      const win = window as any;
      win.__scrollLocks = (win.__scrollLocks || 0) + (lock ? 1 : -1);
      if (win.__scrollLocks > 0) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
        win.__scrollLocks = 0;
      }
    };

    if (isOpen) {
      adjustScrollLock(true);
      return () => adjustScrollLock(false);
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-4 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 sm:h-28">
          <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <LazyImage
              src={logoImg}
              alt="Logo de DiscoNight Producción de Eventos"
              fetchpriority="high"
              width={200}
              height={200}
              className="h-12 sm:h-14 md:h-16 w-auto"
            />
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-3 text-white hover:text-accent transition-colors"
          >
            {isOpen ? <X className="w-8 h-8 sm:w-10 sm:h-10" /> : <Menu className="w-8 h-8 sm:w-10 sm:h-10" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-24 sm:top-28 bg-background z-40"
          >
            <div className="h-full flex flex-col items-center justify-center px-4 space-y-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tight hover:text-accent transition-colors ${location.pathname === item.path
                      ? "text-accent"
                      : "text-white"
                      }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="pt-12"
              >
                <div className="h-1 w-32 bg-accent" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
