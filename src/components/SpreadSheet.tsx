import React, { useCallback, useMemo, useState } from "react";
import AdvancedSpreadSheet from "./AdvancedSpreadSheet";
import SimpleSpreadSheet from "./SimpleSpreadSheet";
import { Exit } from "../types/Exit";
import { MonthlyRevenueAndExpenses } from "../types/MonthlyRevenueAndExpenses";
import { Shared } from "../types/Shared";
import { StartupCost } from "../types/StartupCost";
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

export default function SpreadSheet() {
  const formatter = useMemo(() => moneyFormatter(), []);

  const [isAdvanced, setIsAdvanced] = useState(false);

  const [sharedData, setSharedData] = useState<Shared>({
    purchasePrice: 0,
    downPaymentPercentage: 0,
    closingCostsPercentage: 0,
    startupCosts: 0,
    // monthlyRevenue: output
    averageNightlyRate: 0,
    vacancyRatePercentage: 0,
    // end monthlyRevenue: output
    monthlyExpenses: 0,
    // start monthlyMortgagePayment: output
    interestRatePercentage: 0,
    mortgageLoanTerm: 0,
    // end monthlyMortgagePayment:
  });

  const [startupCostData, setStartupCostData] = useState<StartupCost>({
    holdingCosts: 0,
    renovationCost: 0,
  });

  const [monthlyRevenueAndExpensesData, setMonthlyRevenueAndExpensesData] =
    useState<MonthlyRevenueAndExpenses>({
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
    });

  const [exitData, setExitData] = useState<Exit>({
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
      setSharedData({
        ...sharedData,
        purchasePrice,
      });
    },
    [sharedData]
  );

  const handleUpdateDownPaymentPercentage = useCallback(
    (downPaymentPercentage: number) => {
      setSharedData({
        ...sharedData,
        downPaymentPercentage,
      });
    },
    [sharedData]
  );

  const handleUpdateClosingCostsPercentage = useCallback(
    (closingCostsPercentage: number) => {
      setSharedData({
        ...sharedData,
        closingCostsPercentage,
      });
    },
    [sharedData]
  );

  const handleUpdateStartupCosts = useCallback(
    (startupCosts: number) => {
      setSharedData({
        ...sharedData,
        startupCosts,
      });
    },
    [sharedData]
  );

  const handleUpdateAverageNightlyRate = useCallback(
    (averageNightlyRate: number) => {
      setSharedData({
        ...sharedData,
        averageNightlyRate,
      });
    },
    [sharedData]
  );

  const handleUpdateVacancyRatePercentage = useCallback(
    (vacancyRatePercentage: number) => {
      setSharedData({
        ...sharedData,
        vacancyRatePercentage,
      });
    },
    [sharedData]
  );

  const handleUpdateMonthlyExpenses = useCallback(
    (monthlyExpenses: number) => {
      setSharedData({
        ...sharedData,
        monthlyExpenses,
      });
    },
    [sharedData]
  );

  const handleUpdateInterestRatePercentage = useCallback(
    (interestRatePercentage: number) => {
      setSharedData({
        ...sharedData,
        interestRatePercentage,
      });
    },
    [sharedData]
  );

  const handleUpdateMortgageLoanTerm = useCallback(
    (mortgageLoanTerm: number) => {
      setSharedData({
        ...sharedData,
        mortgageLoanTerm,
      });
    },
    [sharedData]
  );

  // End of sharedData handlers

  const numberOfPayments = calculateAnnualFromMonthly(
    sharedData.mortgageLoanTerm
  );

  const mortgageInitialPrincipal = calculateAmountPercentage(
    sharedData.purchasePrice,
    100 - sharedData.downPaymentPercentage
  );

  const monthlyInterestRate = calculateMonthlyInterestRate(
    sharedData.interestRatePercentage
  );

  const monthlyMortgage = calculateMonthyLoanPayment(
    mortgageInitialPrincipal,
    monthlyInterestRate,
    numberOfPayments
  );

  const monthlyRevenue = calculateMonthlyRevenue(
    sharedData.averageNightlyRate,
    sharedData.vacancyRatePercentage
  );

  // Start of startupCostData handlers

  const handleUpdateHoldingCosts = useCallback(
    (holdingCosts: number) => {
      setStartupCostData({
        ...startupCostData,
        holdingCosts,
      });
    },
    [startupCostData]
  );

  const handleUpdateRenovationCost = useCallback(
    (renovationCost: number) => {
      setStartupCostData({
        ...startupCostData,
        renovationCost,
      });
    },
    [startupCostData]
  );

  // End of startupCostData handlers

  const downPaymentAmount = calculateAmountPercentage(
    sharedData.purchasePrice,
    sharedData.downPaymentPercentage
  );

  const initialInvestment = calculateTotalStartupCost(
    sharedData.purchasePrice,
    downPaymentAmount,
    sharedData.closingCostsPercentage,
    startupCostData.holdingCosts,
    sharedData.startupCosts,
    startupCostData.renovationCost
  );

  /** Monthly Revenue And Expenses Section */

  const handleUpdateHOA = useCallback(
    (hoa: number) => {
      setMonthlyRevenueAndExpensesData({
        ...monthlyRevenueAndExpensesData,
        hoa,
      });
    },
    [monthlyRevenueAndExpensesData]
  );

  const handleUpdatePropertyTaxes = useCallback(
    (propertyTaxes: number) => {
      setMonthlyRevenueAndExpensesData({
        ...monthlyRevenueAndExpensesData,
        propertyTaxes,
      });
    },
    [monthlyRevenueAndExpensesData]
  );

  const handleUpdateFireInsurance = useCallback(
    (fireInsurance: number) => {
      setMonthlyRevenueAndExpensesData({
        ...monthlyRevenueAndExpensesData,
        fireInsurance,
      });
    },
    [monthlyRevenueAndExpensesData]
  );

  const handleUpdateFloodInsurance = useCallback(
    (floodInsurance: number) => {
      setMonthlyRevenueAndExpensesData({
        ...monthlyRevenueAndExpensesData,
        floodInsurance,
      });
    },
    [monthlyRevenueAndExpensesData]
  );

  const handleUpdatePMI = useCallback(
    (pmi: number) => {
      setMonthlyRevenueAndExpensesData({
        ...monthlyRevenueAndExpensesData,
        pmi,
      });
    },
    [monthlyRevenueAndExpensesData]
  );

  const handleUpdateRepairsReservePerMonthAmount = useCallback(
    (repairsReservePerMonthAmount: number) => {
      setMonthlyRevenueAndExpensesData({
        ...monthlyRevenueAndExpensesData,
        repairsReservePerMonthAmount,
      });
    },
    [monthlyRevenueAndExpensesData]
  );

  const handleUpdateCapitalExpenditure = useCallback(
    (capitalExpenditure: number) => {
      setMonthlyRevenueAndExpensesData({
        ...monthlyRevenueAndExpensesData,
        capitalExpenditure,
      });
    },
    [monthlyRevenueAndExpensesData]
  );

  const handleUpdateWaterSewer = useCallback(
    (waterSewer: number) => {
      setMonthlyRevenueAndExpensesData({
        ...monthlyRevenueAndExpensesData,
        waterSewer,
      });
    },
    [monthlyRevenueAndExpensesData]
  );

  const handleUpdateGarbage = useCallback(
    (garbage: number) => {
      setMonthlyRevenueAndExpensesData({
        ...monthlyRevenueAndExpensesData,
        garbage,
      });
    },
    [monthlyRevenueAndExpensesData]
  );

  const handleUpdateGas = useCallback(
    (gas: number) => {
      setMonthlyRevenueAndExpensesData({
        ...monthlyRevenueAndExpensesData,
        gas,
      });
    },
    [monthlyRevenueAndExpensesData]
  );

  const handleUpdateElectricty = useCallback(
    (electricty: number) => {
      setMonthlyRevenueAndExpensesData({
        ...monthlyRevenueAndExpensesData,
        electricty,
      });
    },
    [monthlyRevenueAndExpensesData]
  );

  const handleUpdateSnowRemoval = useCallback(
    (snowRemoval: number) => {
      setMonthlyRevenueAndExpensesData({
        ...monthlyRevenueAndExpensesData,
        snowRemoval,
      });
    },
    [monthlyRevenueAndExpensesData]
  );

  const handleUpdateLawnCare = useCallback(
    (lawnCare: number) => {
      setMonthlyRevenueAndExpensesData({
        ...monthlyRevenueAndExpensesData,
        lawnCare,
      });
    },
    [monthlyRevenueAndExpensesData]
  );

  const handleUpdatePropertyManagementPercentage = useCallback(
    (propertyManagementPercentage: number) => {
      setMonthlyRevenueAndExpensesData({
        ...monthlyRevenueAndExpensesData,
        propertyManagementPercentage,
      });
    },
    [monthlyRevenueAndExpensesData]
  );

  const handleUpdateOther = useCallback(
    (other: number) => {
      setMonthlyRevenueAndExpensesData({
        ...monthlyRevenueAndExpensesData,
        other,
      });
    },
    [monthlyRevenueAndExpensesData]
  );

  const grossMonthlyRent = calculateGrossMonthlyRent(
    sharedData.averageNightlyRate,
    sharedData.vacancyRatePercentage
  );

  const propertyManagementAmount = calculateAmountPercentage(
    grossMonthlyRent,
    monthlyRevenueAndExpensesData.propertyManagementPercentage
  );

  const monthlyExpenses = calculateMonthlyExpenses(
    monthlyMortgage,
    monthlyRevenueAndExpensesData.hoa,
    monthlyRevenueAndExpensesData.propertyTaxes,
    monthlyRevenueAndExpensesData.fireInsurance,
    monthlyRevenueAndExpensesData.floodInsurance,
    monthlyRevenueAndExpensesData.pmi,
    monthlyRevenueAndExpensesData.repairsReservePerMonthAmount,
    monthlyRevenueAndExpensesData.capitalExpenditure,
    monthlyRevenueAndExpensesData.waterSewer,
    monthlyRevenueAndExpensesData.garbage,
    monthlyRevenueAndExpensesData.gas,
    monthlyRevenueAndExpensesData.electricty,
    monthlyRevenueAndExpensesData.snowRemoval,
    monthlyRevenueAndExpensesData.lawnCare,
    propertyManagementAmount,
    monthlyRevenueAndExpensesData.other
  );

  const monthlyCashflow = calculateMonthlyCashflow(
    grossMonthlyRent,
    monthlyExpenses
  );

  /** Financial Analysis Section  */

  const closingCostAmount = calculateAmountPercentage(
    sharedData.purchasePrice,
    sharedData.closingCostsPercentage
  );

  const totalCashRequired = calculateTotalCashRequired(
    downPaymentAmount,
    closingCostAmount,
    sharedData.startupCosts,
    startupCostData.holdingCosts,
    startupCostData.renovationCost
  );

  const netAnnualCashflow = calculateAnnualFromMonthly(monthlyCashflow);

  const COCReturnPercentage = calculateRatio(
    netAnnualCashflow,
    totalCashRequired
  );

  const breakEvenAverageNightRate = calculateBreakEvenNightRate(
    sharedData.vacancyRatePercentage,
    monthlyExpenses
  );

  const breakEvenVacancyRate = calculateBreakEvenVacancyRate(
    sharedData.averageNightlyRate,
    monthlyExpenses
  );

  // Start if exitData handlers

  const handleUpdateYearlyAverageAppreciationPercentage = useCallback(
    (averageAppreciationPercentage: number) => {
      setExitData({
        ...exitData,
        averageAppreciationPercentage,
      });
    },
    [exitData]
  );

  const handleUpdateSalesCostPercentage = useCallback(
    (salesCostPercentage: number) => {
      setExitData({
        ...exitData,
        salesCostPercentage,
      });
    },
    [exitData]
  );

  const handleUpdateremainingMortagageBalance = useCallback(
    (remainingMortagageBalance: number) => {
      setExitData({
        ...exitData,
        remainingMortagageBalance,
      });
    },
    [exitData]
  );

  const handleUpdateYearsHeldonInvestment = useCallback(
    (yearsHeldonInvestment: number) => {
      setExitData({
        ...exitData,
        yearsHeldonInvestment,
      });
    },
    [exitData]
  );

  // End if exitData handlers
  const finalSalesPrice = calculateYearlyMarketValue(
    sharedData.purchasePrice,
    exitData.averageAppreciationPercentage,
    exitData.yearsHeldonInvestment
  );

  const salesCostAmount = calculateAmountPercentage(
    exitData.salesCostPercentage,
    finalSalesPrice
  );

  const totalInvestment = initialInvestment;

  const homeSaleProfit = calculateHomeSaleProfit(
    finalSalesPrice,
    exitData.remainingMortagageBalance
  );

  const totalCashFlow = calculateTotalCashFlow(
    exitData.yearsHeldonInvestment,
    netAnnualCashflow
  );

  const totalProfit = calculateTotalProfit(homeSaleProfit, totalCashFlow);

  const totalROI = calculateRatio(totalProfit, totalInvestment);

  // Output Section

  const simpleAnnualNOI = calculateAnnualNOI(
    grossMonthlyRent * 12,
    sharedData.monthlyExpenses * 12
  );
  const capRate = calculateRatio(simpleAnnualNOI, sharedData.purchasePrice);

  const grossYield = calculateRatio(
    grossMonthlyRent * 12,
    sharedData.purchasePrice
  );

  const simpleCashFlow = calculateSimpleCashflow(
    monthlyRevenue,
    sharedData.monthlyExpenses,
    monthlyMortgage
  );

  const simpleCOCReturnPercentage = calculateRatio(
    simpleCashFlow * 12,
    initialInvestment
  );

  const simpleBreakEvenAverageNightRate = calculateSimpleBreakEvenNightRate(
    sharedData.vacancyRatePercentage,
    monthlyMortgage,
    sharedData.monthlyExpenses
  );

  const simpleBreakEvenVacancyRate = calculateSimpleBreakEvenVacancyRate(
    sharedData.averageNightlyRate,
    monthlyMortgage,
    sharedData.monthlyExpenses
  );

  // mortgage section
  const exitMonths = calculateAnnualFromMonthly(exitData.yearsHeldonInvestment);

  const remainingPrincipal = calculateRemainingPrincipal(
    monthlyMortgage,
    monthlyInterestRate,
    numberOfPayments - exitMonths
  );

  return (
    <div>
      {isAdvanced ? (
        <AdvancedSpreadSheet
          // Data State
          sharedData={sharedData}
          startupCostData={startupCostData}
          monthlyRevenueAndExpensesData={monthlyRevenueAndExpensesData}
          exitData={exitData}
          // Startup Costs
          onUpdatePurchasePrice={handleUpdatePurchasePrice}
          onUpdateDownPaymentPercentage={handleUpdateDownPaymentPercentage}
          downPaymentAmount={formatter.format(downPaymentAmount)}
          downPaymentPercentage={
            Math.round(sharedData.downPaymentPercentage * 100) / 100
          }
          onUpdateClosingCostsPercentage={handleUpdateClosingCostsPercentage}
          onUpdateHoldingCosts={handleUpdateHoldingCosts}
          onUpdateStartupCosts={handleUpdateStartupCosts}
          onUpdateRenovationCost={handleUpdateRenovationCost}
          initialInvestment={formatter.format(initialInvestment)}
          // Monthly Revenue
          onUpdateAverageNightlyRate={handleUpdateAverageNightlyRate}
          monthlyMortgage={formatter.format(monthlyMortgage)}
          onUpdateVacancyRatePercentage={handleUpdateVacancyRatePercentage}
          grossMonthlyRent={formatter.format(grossMonthlyRent)}
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
          // Financial Analysis

          //Total Startup Costs
          purchasePrice={formatter.format(sharedData.purchasePrice)}
          // downPaymentAmount is define in startup section
          closingCostAmount={formatter.format(closingCostAmount)}
          startupCosts={formatter.format(sharedData.startupCosts)}
          holdingCosts={formatter.format(startupCostData.holdingCosts)}
          renovationCost={formatter.format(startupCostData.renovationCost)}
          totalCashRequired={formatter.format(totalCashRequired)}
          //Short Term Rental
          totalMonthlyRevenue={formatter.format(grossMonthlyRent)}
          // monthlyExpenses is defined in Monthly Revenue Section
          netMonthlyCashFlow={formatter.format(monthlyCashflow)}
          netAnnualCashflow={formatter.format(netAnnualCashflow)}
          COCReturnPercentage={Math.round(COCReturnPercentage * 100) / 100}
          // Exit
          onUpdateYearlyAverageAppreciationPercentage={
            handleUpdateYearlyAverageAppreciationPercentage
          }
          initialMarketValue={formatter.format(sharedData.purchasePrice)}
          finalSalesPrice={formatter.format(finalSalesPrice)}
          onUpdateSalesCostPercentage={handleUpdateSalesCostPercentage}
          salesCostAmount={formatter.format(salesCostAmount)}
          onUpdateremainingMortagageBalance={
            handleUpdateremainingMortagageBalance
          }
          totalInvestment={formatter.format(totalInvestment)}
          onUpdateYearsHeldonInvestment={handleUpdateYearsHeldonInvestment}
          homeSaleProfit={formatter.format(homeSaleProfit)}
          cashFlow={formatter.format(totalCashFlow)}
          totalProfit={formatter.format(totalProfit)}
          totalROI={Math.round(totalROI * 100) / 100}
          // Layout
          isAdvanced={isAdvanced}
          onUpdateSpreadSheetView={handleSpreadSheetView}
          // Moragage
          onUpdateMortgageLoanTerm={handleUpdateMortgageLoanTerm}
          onUpdateInterestRate={handleUpdateInterestRatePercentage}
          initialPrincipal={formatter.format(mortgageInitialPrincipal)}
          monthlyPayments={formatter.format(monthlyMortgage)}
          remainingPrincipal={formatter.format(remainingPrincipal)}
          //Extra
          breakEvenAverageNightRate={formatter.format(
            breakEvenAverageNightRate
          )}
          breakEvenVacancyRate={Math.round(breakEvenVacancyRate * 100) / 100}
          averageNightRate={formatter.format(sharedData.averageNightlyRate)}
        />
      ) : (
        <SimpleSpreadSheet
          // Data State
          sharedData={sharedData}
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
          isAdvanced={isAdvanced}
          onUpdateSpreadSheetView={handleSpreadSheetView}
          breakEvenAverageNightRate={formatter.format(
            simpleBreakEvenAverageNightRate
          )}
          breakEvenVacancyRate={
            Math.round(simpleBreakEvenVacancyRate * 100) / 100
          }
          averageNightRate={formatter.format(sharedData.averageNightlyRate)}
        />
      )}
    </div>
  );
}
