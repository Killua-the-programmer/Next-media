import React from "react";
import { Metadata } from "next";
import signUpImage from "@/assets/signup-image.jpg";
import Image from "next/image";
import Link from "next/link";
import SignupForm from "./SignupForm";
export const metadata: Metadata = {
  title: "Sign up",
};

const page = () => {
  return (
    <main className="flex h-screen items-center justify-center bg-muted p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="w-full space-y-10 overflow-auto md:w-1/2">
          <div className="space-y-1 text-center">
            <h1 className="mt-6 text-3xl font-bold"> sign up to next media</h1>
            <p className="text-muted-foreground">
              A place where you can make yourself addicted{" "}
            </p>
          </div>
          <div className="space-y-5 p-2">
            <SignupForm />
            <Link href={"/login"} className="block text-center hover:underline">
              Already have an account ? Login
            </Link>
          </div>
        </div>
        <Image
          src={signUpImage}
          alt="sign up image "
          className="hidden w-1/2 bg-center object-cover md:block"
        />
      </div>
    </main>
  );
};

export default page;
