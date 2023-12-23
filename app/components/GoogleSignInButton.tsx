"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import googleIcon from "../../public/google.svg";
import Image from "next/image";
import React from "react";

const GoogleSignInButton = () => {
  return (
    <Button onClick={() => signIn("google")} variant="outline" size="icon">
      <Image src={googleIcon} alt="Google Icon" className="w-6 h-6" />
    </Button>
  );
};

export default GoogleSignInButton;
