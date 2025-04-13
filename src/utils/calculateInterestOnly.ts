const calculateInterestOnly = (
  mortgageAmount: number,
  interestRate: number
) => {
  const calculatedInterest = Number(interestRate) / 100 / 12;
  const interestOnlPayment = Number(mortgageAmount) * calculatedInterest;
  return interestOnlPayment;
};
export default calculateInterestOnly;
