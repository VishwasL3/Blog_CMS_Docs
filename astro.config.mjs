// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '',
			logo: {src:'./public/logo.webp'},
			tableOfContents:false,
			customCss: ['./src/styles/theme.css'],
			sidebar: [
				{
					label:'Overview',
					link:'/',
					slug:'overview/content'
				},
				{
					label:'Motivation',
					link:'/motivation',
					slug:'motivation/main'
				},
				{
					label:'Guide',
					items:[
						{ label:'1. Sign In / Sign Up', slug:'guide/sign' },
						{ label:'2. Dashboard Overview', slug: 'guide/dashboard' },
						{ label:'3. Creating a New Blog Post', slug: 'guide/create-blog' },
						{ label:'4. Editing & Managing Blog Posts', slug: 'guide/edit-manage' },
						{ label:'5. Creating a New Series', slug: 'guide/create-series' },
						{ label:'6.	Reorder or Remove Blogs in Series', slug: 'guide/reorder-or-remove-blogs-in-series' },
						{ label:'7. Create Category', slug: 'guide/create-category' },
						{ label:'8. Settings', slug: 'guide/settings' },
					]
				},
				{
					label:'API Endpoints',
					items:[
						{ label:'Category', slug:'api-endpoint/category' },
						{ label:'Get One Blog', slug:'api-endpoint/get-one-blog' },
						{ label:'Get All Blog', slug:'api-endpoint/get-all-blog' },
					]
				}
			],
		}),
	],
});
