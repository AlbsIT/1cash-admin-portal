import Sidebar from '@/components/sidebar'
import { TLayoutParams } from '@/lib/types'
import "../../styles/globals.css"

export const metadata = {
  title: '1Cash Admin Portal',
  description: 'property of 1Cash Dev',
}

export default function RootLayout({
  children,
}: TLayoutParams) {
  return (
    <html lang="en">
      <body className="flex ">
        <Sidebar />
        <div className="bg-gray-50 px-10 py-10 w-full">
          {children}
        </div>
      </body>
    </html>
  )
}
