'use client';
import Link from 'next/link';
import { Bars3Icon, Bars3BottomLeftIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { getDictionary } from '@/lib/dictionary';
import { locale } from '@/i18n.config';

export default async function MenuB({ lang }: { lang: locale }) {
	const { navigation } = await getDictionary(lang);
	const [menu, setMenu] = useState(false);

	const handleChange = () => {
		setMenu(!menu);
	};

	const closeMenu = () => {
		setMenu(false);
	};
	return (
		<div>
			<div className='md:hidden flex items-center'>
				{menu ? (
					<Bars3BottomLeftIcon fontSize={25} onClick={handleChange} />
				) : (
					<Bars3Icon fontSize={25} onClick={handleChange} />
				)}
			</div>
			<div
				className={` ${
					menu ? 'translate-x-0' : '-translate-x-full'
				} lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
			>
				<Link href={`/${lang}`}>{navigation.home}</Link>

				<Link href={`/${lang}/about`}>{navigation.about}</Link>

				<Link href={`/${lang}/work`}>{navigation.work}</Link>

				<Link href={`/${lang}/blog`}>{navigation.blog}</Link>

				<Link href={`/${lang}/shop`}>{navigation.shop}</Link>

				<Link href={`/${lang}/contact`}>{navigation.contact}</Link>
			</div>
		</div>
	);
}
