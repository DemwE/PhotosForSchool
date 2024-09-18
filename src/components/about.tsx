'use client';

import {useState} from "react";
import {Skeleton} from "@nextui-org/skeleton";
import aboutImage from "/public/about.jpg";
import Image from "next/image";

export default function About() {
  const [isAboutImage, setAboutImage] = useState(false);

  return (
    <section id="About" className="px-6 md:px-14 pt-24 flex flex-col items-center space-y-16">
      <div className="grid md:grid-cols-2 gap-4 max-md:grid-rows-2 container">
        <div className="space-y-6 md:my-8 lg:my-14">
          <h1
            className="max-md:text-2xl md:text-3xl lg:text-4xl max-w-[34rem] leading-[3.5rem]">Bringing Your Moments to Life</h1>
          <div className="space-y-2">
            <p className="lg:max-w-[40rem]">
              At LensLab, we believe that every moment tells a story. Specializing in professional real-life photography, we are passionate about capturing life’s most cherished moments—from intimate gatherings to grand celebrations. Our team of expert photographers is dedicated to transforming your experiences into lasting memories, ensuring that every shot reflects the emotions and beauty of the occasion.
            </p>
            <p className="lg:max-w-[40rem]">With a keen eye for detail and a commitment to quality, we provide personalized photography services that suit your unique vision. Whether it’s a wedding, family event, or corporate function, our goal is to create stunning images that you’ll treasure forever.</p>
          </div>
        </div>
        <Skeleton className="rounded-xl relative" isLoaded={isAboutImage}>
          <Image src={aboutImage} alt="About Image" fill={true}
                 className="object-center object-cover pointer-events-none rounded-xl"
                 onLoad={() => setAboutImage(true)}/>
        </Skeleton>
      </div>
    </section>
  );
}