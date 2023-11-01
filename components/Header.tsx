import Link from 'next/link';
import { locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import LocaleSwitcher from './LocaleSwitcher';
import SwitchTheme from './SwitchTheme';
import Image from 'next/image';
import logo from '@/public/logo.svg';

export default async function Header({ lang }: { lang: locale }) {
	const { navigation } = await getDictionary(lang);

	return (
		<header className='py-2 bg-blue-200 dark:bg-gray-800 px-6 md:px-24 w-screen'>
			<div className='flex flex-row justify-between container mx-auto'>
				<div className='py-2 lg:flex max-lg:hidden'>
					<Link href={`/${lang}`}>
						<Image src={logo} alt='logo' width={50} height={50} />
					</Link>
					{/* <span className='text-3xl font-extrabold'>Logo</span> */}
				</div>
				<div className='relative group max-lg:flex lg:hidden'>
					<div className='flex items-center gap-1'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-12 p-2 border-2 border-gray-800 rounded-lg text-black dark:text-gray-200 dark:border-gray-200 group relative dark:hover:bg-black duration-150 hover:bg-black hover:text-white cursor-pointer'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
							/>
						</svg>
						{/* <span className='text-lg font-semibold'>{navigation.menu}</span> */}
					</div>

					<ul className='absolute hidden space-y-5 group-hover:block w-screen bg-slate-200 p-4 rounded-xl dark:bg-black mt-16 -ml-32 items-center text-center text-xl'>
						<li>
							<Link href={`/${lang}`}>{navigation.home}</Link>
						</li>
						<li>
							<Link href={`/${lang}/about`}>{navigation.about}</Link>
						</li>
						<li>
							<Link href={`/${lang}/work`}>{navigation.work}</Link>
						</li>
						<li>
							<Link href={`/${lang}/blog`}>{navigation.blog}</Link>
						</li>
						<li>
							<Link href={`/${lang}/shop`}>{navigation.shop}</Link>
						</li>
						<li>
							<Link href={`/${lang}/contact`}>{navigation.contact}</Link>
						</li>
					</ul>
				</div>
				<nav className='items-center justify-between hidden lg:flex'>
					<ul className='flex gap-x-8 font-semibold'>
						<li>
							<Link
								href={`/${lang}`}
								className='hover:scale-105 duration-150 hover:border-b-4 border-blue-600 pb-2 hover:text-blue-600'
							>
								{navigation.home}
							</Link>
						</li>
						<li>
							<Link
								href={`/${lang}/about`}
								className='hover:scale-105 duration-150 hover:border-b-4 border-blue-600 pb-2 hover:text-blue-600'
							>
								{navigation.about}
							</Link>
						</li>
						<li>
							<Link
								href={`/${lang}/work`}
								className='hover:scale-105 duration-150 hover:border-b-4 border-blue-600 pb-2 hover:text-blue-600'
							>
								{navigation.work}
							</Link>
						</li>
						<li>
							<Link
								href={`/${lang}/blog`}
								className='hover:scale-105 duration-150 hover:border-b-4 border-blue-600 pb-2 hover:text-blue-600'
							>
								{navigation.blog}
							</Link>
						</li>
						<li>
							<Link
								href={`/${lang}/shop`}
								className='hover:scale-105 duration-150 hover:border-b-4 border-blue-600 pb-2 hover:text-blue-600'
							>
								{navigation.shop}
							</Link>
						</li>
						<li>
							<Link
								href={`/${lang}/contact`}
								className='hover:scale-105 duration-150 hover:border-b-4 border-blue-600 pb-2 hover:text-blue-600'
							>
								{navigation.contact}
							</Link>
						</li>
					</ul>
				</nav>
				<div className='flex max-sm:gap-2 gap-6 py-2'>
					<LocaleSwitcher />
					<SwitchTheme />
				</div>
			</div>
		</header>
	);
}
