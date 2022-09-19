import React from "react";
import { css } from "linaria";
import { SpreadSheet } from "../types/SpreadSheet";
import InputSection from "./InputSection";
import OutputSection from "./OutputSection";

export interface SimpleSpreadSheetProps {
  spreadSheetData: SpreadSheet;
  onUpdatePurchasePrice: (purchasePrice: number) => void;
  onUpdateDownPaymentPercentage: (downPaymentPercentage: number) => void;
  onUpdateClosingCostsPercentage: (closingCostsPercentage: number) => void;
  onUpdateStartupCosts: (startupCosts: number) => void;
  monthlyRevenue: string;
  onUpdateAverageNightlyRate: (averageNightlyRate: number) => void;
  onUpdateVacancyRatePercentage: (vacancyRatePercentage: number) => void;
  onUpdateMonthlyExpenses: (monthlyExpenses: number) => void;
  monthlyMortgage: string;
  onUpdateInterestRatePercentage: (interestRatePercentage: number) => void;
  onUpdateMortgageLoanTerm: (mortgageLoanTerm: number) => void;
  initialInvestment: string;
  capRate: number;
  grossYield: number;
  cashFlow: string;
  cashOnCash: number;
  breakEvenAverageNightRate: string;
  breakEvenVacancyRate: number;
  averageNightRate: string;
}

export default function SimpleSpreadSheet({
  spreadSheetData,
  onUpdatePurchasePrice,
  onUpdateDownPaymentPercentage,
  onUpdateClosingCostsPercentage,
  onUpdateStartupCosts,
  monthlyRevenue,
  onUpdateAverageNightlyRate,
  onUpdateVacancyRatePercentage,
  onUpdateMonthlyExpenses,
  monthlyMortgage,
  onUpdateInterestRatePercentage,
  onUpdateMortgageLoanTerm,
  initialInvestment,
  capRate,
  grossYield,
  cashFlow,
  cashOnCash,
  breakEvenAverageNightRate,
  breakEvenVacancyRate,
  averageNightRate,
}: SimpleSpreadSheetProps) {
  const simpleSpreadSheetContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 60rem;
    margin: auto;
    text-align: center;
  `;

  const spreadSheetContainer = css`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-left: 2rem;
    padding-right: 2rem;
    @media (min-width: 851px) {
      flex-direction: row;
      padding-left: 0rem;
      padding-right: 0rem;
    }
  `;

  return (
    <div className={simpleSpreadSheetContainer}>
      <h1>Quick Rental Property Analysis</h1>
      <div className={spreadSheetContainer}>
        <InputSection
          spreadSheetData={spreadSheetData}
          onUpdatePurchasePrice={onUpdatePurchasePrice}
          onUpdateDownPaymentPercentage={onUpdateDownPaymentPercentage}
          onUpdateClosingCostsPercentage={onUpdateClosingCostsPercentage}
          onUpdateStartupCosts={onUpdateStartupCosts}
          monthlyRevenue={monthlyRevenue}
          onUpdateAverageNightlyRate={onUpdateAverageNightlyRate}
          onUpdateVacancyRatePercentage={onUpdateVacancyRatePercentage}
          onUpdateMonthlyExpenses={onUpdateMonthlyExpenses}
          monthlyMortgage={monthlyMortgage}
          onUpdateInterestRatePercentage={onUpdateInterestRatePercentage}
          onUpdateMortgageLoanTerm={onUpdateMortgageLoanTerm}
        />
        <OutputSection
          initialInvestment={initialInvestment}
          capRate={Math.round(capRate * 100) / 100}
          grossYield={Math.round(grossYield * 100) / 100}
          cashFlow={cashFlow}
          cashOnCash={Math.round(cashOnCash * 100) / 100}
          averageNightRate={averageNightRate}
          vacancyRate={spreadSheetData.vacancyRatePercentage}
          breakEvenAverageNightRate={breakEvenAverageNightRate}
          breakEvenVacancyRate={breakEvenVacancyRate}
        />
      </div>
    </div>
  );
}
