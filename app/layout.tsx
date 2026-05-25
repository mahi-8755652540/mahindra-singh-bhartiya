import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mahindra Singh Bhartiya - 3D Portfolio',
  description: 'Interactive 3D portfolio showcasing projects and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}