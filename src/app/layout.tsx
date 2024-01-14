import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";

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
    <html
      lang="en"
      className={cn(firaCode.className, "bg-background h-dvh flex lg:p-10 p-4")}
    >
      <body className="bg-primary text-white rounded-md m-auto">
        <Header />
        {children}
      </body>
    </html>
  );
}
