import { User } from "../types";

export default function UserCard({ user }: { user: User }) {
  return (
    <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
      <h2 className="text-2xl font-semibold">{user.name}</h2>

      <p className="m-0 max-w-[30ch] text-sm opacity-50">
        Email:{" "}
        <a
          href={`mailto:${user.email}`}
          className="text-blue-500 hover:text-blue-600"
        >
          {user.email}
        </a>
      </p>
      <p className="m-0 max-w-[30ch] text-sm opacity-50">
        Username: {user.username}
      </p>
      <p className="m-0 max-w-[30ch] text-sm opacity-50">Phone: {user.phone}</p>

      <p className="m-0 max-w-[30ch] text-sm opacity-50">
        Website:{" "}
        <a
          href={`http://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600"
        >
          {user.website}
        </a>
      </p>

      <div>
        <h3 className="text-xl font-semibold">Address:</h3>

        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          {user.address.street}, {user.address.suite}
        </p>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          {user.address.city}, {user.address.zipcode}
        </p>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          Geo: {user.address.geo.lat}, {user.address.geo.lng}
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Company:</h3>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          {user.company.name}
        </p>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
          {user.company.catchPhrase}
        </p>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">{user.company.bs}</p>
      </div>
    </div>
  );
}
