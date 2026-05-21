import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

const contentDir = path.join(process.cwd(), 'content');

export type TrackStatus = {
  status: 'Open' | 'Closed' | 'Limited';
  message: string;
  updated_at: string;
};

export type NewsPost = {
  slug: string;
  title: string;
  date: string;
  author?: string;
  excerpt?: string;
  image?: string;
  content?: string;
};

export type Sponsor = {
  name: string;
  logo?: string;
  url: string;
  tier: 'Title' | 'Supporting';
};

export function getTrackStatus(): TrackStatus {
  const filePath = path.join(contentDir, 'track-status.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw) as TrackStatus;
}

export function getAllNewsPosts(): NewsPost[] {
  const newsDir = path.join(contentDir, 'news');
  if (!fs.existsSync(newsDir)) return [];

  const files = fs.readdirSync(newsDir).filter((f) => f.endsWith('.md'));
  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const raw = fs.readFileSync(path.join(newsDir, file), 'utf-8');
      const { data } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? '',
        author: data.author,
        excerpt: data.excerpt,
        image: data.image,
      } as NewsPost;
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getNewsPost(slug: string): Promise<NewsPost | null> {
  const filePath = path.join(contentDir, 'news', `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  const processed = await remark().use(remarkHtml).process(content);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? '',
    author: data.author,
    excerpt: data.excerpt,
    image: data.image,
    content: processed.toString(),
  };
}

export function getAllSponsors(): Sponsor[] {
  const sponsorsDir = path.join(contentDir, 'sponsors');
  if (!fs.existsSync(sponsorsDir)) return [];

  const files = fs.readdirSync(sponsorsDir).filter((f) => f.endsWith('.json'));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(sponsorsDir, file), 'utf-8');
      return JSON.parse(raw) as Sponsor;
    })
    .sort((a) => (a.tier === 'Title' ? -1 : 1));
}
