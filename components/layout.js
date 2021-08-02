import Head from 'next/head'

import Header from "./header"

export default function Layout ({ title, collectionsList, newList, children }) {
  return (
    <div className="relative flex flex-col h-full overflow-hidden lg:h-screen">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header collectionsList={collectionsList} newList={newList} />

      <div role={"main"} className="p-4 pb-20 overflow-x-auto">
        {children}
      </div>

      <footer className="flex justify-center">
        <a
          href="https://github.com/nresh"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built by N R
        </a>
      </footer>
    </div>
  )
}
