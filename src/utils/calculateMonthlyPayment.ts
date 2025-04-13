const calculateMonthlyPayment = (
  mortgageAmount: number,
  mortgageTerm: number,
  interestRate: number
): number => {
  const principal = Number(mortgageAmount);
  const calculatedInterest = Number(interestRate) / 100 / 12;
  const calculatedPayments = Number(mortgageTerm) * 12;

  // Compute monthly payment using the formula
  const monthlyPayment =
    (principal * calculatedInterest) /
    (1 - Math.pow(1 + calculatedInterest, -calculatedPayments));

  return monthlyPayment;
};
export default calculateMonthlyPayment;
