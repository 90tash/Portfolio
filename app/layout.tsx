import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ashish • portfolio",
  description:
    "Portfolio of Ashish Kumar Patra (90tash) — Backend & Systems Developer, B.Tech CSE at CVRGU. Crafting distributed architectures with Java Spring Boot, FastAPI, and reactive web applications.",
  icons: {
    icon: "/icon.svg",
  },
  keywords: [
    "Ashish Kumar Patra",
    "90tash",
    "Backend Developer",
    "Java Spring Boot",
    "FastAPI",
    "React",
    "Competitive Programming",
    "LeetCode",
    "Distributed Systems",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-white"
        suppressHydrationWarning
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var isDark = saved ? saved === 'dark' : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}