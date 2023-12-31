import { AspectRatio } from "@mantine/core";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRef } from "react";
import styles from "./intro.module.css";

export default function Intro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    container: containerRef
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    console.log(value);
  });

  return (
    <main ref={containerRef} className={styles.main}>
      <AspectRatio ratio={16 / 9}>
        <video
          ref={videoRef}
          className={styles.video}
          muted
          autoPlay
          loop={false}
        >
          <source src="/urbanhive.mp4" type="video/mp4" />
        </video>
      </AspectRatio>
      <section style={{ height: "1000vh" }}></section>
    </main>
  );
}
