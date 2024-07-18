'use client';
import Testimony from '@/components/testimony';
import SectionTitle from '@/components/title';
import { servicesContent } from '@/content/main';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	EffectCards,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-cards';

export default function Testimonials() {
	return (
		<div className="py-16 px-4 sm:px-[50px] md:px-[100px] lg:px-[100px]">
			<SectionTitle title="What Our Clients Say" />
			<div
				data-aos="zoom-in-down"
				data-aos-duration="1000"
				className="w-full place-items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 py-8"
			>
				{servicesContent.testimonials.map((testimonial, index) => (
					<Testimony
						key={`testimonial-${index}`}
						name={testimonial.name}
						profile_image={testimonial.profile_image}
						rating={testimonial.rating}
						feedback={testimonial.feedback}
					/>
				))}
			</div>

			{/* <div className=" py-16">
				<Swiper
					effect={'cards'}
					grabCursor={true}
					modules={[EffectCards]}
					className="mySwiper"
				>
					{servicesContent.testimonials.map((testimonial, index) => (
						<div className=" flex justify-center">
							<SwiperSlide>
								<Testimony
									key={`testimonial-${index}`}
									name={testimonial.name}
									profile_image={testimonial.profile_image}
									rating={testimonial.rating}
									feedback={testimonial.feedback}
								/>
							</SwiperSlide>
						</div>
					))}
				</Swiper>
			</div> */}
		</div>
	);
}
