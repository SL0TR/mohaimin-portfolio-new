import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohaimin - Full Stack Developer",
  description: "The personal portfolio website of Mohaimin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning={true} lang="en" className="h-full">
      <body className={cn(firaCode.className, "!h-full w-full")}>
        <main className="dark:bg-slate-950 bg-slate-300 w-full xl:p-10 p-3 h-full flex justify-center items-center">
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
            </ThemeProvider>
          </div>
        </main>
      </body>
    </html>
  );
}
