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
      onClick={() => action}
      className={`bg-dark-secondary mt-2 w-full min-w-[180px] cursor-pointer rounded-lg px-5 py-3 text-sm font-medium text-white md:w-auto ${isFullWidth && "md:w-full"}`}
    >
      {children}
    </button>
  );
}
