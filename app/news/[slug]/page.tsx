import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getAllNewsPosts, getNewsPost } from '@/lib/content';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return getAllNewsPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getNewsPost(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function NewsPostPage({ params }: Props) {
  const post = await getNewsPost(params.slug);
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  });

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md">
        <Button component={Link} href="/news" startIcon={<ArrowBackIcon />} color="primary" sx={{ mb: 4 }}>
          All News
        </Button>

        <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', mb: 1 }}>
          {formattedDate}
          {post.author && ` · ${post.author}`}
        </Typography>

        <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3.5rem' }, mb: 5 }}>
          {post.title}
        </Typography>

        <Box
          sx={{
            '& p': { mb: 2, lineHeight: 1.8, color: 'text.secondary' },
            '& h2': { mt: 4, mb: 2, fontFamily: '"Barlow Condensed", sans-serif', fontWeight: 700, fontSize: '1.75rem', textTransform: 'uppercase', color: 'white' },
            '& h3': { mt: 3, mb: 1.5, fontFamily: '"Barlow Condensed", sans-serif', fontWeight: 700, fontSize: '1.4rem', color: 'white' },
            '& ul, & ol': { pl: 3, mb: 2, color: 'text.secondary' },
            '& li': { mb: 0.5, lineHeight: 1.8 },
            '& strong': { color: 'white', fontWeight: 700 },
            '& a': { color: 'primary.main', '&:hover': { textDecoration: 'underline' } },
            '& blockquote': { borderLeft: '3px solid', borderColor: 'primary.main', pl: 2, my: 3, color: 'text.secondary', fontStyle: 'italic' },
            '& hr': { borderColor: 'divider', my: 4 },
          }}
          dangerouslySetInnerHTML={{ __html: post.content ?? '' }}
        />
      </Container>
    </Box>
  );
}
