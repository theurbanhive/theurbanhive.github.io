import styles from "./intro.module.css";

export default function Intro() {
  return (
    <main className={styles.main}>
      <video
        preload="preload"
        muted
        loop={false}
        autoPlay
        className={styles.video}
      >
        <source src="/intro.mp4" type="video/mp4" />
      </video>
    </main>
  );
}
