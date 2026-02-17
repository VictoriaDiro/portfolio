import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
	return (
		<footer className="border-t border-border/50 py-10">
			<div className="container mx-auto flex flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
				<p className="font-['Space_Grotesk'] text-sm text-muted-foreground">
					© {new Date().getFullYear()} Victoria Díaz. Todos los derechos reservados.
				</p>

				<div className="flex gap-4">
					{[
						{ icon: Github, href: "https://github.com/VictoriaDiro", label: "GitHub" },
						{ icon: Linkedin, href: "https://www.linkedin.com/in/victoriadiro/", label: "LinkedIn" },
						{ icon: Mail, href: "mailto:victoriadiro01@gmail.com", label: "Email" },
					].map(({ icon: Icon, href, label }) => (
						<a
							key={label}
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={label}
							className="text-muted-foreground transition-colors hover:text-primary"
						>
							<Icon size={18} />
						</a>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
