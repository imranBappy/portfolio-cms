"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Dashboard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/page`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className=" p-4 shadow-md rounded-md flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-gray-500">Welcome to the dashboard</p>
        </div>
        <Link href="/dashboard/create">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            View
          </button>
        </Link>
      </div>

      <div className="mt-8 flex justify-end">
        <Link href="/dashboard/create">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Create Page
          </button>
        </Link>
      </div>

      {/* all page in table */}

      <div className="mt-8">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Text Count</th>
              <th className="px-4 py-2">Image Count</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((page) => (
              <tr key={page._id}>
                <td className="border px-4 py-2">{page._id}</td>
                <td className="border px-4 py-2">{page.title}</td>
                <td className="border px-4 py-2">{page.texts.length}</td>
                <td className="border px-4 py-2">{page.images.length}</td>
                <td className="border px-4 py-2">
                  <Link href={`/dashboard/create?edit=${page._id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
