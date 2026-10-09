import postsData from "../data/posts.json";

// Carga como texto todos los .html de src/posts/
const archivosHtml = import.meta.glob("../posts/*.html", {
	query: "?raw",
	import: "default",
	eager: true,
}) as Record<string, string>;

export type Post = {
	id: string;
	title: string;
	date: string;
	excerpt: string;
	tags: string[];
	content: string;
};

type PostMeta = Omit<Post, "content">;
type PostsData = Record<string, PostMeta[]>;

const data = postsData as PostsData;

// Años de más reciente a más antiguo
export const years: string[] = Object.keys(data).sort((a, b) => Number(b) - Number(a));

// Posts agrupados por año, cada grupo ordenado por fecha (más reciente primero)
// y unido con el HTML cuyo nombre coincide con el id
export const postsByYear: Record<string, Post[]> = years.reduce<Record<string, Post[]>>((acc, year) => {
	acc[year] = [...data[year]]
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
		.map((post) => ({
			...post,
			content: archivosHtml[`../posts/${post.id}.html`] ?? "",
		}));
	return acc;
}, {});

// Lista plana, de más reciente a más antiguo
export const posts: Post[] = years.flatMap((year) => postsByYear[year]);

export function getPost(id: string): Post | undefined {
	return posts.find((post) => post.id === id);
}
