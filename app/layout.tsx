import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./rain-theme.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rogelio's Resume",
  description: "Resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <style>{`
          html, body {
            max-width: 100vw;
            overflow-x: hidden;
            margin: 0;
            padding: 0;
          }
          body {
            width: 100vw;
            box-sizing: border-box;
            min-height: 100vh;
            position: relative;
            overscroll-behavior-x: none;
          }
        `}</style>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
