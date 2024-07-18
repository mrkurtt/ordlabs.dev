import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { FaTools } from 'react-icons/fa';

export default function UnderConstruction() {
	return (
		<div className="w-full h-screen flex flex-col justify-center items-center gap-y-3">
			<FaTools className="w-24 h-24 text-primary" />
			<h1 className="text-md lg:text-xl">This page is under construction.</h1>

			<Button
				className="mt-8 bg-gradient-to-r from-primary to-secondary text-white"
				variant="flat"
			>
				<Link href="/">Back to Home</Link>
			</Button>
		</div>
	);
}
