import HeroBackground from "/public/hero.jpg";
import {Button} from "@nextui-org/button";
import {Link} from "@nextui-org/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-dvh relative grid items-center">
      <Image src={HeroBackground} alt="Hero background" fill={true} placeholder={"blur"}
             className="object-center object-cover pointer-events-none blur-sm brightness-50"/>
      <div className="text-center z-1 relative">
        <div className="relative bottom-5">
          <h1 className="text-7xl md:text-9xl font-medium tracking-tight">LensLab</h1>
          <p className="text-lg md:text-xl">Capture Moments, Create Memories</p>
        </div>
        <Button size="lg" color="primary" variant="ghost" className="relative top-48 text-white glow" href="#About"
                as={Link}>More</Button>
      </div>
    </section>
  );
}