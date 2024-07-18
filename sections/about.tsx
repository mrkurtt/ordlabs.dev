import CompanyInfo from '@/components/info';
import SectionTitle from '@/components/title';
import { aboutContent } from '@/content/main';
import Image from 'next/image';

export default function About() {
	return (
		<div className="py-16 px-4 sm:px-[50px] md:px-[100px] lg:px-[100px]">
			<SectionTitle title="Get To Know Us" />
			<div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 py-8">
				<div className="flex justify-center items-center col-span-1 md:col-span-1 lg:col-span-2">
					<div>
						<Image
							className="w-80 sm:w-[100px] md:w-[300px] lg:w-[400px]"
							src={aboutContent.companyLogo.image}
							alt={aboutContent.companyLogo.alt}
						/>
					</div>
				</div>
				<div className="flex items-center sm:col-span-1 md:col-span-2 lg:col-span-3 px-2 sm:px-4 md:px-6 lg:px-8">
					<div className="flex flex-col">
						<CompanyInfo
							title="Who We Are"
							description={aboutContent.description}
						/>
						<CompanyInfo
							title="Our Mission"
							description={aboutContent.mission}
						/>
						{/* <CompanyInfo title="Our Vision" description={aboutContent.vision} /> */}
					</div>
				</div>
			</div>
		</div>
	);
}
