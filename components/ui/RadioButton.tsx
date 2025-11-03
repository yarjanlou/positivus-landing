export default function RadioButton({
  name,
  label,
  value,
  checked = false,
}: {
  name: string;
  label: string;
  value: string;
  checked?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <input type="radio" name={name} id={value} value={value} checked={checked} className="" />
      <label htmlFor={value} className="text-[13px]">
        {label}
      </label>
    </div>
  );
}
