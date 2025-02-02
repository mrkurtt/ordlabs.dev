import Statistic from '@/components/statistic';
import { servicesContent } from '@/content/main';

export default function Statistics() {
	return (
		<div className="bg-gradient-to-r from-primary to-secondary">
			<div className="flex justify-center py-4 px-4 sm:px-[50px] md:px-[100px] lg:px-[100px]">
				<div
					data-aos="fade-down"
					data-aos-duration="1000"
					className="w-full grid grid-cols-4 gap-x-4 py-8"
				>
					{servicesContent.statistics.map((stat, index) => (
						<Statistic
							key={`statistic-${index}`}
							title={stat.title}
							count={stat.count}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
