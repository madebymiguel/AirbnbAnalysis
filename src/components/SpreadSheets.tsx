import React, { useCallback, useMemo, useState } from "react";
import AdvancedSpreadSheet from "./AdvancedSpreadSheet";
import SimpleSpreadSheet from "./SimpleSpreadSheet";
import moneyFormatter from "../utils/moneyFormatter";
import {
  calculateAmountPercentage,
  calculateAnnualFromMonthly,
  calculateAnnualNOI,
  calculateBreakEvenNightRate,
  calculateBreakEvenVacancyRate,
  calculateGrossMonthlyRent,
  calculateHomeSaleProfit,
  calculateMonthlyCashflow,
  calculateMonthlyExpenses,
  calculateMonthlyInterestRate,
  calculateMonthlyRevenue,
  calculateMonthyLoanPayment,
  calculateRatio,
  calculateRemainingPrincipal,
  calculateSimpleBreakEvenNightRate,
  calculateSimpleBreakEvenVacancyRate,
  calculateSimpleCashflow,
  calculateTotalCashFlow,
  calculateTotalCashRequired,
  calculateTotalProfit,
  calculateTotalStartupCost,
  calculateYearlyMarketValue,
} from "../utils/Calculation";
import { Button } from "@mui/material";
import SaveModal from "./SaveModal";
import { css } from "linaria";
import { SpreadSheet } from "../types/SpreadSheet";

export default function SpreadSheets() {
  const formatter = useMemo(() => moneyFormatter(), []);

  const [isAdvanced, setIsAdvanced] = useState(false);

  const [spreadSheetData, setSpreadSheetData] = useState<SpreadSheet>({
    purchasePrice: 0,
    downPaymentPercentage: 0,
    closingCostsPercentage: 0,
    startupCosts: 0,
    averageNightlyRate: 0,
    vacancyRatePercentage: 0,
    monthlyExpenses: 0,
    interestRatePercentage: 0,
    mortgageLoanTerm: 0,
    holdingCosts: 0,
    renovationCost: 0,
    monthlyRevenue: 0,
    monthlyOperatingExpenses: 0,
    hoa: 0,
    propertyTaxes: 0,
    fireInsurance: 0,
    floodInsurance: 0,
    pmi: 0,
    repairsReservePerMonthAmount: 0,
    capitalExpenditure: 0,
    waterSewer: 0,
    garbage: 0,
    gas: 0,
    electricty: 0,
    snowRemoval: 0,
    lawnCare: 0,
    propertyManagementPercentage: 0,
    other: 0,
    averageAppreciationPercentage: 0,
    salesCostPercentage: 0,
    remainingMortagageBalance: 0,
    yearsHeldonInvestment: 0,
  });

  const handleSpreadSheetView = (isAdvanced: boolean) => {
    setIsAdvanced(!isAdvanced);
  };

  // Start of sharedData handlers

  const handleUpdatePurchasePrice = useCallback(
    (purchasePrice: number) => {
      setSpreadSheetData({
        ...spreadSheetData,
        purchasePrice,
      });
    },
    [spreadSheetData]
  );

  const handleUpdateDownPaymentPercentage = useCallback(
    (downPaymentPercentage: number) => {
      setSpreadSheetData({
        ...spreadSheetData,
        downPaymentPercentage,
      });
    },
    [spreadSheetData]
  );

  const handleUpdateClosingCostsPercentage = useCallback(
    (closingCostsPercentage: number) => {
      setSpreadSheetData({
        ...spreadSheetData,
        closingCostsPercentage,
      });
    },
    [spreadSheetData]
  );

  const handleUpdateStartupCosts = useCallback(
    (startupCosts: number) => {
      setSpreadSheetData({
        ...spreadSheetData,
        startupCosts,
      });
    },
    [spreadSheetData]
  );

  const handleUpdateAverageNightlyRate = useCallback(
    (averageNightlyRate: number) => {
      setSpreadSheetData({
        ...spreadSheetData,
        averageNightlyRate,
      });
    },
    [spreadSheetData]
  );

  const handleUpdateVacancyRatePercentage = useCallback(
    (vacancyRatePercentage: number) => {
      setSpreadSheetData({
        ...spreadSheetData,
        vacancyRatePercentage,
      });
    },
    [spreadSheetData]
  );

  const handleUpdateMonthlyExpenses = useCallback(
    (monthlyExpenses: number) => {
      setSpreadSheetData({
        ...spreadSheetData,
        monthlyExpenses,
      });
    },
    [spreadSheetData]
  );

  const handleUpdateInterestRatePercentage = useCallback(
    (interestRatePercentage: number) => {
      setSpreadSheetData({
        ...spreadSheetData,
        interestRatePercentage,
      });
    },
    [spreadSheetData]
  );

  const handleUpdateMortgageLoanTerm = useCallback(
    (mortgageLoanTerm: number) => {
      setSpreadSheetData({
        ...spreadSheetData,
        mortgageLoanTerm,
      });
    },
    [spreadSheetData]
  );

  // End of sharedData handlers

  const numberOfPayments = calculateAnnualFromMonthly(
    spreadSheetData.mortgageLoanTerm
  );

  const mortgageInitialPrincipal = calculateAmountPercentage(
    spreadSheetData.purchasePrice,
    100 - spreadSheetData.downPaymentPercentage
  );

  const monthlyInterestRate = calculateMonthlyInterestRate(
    spreadSheetData.interestRatePercentage
  );

  const monthlyMortgage = calculateMonthyLoanPayment(
    mortgageInitialPrincipal,
    monthlyInterestRate,
    numberOfPayments
  );

  const monthlyRevenue = calculateMonthlyRevenue(
    spreadSheetData.averageNightlyRate,
    spreadSheetData.vacancyRatePercentage
  );

  // Start of startupCostData handlers

  const handleUpdateHoldingCosts = useCallback(
    (holdingCosts: number) => {
      setSpreadSheetData({
        ...spreadSheetData,
        holdingCosts,
      });
    },
    [spreadSheetData]
  );

  const handleUpdateRenovationCost = useCallback(
    (renovationCost: number) => {
      setSpreadSheetData({
        ...spreadSheetData,
        renovationCost,
      });
    },
    [spreadSheetData]
  );

  // End of startupCostData handlers

  const downPaymentAmount = calculateAmountPercentage(
    spreadSheetData.purchasePrice,
    spreadSheetData.downPaymentPercentage
  );

  const initialInvestment = calculateTotalStartupCost(
    spreadSheetData.purchasePrice,
    downPaymentAmount,
    spreadSheetData.closingCostsPercentage,
    spreadSheetData.holdingCosts,
    spreadSheetData.startupCosts,
    spreadSheetData.renovationCost
  );

  /** Monthly Revenue And Expenses Section */

  const handleUpdateHOA = useCallback(
    (hoa: number) => {
      setSpreadSheetData({
        ...spreadSheetData,
        hoa,
      });
    },
    [spreadSheetData]
  );

  const handleUpdatePropertyTaxes = useCallback(
    (propertyTaxes: number) => {
      setSpreadSheetData({
        ...spreadSheetData,
        propertyTaxes,
      });
    },
    [spreadSheetData]
  );

  const handleUpdateFireInsurance = useCallback(
    (fireInsurance: number) => {
      setSpreadSheetData({
        ...spreadSheetData,
        fireInsurance,
      });
    },
    [spreadSheetData]
  );

  const handleUpdateFloodInsurance = useCallback(
    (floodInsurance: number) => {
      setSpreadSheetData({
        ...spreadSheetData,
        floodInsurance,
      });
    },
    [spreadSheetData]
  );

  const handleUpdatePMI = useCallback(
    (pmi: number) => {
      setSpreadSheetData({
        ...spreadSheetData,
        pmi,
      });
    },
    [spreadSheetData]
  );

  const handleUpdateRepairsReservePerMonthAmount = useCallback(
    (repairsReservePerMonthAmount: number) => {
      setSpreadSheetData({
        ...spreadSheetData,
        repairsReservePerMonthAmount,
      });
    },
    [spreadSheetData]
  );

  const handleUpdateCapitalExpenditure = useCallback(
    (capitalExpenditure: number) => {
      setSpreadSheetData({
        ...spreadSheetData,
        capitalExpenditure,
      });
    },
    [spreadSheetData]
  );

  const handleUpdateWaterSewer = useCallback(
    (waterSewer: number) => {
      setSpreadSheetData({
        ...spreadSheetData,
        waterSewer,
      });
    },
    [spreadSheetData]
  );

  const handleUpdateGarbage = useCallback(
    (garbage: number) => {
      setSpreadSheetData({
        ...spreadSheetData,
        garbage,
      });
    },
    [spreadSheetData]
  );

  const handleUpdateGas = useCallback(
    (gas: number) => {
      setSpreadSheetData({
        ...spreadSheetData,
        gas,
      });
    },
    [spreadSheetData]
  );

  const handleUpdateElectricty = useCallback(
    (electricty: number) => {
      setSpreadSheetData({
        ...spreadSheetData,
        electricty,
      });
    },
    [spreadSheetData]
  );

  const handleUpdateSnowRemoval = useCallback(
    (snowRemoval: number) => {
      setSpreadSheetData({
        ...spreadSheetData,
        snowRemoval,
      });
    },
    [spreadSheetData]
  );

  const handleUpdateLawnCare = useCallback(
    (lawnCare: number) => {
      setSpreadSheetData({
        ...spreadSheetData,
        lawnCare,
      });
    },
    [spreadSheetData]
  );

  const handleUpdatePropertyManagementPercentage = useCallback(
    (propertyManagementPercentage: number) => {
      setSpreadSheetData({
        ...spreadSheetData,
        propertyManagementPercentage,
      });
    },
    [spreadSheetData]
  );

  const handleUpdateOther = useCallback(
    (other: number) => {
      setSpreadSheetData({
        ...spreadSheetData,
        other,
      });
    },
    [spreadSheetData]
  );

  const grossMonthlyRent = calculateGrossMonthlyRent(
    spreadSheetData.averageNightlyRate,
    spreadSheetData.vacancyRatePercentage
  );

  const propertyManagementAmount = calculateAmountPercentage(
    grossMonthlyRent,
    spreadSheetData.propertyManagementPercentage
  );

  const monthlyExpenses = calculateMonthlyExpenses(
    monthlyMortgage,
    spreadSheetData.hoa,
    spreadSheetData.propertyTaxes,
    spreadSheetData.fireInsurance,
    spreadSheetData.floodInsurance,
    spreadSheetData.pmi,
    spreadSheetData.repairsReservePerMonthAmount,
    spreadSheetData.capitalExpenditure,
    spreadSheetData.waterSewer,
    spreadSheetData.garbage,
    spreadSheetData.gas,
    spreadSheetData.electricty,
    spreadSheetData.snowRemoval,
    spreadSheetData.lawnCare,
    propertyManagementAmount,
    spreadSheetData.other
  );

  const monthlyCashflow = calculateMonthlyCashflow(
    grossMonthlyRent,
    monthlyExpenses
  );

  /** Financial Analysis Section  */

  const closingCostAmount = calculateAmountPercentage(
    spreadSheetData.purchasePrice,
    spreadSheetData.closingCostsPercentage
  );

  const totalCashRequired = calculateTotalCashRequired(
    downPaymentAmount,
    closingCostAmount,
    spreadSheetData.startupCosts,
    spreadSheetData.holdingCosts,
    spreadSheetData.renovationCost
  );

  const netAnnualCashflow = calculateAnnualFromMonthly(monthlyCashflow);

  const COCReturnPercentage = calculateRatio(
    netAnnualCashflow,
    totalCashRequired
  );

  const breakEvenAverageNightRate = calculateBreakEvenNightRate(
    spreadSheetData.vacancyRatePercentage,
    monthlyExpenses
  );

  const breakEvenVacancyRate = calculateBreakEvenVacancyRate(
    spreadSheetData.averageNightlyRate,
    monthlyExpenses
  );

  // Start if exitData handlers

  const handleUpdateYearlyAverageAppreciationPercentage = useCallback(
    (averageAppreciationPercentage: number) => {
      setSpreadSheetData({
        ...spreadSheetData,
        averageAppreciationPercentage,
      });
    },
    [spreadSheetData]
  );

  const handleUpdateSalesCostPercentage = useCallback(
    (salesCostPercentage: number) => {
      setSpreadSheetData({
        ...spreadSheetData,
        salesCostPercentage,
      });
    },
    [spreadSheetData]
  );

  const handleUpdateremainingMortagageBalance = useCallback(
    (remainingMortagageBalance: number) => {
      setSpreadSheetData({
        ...spreadSheetData,
        remainingMortagageBalance,
      });
    },
    [spreadSheetData]
  );

  const handleUpdateYearsHeldonInvestment = useCallback(
    (yearsHeldonInvestment: number) => {
      setSpreadSheetData({
        ...spreadSheetData,
        yearsHeldonInvestment,
      });
    },
    [spreadSheetData]
  );

  // End if exitData handlers
  const finalSalesPrice = calculateYearlyMarketValue(
    spreadSheetData.purchasePrice,
    spreadSheetData.averageAppreciationPercentage,
    spreadSheetData.yearsHeldonInvestment
  );

  const salesCostAmount = calculateAmountPercentage(
    spreadSheetData.salesCostPercentage,
    finalSalesPrice
  );

  const totalInvestment = initialInvestment;

  const homeSaleProfit = calculateHomeSaleProfit(
    finalSalesPrice,
    spreadSheetData.remainingMortagageBalance
  );

  const totalCashFlow = calculateTotalCashFlow(
    spreadSheetData.yearsHeldonInvestment,
    netAnnualCashflow
  );

  const totalProfit = calculateTotalProfit(homeSaleProfit, totalCashFlow);

  const totalROI = calculateRatio(totalProfit, totalInvestment);

  // Output Section

  const simpleAnnualNOI = calculateAnnualNOI(
    grossMonthlyRent * 12,
    spreadSheetData.monthlyExpenses * 12
  );
  const capRate = calculateRatio(
    simpleAnnualNOI,
    spreadSheetData.purchasePrice
  );

  const grossYield = calculateRatio(
    grossMonthlyRent * 12,
    spreadSheetData.purchasePrice
  );

  const simpleCashFlow = calculateSimpleCashflow(
    monthlyRevenue,
    spreadSheetData.monthlyExpenses,
    monthlyMortgage
  );

  const simpleCOCReturnPercentage = calculateRatio(
    simpleCashFlow * 12,
    initialInvestment
  );

  const simpleBreakEvenAverageNightRate = calculateSimpleBreakEvenNightRate(
    spreadSheetData.vacancyRatePercentage,
    monthlyMortgage,
    spreadSheetData.monthlyExpenses
  );

  const simpleBreakEvenVacancyRate = calculateSimpleBreakEvenVacancyRate(
    spreadSheetData.averageNightlyRate,
    monthlyMortgage,
    spreadSheetData.monthlyExpenses
  );

  // mortgage section
  const exitMonths = calculateAnnualFromMonthly(
    spreadSheetData.yearsHeldonInvestment
  );

  const remainingPrincipal = calculateRemainingPrincipal(
    monthlyMortgage,
    monthlyInterestRate,
    numberOfPayments - exitMonths
  );

  const spreadSheetContainer = css`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    width: 100%;
  `;

  const buttonContainer = css`
    display: flex;
    justify-content: space-between;
    max-width: 60rem;
    margin: auto;
    padding: 16px;
  `;

  return (
    <div className={spreadSheetContainer}>
      {isAdvanced ? (
        <AdvancedSpreadSheet
          // Data State
          spreadSheetData={spreadSheetData}
          formatter={formatter}
          // Startup Costs Section
          onUpdatePurchasePrice={handleUpdatePurchasePrice}
          onUpdateDownPaymentPercentage={handleUpdateDownPaymentPercentage}
          downPaymentAmount={formatter.format(downPaymentAmount)}
          onUpdateClosingCostsPercentage={handleUpdateClosingCostsPercentage}
          onUpdateHoldingCosts={handleUpdateHoldingCosts}
          onUpdateStartupCosts={handleUpdateStartupCosts}
          onUpdateRenovationCost={handleUpdateRenovationCost}
          initialInvestment={formatter.format(initialInvestment)}
          // Monthly Revenue Section
          onUpdateAverageNightlyRate={handleUpdateAverageNightlyRate}
          onUpdateVacancyRatePercentage={handleUpdateVacancyRatePercentage}
          grossMonthlyRent={formatter.format(grossMonthlyRent)}
          monthlyMortgage={formatter.format(monthlyMortgage)}
          onUpdateHOA={handleUpdateHOA}
          onUpdatePropertyTaxes={handleUpdatePropertyTaxes}
          onUpdateFireInsurance={handleUpdateFireInsurance}
          onUpdateFloodInsurance={handleUpdateFloodInsurance}
          onUpdatePMI={handleUpdatePMI}
          onUpdateRepairsReservePerMonthAmount={
            handleUpdateRepairsReservePerMonthAmount
          }
          onUpdateCapitalExpenditure={handleUpdateCapitalExpenditure}
          onUpdateWaterSewer={handleUpdateWaterSewer}
          onUpdateGarbage={handleUpdateGarbage}
          onUpdateGas={handleUpdateGas}
          onUpdateElectricty={handleUpdateElectricty}
          onUpdateSnowRemoval={handleUpdateSnowRemoval}
          onUpdateLawnCare={handleUpdateLawnCare}
          onUpdatePropertyManagementPercentage={
            handleUpdatePropertyManagementPercentage
          }
          propertyManagementAmount={formatter.format(propertyManagementAmount)}
          onUpdateOther={handleUpdateOther}
          monthlyExpenses={formatter.format(monthlyExpenses)}
          monthlyCashflow={formatter.format(monthlyCashflow)}
          // Moragage Section
          onUpdateMortgageLoanTerm={handleUpdateMortgageLoanTerm}
          onUpdateInterestRate={handleUpdateInterestRatePercentage}
          initialPrincipal={formatter.format(mortgageInitialPrincipal)}
          monthlyPayments={formatter.format(monthlyMortgage)}
          // Financial Analysis Section
          //Total Startup Costs
          closingCostAmount={formatter.format(closingCostAmount)}
          totalCashRequired={formatter.format(totalCashRequired)}
          //Short Term Rental
          totalMonthlyRevenue={formatter.format(grossMonthlyRent)}
          netMonthlyCashFlow={formatter.format(monthlyCashflow)}
          netAnnualCashflow={formatter.format(netAnnualCashflow)}
          COCReturnPercentage={Math.round(COCReturnPercentage * 100) / 100}
          breakEvenAverageNightRate={formatter.format(
            breakEvenAverageNightRate
          )}
          breakEvenVacancyRate={Math.round(breakEvenVacancyRate * 100) / 100}
          // Exit
          onUpdateYearlyAverageAppreciationPercentage={
            handleUpdateYearlyAverageAppreciationPercentage
          }
          finalSalesPrice={formatter.format(finalSalesPrice)}
          onUpdateSalesCostPercentage={handleUpdateSalesCostPercentage}
          salesCostAmount={formatter.format(salesCostAmount)}
          onUpdateremainingMortagageBalance={
            handleUpdateremainingMortagageBalance
          }
          totalInvestment={formatter.format(totalInvestment)}
          homeSaleProfit={formatter.format(homeSaleProfit)}
          cashFlow={formatter.format(totalCashFlow)}
          totalProfit={formatter.format(totalProfit)}
          totalROI={Math.round(totalROI * 100) / 100}
          remainingPrincipal={formatter.format(remainingPrincipal)}
          onUpdateYearsHeldonInvestment={handleUpdateYearsHeldonInvestment}
          initialMarketValue={""}
          averageNightRate={formatter.format(
            spreadSheetData.averageNightlyRate
          )}
        />
      ) : (
        <SimpleSpreadSheet
          // Data State
          spreadSheetData={spreadSheetData}
          // Input
          onUpdatePurchasePrice={handleUpdatePurchasePrice}
          onUpdateDownPaymentPercentage={handleUpdateDownPaymentPercentage}
          onUpdateClosingCostsPercentage={handleUpdateClosingCostsPercentage}
          onUpdateStartupCosts={handleUpdateStartupCosts}
          monthlyRevenue={formatter.format(monthlyRevenue)}
          onUpdateAverageNightlyRate={handleUpdateAverageNightlyRate}
          onUpdateVacancyRatePercentage={handleUpdateVacancyRatePercentage}
          onUpdateMonthlyExpenses={handleUpdateMonthlyExpenses}
          monthlyMortgage={formatter.format(monthlyMortgage)}
          onUpdateInterestRatePercentage={handleUpdateInterestRatePercentage}
          onUpdateMortgageLoanTerm={handleUpdateMortgageLoanTerm}
          // Output
          initialInvestment={formatter.format(initialInvestment)}
          capRate={Math.round(capRate * 100) / 100}
          grossYield={Math.round(grossYield * 100) / 100}
          cashFlow={formatter.format(simpleCashFlow)}
          cashOnCash={Math.round(simpleCOCReturnPercentage * 100) / 100}
          breakEvenAverageNightRate={formatter.format(
            simpleBreakEvenAverageNightRate
          )}
          breakEvenVacancyRate={
            Math.round(simpleBreakEvenVacancyRate * 100) / 100
          }
          averageNightRate={formatter.format(
            spreadSheetData.averageNightlyRate
          )}
        />
      )}
      <div>
        <div className={buttonContainer}>
          <SaveModal spreadSheetData={spreadSheetData} />
          <Button onClick={() => handleSpreadSheetView(isAdvanced)}>
            Advanced Analysis
          </Button>
        </div>
      </div>
    </div>
  );
}
