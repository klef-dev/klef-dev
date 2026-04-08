"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width" />
                <meta name="theme-color" content="#000000" />

                <title>Abraham Ugbeshe</title>
                <meta name="title" content="Abraham Ugbeshe" />
                <meta name="description" content="Product Engineer" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://klef.dev" />
                <meta property="og:title" content="Abraham Ugbeshe" />
                <meta property="og:description" content="Product Engineer" />
                <meta
                    property="og:image"
                    content="http://res.cloudinary.com/dgqfojhx4/image/upload/v1691268979/screenshots/yopydnezwwyj11lstcdh.png"
                />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://klef.dev" />
                <meta property="twitter:title" content="Abraham Ugbeshe" />
                <meta property="twitter:description" content="Product Engineer" />
                <meta
                    property="twitter:image"
                    content="http://res.cloudinary.com/dgqfojhx4/image/upload/v1691268979/screenshots/yopydnezwwyj11lstcdh.png"
                />
                <script
                    defer
                    src="https://scripts.brimble.io/analytics/script.js"
                    data-website-id="cb7589d0-da01-412c-b266-a86b79d191ca"
                    data-host-url="https://tracking.brimble.io"
                />
                <script
                    type="module"
                    dangerouslySetInnerHTML={{
                        __html: `import { onLCP, onCLS, onINP, onFCP, onTTFB } from 'https://unpkg.com/web-vitals@4?module';
                            const send = (metric) => (m) => window.umami && window.umami.track('web-vital-' + metric.toLowerCase(), { value: m.value });
                            onLCP(send('LCP'));
                            onCLS(send('CLS'));
                            onINP(send('INP'));
                            onFCP(send('FCP'));
                            onTTFB(send('TTFB'));
                        `,
                    }}
                />
            </head>
            <body className={inter.className}>
                <NextThemesProvider defaultTheme="light">{children}</NextThemesProvider>
            </body>
        </html>
    );
}
