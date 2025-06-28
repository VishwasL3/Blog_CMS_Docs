// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label:'Overview',
					slug:'overview/content'
				},
				{
					label:'Motivation',
					slug:'motivation/main'
				},
				{
					label:'Guide',
					items:[
						{ label:'1. Sign In / Sing Up', slug:'guide/sign' }
					]
				}
			],
		}),
	],
});
