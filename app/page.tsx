import Nav from '@/components/nav';
import Hero from '@/sections/hero';
import SectionContainer from '@/components/section';
import About from '@/sections/about';
import Services from '@/sections/services';
import Contact from '@/sections/contact';
import Footer from '@/components/footer';

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-between">
			<SectionContainer sectionId="home">
				<Hero />
			</SectionContainer>
			<SectionContainer sectionId="about">
				<About />
			</SectionContainer>
			<SectionContainer sectionId="services">
				<Services />
			</SectionContainer>
			<SectionContainer sectionId="contact">
				<Contact />
			</SectionContainer>
		</div>
	);
}
