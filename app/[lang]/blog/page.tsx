import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

const Blog = async ({ params: { lang } }: { params: { lang: Locale } }) => {
	const { page } = await getDictionary(lang);
	return (
		<div>
			<h1>{page.blog.title}</h1>
			<p>{page.blog.description}</p>
		</div>
	);
};

export default Blog;
