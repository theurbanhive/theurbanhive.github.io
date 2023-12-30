import Contact from "@/features/contact/contact";
import Footer from "@/features/footer/footer";
import Header from "@/features/header/header";
import Hero from "@/features/hero/hero";
import Product from "@/features/product/product";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <Product />
      <Contact />
      <Footer />
    </main>
  );
}
