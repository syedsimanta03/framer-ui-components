import { Inter } from 'next/font/google'
import Steps from '@/components/steps'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <Steps/>
    </main>
  )
}
