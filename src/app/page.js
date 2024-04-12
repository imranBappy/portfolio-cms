"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/page/6616746101612682a39b4b10`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
