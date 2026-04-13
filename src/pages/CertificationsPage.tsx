import Header from "@/components/Header";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";

const CertificacionesPage = () => {
	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main className="pt-16">
				<Certifications />
			</main>
			<Footer />
		</div>
	);
};

export default CertificacionesPage;
