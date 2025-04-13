"use client";

import InputGroup from "@/components/InputGroup";
import RadioOption from "@/components/RadioOption";
import calculateInterestOnly from "@/utils/calculateInterestOnly";
import calculateMonthlyPayment from "@/utils/calculateMonthlyPayment";
import { useState } from "react";

const Home = () => {
  const [showResults, setShowResults] = useState(false);
  const [monthlyRepayment, setMonthlyRepayment] = useState("");
  const [totalRepayment, setTotalRepayment] = useState("");

  // eslint-disable-next-line
  const handleSubmit = (e: any) => {
    e.preventDefault();
    let monthlyPayment = 0;
    if (e.target.elements.mortgageType.value === "repayment") {
      monthlyPayment = calculateMonthlyPayment(
        e.target.elements.mortgageAmount.value,
        e.target.elements.mortgageTerm.value,
        e.target.elements.interestRate.value
      );
      setTotalRepayment(
        (
          monthlyPayment *
          e.target.elements.mortgageTerm.value *
          12
        ).toLocaleString("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
        })
      );
    } else if (e.target.elements.mortgageType.value === "interestOnly") {
      monthlyPayment = calculateInterestOnly(
        e.target.elements.mortgageAmount.value,
        e.target.elements.interestRate.value
      );
      setTotalRepayment("");
    }
    setMonthlyRepayment(
      monthlyPayment.toLocaleString("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      })
    );
    setShowResults(true);
  };

  const clearAllFields = () => {
    const form = document.querySelector("form");
    if (form) {
      form.reset();
    }
    setMonthlyRepayment("");
    setTotalRepayment("");
    setShowResults(false);
  };

  return (
    <div className="w-8/9 min-h-[610px] h-[610px] flex flex-row bg-white rounded-4xl">
      <form
        onSubmit={handleSubmit}
        className="w-1/2 h-full flex flex-col justify-between gap-8 p-8 bg-white rounded-l-4xl"
      >
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-3xl font-bold">Mortgage Calculator</h1>
          <p
            onClick={clearAllFields}
            className="text-[#87a3b8] cursor-pointer underline transition-all duration-300 ease-in-out hover:text-[#133040]"
          >
            Clear All
          </p>
        </div>
        <InputGroup
          label="Mortgage Amount"
          inputIcon="$"
          inputName="mortgageAmount"
          inputStep={1000}
          reverseOrder={false}
        />
        <div className="flex flex-row gap-4">
          <InputGroup
            label="Mortgage Term"
            inputIcon="years"
            inputName="mortgageTerm"
            inputStep={1}
            reverseOrder={true}
          />
          <InputGroup
            label="Interest Rate"
            inputIcon="%"
            inputName="interestRate"
            inputStep={0.01}
            reverseOrder={true}
          />
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
          type="submit"
          className="w-fit flex flex-row items-center self-center gap-4 px-6 py-4 bg-[#dddf35] rounded-full cursor-pointer transition-all duration-300 ease-in-out"
        >
          <i className="w-[20px] h-[20px]">
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm3 1v2h10V3H5zm0 4v2h2V7H5zm4 0v2h2V7H9zm4 0v2h2V7h-2zm-8 4v2h2v-2H5zm4 0v2h2v-2H9zm4 0v6h2v-6h-2zm-8 4v2h2v-2H5zm4 0v2h2v-2H9z" />
            </svg>
          </i>
          <p className="text-xl font-bold">Calculate Repayments</p>
        </button>
      </form>
      <div
        className={`${
          showResults ? "justify-evenly" : "justify-center"
        } w-1/2 h-full flex flex-col items-center gap-6 p-8 bg-[#133040] text-center rounded-r-4xl rounded-bl-[5rem] `}
      >
        <h2 className="w-full text-3xl font-bold text-white">
          {showResults ? "Your results" : "Results shown here"}
        </h2>
        <span className="w-full text-xl font-bold text-[#87a3b8]">
          {showResults
            ? 'Your results are shown below based on the information you provided. To adjus the results, edit the form and click "calculate repayments" again.'
            : 'Complete the form and click "calculate repayments" to see what your monthly repayments would be.'}
        </span>
        {showResults && (
          <div className="w-full flex flex-col justify-center items-center gap-4 p-8 bg-[#0e2532] text-xl text-[#87a3b8] font-bold rounded-4xl shadow-[inset_0_20px_0_-10px_#dddf35]">
            <span>Your monthly repayments</span>
            <h1 className="text-7xl text-[#dddf35]">{`$ ${monthlyRepayment}`}</h1>
            {totalRepayment && (
              <>
                <hr className="w-full my-4 border-[#87a3b8]" />
                <span>Total you&apos;ll repay over the term</span>
                <h2 className="text-3xl text-white">{`$ ${totalRepayment}`}</h2>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
