import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Calendar, Building2, Eye } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import certifications from "@/data/certifications.json";

interface Certification {
	id: number;
	title: string;
	institution: string;
	date: string;
	description: string;
	certificateImage: string;
}

const formatDate = (dateStr: string) => {
	const [year, month] = dateStr.split("-");
	const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
	return `${months[parseInt(month) - 1]} ${year}`;
};

const Certifications = () => {
	const [selected, setSelected] = useState<Certification | null>(null);

	return (
		<section id="certificaciones" className="py-20 sm:py-28">
			<div className="container mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-14 text-center"
					>
				<h2 className="font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
					Cursos y Certificaciones
				</h2>
				<p className="mx-auto mt-4 max-w-xl text-muted-foreground">
					Formación complementaria y certificaciones obtenidas para seguir creciendo profesionalmente.
				</p>
				</motion.div>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{([...certifications] as Certification[]).reverse().map((cert, i) => (
							<motion.div
								key={cert.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: i * 0.1 }}
								className="group rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
							>
							<div className="mb-4 flex items-center gap-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
									<Award size={20} />
								</div>
								<h3 className="font-['Space_Grotesk'] text-lg font-semibold text-foreground leading-tight">
								{cert.title}
								</h3>
							</div>

							<div className="mb-4 flex flex-col gap-2 text-sm text-muted-foreground">
								<span className="flex items-center gap-2">
								<Building2 size={14} className="text-primary/70" />
									{cert.institution}
								</span>
								<span className="flex items-center gap-2">
									<Calendar size={14} className="text-primary/70" />
									{formatDate(cert.date)}
								</span>
							</div>

							<p className="mb-5 text-sm leading-relaxed text-muted-foreground/80">
								{cert.description}
							</p>

							<button
								onClick={() => setSelected(cert)}
								className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
							>
								<Eye size={16} />
								Ver certificado
							</button>
						</motion.div>
					))}
				</div>
			</div>

			<Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
				<DialogContent className="max-w-2xl">
					<DialogHeader>
						<DialogTitle className="font-['Space_Grotesk']">{selected?.title}</DialogTitle>
						<DialogDescription>
						{selected?.institution} — {selected ? formatDate(selected.date) : ""}
						</DialogDescription>
					</DialogHeader>
					<div className="mt-4 overflow-hidden rounded-lg border border-border/50">
						<img
						src={selected?.certificateImage}
						alt={`Certificado de ${selected?.title}`}
						className="h-auto w-full object-contain"
						/>
					</div>
				</DialogContent>
			</Dialog>
		</section>
	);
};

export default Certifications;
