"use client";

import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";
import { User } from "./types";
import Link from "next/link";
import { useUsers } from "./user-context";

async function getUsers(): Promise<User[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default function Page() {
  const { users, setUsers } = useUsers();
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers()
      .then((users) => {
        setUsers(users);
        setFilteredUsers(users);
      })
      .catch(console.error);
  }, [setUsers]);

  return (
    <>
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] p-24">
        <h1 className="mb-3 text-4xl font-semibold">{"Users"}</h1>
      </div>
      <div className="grid text-center lg:text-left">
        <Link
          href="/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h3 className="text-xl font-semibold">
            {"Log out "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              &lt;-
            </span>
          </h3>
        </Link>
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <label
            htmlFor="username"
            className="block text-sm font-medium leading-6"
          >
            {"Search "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              &#x1F50D;
            </span>
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter user's name"
              className="block w-full rounded-md py-1.5 px-7 sm:text-sm sm:leading-6"
              onChange={(event) => {
                setFilteredUsers(
                  users.filter((user) =>
                    user.name.trim().toLowerCase().includes(event.target.value)
                  )
                );
              }}
            />
          </div>
        </div>
        <Suspense fallback={<Loading />}>
          {filteredUsers.map((user) => (
            <Link
              href={`/users/${user.id}`}
              key={user.id}
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                {`${user.name} `}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50">
                {user.email}
              </p>
            </Link>
          ))}
        </Suspense>
      </div>
    </>
  );
}
