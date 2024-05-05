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
                <meta name="description" content="Software Engineer" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://klef.dev" />
                <meta property="og:title" content="Abraham Ugbeshe" />
                <meta property="og:description" content="Software Engineer" />
                <meta
                    property="og:image"
                    content="http://res.cloudinary.com/dgqfojhx4/image/upload/v1691268979/screenshots/yopydnezwwyj11lstcdh.png"
                />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://klef.dev" />
                <meta property="twitter:title" content="Abraham Ugbeshe" />
                <meta property="twitter:description" content="Software Engineer" />
                <meta
                    property="twitter:image"
                    content="http://res.cloudinary.com/dgqfojhx4/image/upload/v1691268979/screenshots/yopydnezwwyj11lstcdh.png"
                />
                <script
                    defer
                    src="https://brimble.supalytics.co/track.js"
                    data-website-id="e7e12329-4727-4a7f-9f26-aab4649a66ce"
                ></script>
            </head>
            <body className={inter.className}>
                <NextThemesProvider defaultTheme="dark">{children}</NextThemesProvider>
            </body>
        </html>
    );
}
