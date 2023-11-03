import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

const Contact = async ({ params: { lang } }: { params: { lang: Locale } }) => {
	const { page } = await getDictionary(lang);

	return (
		<div>
			<h2>{page.contact.title}</h2>
			<p>{page.contact.description}</p>;
		</div>
	);
};

export default Contact;
