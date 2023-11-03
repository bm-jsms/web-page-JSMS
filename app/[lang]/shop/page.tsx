import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

const Shop = async ({ params: { lang } }: { params: { lang: Locale } }) => {
	const { page } = await getDictionary(lang);

	return (
		<div>
			<h2>{page.shop.title}</h2>
			<p>{page.shop.description}</p>
		</div>
	);
};

export default Shop;
