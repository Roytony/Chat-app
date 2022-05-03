import type { NextPage } from 'next'
import Head from 'next/head'

import Chat from '../components/Chat'
import ChatBar from '../components/ChatBar'
import Detail from '../components/Detail'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Chat-app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex">
        <Sidebar />
        <ChatBar />
        <Chat />
        <Detail />
      </main>
    </div>
  )
}

export default Home
