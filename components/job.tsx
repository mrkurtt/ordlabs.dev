import { IJobProps } from '@/lib/definitions';
import { IoLocationOutline } from 'react-icons/io5';
import { AiOutlineClockCircle } from 'react-icons/ai';

export default function Job({
	position,
	experience,
	location,
	stack,
	status,
}: IJobProps) {
	return (
		<div className="flex flex-col items-start p-4 lg:p-8 rounded-lg bg-white shadow-md border">
			<div className="w-full flex flex-col items-start">
				<h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
					{position}
				</h1>
				<div className="flex">
					<div className="flex gap-x-1">
						{stack.map((st, index) => (
							<div
								key={`stack-${index}`}
								className="bg-primary px-2 py-1 rounded-full h-[23px] lg:h-[26px]"
							>
								<p className="text-xs lg:text-sm text-white">{st}</p>
							</div>
						))}
					</div>
				</div>
			</div>

			<p className="text-md sm:text-lg md:text-xl lg:text-2xl">{experience}</p>
			<div className="flex mt-8 gap-x-3">
				<div className="flex items-center gap-x-1">
					<IoLocationOutline className="text-primary text-2xl" />
					<p className="text-sm md:text-md lg:text-lg">{location}</p>
				</div>
				<div className="flex items-center gap-x-1">
					<AiOutlineClockCircle className="text-primary text-2xl" />
					<p className="text-sm md:text-md lg:text-lg">{status}</p>
				</div>
			</div>
		</div>
	);
}
