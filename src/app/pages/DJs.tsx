import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Instagram, X } from "lucide-react";
import djs from "../../data/djs.json";
import { LazyImage } from "../components/LazyImage";

export function DJs() {
  const [selectedDJ, setSelectedDJ] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen pt-24 sm:pt-28" style={{ position: 'relative' }}>
      <section className="relative py-12 sm:py-16 md:py-20" style={{ position: 'relative' }}>
        <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 sm:mb-8 md:mb-12 text-white break-words">
              DJS
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto uppercase tracking-wide px-4">
              Equipo de DJs jóvenes, dinámicos e innovadores preparados para destacar en cualquier evento
            </p>
          </motion.div>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {djs.map((dj, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <LazyImage
                    src={dj.image}
                    alt={`Fotografía del DJ ${dj.name}`}
                    width={600}
                    height={800}
                    className="w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 transition-all duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  <div className="absolute inset-0 p-4 sm:p-5 md:p-6 flex flex-col justify-end">
                    <div className="flex justify-between items-center mb-3 sm:mb-4">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                        {dj.name}
                      </h3>
                      <a
                        href={dj.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm hover:bg-accent hover:scale-110 transition-all flex-shrink-0"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </a>
                    </div>

                    <button
                      onClick={() => setSelectedDJ(index)}
                      className="w-full py-3 sm:py-4 px-4 bg-transparent text-accent font-black uppercase text-xs sm:text-sm border-2 border-accent hover:bg-accent hover:text-black transition-all"
                    >
                      TOP 3 CANCIONES
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedDJ !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm px-4"
            onClick={() => setSelectedDJ(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-lg w-full bg-card border-4 border-accent p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedDJ(null)}
                className="absolute top-4 right-4 p-2 bg-accent text-black hover:bg-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="text-2xl sm:text-3xl font-black mb-2 uppercase">
                {djs[selectedDJ].name}
              </h2>
              <p className="text-accent text-sm sm:text-base font-bold mb-6 uppercase">
                Top 3 Canciones
              </p>

              <div className="space-y-3">
                {djs[selectedDJ].topSongs.map((song, i) => (
                  <motion.a
                    key={i}
                    href={song.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-center gap-4 p-4 bg-background/50 hover:bg-accent/10 border-2 border-border hover:border-accent transition-all group"
                  >
                    <LazyImage
                      src={song.coverUrl || `https://via.placeholder.com/40?text=${i + 1}`}
                      alt={`Cover of ${song.title}`}
                      width={40}
                      height={40}
                      className="w-10 h-10 object-cover rounded"
                    />
                    <div className="flex-grow min-w-0">
                      <p className="font-bold text-white text-sm sm:text-base truncate">
                        {song.title}
                      </p>
                      <p className="text-muted-foreground text-xs sm:text-sm truncate">
                        {song.artist}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
