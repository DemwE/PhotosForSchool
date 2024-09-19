'use server'

import fs from 'fs';
import path from 'path';

export async function getImages() {
  const imagesFolder = 'public/images';

  const images = fs.readdirSync(imagesFolder).map((file) => {
    const filePath = path.join(imagesFolder, file);
    const modifiedFilePath = filePath.replace('public/', '');
    return modifiedFilePath;
  });

  console.log(images)
  
  return shuffle(images).map((image) => `/${image}`);
}

function shuffle<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * newArray.length);
    [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]];
  }
  return newArray;
}