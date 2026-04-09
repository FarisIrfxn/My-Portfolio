import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import ChatWidget from '@/components/layout/ChatWidget';

export const metadata: Metadata = {
  title: 'Faris Portfolio',
  description:
    'Portfolio of Faris - AI Generalist focusing on automation, LLM integration, and full-stack AI solutions.',
  icons: {
    icon: '/favicon.png',
    apple: '/mobile.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
