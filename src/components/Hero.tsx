import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen pt-24">
      <div className="container mx-auto px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left — Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-2 font-mono text-sm text-primary">Hola, soy</p>
            <h1 className="mb-4 font-['Space_Grotesk'] text-5xl font-bold leading-tight text-foreground lg:text-6xl">
              Ana García
            </h1>
            <p className="mb-6 text-xl text-primary">Desarrolladora Web Frontend</p>
            <p className="mb-8 max-w-lg text-base leading-relaxed text-muted-foreground">
              Apasionada por crear experiencias web accesibles, performantes y visualmente atractivas.
              Especializada en HTML, CSS/LESS y JavaScript vanilla con más de 5 años de experiencia
              construyendo interfaces modernas y responsive.
            </p>

            {/* Social links */}
            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:ana@example.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-muted-foreground transition-all hover:border-primary hover:text-primary"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Summary cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            <SummaryCard title="Experiencia" items={[
              "Frontend Developer — Agencia Creativa (2023–presente)",
              "Maquetadora Web — Studio Digital (2021–2023)",
              "Becaria Desarrollo — TechStart (2020–2021)",
            ]} />
            <SummaryCard title="Formación" items={[
              "Grado en Ingeniería Informática — Universidad de Madrid",
              "Certificación Frontend — OpenWebinars",
              "Curso avanzado JavaScript — Platzi",
            ]} />
          </motion.div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-primary/3 blur-[100px]" />
      </div>
    </section>
  );
};

const SummaryCard = ({ title, items }: { title: string; items: string[] }) => (
  <div className="rounded-xl border border-border bg-card p-5">
    <h3 className="mb-3 font-['Space_Grotesk'] text-sm font-semibold uppercase tracking-wider text-primary">
      {title}
    </h3>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default Hero;
