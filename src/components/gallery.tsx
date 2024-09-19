'use client';

import React from "react";
import { useEffect, useState } from 'react';
import ModalImage from "@/components/modalImage"

export default function Gallery({ images }: { images: Promise<string[]> }) {
  const [imageList, setImageList] = useState<string[]>([]);

  useEffect(() => {
    images.then((images) => setImageList(images));
  }, [images]);

  return (
    <section id="Gallery" className="px-6 md:px-14 pt-24 items-center space-y-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {imageList.map((image) => (
        <ModalImage src={image} alt={image} className="h-96"/>
      ))}
      </div>
    </section>
  );
}