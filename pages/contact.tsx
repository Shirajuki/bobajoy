import type { NextPage } from 'next';
import Head from 'next/head';
import { SyntheticEvent, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Map from '../components/Map';
import SmallPageHeader from '../components/SmallPageHeader';
import styles from '../styles/Contact.module.scss';

const Contact: NextPage = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const submitHandler = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    contactSubmit({ name, email, subject, message });
  };
  const contactSubmit = ({ name, email, subject, message }: FormType) => {
    console.log(name, email, subject, message);
    window.location.href = encodeURI(
      `mailto:bobajoytrondheim@gmail.com?subject=${subject}&body=${message}\n\n- ${name}\n${email}`
    );
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Bobajoy | Kontakt oss</title>
        <meta
          name="description"
          content="Boba Joy bubble tea shop's contact page"
        />
      </Head>
      <Header />
      <main className={styles.main}>
        <SmallPageHeader title="Kontakt oss" />
        <div className={styles.section} data-aos="fade-up">
          <h2 className={styles.title}>Gi oss tilbakemeldinger</h2>
          <div className={styles.formWrapper}>
            <form onSubmit={submitHandler}>
              <div>
                <div className={styles.inputWrapper}>
                  <label>
                    Ditt navn*:
                    <input
                      type="text"
                      value={name}
                      onChange={({ target }) => setName(target.value)}
                      required
                    />
                  </label>
                  <label>
                    Din epost*
                    <input
                      type="email"
                      value={email}
                      onChange={({ target }) => setEmail(target.value)}
                      required
                    />
                  </label>
                </div>
                <label>
                  Emne
                  <input
                    type="text"
                    value={subject}
                    onChange={({ target }) => setSubject(target.value)}
                  />
                </label>
                <label>
                  Din melding*
                  <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={10}
                    value={message}
                    onChange={({ target }) => setMessage(target.value)}
                    required
                  ></textarea>
                </label>
              </div>
              <div className={styles.buttonWrapper}>
                <button className={styles.btn}>Send melding</button>
              </div>
              <svg
                className={styles.formWave}
                width="1292"
                height="64"
                viewBox="0 0 1292 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 35.6462L72.1367 31.1904C143.197 26.7346 287.47 17.8231 430.667 25.2494C573.863 32.6757 718.137 56.4398 861.333 62.3808C1004.53 68.3218 1148.8 56.4398 1219.86 50.4988L1292 44.5577V-4.76837e-07H1219.86C1148.8 -4.76837e-07 1004.53 -4.76837e-07 861.333 -4.76837e-07C718.137 -4.76837e-07 573.863 -4.76837e-07 430.667 -4.76837e-07C287.47 -4.76837e-07 143.197 -4.76837e-07 72.1367 -4.76837e-07H0V35.6462Z"
                  fill="white"
                />
              </svg>
            </form>
          </div>
        </div>
        <Map />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
