import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Agencia Creativa",
    role: "Frontend Developer",
    period: "2023 — Presente",
    description:
      "Desarrollo de interfaces web responsive con HTML, CSS/LESS y JavaScript vanilla. Colaboración con diseñadores UX/UI para implementar diseños pixel-perfect. Optimización del rendimiento y accesibilidad web.",
  },
  {
    company: "Studio Digital",
    role: "Maquetadora Web",
    period: "2021 — 2023",
    description:
      "Maquetación de sitios web corporativos y landing pages. Implementación de animaciones CSS y efectos interactivos. Mantenimiento y actualización de sitios existentes.",
  },
  {
    company: "TechStart",
    role: "Becaria de Desarrollo",
    period: "2020 — 2021",
    description:
      "Aprendizaje práctico de desarrollo frontend. Participación en proyectos internos y soporte al equipo de desarrollo. Introducción a metodologías ágiles y control de versiones con Git.",
  },
];

const Experience = () => {
  return (
    <section id="experiencia" className="py-24">
      <div className="container mx-auto px-6">
        <SectionTitle icon={<Briefcase size={20} />} title="Experiencia Laboral" />

        <div className="relative ml-4 border-l border-border pl-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-background">
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>

              <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-foreground">{exp.role}</h3>
                  <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
                    {exp.period}
                  </span>
                </div>
                <p className="mb-3 text-sm font-medium text-primary/80">{exp.company}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const SectionTitle = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
  <div className="mb-12 flex items-center gap-3">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">{icon}</div>
    <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-foreground">{title}</h2>
  </div>
);

export default Experience;
