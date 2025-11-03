type TextareaProps = {
  label?: string;
  name: string;
  required?: boolean;
};

export default function FormTextarea({
  label,
  name,
  required = false,
}: TextareaProps) {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="mb-1 inline-block text-[13px] capitalize px-0.5"
      >
        {label || name} {required && "*"}
      </label>
      <textarea
        id={name}
        name={name}
        placeholder={name}
        className="rouded-lg h-35 w-full resize-none rounded-[10px] border border-neutral-500 bg-white px-4 py-[9px] text-sm outline-0 placeholder:text-[13px] placeholder:capitalize"
      />
    </div>
  );
}
