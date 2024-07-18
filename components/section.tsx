import { ISectionProps } from '@/lib/definitions';

export default function SectionContainer({
	children,
	sectionId,
}: ISectionProps) {
	return (
		<section id={sectionId} className="w-full">
			{children}
		</section>
	);
}
