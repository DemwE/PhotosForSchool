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
  
  return images.map((image) => `/${image}`);
}