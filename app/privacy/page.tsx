import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for omcracing.com — how we collect, use, and protect your information.',
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Box sx={{ mb: 5 }}>
    <Typography variant="h5" sx={{ mb: 2, fontFamily: '"Barlow Condensed", sans-serif', color: 'primary.main' }}>
      {title}
    </Typography>
    {children}
  </Box>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <Typography color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
    {children}
  </Typography>
);

export default function PrivacyPage() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md">
        <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: '0.2em' }}>
          Legal
        </Typography>
        <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, mb: 2 }}>
          Privacy Policy
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 1 }}>
          Owyhee Motorcycle Club · omcracing.com
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 6 }}>
          Last updated: May 2026
        </Typography>

        <Divider sx={{ mb: 6 }} />

        <Section title="Overview">
          <P>
            The Owyhee Motorcycle Club (&ldquo;OMC&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) operates omcracing.com. This policy explains
            what information we collect when you visit our site, how we use it, and what choices you have.
            We are committed to protecting your privacy and being transparent about our practices.
          </P>
        </Section>

        <Section title="Information We Collect">
          <P>
            <strong style={{ color: 'white' }}>Analytics data.</strong> If you accept cookies, we use
            Google Analytics to collect anonymized information about how visitors use our site. This
            includes pages visited, time spent on pages, general geographic region (country/city level),
            device type, and referring website. IP addresses are anonymized before being stored.

          </P>
          <P>
            <strong style={{ color: 'white' }}>Information you provide.</strong> If you contact us by
            email, we receive your email address and the contents of your message. We use this only to
            respond to your inquiry.
          </P>
          <P>
            <strong style={{ color: 'white' }}>No account registration.</strong> Our site does not
            require you to create an account or provide any personal information to browse content.
          </P>
        </Section>

        <Section title="Cookies">
          <P>
            We use one category of cookies:
          </P>
          <P>
            <strong style={{ color: 'white' }}>Analytics cookies (optional).</strong> Set by Google
            Analytics (ga.js / gtag.js) to count visits and understand how the site is used. These
            cookies are only placed if you click &ldquo;Accept&rdquo; on the cookie banner. If you click &ldquo;Decline&rdquo;,
            no analytics cookies are set and no tracking occurs.
          </P>
          <P>
            <strong style={{ color: 'white' }}>Preference cookie.</strong> We store your cookie
            preference (&ldquo;accepted&rdquo; or &ldquo;declined&rdquo;) in your browser&apos;s local storage so we don&apos;t show
            the banner on every visit. This is not a tracking cookie and contains no personal data.
          </P>
          <P>
            You can change your preference at any time by clearing your browser&apos;s local storage for
            this site, which will cause the cookie banner to reappear on your next visit.
          </P>
        </Section>

        <Section title="Google Analytics">
          <P>
            When analytics cookies are accepted, data is sent to Google LLC under their{' '}
            <Typography
              component="a"
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'primary.main', textDecoration: 'underline' }}
            >
              Privacy Policy
            </Typography>
            . We have enabled IP anonymization, which means your full IP address is never stored by
            Google. Google Analytics data is used solely to understand site traffic and improve content.
            We do not use it for advertising or share it with third parties.
          </P>
        </Section>

        <Section title="How We Use Information">
          <P>
            Analytics data helps us understand which pages are most useful to our members and visitors,
            identify technical issues, and improve the site over time. We do not sell, rent, or share
            any information with third parties for marketing purposes.
          </P>
        </Section>

        <Section title="Data Retention">
          <P>
            Google Analytics data is retained for 14 months, after which it is automatically deleted.
            Email correspondence is retained only as long as necessary to respond to your inquiry.
          </P>
        </Section>

        <Section title="Your Rights">
          <P>
            You have the right to opt out of analytics tracking at any time by declining cookies or
            clearing your cookie preference from local storage. You may also install the{' '}
            <Typography
              component="a"
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'primary.main', textDecoration: 'underline' }}
            >
              Google Analytics Opt-out Browser Add-on
            </Typography>
            .
          </P>
        </Section>

        <Section title="Third-Party Links">
          <P>
            Our site contains links to external websites (sponsors, iRaceReady, YouTube, etc.). We are
            not responsible for the privacy practices of those sites and encourage you to review their
            policies.
          </P>
        </Section>

        <Section title="Children's Privacy">
          <P>
            Our site is not directed to children under 13 and we do not knowingly collect personal
            information from children.
          </P>
        </Section>

        <Section title="Contact">
          <P>
            If you have questions about this policy, contact us at{' '}
            <Typography
              component="a"
              href="mailto:info@omcracing.com"
              sx={{ color: 'primary.main', textDecoration: 'underline' }}
            >
              info@omcracing.com
            </Typography>
            .
          </P>
        </Section>
      </Container>
    </Box>
  );
}
