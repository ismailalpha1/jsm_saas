"use client";

import Link from "next/link";
import Image from "next/image";
import {
  SignInButton,
  UserButton,
  SignIn,
//   SignOut,
} from "@clerk/nextjs";

import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={46}
            height={44}
          />
        </div>
      </Link>

      <div className="flex items-center gap-8">
        <NavItems />

        {/* <SignOut> */}
          <SignInButton mode="modal">
            <button className="btn-signin">
              Sign In
            </button>
          </SignInButton>
        {/* </SignOut> */}

        {/* <SignIn>
          <UserButton />
        </SignIn> */}
      </div>
    </nav>
  );
};

export default Navbar;