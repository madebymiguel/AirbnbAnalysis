import React from "react";
import { css } from "linaria";
import Button from "@mui/material/Button";
import { Shared } from "../types/Shared";
import InputSection from "./InputSection";
import OutputSection from "./OutputSection";
import SaveModal from "./SaveModal";

export interface SimpleSpreadSheetProps {
  sharedData: Shared;
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
  isAdvanced: boolean;
  onUpdateSpreadSheetView: (isAdvanced: boolean) => void;
  breakEvenAverageNightRate: string;
  breakEvenVacancyRate: number;
  averageNightRate: string;
}

export default function SimpleSpreadSheet({
  sharedData,
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
  isAdvanced,
  onUpdateSpreadSheetView,
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
    flex-direction: column;
    justify-content: space-between;
    padding-left: 2rem;
    padding-right: 2rem;
    @media (min-width: 851px) {
      flex-direction: row;
      padding-left: 0rem;
      padding-right: 0rem;
    }
  `;

  const buttonContainer = css`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  `;

  return (
    <div className={simpleSpreadSheetContainer}>
      <h1>Quick Rental Property Analysis</h1>
      <div className={spreadSheetContainer}>
        <InputSection
          sharedData={sharedData}
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
          vacancyRate={sharedData.vacancyRatePercentage}
          breakEvenAverageNightRate={breakEvenAverageNightRate}
          breakEvenVacancyRate={breakEvenVacancyRate}
        />
      </div>
      <div>
        <div className={buttonContainer}>
          <SaveModal />
          <Button onClick={() => onUpdateSpreadSheetView(isAdvanced)}>
            Advanced Analysis
          </Button>
        </div>
      </div>
    </div>
  );
}
