export default function Loading() {
  return (
    <h2 className="mb-3 text-2xl font-semibold">
      {"Loading"}
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        {"..."}
      </span>
    </h2>
  );
}
