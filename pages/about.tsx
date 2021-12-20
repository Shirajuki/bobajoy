import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bobajoy | om oss</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          About page <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default About;