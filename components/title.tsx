import { ISectionTitleProp } from '@/lib/definitions';

export default function SectionTitle({ title, className }: ISectionTitleProp) {
	return (
		<h1
			data-aos="fade-up"
			data-aos-duration="1000"
			className={`${className} text-center text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700`}
		>
			{title}
		</h1>
	);
}
