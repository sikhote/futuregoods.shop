import '@mantine/core/styles.layer.css';
import getMetadata from 'lib/getMetadata';
import { Analytics } from '@vercel/analytics/react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from 'lib/theme';
import App from 'components/App';

export const metadata = getMetadata();

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <App>{children}</App>
        </MantineProvider>
        <Analytics />
      </body>
    </html>
  );
}
