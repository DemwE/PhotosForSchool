'use client';

import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from "@nextui-org/navbar";
import LogoImage from "/public/logo.png";
import Image from 'next/image'
import {Button} from "@nextui-org/button";
import {Link} from "@nextui-org/link";
import React from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}>
      <NavbarContent>
        <Image src={LogoImage} alt={"LensLab Logo"} width={40} height={40}/>
        <h1 className="text-3xl">LensLab</h1>
      </NavbarContent>
      <NavbarContent justify="end">
        <div className="hidden sm:flex gap-4">
          <NavbarItem>
            <Link color="foreground" href="/#" className="font-medium">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/#About" className="font-medium">
              About
            </Link>
          </NavbarItem>
          {/*<NavbarItem>*/}
          {/*  <Link color="foreground" href="/#Contact" className="font-medium">*/}
          {/*    Contact*/}
          {/*  </Link>*/}
          {/*</NavbarItem>*/}
        </div>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarMenu className="z-[9999]">
        <NavbarMenuItem>
          <Link color="foreground" href="/#" className="text-xl" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href="/#About" className="text-xl" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href="/#Contact" className="text-xl" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}