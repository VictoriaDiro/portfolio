import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
	{ label: "Inicio", href: "#inicio" },
	{ label: "Experiencia", href: "#experiencia" },
	{ label: "Educación", href: "#educacion" },
	// { label: "Blog", href: "#blog" },
	// { label: "Photo", href: "#photo" },
];

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
			<nav className="container mx-auto flex items-center justify-between px-6 py-4">
				<a href="#inicio" className="font-['Space_Grotesk'] text-xl font-bold tracking-tight text-foreground">
					&lt;Dev /&gt;
				</a>

				{/* Desktop nav */}
				<ul className="hidden gap-8 md:flex">
					{navLinks.map((link) => (
						<li key={link.href}>
							<a
							href={link.href}
							className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
							>
							{link.label}
							</a>
						</li>
					))}
				</ul>

				{/* Mobile toggle */}
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="text-foreground md:hidden"
					aria-label="Toggle menu"
				>
					{isOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</nav>

			{/* Mobile menu */}
			<AnimatePresence>
			{isOpen && (
				<motion.div
				initial={{ opacity: 0, height: 0 }}
				animate={{ opacity: 1, height: "auto" }}
				exit={{ opacity: 0, height: 0 }}
				className="border-b border-border/50 bg-background/95 backdrop-blur-xl md:hidden"
				>
				<ul className="flex flex-col gap-1 px-6 py-4">
					{navLinks.map((link) => (
					<li key={link.href}>
						<a
							href={link.href}
							onClick={() => setIsOpen(false)}
							className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
						>
							{link.label}
						</a>
					</li>
					))}
				</ul>
				</motion.div>
			)}
			</AnimatePresence>
		</header>
	);
};

export default Header;
