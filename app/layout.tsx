// Fonts
import { fonts } from '@fonts/fonts';

import { Toaster } from '@components/ui/toaster';

// Styles
import '@styles/globals.scss';
import 'swiper/css/bundle';

import { ThemeProvider } from '@layouts/theme-provider';

export const metadata = {
  title: 'Berkay Caglar | Casual Game Developer',
  description: 'Casual Game Developer',
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark min-h-screen font-sans antialiased">
      <body className={`${fonts.satoshi.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
