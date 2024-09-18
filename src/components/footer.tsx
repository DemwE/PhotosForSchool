'use client';
import {RiCopyrightLine, RiFacebookCircleLine, RiInstagramLine, RiLinkedinLine, RiTwitterXLine} from "@remixicon/react";
import {Link} from "@nextui-org/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="lg:grid lg:px-4 grid-cols-2 bg-gradient-to-r from-cyan-500/90 to-blue-500/20 m-4 rounded-lg border-medium border-black">
      <div className="lg:flex flex-col items-start w-full px-4 py-2 mx-auto space-y-3 overflow-hidden">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <Link href="/#About" color="foreground">About</Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/#Contact" color="foreground">Contact</Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/privacy" color="foreground">Privacy policy</Link>
          </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6 lg:hidden">
          <SocialLinks/>
        </div>
        <p className="mt-8 leading-6 text-center text-white flex items-center justify-center">
          <RiCopyrightLine size={16} className="mr-1"/> {currentYear} LensLab. All right reserved.
        </p>
      </div>
      <div className="max-lg:hidden flex items-center space-x-4 px-4 justify-end">
        <SocialLinks/>
      </div>
    </footer>
  );
}

function SocialLinks() {
  return (
    <>
      <a href="https://www.facebook.com/" target="_blank">
        <span className="sr-only">Facebook</span>
        <RiFacebookCircleLine size={24} className="transition-colors hover:text-gray-400"/>
      </a>
      <a href="https://www.instagram.com/" target="_blank">
        <span className="sr-only">Instagram</span>
        <RiInstagramLine size={24} className="transition-colors hover:text-gray-400"/>
      </a>
      <a href="https://www.linkedin.com/" target="_blank">
        <span className="sr-only">TikTok</span>
        <RiLinkedinLine size={24} className="transition-colors hover:text-gray-400"/>
      </a>
      <a href="https://www.x.com/" target="_blank">
        <span className="sr-only">TikTok</span>
        <RiTwitterXLine size={24} className="transition-colors hover:text-gray-400"/>
      </a>
    </>
  )
}