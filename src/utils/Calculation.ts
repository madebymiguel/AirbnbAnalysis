export function calculateTotalStartupCost(
  purchasePrice: number,
  downPaymentAmount: number,
  closingCostsPercentage: number,
  holdingCosts: number,
  startupCosts: number,
  renovationCost: number
) {
  return (
    (purchasePrice * closingCostsPercentage) / 100 +
    downPaymentAmount +
    holdingCosts +
    startupCosts +
    renovationCost
  );
}

export function calculateMonthlyRevenue(
  averageNightlyRate: number,
  vacancyRatePercentage: number
) {
  return averageNightlyRate * (365 / 12) * (1 - vacancyRatePercentage / 100);
}

export function calculateInitialInvestment(
  downPaymentAmount: number,
  startupCosts: number,
  closingCostsAmount: number
) {
  return downPaymentAmount + startupCosts + closingCostsAmount;
}

export function calculateAmountPercentage(amount: number, percentage: number) {
  return (amount * percentage) / 100;
}

export function calculateGrossMonthlyRent(
  averageNightlyRate: number,
  vacancyRatePercentage: number
) {
  return ((averageNightlyRate * 365) / 12) * (1 - vacancyRatePercentage / 100);
}

export function calculateMonthlyExpenses(
  monthlyMortgage: number,
  hoa: number,
  propertyTaxes: number,
  fireInsurance: number,
  floodInsurance: number,
  pmi: number,
  repairsReservePerMonthAmount: number,
  capitalExpenditure: number,
  waterSewer: number,
  garbage: number,
  gas: number,
  electricty: number,
  snowRemoval: number,
  lawnCare: number,
  propertyManagementAmount: number,
  other: number
) {
  return (
    monthlyMortgage +
    hoa +
    propertyTaxes +
    fireInsurance +
    floodInsurance +
    pmi +
    repairsReservePerMonthAmount +
    capitalExpenditure +
    waterSewer +
    garbage +
    gas +
    electricty +
    snowRemoval +
    lawnCare +
    propertyManagementAmount +
    other
  );
}

export function calculateMonthlyCashflow(
  grossMonthlyRent: number,
  monthlyExpenses: number
) {
  return grossMonthlyRent - monthlyExpenses;
}

export function calculateSimpleCashflow(
  monthlyRevenue: number,
  monthlyExpenses: number,
  monthlyMortgage: number
) {
  return monthlyRevenue - monthlyExpenses - monthlyMortgage;
}

export function calculateTotalCashRequired(
  downPayment: number,
  closingCosts: number,
  startupCosts: number,
  holdingCosts: number,
  renovationCost: number
) {
  return (
    downPayment + closingCosts + startupCosts + holdingCosts + renovationCost
  );
}

export function calculateAnnualFromMonthly(monthlyAmount: number) {
  return monthlyAmount * 12;
}

export function calculateRatio(numerator: number, denominator: number) {
  const result = (numerator / denominator) * 100;
  if (isNaN(result) || !isFinite(result)) {
    return 0;
  }
  return result;
}

export function calculateYearlyMarketValue(
  initialMarketValue: number,
  yearlyAppreciationPErcentage = 0,
  yearsHeldonInvestment: number
) {
  const appreciationFactor = Math.pow(
    1 + yearlyAppreciationPErcentage / 100,
    yearsHeldonInvestment
  );
  return appreciationFactor * initialMarketValue;
}

export function calculateHomeSaleProfit(
  finalSalesPrice: number,
  remainingMortgageBalance: number
) {
  return finalSalesPrice - remainingMortgageBalance;
}

export function calculateTotalCashFlow(
  yearsHeldonInvestment: number,
  newAnnualCashFlow: number
) {
  return newAnnualCashFlow * yearsHeldonInvestment;
}

export function calculateTotalProfit(
  homeSaleProfit: number,
  totalCashFlow: number
) {
  return homeSaleProfit + totalCashFlow;
}

// Simple Spread Sheet Calculation

export function calculateYearlyExpenses(
  yearlyGrossRent: number,
  propertyTax: number,
  propertyManagementPercentage: number,
  leasingFeePercentage: number,
  hoa: number,
  insurance: number,
  repairPercentage: number
) {
  return (
    propertyTax +
    (yearlyGrossRent * propertyManagementPercentage) / 100 +
    (yearlyGrossRent * leasingFeePercentage) / 100 +
    hoa +
    insurance +
    repairPercentage
  );
}

export function calculateNetIncome(
  yearlyGrossRent: number,
  yearlyExpenses: number
) {
  return yearlyGrossRent - yearlyExpenses;
}

export function calculateCashOutflow(yearlyExpenses: number, mortgage: number) {
  return yearlyExpenses + mortgage;
}

export function calculateCashFlow(
  yearlyGrossRent: number,
  cashOutflow: number
) {
  return yearlyGrossRent - cashOutflow;
}

// mortgage section

export function calculateMonthlyInterestRate(yearlyInterestRate: number) {
  return yearlyInterestRate / 12;
}

// monthly payment = PMT = P * (I (1+I)^N) / ((1+I)^N - 1)
export function calculateMonthyLoanPayment(
  principal: number,
  interestRate: number,
  numberOfPayments: number
) {
  const interestRatePercentage = interestRate / 100;
  const numerator =
    interestRatePercentage *
    Math.pow(1 + interestRatePercentage, numberOfPayments);
  const denominator =
    Math.pow(1 + interestRatePercentage, numberOfPayments) - 1;
  const result = (principal * numerator) / denominator;
  if (isNaN(result) || !isFinite(result)) {
    return 0;
  }
  return result;
}

// find remaining principal balance = PMT / I * (1 - (1/(1+I)^M))
export function calculateRemainingPrincipal(
  monthlyPayment: number,
  interestRate: number,
  remainingNumberOfPayments: number
) {
  const interestRatePercentage = interestRate / 100;
  const right =
    1 - Math.pow(1 / (1 + interestRatePercentage), remainingNumberOfPayments);

  const result = (monthlyPayment / interestRatePercentage) * right;

  if (isNaN(result) || !isFinite(result)) {
    return 0;
  }
  return result;
}

export function calculateAnnualNOI(
  simpleAnnualRevenue: number,
  simpleAnnualExpense: number
) {
  return simpleAnnualRevenue - simpleAnnualExpense;
}

export function calculateBreakEvenNightRate(
  vancancyRate: number,
  monthlyExpenses: number
) {
  const breakEvenMonthlyRevenue = monthlyExpenses / (1 - vancancyRate / 100);
  const averageDaysInMonth = 365 / 12;
  return breakEvenMonthlyRevenue / averageDaysInMonth;
}

export function calculateBreakEvenVacancyRate(
  averageNightlyRate: number,
  monthlyExpenses: number
) {
  const monthlyRevenue = averageNightlyRate * (365 / 12);
  const result = 1 - monthlyExpenses / monthlyRevenue;
  if (isNaN(result) || !isFinite(result)) {
    return 0;
  }
  return result * 100;
}

export function calculateSimpleBreakEvenNightRate(
  vancancyRate: number,
  monthlyMortgage: number,
  monthlyExpenses: number
) {
  const breakEvenMonthlyRevenue =
    (monthlyExpenses + monthlyMortgage) / (1 - vancancyRate / 100);
  const averageDaysInMonth = 365 / 12;
  return breakEvenMonthlyRevenue / averageDaysInMonth;
}

export function calculateSimpleBreakEvenVacancyRate(
  averageNightlyRate: number,
  monthlyMortgage: number,
  monthlyExpenses: number
) {
  const monthlyRevenue = (averageNightlyRate * 365) / 12;
  const result = 1 - (monthlyExpenses + monthlyMortgage) / monthlyRevenue;
  if (isNaN(result) || !isFinite(result)) {
    return 0;
  }
  return result * 100;
}
