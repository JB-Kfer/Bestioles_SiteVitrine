import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '../components/Layout.js'


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Notre projet</title>
        <meta name="description" content="Page principale décrivant notre projet: Bestiole" />
        <link rel="icon" href="/gift.svg" />
      </Head>
      <h1>
      </h1>

    </Layout>
   
  )
}
