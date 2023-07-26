import './globals.css'
import './reset.css'
import { DM_Serif_Display } from 'next/font/google'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

const inter = DM_Serif_Display({ subsets: ['latin'] , weight: "400" })

export const metadata = {
  title: 'Daily Manager',
  description: 'Your private Daily Manager',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <div className='wrapper'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
