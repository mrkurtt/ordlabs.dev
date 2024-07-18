'use client';

import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Link,
	Button,
} from '@nextui-org/react';
import { useState } from 'react';
import Image from 'next/image';
import { companyLogo, navBtn, navItems } from '@/content/nav';

export default function Nav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<Navbar maxWidth="full" onMenuOpenChange={setIsMenuOpen} isBordered>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
					className="sm:hidden"
				/>
				<NavbarBrand>
					<Image
						src={companyLogo.image}
						alt={companyLogo.alt}
						height={companyLogo.height}
					/>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				{navItems.map((item, index) => (
					<NavbarItem key={`${item}-${index}`}>
						<a
							className="text-md text-gray-700 hover:text-primary font-semibold"
							href={item.href}
						>
							{item.name}
						</a>
					</NavbarItem>
				))}
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem>
					<Button
						className="bg-gradient-to-r from-primary to-secondary text-white"
						as={Link}
						href={navBtn.href}
						variant="flat"
					>
						{navBtn.label}
					</Button>
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu>
				{navItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<a
							color={
								index === 2
									? 'primary'
									: index === navItems.length - 1
									? 'danger'
									: 'foreground'
							}
							className="w-full text-gray-700 hover:text-primary font-semibold"
							href={item.href}
						>
							{item.name}
						</a>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
