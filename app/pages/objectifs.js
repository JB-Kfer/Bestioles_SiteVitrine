import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"
import Head from 'next/head'
import Image from "next/image.js"
import Link from 'next/link'
import Layout from '../components/Layout.js'
import Carousel from "../components/Carousel.js"



export default function Objectifs() {
  return (
    <Layout>
      <Head>
        <title>Nos objectifs</title>
        <meta name="description" content="La page sur laquelle nous présentons nos objectifs" />
        <link rel="icon" href="/LogoBestiole.ico" />
      </Head>
      
    </Layout>
  )
}


