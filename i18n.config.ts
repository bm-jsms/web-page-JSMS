export const i18n = {
	defaultLocale: 'en',
	locales: ['en', 'es'],
} as const;

export type locale = (typeof i18n)['locales'][number];
