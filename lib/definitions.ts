import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';

export interface IBaseSectionProps {
	sectionId: string;
}

export interface ISectionProps extends IBaseSectionProps {
	children: ReactNode;
}

export interface ICompanyInfoProps {
	title: string;
	description: string;
}

export interface ISectionTitleProp {
	title: string;
	className?: string;
}

export interface IServiceCardProps {
	title: string;
	description: string;
	icon: IconType;
}

export interface IStatisticProps {
	title: string;
	count: number;
}

export interface ITestimonyProps {
	name: string;
	profile_image: StaticImageData;
	rating: number;
	feedback: string;
}

export interface IJobProps {
	position: string;
	experience: string;
	location: string;
	stack: string[];
	status: string;
}
