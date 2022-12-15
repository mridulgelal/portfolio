import Head from 'next/head';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';
import { Contact } from '../components/Contact';
import { Blog } from '../components/Blog';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Portfolio } from '../components/portfolio/Portfolio';
import { Nav } from '../components/Nav';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mree</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/dev-ed-wave.png" />
      </Head>
      <main className=" font-Poppins p-10 ">
        <Nav />
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Blog />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}