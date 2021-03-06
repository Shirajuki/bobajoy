import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/About.module.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Map from '../components/Map';
import SmallPageHeader from '../components/SmallPageHeader';

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bobajoy | Om oss</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <SmallPageHeader title="Om oss" />
        <div className={styles.section} data-aos="fade-up">
          <div className={styles.textWrapper}>
            <h2 className={styles.title}>Boba joy</h2>
            <p>
              Boba Joy bubble tea is the new shop coming to Trondheim in 2022.
              We serve bubble tea, fresh iced tea, smoothies, slushes, hot
              drinks for winter, and all kinds of goods as small Asian shops. We
              hope to be the best place where you can enjoy a fresh tea and be
              in the Asian word with all kinds of snacks, noodles. If you have
              never had bubble tea, come try it at Boba Joy bubble tea & more in
              town. The drink combinations are endless and it is an awesome
              experience that everyone can enjoy!
            </p>
            <br />
            <p>
              Boba Joy boba te er en ny butikk som kom til Trondheim i starten
              av 2022. Vi selger bubble tea, fresh iced tea, smoothies, slushes,
              varme drikker for vinteren, og all slags type asiatiske godsaker.
              Vi ønsker å bli et komfortabelt og trygt sted for deg å komme til
              for å nyte en fresh bubble te, og nyte mye av den asiatiske maten
              man ikke ser her til vanlig. Hvis du ikke har prøvd bubble te før,
              gjerne kom innom så skal vi introdusere deg til den fantastiske
              smaken. Vi har uendeligvis av smaker og vi tror at om du smaker
              de, vil du få en opplevelse som du aldri vil glemme.
            </p>
            <p>
              <b>Utvalgte teer:</b>
            </p>
            <ul>
              <li>Sort melkte med brunsukker</li>
              <li>Perfect Matcha</li>
              <li>Mango Iste</li>
              <li>Kiwi GreenApple Iste</li>
              <li>Taro Slushie</li>
              <li>Brown Suggar Fresh Milk</li>
            </ul>
          </div>
        </div>
        <Map />
      </main>
      <Footer />
    </div>
  );
};

export default About;
