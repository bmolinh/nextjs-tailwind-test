import Link from "next/link";

export default function Home() {
  return (
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
        href="users"
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
  );
}
