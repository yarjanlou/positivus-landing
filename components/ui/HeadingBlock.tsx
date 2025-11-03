export default function HeadingBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-7 mb-13">
      <div className="px-1.5 py-0.5 rounded-sm bg-primary">
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <p className="text-xs max-w-md">{children}</p>
    </div>
  );
}
