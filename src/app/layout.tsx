import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohaimin - Full Stack Developer",
  description: "The portfolio site of Mohaimin",
  applicationName: "Mohaimin",
  keywords: [
    "Mohaimin",
    "Portfolio",
    "Developer",
    "Full Stack",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Software Engineer",
    "Frontend",
    "Backend",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST",
  ],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  publisher: "Mohaimin",
  robots: "follow, index",
  openGraph: {
    title: "Mohaimin - Full Stack Developer",
    description: "The portfolio website of Mohaimin",
    type: "website",
    url: "https://mohaimin.me",
    images: [
      {
        url: "https://mohaimin.me/assets/site-preview.png",
        width: 1200,
        height: 630,
        alt: "Site preview",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning={true} lang="en" className="h-full">
      <body className={cn(firaCode.className, "!h-full w-full")}>
        <main className="dark:bg-slate-950 bg-slate-200 w-full xl:p-10 p-3 h-full flex justify-center items-center">
          <div
            className="w-full rounded-md h-full bg-background flex flex-col"
            style={{
              maxWidth: "1782px",
              maxHeight: "941px",
            }}
          >
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              {children}
              <Footer />
              <Analytics />
            </ThemeProvider>
          </div>
        </main>
      </body>
    </html>
  );
}
