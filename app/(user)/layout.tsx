import Header from '@/components/header'
import '../../styles/globals.css'
import Banner from '@/components/banner'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  )
}