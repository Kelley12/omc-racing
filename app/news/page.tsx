import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Link from 'next/link';
import ArticleIcon from '@mui/icons-material/Article';
import { getAllNewsPosts } from '@/lib/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News',
  description: 'Latest news and announcements from the Owyhee Motorcycle Club.',
};

export default function NewsPage() {
  const posts = getAllNewsPosts();

  return (
    <>
      <Box sx={{ py: { xs: 6, md: 10 }, background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)', borderBottom: '2px solid', borderColor: 'secondary.main' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <ArticleIcon sx={{ color: 'secondary.main', fontSize: 40 }} />
            <Typography variant="overline" sx={{ color: 'secondary.main', letterSpacing: '0.2em' }}>Updates</Typography>
          </Box>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '5rem' }, mb: 3 }}>Club News</Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 620, fontSize: '1.1rem' }}>
            Announcements, race recaps, club meeting summaries, and updates from the OMC community.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          {posts.length === 0 ? (
            <Typography color="text.secondary">No posts yet. Check back soon.</Typography>
          ) : (
            <Grid container spacing={3}>
              {posts.map((post) => (
                <Grid key={post.slug} size={{ xs: 12, md: 6, lg: 4 }}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      border: '1px solid rgba(255,255,255,0.08)',
                      transition: 'border-color 0.2s',
                      '&:hover': { borderColor: 'rgba(253,220,1,0.3)' },
                    }}
                  >
                    <CardActionArea component={Link} href={`/news/${post.slug}`} sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                      <CardContent sx={{ p: 3, flex: 1 }}>
                        <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                          {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}
                        </Typography>
                        {post.author && (
                          <Typography variant="caption" color="text.secondary" sx={{ ml: 1 }}>
                            · {post.author}
                          </Typography>
                        )}
                        <Typography variant="h5" sx={{ mt: 1, mb: 1.5, lineHeight: 1.3, fontFamily: '"Barlow Condensed", sans-serif' }}>
                          {post.title}
                        </Typography>
                        {post.excerpt && (
                          <Typography variant="body2" color="text.secondary" sx={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                            {post.excerpt}
                          </Typography>
                        )}
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Box>
    </>
  );
}
