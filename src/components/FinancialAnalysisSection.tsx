import React from "react";
import { css } from "linaria";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TableHead,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { SpreadSheet } from "../types/SpreadSheet";

export interface FinancialAnalysisSectionProps {
  spreadSheetData: SpreadSheet;
  formatter: Intl.NumberFormat;
  // Total Startup Costs
  downPaymentAmount: string;
  closingCostAmount: string;
  totalCashRequired: string;
  //Short Term Rental
  totalMonthlyRevenue: string;
  totalMonthlyExpenses: string;
  netMonthlyCashFlow: string;
  netAnnualCashflow: string;
  COCReturnPercentage: number;
  averageNightRate: string;
  vacancyRate: number;
  breakEvenAverageNightRate: string;
  breakEvenVacancyRate: number;
}

export default function FinancialAnalysisSection({
  spreadSheetData,
  formatter,
  // Total Startup Costs
  downPaymentAmount,
  closingCostAmount,
  totalCashRequired,
  // Short Term Rental
  totalMonthlyRevenue,
  totalMonthlyExpenses,
  netMonthlyCashFlow,
  netAnnualCashflow,
  COCReturnPercentage,
  // break-even analysis
  averageNightRate,
  vacancyRate,
  breakEvenAverageNightRate,
  breakEvenVacancyRate,
}: FinancialAnalysisSectionProps) {
  const spacing = css`
    padding-top: 1rem;
  `;
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Financial Analysis</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={2}>
                  Total Startup Costs
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Purchase Price
                </TableCell>
                <TableCell align="right">
                  {formatter.format(spreadSheetData.purchasePrice)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Down Payment
                </TableCell>
                <TableCell align="right">{downPaymentAmount}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Closing Costs
                </TableCell>
                <TableCell align="right">{closingCostAmount}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Startup Costs
                </TableCell>
                <TableCell align="right">
                  {formatter.format(spreadSheetData.startupCosts)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Holding Costs (during setup)
                </TableCell>
                <TableCell align="right">
                  {formatter.format(spreadSheetData.holdingCosts)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Renovation Cost
                </TableCell>
                <TableCell align="right">
                  {formatter.format(spreadSheetData.renovationCost)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Total Cash Required
                </TableCell>
                <TableCell align="right">{totalCashRequired}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <TableContainer className={spacing}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={2}>
                  Short Term Rental
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Total Monthly Revenue
                </TableCell>
                <TableCell align="right">{totalMonthlyRevenue}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Total Monthly Expenses
                </TableCell>
                <TableCell align="right">{totalMonthlyExpenses}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Net Monthly Cash Flow
                </TableCell>
                <TableCell align="right">{netMonthlyCashFlow}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Net annual cash flow
                </TableCell>
                <TableCell align="right">{netAnnualCashflow}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Cash on cash return on investment
                </TableCell>
                <TableCell align="right">{COCReturnPercentage}%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Break Even Average Nightly Rate at vacancy rate of{" "}
                  {vacancyRate}%
                </TableCell>
                <TableCell align="right">{breakEvenAverageNightRate}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Break Even Vacancy Rate at average night rate of{" "}
                  {averageNightRate}
                </TableCell>
                <TableCell align="right">{breakEvenVacancyRate}%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
}
