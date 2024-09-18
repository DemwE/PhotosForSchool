'use client';

import Image from "next/image";
import {Modal,   ModalContent,   ModalHeader,   ModalBody} from "@nextui-org/modal";
import {Skeleton} from "@nextui-org/skeleton";
import {useDisclosure} from "@nextui-org/react"
import React from "react";
import { useEffect, useState } from 'react';

export default function Gallery({ images }: { images: Promise<string[]> }) {
  const [imageList, setImageList] = useState<string[]>([]);

  useEffect(() => {
    images.then((images) => setImageList(images));
  }, [images]);

  return (
    <section id="Gallery" className="px-6 md:px-14 pt-24 flex flex-col items-center space-y-16">
      {imageList.map((image) => (
        <p>{image}</p>
        // <ImageModal key={image} image={image} />
      ))}
    </section>
  );
}

// function ImageModal({src, alt}: {src: string, alt: string}) {
//    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
//   return (
//     <>
//       <Image onClick={onOpen} src={src} alt={alt} fill={true} placeholder={"blur"}
//          className="object-center object-cover pointer-events-none"/>
//       <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
//         <ModalContent>
//           {(onClose) => (
//             <>
//               {/* <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader> */}
//               <ModalBody>
//                 <Image onClick={onOpen} src={src} alt={alt} fill={true}
//                    className="object-center object-cover pointer-events-none"/>
//               </ModalBody>
//             </>
//           )}
//         </ModalContent>
//       </Modal>
//     </>
//   )
// }

export function ImageModal({image}: {image: string}) {
  const [isImage, setImage] = React.useState(false);
  const [isImageModal, setImageModal] = React.useState(false);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <div className="flex flex-col" onClick={onOpen}>
        <div className="relative h-96">
          <Skeleton className="rounded-lg w-full h-full" isLoaded={isImage}>
            <Image className="object-cover w-full h-full" src={image} alt="realization" fill={true}
                   onLoad={() => setImage(true)}/>
          </Skeleton>
        </div>
        {/* <div className="space-y-1">
          <h1 className="max-md:text-lg md:text-xl lg:text-2xl truncate">{title}</h1>
          <p className="text-foreground-500 line-clamp-2">{description}</p>
        </div> */}
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={"5xl"} backdrop={"blur"} placement={"center"} scrollBehavior={"outside"}>
        <ModalContent>
          {(onClose) => (
            <>
              {/* <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader> */}
              <ModalBody>
                <div className="relative h-[50dvh]">
                  <Skeleton className="rounded-lg w-full h-full" isLoaded={isImageModal}>
                    <Image className="object-cover w-full h-full" src={image} alt="realization" fill={true}
                           onLoad={() => setImageModal(true)}/>
                  </Skeleton>
                </div>
                {/* <p className="text-foreground-500">{description}</p> */}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}