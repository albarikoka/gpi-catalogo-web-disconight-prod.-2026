import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, ArrowLeft, RotateCcw } from "lucide-react";
import { LazyImage } from "../components/LazyImage";

const questions = [
  {
    id: 1,
    question: "¿Cuántos invitados esperas en tu evento?",
    options: [
      { text: "100-300 personas", value: "medium", points: { smart: 2, pro: 2, elite: 0 } },
      { text: "300-500 personas", value: "large", points: { smart: 1, pro: 3, elite: 1 } },
      { text: "500-800 personas", value: "verylarge", points: { smart: 0, pro: 2, elite: 2 } },
      { text: "Más de 800 personas", value: "massive", points: { smart: 0, pro: 1, elite: 3 } },
    ],
  },
  {
    id: 2,
    question: "¿Qué nivel de producción buscas?",
    options: [
      { text: "Básico pero profesional", value: "basic", points: { smart: 3, pro: 0, elite: 0 } },
      { text: "Calidad media-alta", value: "medium", points: { smart: 1, pro: 3, elite: 0 } },
      { text: "Alta producción con efectos", value: "high", points: { smart: 0, pro: 2, elite: 2 } },
      { text: "Experiencia premium sin límites", value: "premium", points: { smart: 0, pro: 0, elite: 3 } },
    ],
  },
  {
    id: 3,
    question: "¿Cuál es tu presupuesto aproximado?",
    options: [
      { text: "Hasta 1.000€", value: "budget1", points: { smart: 3, pro: 0, elite: 0 } },
      { text: "1.000€ - 1.500€", value: "budget2", points: { smart: 1, pro: 3, elite: 0 } },
      { text: "1.500€ - 2.500€", value: "budget3", points: { smart: 0, pro: 2, elite: 2 } },
      { text: "Más de 2.500€", value: "budget4", points: { smart: 0, pro: 0, elite: 3 } },
    ],
  },
  {
    id: 4,
    question: "¿Qué tipo de ambiente quieres crear?",
    options: [
      { text: "Íntimo y acogedor", value: "intimate", points: { smart: 3, pro: 1, elite: 0 } },
      { text: "Festivo y animado", value: "festive", points: { smart: 1, pro: 3, elite: 1 } },
      { text: "Tipo festival o concierto", value: "festival", points: { smart: 0, pro: 2, elite: 3 } },
      { text: "Experiencia inmersiva total", value: "immersive", points: { smart: 0, pro: 1, elite: 3 } },
    ],
  },
  {
    id: 5,
    question: "¿Cuántas horas de fiesta necesitas?",
    options: [
      { text: "4-5 horas", value: "short", points: { smart: 3, pro: 0, elite: 0 } },
      { text: "6 horas", value: "medium", points: { smart: 2, pro: 1, elite: 0 } },
      { text: "7 horas o más", value: "long", points: { smart: 0, pro: 3, elite: 2 } },
      { text: "Toda la noche", value: "allnight", points: { smart: 0, pro: 1, elite: 3 } },
    ],
  },
];

const recommendations = {
  smart: {
    essential: {
      title: "Essential",
      category: "Formato Smart",
      price: "650€",
      image: "/servicios/essential.webp",
      description: "Lo básico, pero bien hecho. La versión más esencial para tus eventos íntimos",
      features: ["6 horas de duración", "1 DJ profesional", "Equipo de sonido", "Iluminación LED"],
    },
    smallStage: {
      title: "Small Stage",
      category: "Formato Smart",
      price: "750€",
      image: "/servicios/smallstage.webp",
      description: "Montaje funcional y cuidado. Ideal para pequeñas celebraciones",
      features: ["6 horas de duración", "1 DJ profesional", "Estructura escénica", "Iluminación LED avanzada"],
    },
    large: {
      title: "Large",
      category: "Formato Smart",
      price: "900€",
      image: "/servicios/large.webp",
      description: "Mayor presencia y magnitud para tu evento",
      features: ["6 horas de duración", "2 DJs profesionales", "Estructura de mayor presencia", "Iluminación profesional"],
    },
    twoBridges: {
      title: "2 Bridges",
      category: "Formato Smart",
      price: "1.200€",
      image: "/servicios/2bridges.webp",
      description: "El montaje gana profundidad con dos estructuras",
      features: ["6 horas de duración", "2 DJs profesionales", "Dos estructuras bridge", "Montaje en diferentes planos"],
    },
  },
  pro: {
    xxlPro: {
      title: "XXL PRO",
      category: "Formato Pro",
      price: "1.500€",
      image: "/servicios/xxlpro.webp",
      description: "La experiencia da un gran salto con efectos y detalles profesionales",
      features: ["7 horas de duración", "3 DJs profesionales", "Iluminación LED + láser", "Efectos especiales"],
    },
    macroNightFest: {
      title: "Macro Night Fest",
      category: "Formato Pro",
      price: "1.600€",
      image: "/servicios/macronightfest.webp",
      description: "Mentalidad de festival que sitúa al artista como eje del show",
      features: ["7 horas de duración", "3 DJs profesionales", "Producción tipo festival", "Show de luces completo"],
    },
    vDimension: {
      title: "V-Dimension",
      category: "Formato Pro",
      price: "1.800€",
      image: "/servicios/vdimension.webp",
      description: "La estructura en V envuelve al público con potencia y control",
      features: ["7 horas de duración", "3 DJs profesionales", "Estructura en V envolvente", "Iluminación robótica"],
    },
    spaceCube: {
      title: "Space Cube",
      category: "Formato Pro",
      price: "2.000€",
      image: "/servicios/spacecube.webp",
      description: "Cuadrilátero escénico que multiplica la intensidad del evento",
      features: ["7 horas de duración", "3 DJs profesionales", "Cuadrilátero escénico completo", "Iluminación 360°"],
    },
  },
  elite: {
    impactRoomShow: {
      title: "Impact Room Show",
      category: "Formato Elite",
      price: "2.800€",
      image: "/servicios/impactroomshow.webp",
      description: "Una creación inédita de alto impacto",
      features: ["7 horas de duración", "4 DJs profesionales", "Iluminación robótica profesional", "Efectos pirotécnicos"],
    },
    theNightXPerience: {
      title: "The Night X-Perience",
      category: "Formato Elite",
      price: "3.500€",
      image: "/servicios/thenightxperience.webp",
      description: "Nuestro montaje más grande convertido en una experiencia sin límites",
      features: ["7 horas de duración", "4 DJs profesionales", "Line array de concierto", "Video mapping 360°"],
    },
  },
};

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value });

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => setShowResult(true), 300);
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const reset = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  const getRecommendation = () => {
    // Calcular puntos totales por categoría
    const scores = { smart: 0, pro: 0, elite: 0 };

    questions.forEach((question) => {
      const answer = answers[question.id];
      const selectedOption = question.options.find(opt => opt.value === answer);
      if (selectedOption && selectedOption.points) {
        scores.smart += selectedOption.points.smart;
        scores.pro += selectedOption.points.pro;
        scores.elite += selectedOption.points.elite;
      }
    });

    // Determinar categoría ganadora
    let category: 'smart' | 'pro' | 'elite' = 'smart';
    if (scores.elite > scores.pro && scores.elite > scores.smart) {
      category = 'elite';
    } else if (scores.pro > scores.smart) {
      category = 'pro';
    }

    // Determinar montaje específico dentro de la categoría
    if (category === 'smart') {
      if (scores.smart <= 5) return recommendations.smart.essential;
      if (scores.smart <= 8) return recommendations.smart.smallStage;
      if (scores.smart <= 11) return recommendations.smart.large;
      return recommendations.smart.twoBridges;
    } else if (category === 'pro') {
      if (scores.pro <= 5) return recommendations.pro.xxlPro;
      if (scores.pro <= 8) return recommendations.pro.macroNightFest;
      if (scores.pro <= 11) return recommendations.pro.vDimension;
      return recommendations.pro.spaceCube;
    } else {
      if (scores.elite <= 8) return recommendations.elite.impactRoomShow;
      return recommendations.elite.theNightXPerience;
    }
  };

  const result = showResult ? getRecommendation() : null;

  return (
    <div className="relative min-h-screen pt-24 sm:pt-28 flex items-center justify-center" style={{ position: 'relative' }}>
      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-6">
                <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 text-white break-words">
                  TEST
                </h1>
                <p className="text-muted-foreground mb-6 uppercase tracking-wide text-base sm:text-lg md:text-xl">
                  Responde algunas preguntas y te ayudaremos a encontrar el servicio perfecto
                </p>

                <div className="flex gap-2 justify-center">
                  {questions.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 transition-all ${index === currentQuestion
                          ? "w-12 bg-accent"
                          : index < currentQuestion
                            ? "w-2 bg-accent/50"
                            : "w-2 bg-muted"
                        }`}
                    />
                  ))}
                </div>
              </div>

              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-card p-6 border border-border w-full max-w-2xl mx-auto min-h-[400px] flex flex-col"
              >
                <h2 className="text-xl font-bold mb-4">
                  {questions[currentQuestion].question}
                </h2>

                <div className="space-y-2 flex-grow">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleAnswer(option.value)}
                      className={`w-full p-3 text-left transition-all ${answers[questions[currentQuestion].id] === option.value
                          ? "bg-accent text-accent-foreground border border-accent"
                          : "bg-background border border-border hover:border-accent/50 hover:bg-accent/5"
                        }`}
                    >
                      {option.text}
                    </motion.button>
                  ))}
                </div>

                {currentQuestion > 0 && (
                  <button
                    onClick={goBack}
                    className="mt-6 flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Anterior
                  </button>
                )}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="text-center w-full"
            >
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 text-white break-words">
                TU RESULTADO
              </h1>

              <div className="bg-card p-4 md:p-8 border-4 border-accent mb-8 w-full max-w-2xl mx-auto">
                  <div className="text-center mb-6">
                    <p className="text-sm text-accent font-bold mb-2 uppercase tracking-wider">{result?.category}</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 uppercase">{result?.title}</h2>
                    {result?.image && (
                      <div className="relative w-full aspect-video mb-6 overflow-hidden">
                        <LazyImage
                          src={result.image}
                          alt={result.title}
                          className="w-full h-full object-cover"
                          fetchpriority="high"
                        />
                      </div>
                    )}
                    <p className="text-muted-foreground mb-6 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                      {result?.description}
                    </p>
                  </div>

                <div className="space-y-3 mb-8">
                  {result?.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-3 bg-background/50 p-3"
                    >
                      <div className="w-1.5 h-1.5 bg-accent mt-2 flex-shrink-0" />
                      <span className="text-sm sm:text-base">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <p className="text-xs text-center text-muted-foreground uppercase tracking-wide">
                  Contacta con nosotros para recibir un presupuesto personalizado
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-black font-black uppercase border-4 border-accent hover:bg-transparent hover:text-accent transition-all"
                >
                  Solicitar Presupuesto
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  to="/catalogo"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-black uppercase border-4 border-white hover:bg-white hover:text-black transition-all"
                >
                  Ver Catálogo Completo
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <button
                  onClick={reset}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-4 border-[#666666] text-[#666666] font-black uppercase hover:border-white hover:text-white transition-all"
                >
                  <RotateCcw className="w-5 h-5" />
                  Repetir Test
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
