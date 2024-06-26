import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset, Slug } from '@sanity/types';
import groq from 'groq';

export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]`;

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`;

export const siteSettingsQuery = groq`*[_type == "general"][0]`;

export interface Post {
	_type: 'post';
	_createdAt: string;
	title: string;
	slug: Slug;
	mainImage: ImageAsset;
	body: PortableTextBlock[];
}

export interface SiteSettings {
	_type: 'general';
	title?: string;
	websiteSubtitle?: string;
	email?: string;
	instagram?: {
		username: string;
		url: string;
	};
}
