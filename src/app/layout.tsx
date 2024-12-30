import type { Metadata } from "next";
// @ts-ignore

import "./globals.css";


export const metadata: Metadata = {
  title: "Rossi",
  description: "Pastelería Rossi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
