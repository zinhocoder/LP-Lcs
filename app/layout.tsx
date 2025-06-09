import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LCS - Portaria e Limpeza',
  description: 'Especialistas em fornecer soluções de limpeza de alta qualidade para empresas, indústrias e pós obra.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
