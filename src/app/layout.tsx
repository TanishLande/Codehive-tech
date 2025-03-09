import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const font = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Craft Code Hive Tech",
  description: "Create your dreams into reality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-black `}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
