import Head from 'next/head';
import Link from "next/link";

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Sensei Node
        </h1>
        <Link href="/signature/[id]" as="/signature/senseinode_black.png"> 
        <button 
        className={styles["button"]}>
          Sensei Node Logo
        </button>
        </Link>
        <Link href="/signature/[id]" as="/signature/linkedinlogo.png"><button 
        className={styles["button"]}>
          Linkedin Logo
        </button>
        </Link>
      </main>
    </div>
  )
}
