"use client";

export default function PrimaryBtn({
  children,
  isFullWidth = false,
  action = () => {},
}: {
  children: React.ReactNode;
  isFullWidth?: boolean;
  action?: Function;
}) {
  return (
    <button
      onClick={() => action()}
      className={`bg-dark-secondary hover:bg-dark-secondary/80 mt-2 w-full min-w-[180px] cursor-pointer rounded-lg px-5 py-3 text-sm font-medium text-white transition-colors duration-300 md:w-auto ${isFullWidth && "md:w-full"}`}
    >
      {children}
    </button>
  );
}
