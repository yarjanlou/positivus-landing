export default function HeadingBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="md:mb-13 mb-6 flex flex-col items-center gap-4 md:gap-7 md:flex-row text-center md:text-left">
      <div className="bg-primary rounded-sm px-1.5 py-0.5">
        <h3 className="md:text-[25px] text-xl font-semibold">{title}</h3>
      </div>
      <p className="max-w-md text-[13px]">{children}</p>
    </div>
  );
}
