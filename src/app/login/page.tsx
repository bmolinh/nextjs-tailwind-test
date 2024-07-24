import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const basePath =
    process.env.NODE_ENV === "production" ? "/nextjs-tailwind-test" : "";

  return (
    <>
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] p-24">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src={`${basePath}/next.svg`}
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className="grid text-center lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <label
            htmlFor="username"
            className="block text-sm font-medium leading-6"
          >
            Username
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter username"
              className="block w-full rounded-md py-1.5 px-7 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6"
          >
            Password
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
              className="block w-full rounded-md py-1.5 px-7 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <Link
          href="/users"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="text-2xl font-semibold">
            {"Log in "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </Link>
      </div>
    </>
  );
}
