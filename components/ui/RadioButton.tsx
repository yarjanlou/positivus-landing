import { channel } from "diagnostics_channel";

export default function RadioButton({
  label,
  checked,
  onClick,
}: {
  label: string;
  checked: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <div className="flex cursor-pointer items-center gap-2" onClick={onClick}>
      <div
        className={`border-dark-secondary flex h-3.5 w-3.5 items-center justify-center rounded-full border lg:h-5 lg:w-5`}
      >
        <span
          className={`bg-primary md:size-3 size-2 rounded-full transition-all duration-75 ${checked ? "opacity-100" : "opacity-0"}`}
        ></span>
      </div>
      <span className="text-[13px] md:text-base">{label}</span>
    </div>
  );
}
