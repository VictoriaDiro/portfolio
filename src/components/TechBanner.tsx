const techs = [
  "HTML5", "CSS3", "LESS", "JavaScript", "TypeScript", "React",
  "Git", "Figma", "Node.js", "Sass", "Tailwind", "Vite",
];

const TechBanner = () => {
  return (
    <section className="border-y border-border/50 bg-card/50 py-8">
      <div className="overflow-hidden">
        <div className="animate-scroll-left flex w-max gap-12">
          {[...techs, ...techs].map((tech, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-['Space_Grotesk'] text-lg font-medium text-muted-foreground/60 transition-colors hover:text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechBanner;
