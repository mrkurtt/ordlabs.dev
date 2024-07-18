import React from 'react';
import { heroContent } from '@/content/main';
import Image from 'next/image';
import { Button } from '@nextui-org/react';

export default function Hero() {
	return (
		<div className="h-screen flex justify-center items-center px-4 sm:px-[50px] md:px-[100px] lg:px-[100px] py-16">
			<div className="flex flex-col lg:flex-row items-center gap-x-4 gap-y-6">
				<div
					data-aos="zoom-in"
					data-aos-duration="1000"
					className="order-2 sm:order-2 md:order-1 flex flex-col gap-y-3"
				>
					<h1 className="leading-10 text-gray-800 text-3xl md:text-4xl lg:text-5xl font-bold">
						{heroContent.heading}
					</h1>
					<p className="text-gray-700 mt-6 text-md lg:text-xl">
						{heroContent.subheading}
					</p>
					<a href="#services">
						<Button className="bg-gradient-to-r from-primary to-secondary text-white w-44">
							Explore our Services
						</Button>
					</a>
				</div>
				<div
					data-aos="zoom-in"
					data-aos-duration="1000"
					className="order-1 sm:order-1 md:order-2"
				>
					<Image
						src={heroContent.heroImage.image}
						alt={heroContent.heroImage.alt}
						width={1500}
					/>
				</div>
			</div>
		</div>
	);
}
