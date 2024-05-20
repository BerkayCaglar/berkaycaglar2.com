import { getI18n } from '@locales/server';

import type { Metadata } from 'next';

// Layouts
import ClientRootLayout from '@layouts/root-layout';

export async function generateMetadata(): Promise<Metadata> {
  const t = (await getI18n()) as any;

  return {
    title: {
      template: 'Berkay Caglar | %s',
      default: t('PAGE_TITLES.HOME'), // a default is required when creating a template
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientRootLayout>{children}</ClientRootLayout>;
}
