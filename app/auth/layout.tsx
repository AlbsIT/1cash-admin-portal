import { TLayoutParams } from "@/lib/types";

export const metadata = {
  title: '1Cash Admin Portal'
}

export default function RootLayout({children}: TLayoutParams) {
  return (
    <html lang='en'>
      <body className="flex">
        <div>
          {children}
        </div>
      </body>
    </html>
  )
};
