declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"directory": {
"business-1.mdx": {
	id: "business-1.mdx";
  slug: "business-1";
  body: string;
  collection: "directory";
  data: InferEntrySchema<"directory">
} & { render(): Render[".mdx"] };
"business-10.mdx": {
	id: "business-10.mdx";
  slug: "business-10";
  body: string;
  collection: "directory";
  data: InferEntrySchema<"directory">
} & { render(): Render[".mdx"] };
"business-11.mdx": {
	id: "business-11.mdx";
  slug: "business-11";
  body: string;
  collection: "directory";
  data: InferEntrySchema<"directory">
} & { render(): Render[".mdx"] };
"business-12.mdx": {
	id: "business-12.mdx";
  slug: "business-12";
  body: string;
  collection: "directory";
  data: InferEntrySchema<"directory">
} & { render(): Render[".mdx"] };
"business-2.mdx": {
	id: "business-2.mdx";
  slug: "business-2";
  body: string;
  collection: "directory";
  data: InferEntrySchema<"directory">
} & { render(): Render[".mdx"] };
"business-3.mdx": {
	id: "business-3.mdx";
  slug: "business-3";
  body: string;
  collection: "directory";
  data: InferEntrySchema<"directory">
} & { render(): Render[".mdx"] };
"business-4.mdx": {
	id: "business-4.mdx";
  slug: "business-4";
  body: string;
  collection: "directory";
  data: InferEntrySchema<"directory">
} & { render(): Render[".mdx"] };
"business-5.mdx": {
	id: "business-5.mdx";
  slug: "business-5";
  body: string;
  collection: "directory";
  data: InferEntrySchema<"directory">
} & { render(): Render[".mdx"] };
"business-6.mdx": {
	id: "business-6.mdx";
  slug: "business-6";
  body: string;
  collection: "directory";
  data: InferEntrySchema<"directory">
} & { render(): Render[".mdx"] };
"business-7.mdx": {
	id: "business-7.mdx";
  slug: "business-7";
  body: string;
  collection: "directory";
  data: InferEntrySchema<"directory">
} & { render(): Render[".mdx"] };
"business-8.mdx": {
	id: "business-8.mdx";
  slug: "business-8";
  body: string;
  collection: "directory";
  data: InferEntrySchema<"directory">
} & { render(): Render[".mdx"] };
"business-9.mdx": {
	id: "business-9.mdx";
  slug: "business-9";
  body: string;
  collection: "directory";
  data: InferEntrySchema<"directory">
} & { render(): Render[".mdx"] };
"consulting-firm.mdx": {
	id: "consulting-firm.mdx";
  slug: "consulting-firm";
  body: string;
  collection: "directory";
  data: InferEntrySchema<"directory">
} & { render(): Render[".mdx"] };
"creative-design-en.mdx": {
	id: "creative-design-en.mdx";
  slug: "creative-design-en";
  body: string;
  collection: "directory";
  data: InferEntrySchema<"directory">
} & { render(): Render[".mdx"] };
"creative-design-fr.mdx": {
	id: "creative-design-fr.mdx";
  slug: "creative-design-fr";
  body: string;
  collection: "directory";
  data: InferEntrySchema<"directory">
} & { render(): Render[".mdx"] };
"design-studio.mdx": {
	id: "design-studio.mdx";
  slug: "design-studio";
  body: string;
  collection: "directory";
  data: InferEntrySchema<"directory">
} & { render(): Render[".mdx"] };
"tech-company.mdx": {
	id: "tech-company.mdx";
  slug: "tech-company";
  body: string;
  collection: "directory";
  data: InferEntrySchema<"directory">
} & { render(): Render[".mdx"] };
"tech-solutions-en.mdx": {
	id: "tech-solutions-en.mdx";
  slug: "tech-solutions-en";
  body: string;
  collection: "directory";
  data: InferEntrySchema<"directory">
} & { render(): Render[".mdx"] };
"tech-solutions-fr.mdx": {
	id: "tech-solutions-fr.mdx";
  slug: "tech-solutions-fr";
  body: string;
  collection: "directory";
  data: InferEntrySchema<"directory">
} & { render(): Render[".mdx"] };
};
"posts": {
"post-1.mdx": {
	id: "post-1.mdx";
  slug: "post-1";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdx"] };
"post-2.mdx": {
	id: "post-2.mdx";
  slug: "post-2";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdx"] };
"post-3.mdx": {
	id: "post-3.mdx";
  slug: "post-3";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdx"] };
"post-4.mdx": {
	id: "post-4.mdx";
  slug: "post-4";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdx"] };
"post-5.mdx": {
	id: "post-5.mdx";
  slug: "post-5";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdx"] };
"welcome.mdx": {
	id: "welcome.mdx";
  slug: "welcome";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
