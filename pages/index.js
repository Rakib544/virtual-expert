import Head from "next/head";
import Footer from "../src/components/footer/footer";
import Navbar from "../src/components/navbar/navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Virtual Experts | Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main>
        <Navbar />
      </main>
      <Footer />
    </div>
  );
}
