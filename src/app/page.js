"use client";

import { getPage } from "@/services";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default async function Home() {
 
  const data = await getPage("6616746101612682a39b4b10");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/dashboard">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go to Dashboard
        </button>
      </Link>

      <div
        className="
        flex flex-row
        space-x-4
        items-center
        justify-center
        flex-wrap
        w-full

        "
      >
        {data?.images?.map((image, index) => (
          <Image
            key={index}
            src={image.url}
            alt="Vercel Logo"
            width={100}
            height={24}
            priority
          />
        ))}
      </div>
      <div
        className="
        flex flex-col
        space-y-4
        items-center
        justify-center
        w-full
        "
      >
        {data?.texts?.map((text, index) => (
          <p
            key={index}
            className="
            text-2xl
            font-bold
            text-center
            text-gray-800
            "
          >
            {text?.content}
          </p>
        ))}
      </div>
    </main>
  );
}
