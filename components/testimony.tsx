'use client';
import { ITestimonyProps } from '@/lib/definitions';
import Image from 'next/image';
import star from '../public/star.png';

export default function Testimony({
	name,
	profile_image,
	rating,
	feedback,
}: ITestimonyProps) {
	const renderStars = () => {
		const stars = [];
		for (let i = 0; i < rating; i++) {
			stars.push(
				<Image key={`star-${i}`} className="w-[15px]" src={star} alt="star" />
			);
		}
		return stars;
	};

	return (
		<div className="bg-white p-8 shadow-lg flex flex-col gap-y-3 text-center items-center border rounded-xl min-h-[350px] max-w-[400px] w-full">
			<Image className="rounded-full w-[80px]" src={profile_image} alt={name} />

			<h1 className="font-semibold text-2xl  bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
				{name}
			</h1>
			<div className="flex gap-x-1 -mt-2">{renderStars()}</div>
			<p className="text-sm mt-4">{feedback}</p>
		</div>
	);
}
