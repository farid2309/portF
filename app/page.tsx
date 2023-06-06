import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <section className="">
      <Navbar />
      <Hero />
      <Footer />
    </section>
  );
}
