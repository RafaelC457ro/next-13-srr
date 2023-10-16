"use client";

import { useRouter } from "next/navigation";

export function SeeMoreButton() {
  const router = useRouter();
  return (
    <button
      className="bg-secondary text-white px-8 py-4 rounded"
      onClick={() =>
        router.push("/?limit=10", {
          scroll: false,
        })
      }
    >
      See More
    </button>
  );
}
