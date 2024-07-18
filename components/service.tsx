import { IServiceCardProps } from '@/lib/definitions';

export default function ServiceCard({
	title,
	description,
	icon: Icon,
}: IServiceCardProps) {
	return (
		<div
			data-aos="fade-up"
			data-aos-duration="1000"
			className="px-8 shadow-lg flex flex-col gap-y-3 text-center items-center justify-center border rounded-xl h-[300px]"
		>
			<div className="mb-4 p-3 rounded-full border-2 border-gray-500">
				<Icon className="text-primary" size={30} />
			</div>

			<h1 className="font-semibold text-2xl  bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
				{title}
			</h1>
			<p className="">{description}</p>
		</div>
	);
}
