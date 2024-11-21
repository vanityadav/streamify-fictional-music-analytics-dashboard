"use client";

import { usePathname } from "next/navigation";

export function PageHeading() {
  const pathname = usePathname();

  return (
    <h1 className="text-xl p-4 border rounded mt-4 capitalize">
      {pathname.split("/")[2].replaceAll("-", " ")} page
    </h1>
  );
}
