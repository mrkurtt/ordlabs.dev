import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import Nav from '@/components/nav';
import Footer from '@/components/footer';

const poppins = Poppins({
	weight: [
		'100',
		'200',
		'300',
		'400',
		'500',
		'600',
		'700',
		'800',
		'900',
		'100',
		'200',
		'300',
		'400',
		'500',
		'600',
		'700',
		'800',
		'900',
	],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: {
		template: '%s | Ord Labs',
		default: 'Ord Labs',
	},
	description:
		'Ord Labs is a software development company dedicated to empowering small businesses with innovative software solutions tailored to your unique needs. From web and mobile app development to UI/UX design, our expert team is committed to transforming your ideas into reality.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="light">
			<body className={`${poppins.className} font-poppins text-gray-700`}>
				<Nav />
				<Providers>{children}</Providers>
				<Footer />
			</body>
		</html>
	);
}
