import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import Grid from '../components/grid'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pathfinding Visualiser</title>
        <meta name="description" content="A visualisation of different famouse pathfinding algorithms" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Grid />
      </main>
    </div>
  )
}

export default Home
