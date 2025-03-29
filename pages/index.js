import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Phantom Roblox Exploit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Phantom Roblox Exploit" />
        <p className="description">
          A Level 8 Roblox Exploit With Its Own API That You Can Use
        </p>
      </main>

      <Footer />
    </div>
  )
}
