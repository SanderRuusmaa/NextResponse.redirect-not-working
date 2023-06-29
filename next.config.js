/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	experimental: {
		appDir: false
	},

	i18n: {
		locales: ["default", "en", "et"],
		defaultLocale: 'default',
	}
}

module.exports = nextConfig
