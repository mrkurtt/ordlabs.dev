import { IStatisticProps } from '@/lib/definitions';

export default function Statistic({ title, count }: IStatisticProps) {
	return (
		<div className="p-4 rounded">
			<div className="text-center text-white flex flex-col justify-center items-center gap-y-4">
				<h1 className="text-4xl lg:text-6xl font-bold">{count}</h1>
				<p className="text-xs md:text-md lg:text-lg">{title}</p>
			</div>
		</div>
	);
}
