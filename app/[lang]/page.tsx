import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import Image from 'next/image';
import bg from '@/public/image/bg.png';
import astronaut from '@/public/assets/astronaut.png';
import { RepeatR } from '@/motionComponents/RepeatReverse';
import { MotionText } from '@/motionComponents/TextAnimate';
import PrimaryB from '@/components/Buttons/PrimaryB';
import SecondaryB from '@/components/Buttons/SecondaryB';

export default async function Home({
	params: { lang },
}: {
	params: { lang: Locale };
}) {
	const { page } = await getDictionary(lang);

	return (
		<div className='h-auto'>
			<section className='flex w-full items-center justify-center'>
				<Image
					alt='background'
					src={bg}
					width={1440}
					height={580}
					className='w-full object-cover object-center 2xl:rounded-5xl h-screen'
				/>

				<div className='absolute grid md:grid-cols-2 md:mx-20'>
					<div className='flex justify-center flex-col px-auto mx-10'>
						<MotionText>
							<h1 className='text-5xl font-black text-center dark:text-white text-slate-300 md:-mt-20 mb-5'>
								{page.home.title}
							</h1>
							<p className='text-gray-300 text-center text-xl font-normal mb-10'>
								{page.home.description}
							</p>
							<div className='flex flex-row gap-5 justify-evenly'>
								<PrimaryB text={page.home.button} to={`/${lang}/contact`} />

								<SecondaryB
									text={page.home.button2}
									to={`/${lang}/about`}
								></SecondaryB>
							</div>
						</MotionText>
					</div>

					<div className='justify-center  hidden md:flex'>
						<RepeatR>
							<Image
								src={astronaut}
								alt='Astronaut'
								className='px-auto'
							></Image>
						</RepeatR>
					</div>
				</div>
			</section>
			<section className='h-screen w-full'>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga enim vero
				explicabo eius hic, impedit veritatis dolorem dolores non esse labore
				quaerat beatae adipisci voluptatem dignissimos quasi perferendis id
				nam..
			</section>
		</div>
	);
}
