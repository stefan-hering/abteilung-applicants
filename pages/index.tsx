import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

// can be used to fetch products
import {search} from "../services/SearchService";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Search results</title>
            </Head>

            <main className={styles.main}>
                Search results:

            </main>
        </div>
    )
}

export default Home
