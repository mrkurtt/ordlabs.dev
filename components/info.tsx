import { ICompanyInfoProps } from '@/lib/definitions';

export default function CompanyInfo({ title, description }: ICompanyInfoProps) {
	return (
		<div className="mt-6">
			<h3 className="text-xl font-semibold text-primary">{title}</h3>
			<p className="text-md text-gray-800">{description}</p>
		</div>
	);
}
