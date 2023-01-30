import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout.js'


export default function Presentation({
}) {
  return (
    <Layout>
      <Head>
        <title>Notre projet</title>
        <meta name="description" content="La page sur laquelle nous présentons notre équipe et nos partenaires" />
        <link rel="icon" href="/LogoBestiole.ico" />
      </Head>
      
    </Layout>
  )
}


