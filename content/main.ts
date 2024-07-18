import HeroImage from '../public/hero-main.jpg';
// import CompanyLogo from '../public/ordlabs-nobg.png';
import CompanyLogo from '../public/ordlabs-v3.png';
import { CgWebsite } from 'react-icons/cg';
import { MdOutlineAppSettingsAlt } from 'react-icons/md';
import { TbBrush } from 'react-icons/tb';
import { RiBrainLine } from 'react-icons/ri';
import Testimony from '../public/testimony-icon.jpg';
import ContactImage from '../public/contact-3.jpg';

export const company = {
	name: 'Ord Labs',
	services: [{}],
};

export const heroContent = {
	heading: 'Building Quality Software to Drive Your Business Forward',
	subheading: `At ${company.name}, we provide top-notch software development services tailored to meet the unique needs of small businesses.`,
	heroImage: {
		image: HeroImage,
		alt: 'hero image',
	},
};

export const aboutContent = {
	description: `${company.name} is a software development company dedicated to empowering small businesses with innovative, high-quality software solutions. We specialize in custom-built applications that drive growth and efficiency.`,
	companyLogo: {
		image: CompanyLogo,
		alt: `${company.name} Logo`,
	},
	mission:
		'To transform ideas into reality through innovative software solutions, helping small businesses thrive in the digital age.',
	vision: `We envision ${company.name} as a leader in the software development industry, recognized for our commitment to innovation, quality, and client satisfaction. Our goal is to inspire creativity, foster technological advancement, and build long-lasting partnerships that contribute to the success and sustainability of small businesses worldwide.`,
};

export const servicesContent = {
	services: [
		{
			title: 'Website Development',
			description:
				'Crafting visually appealing and functional websites that enhance your online presence.',
			icon: CgWebsite,
		},
		{
			title: 'Web App Development',
			description:
				'Building robust and scalable web applications tailored to your business needs.',
			icon: RiBrainLine,
		},
		{
			title: 'Mobile App Development',
			description:
				'Creating seamless and user-friendly mobile experiences for iOS and Android.',
			icon: MdOutlineAppSettingsAlt,
		},
		{
			title: 'Responsive UI/UX Design',
			description:
				'Designing user experiences that are both pleasing and highly functional.',
			icon: TbBrush,
		},
	],
	statistics: [
		{
			title: 'Happy Clients',
			count: 7,
		},
		{
			title: 'Projects Completed',
			count: 10,
		},
		{
			title: 'Years in Business',
			count: 2,
		},
		{
			title: 'Team Members',
			count: 4,
		},
	],
	testimonials: [
		{
			name: 'Frichel Pasal',
			profile_image: Testimony,
			position: 'Student',
			rating: 4,
			feedback:
				'It was great working with Ord Labs, they are very responsive and they are responsible of their work, they give quality work, while also meeting our deadlines.',
		},
		{
			name: 'Xyrus Dominguez',
			profile_image: Testimony,
			position: 'Student',
			rating: 5,
			feedback:
				'Staff was very responsive and attentive to detail, quality of work is excellent and very open to queries and suggestions.',
		},
		{
			name: 'Gabriel Balagulan',
			profile_image: Testimony,
			position: 'Student',
			rating: 5,
			feedback: 'They really provide a good service.',
		},
	],
};

export const contactContent = {
	image: ContactImage,
	email: 'ordlabs.dev@yahoo.com',
	contactNumber: '+63 956-926-8559',
	address: 'Cagayan de Oro City, Philippines',
};
