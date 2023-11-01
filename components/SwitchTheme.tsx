'use client';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ThemeButton = () => {
	const { resolvedTheme, setTheme } = useTheme();
	return (
		<button
			aria-label='Toggle Dark Mode'
			type='button'
			className='flex items-center justify-center px-2 h-10 rounded-lg transition-colors hover:bg-zinc-400  dark:hover:bg-zinc-700 border-2 border-gray-800 dark:border-slate-200 dark:bg-zinc-900 bg-gray-100'
			onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
		>
			{resolvedTheme === 'dark' ? (
				<SunIcon className='h-5 w-5 text-orange-300' />
			) : (
				<MoonIcon className='h-5 w-5 text-slate-800 ' />
			)}
		</button>
	);
};

export default ThemeButton;
