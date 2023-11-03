import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

const WorkPage = async ({ params: { lang } }: { params: { lang: Locale } }) => {
	const { page } = await getDictionary(lang);

	return (
		<div>
			<h2>{page.work.title}</h2>
			<p>{page.work.description}</p>
		</div>
	);
};

export default WorkPage;
