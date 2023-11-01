'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { i18n } from '@/i18n.config';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
export default function LocaleSwitcher() {
	const pathName = usePathname();

	const redirectedPathName = (locale: string) => {
		if (!pathName) return '/';
		const segments = pathName.split('/');
		segments[1] = locale;
		return segments.join('/');
	};

	return (
		<ul className='flex gap-x-3'>
			<div className='relative group'>
				<div className='flex items-center gap-1'>
					<p className='flex group bg-black p-2 rounded-lg cursor-pointer w-16 justify-between h-10 items-center'>
						🌐
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-4 h-4 text-white pt-0.5'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M19.5 8.25l-7.5 7.5-7.5-7.5'
							/>
						</svg>
					</p>
				</div>
				<ul className='absolute hidden space-y-5 group-hover:block bg-slate-900 p-4 rounded-xl dark:bg-slate-700'>
					{i18n.locales.map(locale => {
						return (
							<li key={locale}>
								<Link
									href={redirectedPathName(locale)}
									className='rounded-lg border bg-black px-3 py-2 text-white dark:bg-white dark:text-black font-semibold'
								>
									{locale}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</ul>
	);
}
