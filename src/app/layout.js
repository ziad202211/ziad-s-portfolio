import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["variable"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "Ziad Mohamad - Full-Stack Developer",
  description: "Ziad Mohamad's personal portfolio showcasing full-stack web development projects and skills.",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    viewportFit: 'cover'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ height: '100%' }}>
      <body className={`${jetBrainsMono.variable} ${spaceGrotesk.variable}`} style={{
        margin: 0,
        padding: 0,
        minHeight: '100vh',
        width: '100%',
        overflowX: 'hidden'
      }}>
        {children}
      </body>
    </html>
  );
}
