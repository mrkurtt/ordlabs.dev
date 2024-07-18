import ServiceCard from '@/components/service';
import SectionTitle from '@/components/title';
import { servicesContent } from '@/content/main';
import Statistics from './statistics';
import Testimonials from './testimonials';

export default function Services() {
	return (
		<>
			<div className="py-16 px-4 sm:px-[50px] md:px-[100px] lg:px-[100px]">
				<SectionTitle title="Services We Offer" />
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
					{servicesContent.services.map((service, index) => (
						<ServiceCard
							key={`service-${index}`}
							icon={service.icon}
							title={service.title}
							description={service.description}
						/>
					))}
				</div>
			</div>
			<Statistics />
			{/* <Testimonials /> */}
		</>
	);
}
