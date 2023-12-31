"use client";

import Intro from "@/components/intro/intro";
import Contact from "@/features/contact";
import Footer from "@/features/footer";
import Header from "@/features/header";
import Product from "@/features/product";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Intro />
      <Header />
      <Product />
      <Contact />
      <Footer />
    </main>
  );
}
