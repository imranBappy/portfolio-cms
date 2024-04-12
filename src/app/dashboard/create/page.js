"use client";
import { Suspense } from "react";
import CreatePage from "./CreatePage";

function Page() {
  return (
    <Suspense>
      <CreatePage />
    </Suspense>
  );
}
export default Page;
