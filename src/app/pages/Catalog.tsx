import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

import formats from "../../data/catalogFormats.json";

import montajes from "../../data/catalogMontajes.json";
import { LazyImage } from "../components/LazyImage";

export function Catalog() {
  const [selectedFormat, setSelectedFormat] = useState<"SMART" | "PRO" | "ELITE">("SMART");

  return (
    <div className="relative min-h-screen pt-24 sm:pt-28" style={{ position: 'relative' }}>
      <section className="relative py-20 px-4 sm:px-6 lg:px-8" style={{ position: 'relative' }}>
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 md:mb-12 text-white break-words">
              SERVICIOS
            </h1>

            <div className="flex justify-center gap-2 sm:gap-4 mb-8">
              {formats.map((format) => (
                <button
                  key={format}
                  onClick={() => setSelectedFormat(format as "SMART" | "PRO" | "ELITE")}
                  className={`px-4 sm:px-8 md:px-10 py-3 sm:py-4 font-black text-sm sm:text-lg md:text-xl transition-all border-2 sm:border-4 ${selectedFormat === format
                    ? "bg-accent text-black border-accent"
                    : "bg-transparent text-white border-white hover:bg-white hover:text-black"
                    }`}
                >
                  {format}
                </button>
              ))}
            </div>

            <p
              key={selectedFormat}
              className="text-lg uppercase tracking-wider text-muted-foreground"
            >
              {selectedFormat === "SMART" && "EVENTOS PEQUEÑOS / MEDIANOS"}
              {selectedFormat === "PRO" && "PRODUCCIÓN PROFESIONAL / ALTO NIVEL"}
              {selectedFormat === "ELITE" && "EXPERIENCIAS EXCLUSIVAS / SIN LÍMITES"}
            </p>
          </motion.div>

          <motion.div
            key={selectedFormat}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {montajes[selectedFormat].map((montaje, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden bg-card flex flex-col h-full"
              >
                <div className="relative h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden">
                  <LazyImage
                    src={montaje.image}
                    alt={`Montaje de eventos ${montaje.title} - ${montaje.description}`}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover md:grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl sm:text-3xl font-black mb-4 md:mb-6 uppercase">{montaje.title}</h3>

                  <p className="text-white text-base md:text-lg mb-6 md:mb-8 leading-relaxed flex-grow">{montaje.description}</p>

                  <Link
                    to="/contacto"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-transparent text-accent font-black uppercase border-4 border-accent hover:bg-accent hover:text-black transition-all"
                  >
                    Solicitar presupuesto
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 text-center"
          >
            <div className="max-w-3xl mx-auto p-6 md:p-12 border-4 border-accent">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 uppercase">¿No sabes qué se adapta a tu fiesta?</h2>
              <p className="text-muted-foreground mb-8 text-lg uppercase tracking-wide">
                Haz nuestro test y descubre el montaje perfecto para tu evento
              </p>
              <Link
                to="/test"
                className="inline-flex items-center gap-2 px-10 py-5 bg-transparent text-accent font-black uppercase border-4 border-accent hover:bg-accent hover:text-black transition-all text-lg"
              >
                Hacer test
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
