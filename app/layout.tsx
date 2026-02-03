import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono, Orbitron } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron", weight: ["400", "500", "600", "700", "800", "900"] });

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Cybertize - We Build Growth Engines, Not Just Websites',
  description: 'Stop losing leads to outdated websites. Cybertize delivers conversion-optimized digital systems that turn visitors into customers—Proven frameworks designed to deliver visible results in under 30 days.',
  generator: 'Cybertize',
  keywords: ['web design', 'conversion optimization', 'lead generation', 'digital growth', 'website development', 'SEO', 'CRM automation'],
  authors: [{ name: 'Cybertize' }],
  openGraph: {
    title: 'Cybertize - We Build Growth Engines, Not Just Websites',
    description: 'Stop losing leads to outdated websites. Conversion-optimized digital systems that turn visitors into customers.',
    type: 'website',
    siteName: 'Cybertize',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cybertize - We Build Growth Engines, Not Just Websites',
    description: 'Stop losing leads to outdated websites. Conversion-optimized digital systems that turn visitors into customers.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${orbitron.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
