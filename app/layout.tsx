import Sidebar from '@/components/sidebar'
import "../styles/globals.css"

export const metadata = {
  title: '1Cash Admin Portal',
  description: 'property of 1Cash Dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex ">
        <Sidebar />
        <div className="px-10 py-10 w-full">
          {children}
        </div>
      </body>
    </html>
  )
}
