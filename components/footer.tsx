import Image from 'next/image';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { companyLogo } from '@/content/nav';
import { footerLinks } from '@/content/footer';

export default function Footer() {
	return (
		<footer
			data-aos="zoom-up"
			data-aos-duration="1000"
			className="text-white w-full bg-gradient-to-r from-primary to-secondary"
		>
			<hr />
			<div className="py-8 px-4 sm:px-[50px] md:px-[100px] lg:px-[100px]">
				<div className="w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-y-4">
					<div className="col-span-1">
						<Image
							className="w-48 bg-white p-1 rounded-lg"
							src={companyLogo.image}
							alt="Ordlabs Logo"
						/>
						<div className="flex gap-x-3 px-1 mt-3">
							<Link href={footerLinks.facebook}>
								<FaFacebook className="text-3xl" />
							</Link>
							<Link href={footerLinks.linkedIn}>
								<FaLinkedin className="text-3xl" />
							</Link>
							<Link href={footerLinks.github}>
								<FaGithub className="text-3xl" />
							</Link>
						</div>
					</div>
					<div className="col-span-1">
						<div className="grid grid-cols-2">
							<div className="flex flex-col col-span-1">
								<a href="/#about">About Us</a>
								<Link href="/careers">Careers</Link>
							</div>
							<div className="flex flex-col col-span-1">
								<a href="/terms-and-conditions">Terms and Conditions</a>
								<a href="/privacy-policy">Privacy Policy</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <hr /> */}
			<div className="flex justify-center py-4">
				<hr />
				<p>Copyright 2024 &copy; OrdLabs. All Rights Reserved.</p>
			</div>
		</footer>
	);
}
