import { locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

export default async function Home({
	params: { lang },
}: {
	params: { lang: locale };
}) {
	const { page } = await getDictionary(lang);

	return (
		<section className='bg-pink-400 w-screen'>
			<div className='container'>
				<h1 className='text-3xl font-bold'>{page.home.title}</h1>
				<p className='text-gray-500'>{page.home.description}</p>
			</div>
		</section>
	);
}
