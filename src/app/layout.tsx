"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width" />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content={"I build that works on the web!"}
                />
                <title>Klef</title>
            </head>
            <body className={inter.className}>
                <NextThemesProvider defaultTheme="dark">
                    {children}
                </NextThemesProvider>
            </body>
        </html>
    );
}
