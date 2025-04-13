const RadioOption = ({
  inputId,
  inputValue,
  inputName,
  inputLabel,
}: {
  inputId: string;
  inputValue: string;
  inputName: string;
  inputLabel: string;
}) => {
  return (
    <div className="flex flex-row items-center gap-3 rounded-lg border border-[#87a3b8] cursor-pointer transition-all duration-300 ease-in-out hover:border-[#133040]">
      <input
        type="radio"
        required
        id={inputId}
        value={inputValue}
        name={inputName}
        className="w-[20px] h-[20px] ml-4 my-3 cursor-pointer border-[#133040] transition-all duration-300 ease-in-out appearance-none rounded-full border-2 checked:bg-[#133040] checked:border-[#133040] focus:outline-none"
      />
      <label
        htmlFor={inputId}
        className="w-full pr-4 py-3 text-lg font-bold cursor-pointer"
      >
        {inputLabel}
      </label>
    </div>
  );
};

export default RadioOption;
