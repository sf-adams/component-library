import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quisquam
        laborum inventore, quas ipsum sit perspiciatis excepturi, veniam
        veritatis consequatur ut iure minus dolore! Dicta alias nulla eaque ut
        quis!
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        dicta tempore aspernatur doloribus, officia nostrum, nihil perferendis
        sit qui, a et quasi necessitatibus fugiat culpa dolor asperiores
        suscipit perspiciatis! Consectetur?
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  );
}
