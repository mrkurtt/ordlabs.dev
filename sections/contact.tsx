import SectionTitle from '@/components/title';
import { contactContent } from '@/content/main';
import { Button, Input, Textarea } from '@nextui-org/react';
import Image from 'next/image';
import {
	InboxArrowDownIcon,
	PhoneIcon,
	MapPinIcon,
} from '@heroicons/react/24/outline';

export default function Contact() {
	return (
		// <div className="flex justify-center ">
		<div className="bg-gradient-to-r from-primary to-secondary py-16 px-4 sm:px-[50px] md:px-[100px] lg:px-[100px]">
			<SectionTitle className="text-white" title="Contact Us" />

			<div className="bg-white rounded-xl p-8 mt-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
					<div className="col-span-1 ">
						<div className="mb-8">
							<h1 className="text-primary font-bold text-2xl">Get In Touch</h1>
							<p className="text-lg">
								Let's Connect: We're Here to Help You Succeed with Tailored
								Solutions and Exceptional Support
							</p>
						</div>

						{/* FORM */}
						<div className="">
							<div className="flex flex-col gap-y-4">
								<div className="grid grid-cols-2 gap-x-3 lg:gap-x-8 ">
									<Input type="text" placeholder="Enter your first name" />
									<Input type="text" placeholder="Enter your last name" />
								</div>

								<Input
									type="email"
									// label="Email"
									placeholder="Enter your email"
								/>
								<Input type="text" placeholder="Enter your phone number" />
								<Textarea placeholder="Tell us about your project or how we can assist you..." />
								<Button className="bg-gradient-to-r from-primary to-secondary text-white text-md">
									Submit
								</Button>
							</div>
						</div>
					</div>
					<div className="bg-contact bg-cover col-span-1 h-full">
						{/* <h1 className="font-semibold">
							You can also reach us through the following
						</h1> */}
						{/* <div className="flex flex-col gap-y-1 mt-3">
							<div className="flex gap-x-2">
								<InboxArrowDownIcon className="w-6" />
								<p className="font-semibold">{contactContent.email}</p>
							</div>
							<div className="flex gap-x-2">
								<PhoneIcon className="w-6" />
								<p className="font-semibold">{contactContent.contactNumber}</p>
							</div>
							<div className="flex gap-x-2">
								<MapPinIcon className="w-6" />
								<p className="font-semibold">{contactContent.address}</p>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</div>
		// </div>
	);
}
