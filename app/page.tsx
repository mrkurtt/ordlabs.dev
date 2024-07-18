'use client';

import Hero from '@/sections/hero';
import SectionContainer from '@/components/section';
import About from '@/sections/about';
import Services from '@/sections/services';
import Contact from '@/sections/contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
	useEffect(() => {
		AOS.init();
	}, []);

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
