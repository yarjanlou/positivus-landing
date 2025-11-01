const trustedByItems = [
  "amazon",
  "dribbble",
  "hubspot",
  "notion",
  "netflix",
  "zoom",
];

export default function TrustedBy() {
  return (
    <section className="max-w-custom-width mx-auto p-4">
      <div className="flex items-center justify-between">
        {trustedByItems.map((item) => (
          <span
            key={item}
            className="text-lg text-neutral-500 font-semibold capitalize cursor-pointer hover:text-neutral-800 transition-all"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
