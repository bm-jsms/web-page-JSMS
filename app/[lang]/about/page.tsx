'use cleint';
import { MotionAbout } from '@/components/motionAbout';
import { locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

export default async function About({
	params: { lang },
}: {
	params: { lang: locale };
}) {
	const { page } = await getDictionary(lang);

	return (
		<section className='py-24'>
			<div className='container'>
				<h1 className='text-3xl font-bold'>{page.about.title}</h1>
				<p className='text-gray-500'>{page.about.description}</p>
			</div>
			<MotionAbout>
				<div>
					<div className='w-10 h-10 bg-black'></div>
				</div>
			</MotionAbout>
		</section>
	);
}
