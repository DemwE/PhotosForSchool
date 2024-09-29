import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Gallery from "@/components/gallery"
import Footer from "@/components/footer";
import {getImages} from "@/lib/images"

export default function Home() {
  const images = getImages();
  
  return (
    <main>
      <Navigation/>
      <Hero/>
      <About/>
      <Gallery images={images}/>
      <Footer/>
    </main>
  );
}