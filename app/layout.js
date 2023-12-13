import { Archivo } from 'next/font/google'
import './globals.css'

const archivo = Archivo({ subsets: ['latin'] })

export const metadata = {
  title: 'future goods',
  description: 'we present the best enduring items',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={archivo.className}>{children}</body>
    </html>
  )
}
