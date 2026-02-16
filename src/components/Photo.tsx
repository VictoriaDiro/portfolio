import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ArrowLeft, Calendar, Tag } from "lucide-react";
import { SectionTitle } from "./Experience";
import blogPosts from "@/data/blog-posts.json";

interface BlogPost {
	id: string;
	title: string;
	date: string;
	excerpt: string;
	content: string;
	tags: string[];
}

const Photo = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="border-t border-border/50 py-24">
      <div className="container mx-auto px-6">
        <SectionTitle icon={<BookOpen size={20} />} title="Blog" />

        <AnimatePresence mode="wait">
          {selectedPost ? (
            <motion.article
              key="detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="mb-6 flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                <ArrowLeft size={16} /> Volver al listado
              </button>

              <div className="rounded-xl border border-border bg-card p-8">
                <h3 className="mb-3 font-['Space_Grotesk'] text-2xl font-bold text-foreground">
                  {selectedPost.title}
                </h3>
                <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} /> {formatDate(selectedPost.date)}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedPost.tags.map((tag) => (
                      <span key={tag} className="flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs text-primary">
                        <Tag size={10} /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                  {selectedPost.content.split("\n\n").map((paragraph, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
                  ))}
                </div>
              </div>
            </motion.article>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {(blogPosts as BlogPost[]).map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="group w-full rounded-xl border border-border bg-card p-6 text-left transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="mb-3 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="mb-2 font-['Space_Grotesk'] text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar size={12} /> {formatDate(post.date)}
                    </span>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });
};

export default Photo;
