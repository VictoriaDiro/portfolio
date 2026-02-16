import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionTitle } from "./Experience";

const education = [
  {
    institution: "Universidad de Madrid",
    degree: "Grado en Ingeniería Informática",
    period: "2016 — 2020",
    description: "Especialización en desarrollo de software y sistemas web. Proyecto de fin de grado sobre accesibilidad web y diseño inclusivo.",
  },
  {
    institution: "OpenWebinars",
    degree: "Certificación Frontend Developer",
    period: "2021",
    description: "Programa intensivo de HTML5, CSS3, JavaScript ES6+, responsive design y buenas prácticas de desarrollo web.",
  },
  {
    institution: "Platzi",
    degree: "Curso Avanzado de JavaScript",
    period: "2022",
    description: "Profundización en closures, prototipos, async/await, módulos ES y patrones de diseño en JavaScript.",
  },
];

const Education = () => {
  return (
    <section id="educacion" className="border-t border-border/50 py-24">
      <div className="container mx-auto px-6">
        <SectionTitle icon={<GraduationCap size={20} />} title="Educación" />

        <div className="relative ml-4 border-l border-border pl-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative mb-12 last:mb-0"
            >
              <div className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-background">
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>

              <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-foreground">{edu.degree}</h3>
                  <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
                    {edu.period}
                  </span>
                </div>
                <p className="mb-3 text-sm font-medium text-primary/80">{edu.institution}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
