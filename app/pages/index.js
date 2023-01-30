import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout.js'
import Image from 'next/image.js'
import Carousel from "../components/Carousel.js"

const slides = [
  "/sea.jpg",
  "/tree.jpg",
  "/trees.jpg"
]

export default function Home() {


  return (
    <Layout>
      <Head>
        <title>Notre projet</title>
        <meta name="description" content="La page sur laquelle nous présentons notre projet" />
        <link rel="icon" href="/LogoBestiole.png" />
      </Head>
      <section className="flex flex-col items-center h-screen mt-20 z-0">

        <Image
          src="/LogoBestiole.png"
          alt="Bestiole Logo"
          height={500}
          width={700}
        />

        <p className="text-black text-3xl">
          <span className="text-bestiolegreen">Bestiole </span>
          une IA au service de la biodiversité
        </p>
        <div className="flex gap-2 items-center rounded-lg pl-80 w-3/4	pr-80 mt-10 mb-10 ">
          <Carousel autoSlide={true} autoSlideInterval={5000}>
            {slides.map((s) => (
              <Image src={s} height={800} width={1200}>

              </Image>
            ))}

          </Carousel>
        </div>


      </section>
      <section className="flex flex-col items-center h-screen mt-20 z-0">
        <div className="text-left py-10">
          <h2 className="text-2xl font-bold text-bestioleorange">Notre raison d'être</h2>
          <p className="text-base py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
            egestas libero, eu bibendum dolor placerat eget.
          </p>
          <div className="flex justify-between py-10">
            <div>
              <svg
                className="w-12 h-12 fill-current hover:text-bestiolegreen"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                }
              </svg>
              <p className="text-base font-medium">Logo 1</p>
            </div>
            <div>
              <svg
                className="w-12 h-12 fill-current hover:text-bestiolegreen"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                }
              </svg>
              <p className="text-base font-medium">Logo 2</p>
            </div>
            <div>
              <svg
                className="w-12 h-12 fill-current hover:text-bestiolegreen"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                }
              </svg>
              <p className="text-base font-medium">Logo 3</p>
            </div>
          </div>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
            egestas libero, eu bibendum dolor placerat eget.
          </p>
        </div>
        <div className="text-left py-10">
          <h2 className="text-2xl font-bold text-bestioleorange">Notre solution</h2>
          <p className="text-base py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
            egestas libero, eu bibendum dolor placerat eget.
          </p>
          <div className="bg-yellow-500 text-center text-white p-2" 
       style={{width: '100px', height: '50px', transform: 'rotate(45deg)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <p>Arrow</p>
</div>

          
                

               

                  
              
            </div>

      </section>



    </Layout>
  )
}


