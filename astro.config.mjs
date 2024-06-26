import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Bitwarden Developers',
			social: {
				github: 'https://github.com/bitwarden',
			},
			logo: {
				src: './src/assets/logo.png',
			} ,
			sidebar: [
				{
					label: 'Passwordless',				
					items: [
						{ label: 'Product overview', link: '/passwordless/' },
						{ label: 'Getting Started', link: '/passwordless/getting-started' },
						{
							label: 'Guides',
							items: [
								{ label: 'ASP.NET', link: '/passwordless/guides/how-to-asp-net' },
								{ label: 'Node.JS', link: '/passwordless/guides/how-to-nodejs' },
								{
									label: 'Admin Console',
									items: [
										{ label: 'Overview', link: '/passwordless/guides/admin-console' },
										{ label: 'Applications', link: '/passwordless/guides/admin-console/applications' },
										{ label: 'Billing', link: '/passwordless/guides/admin-console/billing' },
									]
								},
							]
						},
						{
							label: 'References',
							autogenerate: { directory: 'passwordless/references' }
						},
						{
							label: 'SDKs',
							autogenerate: { directory: 'passwordless/sdk' }
						}
					]
				},
				{
					label: 'Secrets Manager',
					autogenerate: { directory: 'secrets-manager' }
				},
				{
					label: 'Contributing',
					autogenerate: { directory: 'contributing-bw' }
				},
			],
			components: {
				Sidebar: './src/overrides/Sidebar.astro',
				Pagination: './src/overrides/Pagination.astro',
			},
		}),
	],
});
