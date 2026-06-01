import { Link } from "react-router";
import { motion } from "motion/react";
import { Home, ArrowLeft, ArrowRight } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black mb-4 text-white">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 uppercase">Página no encontrada</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-4 border-accent text-accent font-bold uppercase hover:bg-accent hover:text-black transition-all"
            >
              Ir al inicio
              <ArrowRight className="w-5 h-5" />

            </Link>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
