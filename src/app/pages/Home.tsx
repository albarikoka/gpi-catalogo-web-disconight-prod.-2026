import image_logo_completo_disconight_grande from '@/imports/logo-completo-disconight-grande.png'
import { Link } from "react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import galleryPhotos from "../../data/galleryPhotos.json";
import { LazyImage } from "../components/LazyImage";
export function Home() {
  return (
    <div className="min-h-screen relative" style={{ position: 'relative' }}>
      <section style={{ position: 'relative' }} className="h-screen overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background z-10" />
          <LazyImage
            src="/home/hero.webp"
            alt="DJ actuando en vivo en un evento nocturno"
            fetchpriority="high"
            width={1920}
            height={1080}
            className="w-full h-full object-cover grayscale brightness-[0.4]"
          />
        </div>

        <div className="relative z-20 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-12 sm:mb-16 opacity-0 anim-fade-in-up anim-delay-1">
              <LazyImage
                src={image_logo_completo_disconight_grande}
                alt="Logo completo de DISCONIGHT Producción de Eventos"
                fetchpriority="high"
                width={800}
                height={200}
                className="w-full max-w-md md:max-w-xl lg:max-w-xl h-auto"
              />
            </div>

            <p className="text-2xl uppercase tracking-wide text-white/90 mb-8 opacity-0 anim-fade-in-up-sm anim-delay-2">
              PRODUCCIÓN DE EVENTOS
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 anim-fade-in-up-sm anim-delay-3">
              <Link
                to="/catalogo"
                className="inline-flex items-center gap-2 px-6 py-4 sm:px-10 sm:py-5 bg-accent text-black font-black uppercase border-4 border-accent hover:bg-transparent hover:text-accent transition-all text-base sm:text-lg"
              >
                SERVICIOS
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>

              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 px-6 py-4 sm:px-10 sm:py-5 bg-transparent text-white font-black uppercase border-4 border-white hover:bg-white hover:text-black transition-all text-base sm:text-lg"
              >
                CONTACTO
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 z-20 anim-bounce-y">
          <ChevronDown className="w-8 h-8 text-accent" />
        </div>
      </section>

      <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-t-4 border-accent" style={{ position: 'relative', contentVisibility: 'auto' }}>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left lg:pr-8">
              <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight break-words">
                SOBRE NOSOTROS
              </h2>

              <div className="space-y-4 md:space-y-6 text-base md:text-lg lg:text-xl tracking-wide leading-relaxed text-justify lg:text-left">
                <p>
                  Con más de 10 años de trayectoria, en DiscoNight Prod. diseñamos y ejecutamos montajes profesionales de sonido, iluminación y efectos especiales, combinando tecnología avanzada con un equipo técnico altamente capacitado.
                </p>
                <p>
                  Nos especializamos en festivales de DJs, fiestas patronales, bodas y sonorización de grupos, adaptando cada producción a las características del evento y del espacio. Cuidamos cada detalle del proceso para garantizar un resultado impecable y coherente con la visión del cliente.

                </p>
                <p>
                  Apostamos por la innovación y la renovación constante de nuestros equipos para ofrecer espectáculos modernos, envolventes y de calidad superior.
                </p>
              </div>

              <Link
                to="/catalogo"
                className="inline-flex items-center gap-2 px-10 py-5 bg-transparent text-accent font-black uppercase border-4 border-accent hover:bg-accent hover:text-black transition-all text-lg mx-auto lg:mx-0"
              >
                VER SERVICIOS
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="relative h-[400px] md:h-[600px] lg:h-[700px] overflow-hidden hidden md:block">
              <LazyImage
                src="/home/sobrenosotros.webp"
                alt="Equipo profesional de iluminación y sonido para eventos"
                width={1200}
                height={800}
                className="w-full h-full object-cover grayscale brightness-[0.7]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-y-4 border-accent overflow-hidden" style={{ position: 'relative', contentVisibility: 'auto' }}>
        <div className="absolute inset-0">
          <LazyImage
            src="/home/test.webp"
            alt="Montaje técnico de producción de eventos DiscoNight"
            width={1920}
            height={1080}
            className="md:hidden w-full h-full object-cover grayscale brightness-[0.15]"
          />
          <LazyImage
            src="/home/test.webp"
            alt="Controladora profesional de DJ con luces y efectos"
            width={1920}
            height={1080}
            className="hidden md:block w-full h-full object-cover grayscale brightness-[0.15]"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-8">
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-black leading-tight">
              ¿NO SABES QUÉ ELEGIR?
            </h2>

            <p className="text-xl uppercase tracking-wide leading-relaxed">
              HAZ NUESTRO TEST PERSONALIZADO Y DESCUBRE EL SERVICIO PERFECTO PARA TU EVENTO / RÁPIDO Y FÁCIL
            </p>

            <Link
              to="/test"
              className="inline-flex items-center gap-2 px-10 py-5 bg-transparent text-accent font-black uppercase border-4 border-accent hover:bg-accent hover:text-black transition-all text-lg"
            >
              HACER TEST
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8" style={{ position: 'relative', contentVisibility: 'auto' }}>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-black mb-8">
              GALERÍA
            </h2>
            <p className="text-xl uppercase tracking-wide max-w-3xl mx-auto">
              REVIVE LOS MEJORES MOMENTOS
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-12">
            {galleryPhotos.slice(0, 4).map((photo, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden group"
              >
                <LazyImage
                  src={photo.url}
                  alt={photo.category}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/galeria"
              className="inline-flex items-center gap-2 px-10 py-5 bg-transparent text-accent font-black uppercase border-4 border-accent hover:bg-accent hover:text-black transition-all text-lg"
            >
              VER TODAS
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-t-4 border-accent" style={{ position: 'relative', contentVisibility: 'auto' }}>
        <div className="relative max-w-5xl mx-auto text-center space-y-8 md:space-y-12">
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-black">
            ¿LISTO?
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl uppercase tracking-wide leading-relaxed">
            CUÉNTANOS TU PROYECTO / CREAMOS LA EXPERIENCIA PERFECTA PARA TU EVENTO
          </p>

          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 px-10 py-5 bg-transparent text-white font-black uppercase border-4 border-white hover:bg-white hover:text-black transition-all text-lg"
          >
            CONTACTAR
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
