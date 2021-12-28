import { FC } from 'react';
import styles from '../styles/Map.module.scss';

const Map: FC = () => {
  return (
    <>
      <div className={`${styles.section} ${styles.mapWave}`}>
        <svg
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
    </>
  );
};
export default Map;