import type { NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import logo from '../public/images/logo.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  const images = Array(8).fill('/images/placeholder.png');
  return (
    <div className={styles.container}>
      <Head>
        <title>Bobajoy | hjem</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroWrapper}>
            <div className={styles.titleWrapper}>
              <Image
                src="/images/bear_logo.svg"
                alt="BobaJoy polarbear logo"
                width={100}
                height={256}
                data-aos="fade-in"
                data-aos-delay="200"
              />
              <Image
                src={logo}
                alt="BobaJoy text logo"
                width={300}
                height={28}
                data-aos="fade-in"
                data-aos-delay="240"
              />
              <h2 data-aos="fade-in" data-aos-delay="240">
                Bubble tea & more
              </h2>
            </div>
            <div
              className={styles.buttonWrapper}
              data-aos="fade-in"
              data-aos-delay="280"
            >
              <Link href="/order">
                <a className="btn">Bestill nå</a>
              </Link>
            </div>
          </div>
          <svg
            viewBox="0 0 1440 161"
            className={styles.heroWave}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path
              d="M1359.6 17.4496L1440 26.2915V161H0V43.9754L80.3999 55.7646C159.6 67.5538 320.4 91.1323 480 79.3431C639.6 67.5539 800.4 20.3969 960 5.66039C1119.6 -9.07616 1280.4 8.6077 1359.6 17.4496Z"
              fill="#F2F3DA"
            />
            <path
              d="M1440 44.7354L1359.6 35.8935C1280.4 27.0515 1119.6 9.36769 960 24.1042C800.4 38.8408 639.6 85.9977 480 97.7869C320.4 109.576 159.6 85.9977 80.3999 74.2085L0 62.4192"
              stroke="#BDCA4D"
              strokeWidth="8"
              strokeLinecap="square"
            />
            <path
              d="M1440 66.2915L1359.6 57.4496C1280.4 48.6077 1119.6 30.9238 960 45.6604C800.4 60.3969 639.6 107.554 480 119.343C320.4 131.132 159.6 107.554 80.3999 95.7646L0 83.9754"
              stroke="#BDCA4D"
              strokeWidth="8"
              strokeLinecap="square"
            />
          </svg>
        </div>
        <div
          className={`${styles.section} ${styles.gridWrapper}`}
          data-aos="fade-up"
        >
          <div className={styles.grid}>
            <div className={styles.welcomeText}>
              <div>
                <h2>Vi ønsker deg velkommen til Bobajoy</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  ipsum scelerisque volutpat felis, felis consequat viverra.
                  Ullamcorper a amet, euismod venenatis amet...
                </p>
              </div>
              <div className={styles.buttonWrapper}>
                <Link href="/about">
                  <a className="btn">Les mer om oss</a>
                </Link>
              </div>
            </div>
            <div>
              <div className={styles.mapIconBg}></div>
              <h2>Her finner du oss</h2>
              <p>Olav Tryggvason gt. 1, 7011 Trondheim</p>
            </div>
            <div className={styles.hashtagText}>
              <div className={styles.hashtagIconBg}></div>
              <h2>Del dine bobler sammen med oss!</h2>
              <p>#bobajoyno</p>
              <p>#bobajoy</p>
            </div>
          </div>
        </div>
        <div className={`${styles.section} ${styles.selectionWrapper}`}>
          <h1 className={styles.title}>Utvalgte teer</h1>
          <div>
            <div className={styles.cardWrapper} data-aos="fade-right">
              <div className={styles.cardImage}>
                <Image
                  src="/images/placeholder.png"
                  alt="A placeholder for images"
                  width={320}
                  height={320}
                  layout="responsive"
                />
              </div>
              <div className={styles.cardText}>
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  ipsum scelerisque volutpat felis, felis consequat viverra.
                  Ullamcorper a amet, euismod venenatis amet, at ornare sed
                  phasellus. Sapien, malesuada neque hendrerit semper. Orci duis
                  laoreet urna aliquam ut et feugiat.
                </p>
              </div>
              <svg
                className={styles.cardWave}
                viewBox="0 0 1292 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M72.1367 2.81796L0 4.24584V26H1292V7.10162L1219.86 9.00547C1148.8 10.9093 1004.53 14.717 861.333 12.8132C718.137 10.9093 573.863 3.29392 430.667 0.914104C287.47 -1.46571 143.197 1.39007 72.1367 2.81796Z"
                  fill="#F2F3DA"
                />
              </svg>
            </div>
            <div
              className={`${styles.cardWrapper} ${styles.cardReverse}`}
              data-aos="fade-left"
            >
              <div className={styles.cardImage}>
                <Image
                  src="/images/placeholder.png"
                  alt="A placeholder for images"
                  width={320}
                  height={320}
                  layout="responsive"
                />
              </div>
              <div className={styles.cardText}>
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  ipsum scelerisque volutpat felis, felis consequat viverra.
                  Ullamcorper a amet, euismod venenatis amet, at ornare sed
                  phasellus. Sapien, malesuada neque hendrerit semper. Orci duis
                  laoreet urna aliquam ut et feugiat.
                </p>
              </div>
              <svg
                className={styles.cardWave}
                viewBox="0 0 1292 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M72.1367 2.81796L0 4.24584V26H1292V7.10162L1219.86 9.00547C1148.8 10.9093 1004.53 14.717 861.333 12.8132C718.137 10.9093 573.863 3.29392 430.667 0.914104C287.47 -1.46571 143.197 1.39007 72.1367 2.81796Z"
                  fill="#F2F3DA"
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          className={`${styles.section} ${styles.menuWrapper}`}
          data-aos="zoom-in-up"
        >
          <div>
            <h1 className={styles.title}>Vår meny!</h1>
            <div className={styles.buttonWrapper}>
              <Link href="/menu">
                <a className="btn">Se hele menyen her</a>
              </Link>
            </div>
            <div className={styles.bubbles}>
              <div className={styles.bubble}></div>
              <div className={styles.bubble}></div>
              <div className={styles.bubble}></div>
              <div className={styles.bubble}></div>
              <div className={styles.bubble}></div>
              <div className={styles.bubble}></div>
              <div className={styles.bubble}></div>
              <div className={styles.bubble}></div>
              <div className={styles.bubble}></div>
              <div className={styles.bubble}></div>
            </div>
          </div>
        </div>
        <div className={`${styles.section} ${styles.galleryWrapper}`}>
          <h1 className={styles.title}>Følg oss på instagram!</h1>
          <div className={styles.gallery}>
            {images.map((imgSrc: string, i: number) => {
              return (
                <div className={styles.image} key={i}>
                  <Image
                    src={imgSrc}
                    alt="A placeholder for images"
                    width={320}
                    height={320}
                    layout="responsive"
                  />
                </div>
              );
            })}
          </div>
          <svg
            className={styles.galleryTitleWave}
            viewBox="0 0 1440 144"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M-2 80.2039L78.5117 70.1784C157.822 60.1529 318.845 40.102 478.667 56.8111C638.488 73.5202 799.512 126.99 959.333 140.357C1119.16 153.724 1280.18 126.99 1359.49 113.622L1440 100.255V0H1359.49C1280.18 0 1119.16 0 959.333 0C799.512 0 638.488 0 478.667 0C318.845 0 157.822 0 78.5117 0H-2V80.2039Z"
              fill="#F4EEA9"
            />
          </svg>
          <svg
            className={styles.galleryWave}
            viewBox="0 0 1440 144"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1440 63.7961L1359.49 73.8216C1280.18 83.8471 1119.15 103.898 959.333 87.1889C799.512 70.4798 638.488 17.0105 478.667 3.64316C318.845 -9.72416 157.822 17.0105 78.5116 30.3778L-2 43.7451V144H78.5116C157.822 144 318.845 144 478.667 144C638.488 144 799.512 144 959.333 144C1119.15 144 1280.18 144 1359.49 144H1440V63.7961Z"
              fill="#F4EEA9"
            />
          </svg>
        </div>
        <div className={`${styles.section} ${styles.map}`}>
          <div className={styles.googleMap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1597.7801014434394!2d10.401946419628542!3d63.43326460267982!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9e5a4c52f02ce11e!2sHeimdal%20Gull!5e0!3m2!1sen!2sno!4v1639949216519!5m2!1sen!2sno"
              frameBorder="0"
              width="100%"
              height="450"
              allowFullScreen={false}
              aria-hidden="false"
              title="Google Maps"
              tabIndex={0}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
