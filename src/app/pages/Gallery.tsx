import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn } from "lucide-react";

import photos from "../../data/galleryPhotos.json";
import { LazyImage } from "../components/LazyImage";


export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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

    if (selectedImage !== null) {
      adjustScrollLock(true);
      return () => adjustScrollLock(false);
    }
  }, [selectedImage]);

  return (
    <div className="relative min-h-screen pt-24 sm:pt-28" style={{ position: 'relative' }}>
      <section className="relative py-20" style={{ position: 'relative' }}>
        <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 md:mb-12 text-white break-words">
              GALERÍA
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 uppercase tracking-wide">
              Momentos únicos capturados
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative aspect-square cursor-pointer overflow-hidden"
                onClick={() => setSelectedImage(index)}
              >
                <LazyImage
                  src={photo.url}
                  alt={photo.category}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-accent text-sm">{photo.category}</p>
                  </div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="p-2 bg-white/10 backdrop-blur-sm">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 border-2 border-accent opacity-0 group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/98 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 p-3 bg-accent text-black hover:bg-white transition-all z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-7xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-video">
                <LazyImage
                  src={photos[selectedImage].url}
                  alt={photos[selectedImage].category}
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute -bottom-20 left-0 right-0 text-center"
              >
                <p className="text-accent text-lg">{photos[selectedImage].category}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
