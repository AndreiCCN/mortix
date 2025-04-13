const InputGroup = ({
  label,
  inputIcon,
  inputName,
  inputStep,
  reverseOrder,
}: {
  label: string;
  inputIcon: string;
  inputName: string;
  inputStep: number;
  reverseOrder: boolean;
}) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="text-[#87a3b8] font-bold">{label}</p>
      <div
        className={`${
          reverseOrder ? "flex-row-reverse" : "flex-row"
        } w-full flex items-center border-1 border-[#87a3b8] rounded-lg`}
      >
        <p
          className={`${
            reverseOrder ? "rounded-r-lg" : "rounded-l-lg"
          } px-4 py-3 text-xl font-bold bg-[#e3f4fc]`}
        >
          {inputIcon}
        </p>
        <input
          type="number"
          required
          min={0}
          step={inputStep}
          name={inputName}
          className="w-full h-full px-3 text-lg font-semibold outline-none"
        />
      </div>
    </div>
  );
};

export default InputGroup;
