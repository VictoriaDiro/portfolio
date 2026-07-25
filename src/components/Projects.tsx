import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import projectsData from "@/data/projects.json";

type Project = {
  id: number;
  title: string;
  description: string;
  preview: string;
  url: string;
  tags: string[];
};

const projects = projectsData as Project[];

const Projects = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 font-['Space_Grotesk'] text-4xl font-bold text-foreground">
            Proyectos
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Una selección de páginas web y aplicaciones que he diseñado y desarrollado.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.preview}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-background/0 transition-colors group-hover:bg-background/40">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/90 text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-['Space_Grotesk'] text-base font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <ExternalLink size={14} className="text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
