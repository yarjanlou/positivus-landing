type InputProps = {
  type: string;
  label?: string;
  name: string;
  required?: boolean;
};

export default function FormInput({
  type,
  label,
  name,
  required = false,
}: InputProps) {
  return (
    <div className="w-full">
      <label htmlFor={name} className="text-[13px] capitalize mb-1 inline-block px-0.5">
        {label || name} {required && "*"}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={name}
        className="rouded-lg w-full border border-neutral-500 px-4 py-[9px] outline-0 placeholder:capitalize rounded-[10px] bg-white placeholder:text-[13px] text-sm"
      />
    </div>
  );
}
