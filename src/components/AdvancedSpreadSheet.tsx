import React from "react";
import { css } from "linaria";
import { Button } from "@mui/material";
import StartupCostSection from "./StartupCostSection";
import MonthlyRevenueAndExpensesSection from "./MonthlyRevenueAndExpensesSection";
import FinancialAnalysisSection from "./FinancialAnalysisSection";
import ExitSection from "./ExitSection";
import { MortgageSection } from "./MortgageSection";
import SaveModal from "./SaveModal";
import { Shared } from "../types/Shared";
import { StartupCost } from "../types/StartupCost";
import { MonthlyRevenueAndExpenses } from "../types/MonthlyRevenueAndExpenses";
import { Exit } from "../types/Exit";

export interface AdvancedSpreadSheetProps {
  // Data
  sharedData: Shared;
  startupCostData: StartupCost;
  monthlyRevenueAndExpensesData: MonthlyRevenueAndExpenses;
  exitData: Exit;
  // Startup Costs
  onUpdatePurchasePrice: (purchasePrice: number) => void;
  onUpdateDownPaymentPercentage: (downPaymentPercentage: number) => void;
  downPaymentAmount: string;
  downPaymentPercentage: number;
  onUpdateClosingCostsPercentage: (closingCostsPercentage: number) => void;
  onUpdateHoldingCosts: (holdingCosts: number) => void;
  onUpdateStartupCosts: (startupCosts: number) => void;
  onUpdateRenovationCost: (renovationCost: number) => void;
  initialInvestment: string;
  // Monthly Revenue
  onUpdateAverageNightlyRate: (averageNightlyRate: number) => void;
  monthlyMortgage: string;
  onUpdateVacancyRatePercentage: (vacancyRatePercentage: number) => void;
  grossMonthlyRent: string;
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
  // Financial Analysis
  // Total Startup Costs
  purchasePrice: string;
  // downPaymentAmount is define in startup section
  closingCostAmount: string;
  startupCosts: string;
  holdingCosts: string;
  renovationCost: string;
  totalCashRequired: string;
  //Short Term Rental
  totalMonthlyRevenue: string;
  netMonthlyCashFlow: string;
  netAnnualCashflow: string;
  COCReturnPercentage: number;
  // Exit
  onUpdateYearlyAverageAppreciationPercentage: (
    averageAppreciationPercentage: number
  ) => void;
  initialMarketValue: string;
  finalSalesPrice: string;
  onUpdateSalesCostPercentage: (salesCostPercentage: number) => void;
  salesCostAmount: string;
  onUpdateremainingMortagageBalance: (
    remainingMortagageBalance: number
  ) => void;

  totalInvestment: string;
  onUpdateYearsHeldonInvestment: (yearsHeldonInvestment: number) => void;
  homeSaleProfit: string;
  cashFlow: string;
  totalProfit: string;
  totalROI: number;
  // Layout
  isAdvanced: boolean;
  onUpdateSpreadSheetView: (isAdvanced: boolean) => void;
  onUpdateMortgageLoanTerm: (mortgageLoanTerm: number) => void;
  onUpdateInterestRate: (interestRatePercentage: number) => void;
  initialPrincipal: string;
  monthlyPayments: string;
  remainingPrincipal: string;
  breakEvenAverageNightRate: string;
  breakEvenVacancyRate: number;
  averageNightRate: string;
}

export default function AdvancedSpreadSheet({
  // Data
  sharedData,
  startupCostData,
  monthlyRevenueAndExpensesData,
  exitData,
  // Startup Costs
  onUpdatePurchasePrice,
  onUpdateDownPaymentPercentage,
  downPaymentAmount,
  downPaymentPercentage,
  onUpdateClosingCostsPercentage,
  onUpdateHoldingCosts,
  onUpdateStartupCosts,
  onUpdateRenovationCost,
  initialInvestment,
  // Monthly Revenue
  onUpdateAverageNightlyRate,
  monthlyMortgage,
  onUpdateVacancyRatePercentage,
  grossMonthlyRent,
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
  // Financial Analysis
  // Total Startup Costs
  purchasePrice,
  // downPaymentAmount is define in startup section
  closingCostAmount,
  startupCosts,
  holdingCosts,
  renovationCost,
  totalCashRequired,
  //Short Term Rental
  totalMonthlyRevenue,
  netMonthlyCashFlow,
  netAnnualCashflow,
  COCReturnPercentage,
  // Exit
  onUpdateYearlyAverageAppreciationPercentage,
  initialMarketValue,
  finalSalesPrice,
  onUpdateSalesCostPercentage,
  salesCostAmount,
  onUpdateremainingMortagageBalance,
  totalInvestment,
  onUpdateYearsHeldonInvestment,
  homeSaleProfit,
  cashFlow,
  totalProfit,
  totalROI,
  // Layout
  isAdvanced,
  onUpdateSpreadSheetView,
  onUpdateMortgageLoanTerm,
  onUpdateInterestRate,
  initialPrincipal,
  monthlyPayments,
  remainingPrincipal,
  breakEvenAverageNightRate,
  breakEvenVacancyRate,
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
    max-width: 50rem;
    margin: auto;
  `;

  const buttonContainer = css`
    display: flex;
    justify-content: space-between;
    max-width: 70rem;
    margin-top: 1rem;
  `;

  return (
    <div className={advanceSpreadSheetContaier}>
      <h1 className={title}>Advanced Rental Property Analysis</h1>
      <StartupCostSection
        sharedData={sharedData}
        startupCostData={startupCostData}
        onUpdatePurchasePrice={onUpdatePurchasePrice}
        onUpdateDownPaymentPercentage={onUpdateDownPaymentPercentage}
        downPaymentAmount={downPaymentAmount}
        onUpdateClosingCostsPercentage={onUpdateClosingCostsPercentage}
        onUpdateHoldingCosts={onUpdateHoldingCosts}
        onUpdateStartupCosts={onUpdateStartupCosts}
        onUpdateRenovationCost={onUpdateRenovationCost}
        initialInvestment={initialInvestment}
      />
      <MonthlyRevenueAndExpensesSection
        sharedData={sharedData}
        monthlyRevenueAndExpensesData={monthlyRevenueAndExpensesData}
        onUpdateAverageNightlyRate={onUpdateAverageNightlyRate}
        monthlyMortgage={monthlyMortgage}
        propertyManagementAmount={propertyManagementAmount}
        grossMonthlyRent={grossMonthlyRent}
        monthlyExpenses={monthlyExpenses}
        monthlyCashflow={monthlyCashflow}
        onUpdateVacancyRatePercentage={onUpdateVacancyRatePercentage}
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
        onUpdateOther={onUpdateOther}
      />
      <MortgageSection
        exitData={exitData}
        purchasePrice={purchasePrice}
        downPaymentPercentage={downPaymentPercentage}
        onUpdateLengthOfLoan={onUpdateMortgageLoanTerm}
        onUpdateInterestRate={onUpdateInterestRate}
        initialPrincipal={initialPrincipal}
        monthlyPayments={monthlyPayments}
      />
      <FinancialAnalysisSection
        //Total Startup Costs
        purchasePrice={purchasePrice}
        downPaymentAmount={downPaymentAmount}
        closingCostAmount={closingCostAmount}
        startupCosts={startupCosts}
        holdingCosts={holdingCosts}
        renovationCost={renovationCost}
        totalCashRequired={totalCashRequired}
        //Short Term Rental
        totalMonthlyRevenue={totalMonthlyRevenue}
        totalMonthlyExpenses={monthlyExpenses}
        netMonthlyCashFlow={netMonthlyCashFlow}
        netAnnualCashflow={netAnnualCashflow}
        COCReturnPercentage={COCReturnPercentage}
        // break even
        averageNightRate={averageNightRate}
        vacancyRate={sharedData.vacancyRatePercentage}
        breakEvenAverageNightRate={breakEvenAverageNightRate}
        breakEvenVacancyRate={breakEvenVacancyRate}
      />
      <ExitSection
        exitData={exitData}
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

      <div>
        <div className={buttonContainer}>
          <SaveModal />
          <Button onClick={() => onUpdateSpreadSheetView(isAdvanced)}>
            Quick Analysis
          </Button>
        </div>
      </div>
    </div>
  );
}
