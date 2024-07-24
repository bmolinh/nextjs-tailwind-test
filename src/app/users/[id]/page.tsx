"use client";

import Link from "next/link";
import NotFound from "./not-found";
import { useUsers } from "../user-context";
import UserCard from "./card";
import { notFound } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
  const { users } = useUsers();

  const user = users.find((user) => user.id === Number(params.id));

  if (!user) notFound();

  return (
    <>
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] p-24">
        <h1 className="mb-3 text-4xl font-semibold">{"User detail"}</h1>
      </div>
      <div className="grid text-center lg:text-left">
        {user && <UserCard user={user} />}

        <Link
          href="/users"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="text-2xl font-semibold">
            {"Go back "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              &lt;-
            </span>
          </h2>
        </Link>
      </div>
    </>
  );
}
