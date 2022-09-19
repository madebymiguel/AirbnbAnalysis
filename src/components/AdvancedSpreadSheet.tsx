import React from "react";
import { css } from "linaria";
import StartupCostSection from "./StartupCostSection";
import MonthlyRevenueAndExpensesSection from "./MonthlyRevenueAndExpensesSection";
import FinancialAnalysisSection from "./FinancialAnalysisSection";
import ExitSection from "./ExitSection";
import { MortgageSection } from "./MortgageSection";
import { SpreadSheet } from "../types/SpreadSheet";

export interface AdvancedSpreadSheetProps {
  // Data
  spreadSheetData: SpreadSheet;
  formatter: Intl.NumberFormat;
  // Startup Costs Section
  onUpdatePurchasePrice: (purchasePrice: number) => void;
  onUpdateDownPaymentPercentage: (downPaymentPercentage: number) => void;
  downPaymentAmount: string;
  onUpdateClosingCostsPercentage: (closingCostsPercentage: number) => void;
  onUpdateHoldingCosts: (holdingCosts: number) => void;
  onUpdateStartupCosts: (startupCosts: number) => void;
  onUpdateRenovationCost: (renovationCost: number) => void;
  initialInvestment: string;
  // Monthly Revenue Section
  onUpdateAverageNightlyRate: (averageNightlyRate: number) => void;
  onUpdateVacancyRatePercentage: (vacancyRatePercentage: number) => void;
  grossMonthlyRent: string;
  monthlyMortgage: string;
  onUpdateHOA: (hoa: number) => void;
  onUpdatePropertyTaxes: (propertyTaxes: number) => void;
  onUpdateFireInsurance: (fireInsurance: number) => void;
  onUpdateFloodInsurance: (floodInsurance: number) => void;
  onUpdatePMI: (pmi: number) => void;
  onUpdateRepairsReservePerMonthAmount: (
    repairsReservePerMonthAmount: number
  ) => void;
  onUpdateCapitalExpenditure: (capitalExpenditure: number) => void;
  onUpdateWaterSewer: (waterSewer: number) => void;
  onUpdateGarbage: (garbage: number) => void;
  onUpdateGas: (gas: number) => void;
  onUpdateElectricty: (electricty: number) => void;
  onUpdateSnowRemoval: (snowRemoval: number) => void;
  onUpdateLawnCare: (lawnCare: number) => void;
  onUpdatePropertyManagementPercentage: (
    propertyManagementPercentage: number
  ) => void;
  propertyManagementAmount: string;
  onUpdateOther: (other: number) => void;
  monthlyExpenses: string;
  monthlyCashflow: string;
  // Moragage Section
  onUpdateMortgageLoanTerm: (mortgageLoanTerm: number) => void;
  onUpdateInterestRate: (interestRatePercentage: number) => void;
  initialPrincipal: string;
  monthlyPayments: string;
  // Financial Analysis Section
  // Total Startup Costs
  closingCostAmount: string;
  totalCashRequired: string;
  //Short Term Rental
  totalMonthlyRevenue: string;
  netMonthlyCashFlow: string;
  netAnnualCashflow: string;
  COCReturnPercentage: number;
  breakEvenAverageNightRate: string;
  breakEvenVacancyRate: number;
  // Exit Section
  onUpdateYearlyAverageAppreciationPercentage: (
    averageAppreciationPercentage: number
  ) => void;
  finalSalesPrice: string;
  onUpdateSalesCostPercentage: (salesCostPercentage: number) => void;
  salesCostAmount: string;
  onUpdateremainingMortagageBalance: (
    remainingMortagageBalance: number
  ) => void;
  totalInvestment: string;
  homeSaleProfit: string;
  cashFlow: string;
  totalProfit: string;
  totalROI: number;
  // Extra ??
  initialMarketValue: string;
  averageNightRate: string;
  remainingPrincipal: string;
  onUpdateYearsHeldonInvestment: (yearsHeldonInvestment: number) => void;
}

export default function AdvancedSpreadSheet({
  // Data
  spreadSheetData,
  formatter,
  // Startup Costs Section
  onUpdatePurchasePrice,
  onUpdateDownPaymentPercentage,
  downPaymentAmount,
  onUpdateClosingCostsPercentage,
  onUpdateHoldingCosts,
  onUpdateStartupCosts,
  onUpdateRenovationCost,
  initialInvestment,
  // Monthly Revenue Section
  onUpdateAverageNightlyRate,
  onUpdateVacancyRatePercentage,
  grossMonthlyRent,
  monthlyMortgage,
  onUpdateHOA,
  onUpdatePropertyTaxes,
  onUpdateFireInsurance,
  onUpdateFloodInsurance,
  onUpdatePMI,
  onUpdateRepairsReservePerMonthAmount,
  onUpdateCapitalExpenditure,
  onUpdateWaterSewer,
  onUpdateGarbage,
  onUpdateGas,
  onUpdateElectricty,
  onUpdateSnowRemoval,
  onUpdateLawnCare,
  onUpdatePropertyManagementPercentage,
  propertyManagementAmount,
  onUpdateOther,
  monthlyExpenses,
  monthlyCashflow,
  // Moragage Section
  onUpdateMortgageLoanTerm,
  onUpdateInterestRate,
  initialPrincipal,
  monthlyPayments,
  // Financial Analysis Section
  // Total Startup Costs
  closingCostAmount,
  totalCashRequired,
  //Short Term Rental
  totalMonthlyRevenue,
  netMonthlyCashFlow,
  netAnnualCashflow,
  COCReturnPercentage,
  breakEvenAverageNightRate,
  breakEvenVacancyRate,
  // Exit Section
  onUpdateYearlyAverageAppreciationPercentage,
  finalSalesPrice,
  onUpdateSalesCostPercentage,
  salesCostAmount,
  onUpdateremainingMortagageBalance,
  totalInvestment,
  homeSaleProfit,
  cashFlow,
  totalProfit,
  totalROI,
  onUpdateYearsHeldonInvestment,
  initialMarketValue,
  remainingPrincipal,

  averageNightRate,
}: AdvancedSpreadSheetProps) {
  // styles
  const title = css`
    text-align: center;
  `;
  const advanceSpreadSheetContaier = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 60rem;
    margin: auto;
  `;

  return (
    <div className={advanceSpreadSheetContaier}>
      <h1 className={title}>Advanced Rental Property Analysis</h1>
      <StartupCostSection
        spreadSheetData={spreadSheetData}
        onUpdatePurchasePrice={onUpdatePurchasePrice}
        onUpdateDownPaymentPercentage={onUpdateDownPaymentPercentage}
        downPaymentAmount={downPaymentAmount}
        onUpdateClosingCostsPercentage={onUpdateClosingCostsPercentage}
        onUpdateHoldingCosts={onUpdateHoldingCosts}
        onUpdateStartupCosts={onUpdateStartupCosts}
        onUpdateRenovationCost={onUpdateRenovationCost}
        initialInvestment={initialInvestment}
      />
      <MortgageSection
        spreadSheetData={spreadSheetData}
        formatter={formatter}
        onUpdateLengthOfLoan={onUpdateMortgageLoanTerm}
        onUpdateInterestRate={onUpdateInterestRate}
        initialPrincipal={initialPrincipal}
        monthlyPayments={monthlyPayments}
      />
      <MonthlyRevenueAndExpensesSection
        spreadSheetData={spreadSheetData}
        onUpdateAverageNightlyRate={onUpdateAverageNightlyRate}
        onUpdateVacancyRatePercentage={onUpdateVacancyRatePercentage}
        grossMonthlyRent={grossMonthlyRent}
        monthlyMortgage={monthlyMortgage}
        onUpdateHOA={onUpdateHOA}
        onUpdatePropertyTaxes={onUpdatePropertyTaxes}
        onUpdateFireInsurance={onUpdateFireInsurance}
        onUpdateFloodInsurance={onUpdateFloodInsurance}
        onUpdatePMI={onUpdatePMI}
        onUpdateRepairsReservePerMonthAmount={
          onUpdateRepairsReservePerMonthAmount
        }
        onUpdateCapitalExpenditure={onUpdateCapitalExpenditure}
        onUpdateWaterSewer={onUpdateWaterSewer}
        onUpdateGarbage={onUpdateGarbage}
        onUpdateGas={onUpdateGas}
        onUpdateElectricty={onUpdateElectricty}
        onUpdateSnowRemoval={onUpdateSnowRemoval}
        onUpdateLawnCare={onUpdateLawnCare}
        onUpdatePropertyManagementPercentage={
          onUpdatePropertyManagementPercentage
        }
        propertyManagementAmount={propertyManagementAmount}
        onUpdateOther={onUpdateOther}
        monthlyExpenses={monthlyExpenses}
        monthlyCashflow={monthlyCashflow}
      />
      <FinancialAnalysisSection
        spreadSheetData={spreadSheetData}
        formatter={formatter}
        //Total Startup Costs
        downPaymentAmount={downPaymentAmount}
        closingCostAmount={closingCostAmount}
        totalCashRequired={totalCashRequired}
        //Short Term Rental
        totalMonthlyRevenue={totalMonthlyRevenue}
        totalMonthlyExpenses={monthlyExpenses}
        netMonthlyCashFlow={netMonthlyCashFlow}
        netAnnualCashflow={netAnnualCashflow}
        COCReturnPercentage={COCReturnPercentage}
        averageNightRate={averageNightRate}
        vacancyRate={spreadSheetData.vacancyRatePercentage}
        breakEvenAverageNightRate={breakEvenAverageNightRate}
        breakEvenVacancyRate={breakEvenVacancyRate}
      />
      <ExitSection
        spreadSheetData={spreadSheetData}
        onUpdateYearlyAverageAppreciationPercentage={
          onUpdateYearlyAverageAppreciationPercentage
        }
        initialMarketValue={initialMarketValue}
        finalSalesPrice={finalSalesPrice}
        onUpdateSalesCostPercentage={onUpdateSalesCostPercentage}
        salesCostAmount={salesCostAmount}
        onUpdateremainingMortagageBalance={onUpdateremainingMortagageBalance}
        remainingBalance={remainingPrincipal}
        totalInvestment={totalInvestment}
        onUpdateYearsHeldonInvestment={onUpdateYearsHeldonInvestment}
        homeSaleProfit={homeSaleProfit}
        totalCashFlow={cashFlow}
        totalProfit={totalProfit}
        totalROI={totalROI}
      />
    </div>
  );
}
