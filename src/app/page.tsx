"use client";

import InputGroup from "@/components/InputGroup";
import RadioOption from "@/components/RadioOption";

const Home = () => {
  return (
    <div className="w-8/9 min-h-[610px] h-[610px] flex flex-row bg-white rounded-4xl">
      <div className="w-1/2 h-full flex flex-col justify-between gap-8 p-8 bg-white rounded-l-4xl">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-3xl font-bold">Mortgage Calculator</h1>
          <p className="text-[#87a3b8] cursor-pointer underline transition-all duration-300 ease-in-out hover:text-[#133040]">
            Clear All
          </p>
        </div>
        <InputGroup
          label="Mortgage Amount"
          inputIcon="$"
          reverseOrder={false}
        />
        <div className="flex flex-row gap-4">
          <InputGroup
            label="Mortgage Term"
            inputIcon="years"
            reverseOrder={true}
          />
          <InputGroup label="Interest Rate" inputIcon="%" reverseOrder={true} />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[#87a3b8] font-bold">Mortgage Type</p>
          <RadioOption
            inputName="mortgageType"
            inputId="repayment"
            inputLabel="Repayment"
            inputValue="repayment"
          />
          <RadioOption
            inputName="mortgageType"
            inputId="interestOnly"
            inputLabel="Interest Only"
            inputValue="interestOnly"
          />
        </div>
        <button
          type="button"
          className="w-fit flex flex-row items-center self-center gap-4 px-6 py-4 bg-[#dddf35] rounded-full cursor-pointer transition-all duration-300 ease-in-out"
        >
          <i className="w-[20px] h-[20px]">
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm3 1v2h10V3H5zm0 4v2h2V7H5zm4 0v2h2V7H9zm4 0v2h2V7h-2zm-8 4v2h2v-2H5zm4 0v2h2v-2H9zm4 0v6h2v-6h-2zm-8 4v2h2v-2H5zm4 0v2h2v-2H9z" />
            </svg>
          </i>
          <p className="text-xl font-bold">Calculate Repayments</p>
        </button>
      </div>
      <div className="w-1/2 h-full flex flex-col justify-center items-center gap-6 p-8 text-center bg-[#133040] rounded-r-4xl rounded-bl-[5rem]">
        <h2 className="text-3xl font-bold text-white">Results shown here</h2>
        <span className="font-bold text-[#87a3b8]">
          Complete the form and click &quot;calculate repayments&quot; to see
          what your monthly repayments would be.
        </span>
      </div>
    </div>
  );
};

export default Home;
