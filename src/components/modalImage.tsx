'use client';
import Image from 'next/image'
import {Skeleton} from "@nextui-org/skeleton";
import React from "react";
import {Modal, ModalContent, ModalBody, useDisclosure} from "@nextui-org/modal";

export default function ModalImage({src, className, alt, key}: { src: string, className?: string, alt: string, key: number }) {
  const [loaded, setLoaded] = React.useState(false)
  const [modalImage, setModalImage] = React.useState(false)
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
  const displayImage = src;

  return (
    <>
      {loaded ? (
      <div className={`relative rounded-xl ${className}`} onClick={onOpen}>
        <Image src={displayImage} alt={alt} className="rounded-xl object-center object-cover" fill={true} />
      </div>
      ) : (
        <Skeleton className={`relative rounded-xl ${className}`}>
          <Image src={displayImage} alt={alt} className="rounded-xl object-center object-cover" fill={true} onLoad={() => setLoaded(true)}/>
        </Skeleton>
      )}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={"full"}>
        <ModalContent>
          <ModalBody>
              <Skeleton isLoaded={modalImage} className="h-full w-[98%]" onClick={onOpen}>
                <Image src={displayImage} alt={alt} className="rounded-xl object-center object-contain" fill={true} onLoad={() => setModalImage(true)} />
              </Skeleton>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}