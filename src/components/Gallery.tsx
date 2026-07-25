import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Play, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import galleryData from "@/data/gallery.json";

type GalleryItem = {
  id: number;
  type: "photo" | "video";
  title: string;
  description: string;
  year: number;
  src?: string;
  youtubeId?: string;
  thumbnail?: string;
};

const items = galleryData as GalleryItem[];

const Gallery = () => {
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<"all" | "photo" | "video">("all");

  const filtered = filter === "all" ? items : items.filter((i) => i.type === filter);

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
            Galería
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Antes de dedicarme al desarrollo web, mi pasión era la fotografía y el vídeo. Aquí una selección de mis trabajos audiovisuales.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-8 flex justify-center gap-2">
          {(["all", "photo", "video"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                filter === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {f === "all" ? "Todo" : f === "photo" ? "Fotografía" : "Vídeo"}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              onClick={() => setSelected(item)}
              className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.type === "photo" ? item.src : item.thumbnail}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-background/0 transition-colors group-hover:bg-background/40">
                  {item.type === "video" && (
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/90 text-primary-foreground opacity-80 transition-opacity group-hover:opacity-100">
                      <Play size={20} className="ml-0.5" />
                    </div>
                  )}
                </div>
                <span className="absolute left-3 top-3 flex items-center gap-1 rounded-md bg-background/80 px-2 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                  {item.type === "photo" ? <Camera size={12} /> : <Play size={12} />}
                  {item.year}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-['Space_Grotesk'] text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selected && (
            <div>
              {selected.type === "photo" ? (
                <img
                  src={selected.src}
                  alt={selected.title}
                  className="w-full"
                />
              ) : (
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${selected.youtubeId}?autoplay=1`}
                    title={selected.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-foreground">
                  {selected.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {selected.year} — {selected.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
