// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/edkadigital' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/edkaio' }
			],
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
			logo: {
				src: './src/assets/edka-logo.svg',
			},
			sidebar: [
				{
					label: 'Get Started',
					items: [
						{ label: 'Introduction', link: '/' },
						{ label: 'Quick Start', link: '/get-started/quick-start/' },
						{ label: 'Prerequisites', link: '/get-started/prerequisites/' },
					],
				},
				{
					label: 'Platform Usage',
					items: [
						{ label: 'Creating Clusters', link: '/platform-usage/creating-clusters/' },
						{ label: 'GitOps Deployments', link: '/platform-usage/gitops-deployments/' },
						{ label: 'Add-ons', link: '/platform-usage/add-ons/' },
						{ label: 'Monitoring', link: '/platform-usage/monitoring/' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Hetzner Integration', link: '/guides/hetzner-integration/' },
						{ label: 'GitHub Integration', link: '/guides/github-integration/' },
						{ label: 'External Secrets', link: '/guides/external-secrets/' },
						{ label: 'Container Registry Setup', link: '/guides/container-registry/' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'API Documentation', link: '/reference/api/' },
						{ label: 'CLI Reference', link: '/reference/cli/' },
						{ label: 'Pricing & Plans', link: '/reference/pricing/' },
					],
				},
			],
		}),
	],
});
