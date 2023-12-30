import Intro from "@/components/intro/intro";
import Contact from "@/features/contact";
import Footer from "@/features/footer";
import Header from "@/features/header";
import Hero from "@/features/hero";
import Product from "@/features/product";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Intro />
      <Hero />
      <Product />
      <Contact />
      <Footer />
    </main>
  );
}
