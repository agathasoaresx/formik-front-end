import '@/app/globals.css'

import Banner from '@/components/Banner'

export const metadata = {
    title: 'System',
    description: 'Sla',
  }
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className="flex">
          <Banner />
          {children}
      </body>
      </html>
    )
  }