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
			sidebar: [
				{
					label: 'Passwordless',				
					items: [
						{ label: 'Product overview', link: '/passwordless/' },
						{
							label: 'Guides',
							items: [
								{ label: 'ASP.NET', link: '/passwordless/guides/how-to-asp-net' },
								{ label: 'Node.JS', link: '/passwordless/guides/how-to-nodejs' },
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
