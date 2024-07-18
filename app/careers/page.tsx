import JobOpenings from '@/components/jobOpenings';
import SectionTitle from '@/components/title';
import { careersContent, jobOpenings, showCareers } from '@/content/careers';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Careers',
};

export default function Page() {
	return (
		<div className="w-full py-16 px-4 sm:px-[50px] md:px-[100px] lg:px-[100px]">
			<div className="flex flex-col gap-y-8 items-center justify-center ">
				<SectionTitle title="Join Our Team" />
				<div className="text-md sm:text-lg md:text-xl lg:text-2xl text-center gap-y-8 px-4 sm:px-8 md:px-12 lg:px-20">
					<p className="">{careersContent.heading1}</p>
					<p className="mt-4">{careersContent.heading2}</p>
					<p className="mt-4 ">{careersContent.heading3}</p>
				</div>
			</div>
			<div className="flex flex-col items-center mt-16 ">
				<h1 className="text-primary font-bold text-2xl">
					Current Job Openings
				</h1>
				<div className="text-center text-lg px-4 sm:px-8 md:px-12 lg:px-20 ">
					{showCareers ? (
						<>
							<p>Explore our current job openings below</p>
							<JobOpenings />
							<div>
								<h1 className="font-semibold text-primary text-2xl">
									How to Apply
								</h1>
								<p>
									If you are passionate about technology and eager to contribute
									to our mission, we would love to hear from you! <br />
									Please send your resume and a cover letter to{' '}
									<strong>careers@ordlabs.dev</strong> , specifying the position
									you are applying for in the subject line.
								</p>
							</div>
						</>
					) : (
						<div className="border shadow-md rounded-lg p-8 mt-6">
							<p className="text-sm sm:text-md lg:text-lg">
								We currently do not have any open job positions. <br /> However,
								we are always on the lookout for talented individuals who share
								our passion for technology and innovation.
							</p>
						</div>
					)}{' '}
				</div>
			</div>
		</div>
	);
}
