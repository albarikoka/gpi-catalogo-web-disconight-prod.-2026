import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, Instagram, Facebook, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    location: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Crear el cuerpo del email
    const emailBody = `
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
Tipo de evento: ${formData.eventType}
Localidad: ${formData.location}
Fecha del evento: ${formData.date}

Mensaje:
${formData.message}
    `.trim();

    // Crear el mailto link
    const mailtoLink = `mailto:disconight.prod@gmail.com?subject=Consulta desde Web - ${formData.name}&body=${encodeURIComponent(emailBody)}`;

    // Abrir el cliente de correo en una nueva pestaña
    window.open(mailtoLink, '_blank');

    toast.success("¡Abriendo tu cliente de correo!");

    // Limpiar el formulario después de un breve delay
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        location: "",
        date: "",
        message: "",
      });
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative min-h-screen pt-24 sm:pt-28" style={{ position: 'relative' }}>
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8" style={{ position: 'relative' }}>
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h1 className="text-[40px] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 md:mb-12 text-white break-words">
              CONTACTO
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto uppercase tracking-wide px-4">
              ¿Listo para hacer realidad tu evento? Escríbenos y te ayudaremos con todo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-card p-4 sm:p-6 border border-border">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">Envíanos un mensaje</h2>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm sm:text-base">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 text-sm sm:text-base bg-input-background border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm sm:text-base">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 text-sm sm:text-base bg-input-background border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block mb-2 text-sm sm:text-base">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 text-sm sm:text-base bg-input-background border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                        placeholder="+34 600 000 000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="eventType" className="block mb-2 text-sm sm:text-base">
                      Tipo de evento
                    </label>
                    <input
                      type="text"
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 text-sm sm:text-base bg-input-background border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                      placeholder="Kintos, Cumpleaños, Evento corporativo..."
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="location" className="block mb-2 text-sm sm:text-base">
                        Localidad
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 text-sm sm:text-base bg-input-background border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                        placeholder="¿Desde dónde nos escribes?"
                      />
                    </div>

                    <div>
                      <label htmlFor="date" className="block mb-2 text-sm sm:text-base">
                        Fecha del evento
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 text-sm sm:text-base bg-input-background border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm sm:text-base">
                      Cuéntanos sobre tu evento
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-input-background border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                      placeholder="Describe tu evento, número de invitados, preferencias musicales..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 sm:py-4 text-sm sm:text-base bg-accent text-black font-black uppercase border-4 border-accent hover:bg-transparent hover:text-accent transition-all flex items-center justify-center gap-2"
                  >
                    Enviar Mensaje
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 sm:space-y-4"
            >
              <div className="bg-card p-4 sm:p-6 border border-border">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">Información de contacto</h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-accent/10 border border-accent/20 flex-shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold mb-1 text-sm sm:text-base">Teléfono / WhatsApp</p>
                      <a href="tel:+34646365279" className="text-muted-foreground hover:text-accent transition-colors text-sm sm:text-base break-all">
                        646 36 52 79
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-accent/10 border border-accent/20 flex-shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold mb-1 text-sm sm:text-base">Email</p>
                      <a href="mailto:disconight.prod@gmail.com" className="text-muted-foreground hover:text-accent transition-colors text-sm sm:text-base break-all">
                        disconight.prod@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-4 sm:p-6 border border-border">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-center md:text-left">Síguenos</h3>
                <div className="flex gap-3 sm:gap-4 justify-center md:justify-start">
                  {[
                    { icon: Instagram, label: "Instagram", color: "from-pink-500 to-purple-500", url: "https://www.instagram.com/disconight.prod/" },
                    { icon: Facebook, label: "Facebook", color: "from-blue-600 to-blue-400", url: "https://www.facebook.com/disconight.prod/" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative p-3 sm:p-4 bg-accent/10 border border-accent/20 hover:border-accent/50 transition-all"
                    >
                      <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                        initial={false}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
