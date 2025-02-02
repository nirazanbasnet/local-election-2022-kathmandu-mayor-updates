/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { config } from '../config/config'

const Home: NextPage = ({ data }: any) => {
  return (
    <div>
      <Head>
        <title>BALEN VS STHAPIT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" integrity="sha512-wnea99uKIC3TJF7v4eKk4Y+lMz2Mklv18+r4na2Gn1abDRPPOeef95xTzdwGD9e6zXJBteMIhZ1+68QC5byJZw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>

      <main className='main-wrapper grid grid-rows-2 lg:grid-cols-2 min-h-screen lg:h-screen relative'>
        <section className='left content relative lg:h-screen'>
          <div className='relative z-10 lg:h-screen overflow-hidden h-full'>
            <div className='pt-10'>
              <img className='object-cover'
                src="https://assets-localelection2079.ekantipur.com/candidates/cec480b92220c94b63a7539ee04f0ea7.jpg" alt="Balen Shah Image" />
            </div>
            <h2 className='uppercase'>Balendra Shah</h2>
            <p className='relative'>
              <span>{data.balen.toLocaleString()}</span>
            </p>
          </div>

        </section>
        <section className='right content relative lg:h-screen'>
          <div className='relative z-10 lg:h-screen overflow-hidden h-full'>
            <div className='pt-10'>
              <img className='object-cover'
                src="https://assets-localelection2079.ekantipur.com/candidates/keshab_sthapit.jpg" alt="Balen Shah Image" />
            </div>
            <h2 className='uppercase'>Keshav Sthapit</h2>
            <p className='relative'>
              <span>{data.sthapit.toLocaleString()}</span>
            </p>
          </div>
        </section>

        <div className='absolute left-0 right-0 versus-img'>
          <img className='w-full h-full' src="/img/versus.png" alt="" />
        </div>

        <div className='absolute top-5 right-5 lg:top-10 lg:right-10 z-20'>
          <span className='uppercase lg:text-white mr-10'>Live</span>
          <div className="circle"></div>
        </div>
      </main>
    </div>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${config.api_url}/balen-vs-sthapit`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Home
