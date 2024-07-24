"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <main className="flex flex-col items-center p-24">
          <h2 className="mb-3 text-2xl font-semibold">
            {"Something went wrong!"}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              {":("}
            </span>
          </h2>
          <h2 className="text-center">Something went wrong!</h2>
          <button
            className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
            onClick={() => reset()}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
