import { jobOpenings } from '@/content/careers';
import Job from './job';

export default function JobOpenings() {
	return (
		<div className="my-8 flex flex-col gap-y-6">
			{jobOpenings.map((opening, index) => (
				<Job
					key={`job-${index}`}
					position={opening.position}
					experience={opening.experience}
					location={opening.location}
					stack={opening.stack}
					status={opening.status}
				/>
			))}
		</div>
	);
}
