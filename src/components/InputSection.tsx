import React from "react";
import { css } from "linaria";
import Table from "@mui/material/Table";
import Input from "@mui/material/Input";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { InputAdornment } from "@mui/material";
import { Shared } from "../types/Shared";

export interface InputSectionProps {
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
}

export default function InputSection({
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
}: InputSectionProps) {
  const input = css`
    height: 20px;
  `;

  const tableCells = css`
    border-bottom: none;
  `;

  return (
    <TableContainer className={tableCells}>
      <Table className={tableCells}>
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={2}>
              Inputs
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row" className={tableCells}>
              Purchase Price
            </TableCell>
            <TableCell align="right" className={tableCells}>
              <Input
                className={input}
                id="standard-basic"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                type="number"
                defaultValue={sharedData.purchasePrice}
                onChange={(e) => onUpdatePurchasePrice(+e.target.value)}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              ></Input>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row" className={tableCells}>
              Down Payment
            </TableCell>
            <TableCell align="right" className={tableCells}>
              <Input
                className={input}
                id="standard-basic"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                type="number"
                defaultValue={sharedData.downPaymentPercentage}
                onChange={(e) => onUpdateDownPaymentPercentage(+e.target.value)}
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              ></Input>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row" className={tableCells}>
              Closing Costs
            </TableCell>
            <TableCell align="right" className={tableCells}>
              <Input
                className={input}
                id="standard-basic"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                type="number"
                defaultValue={sharedData.closingCostsPercentage}
                onChange={(e) =>
                  onUpdateClosingCostsPercentage(+e.target.value)
                }
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              ></Input>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row" className={tableCells}>
              Startup Costs
            </TableCell>
            <TableCell align="right" className={tableCells}>
              <Input
                className={input}
                id="standard-basic"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                type="number"
                defaultValue={sharedData.startupCosts}
                onChange={(e) => onUpdateStartupCosts(+e.target.value)}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              ></Input>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row" className={tableCells}>
              Monthly Revenue
            </TableCell>
            <TableCell align="right" className={tableCells}>
              {monthlyRevenue}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row" className={tableCells}>
              Average Nightly Rate
            </TableCell>
            <TableCell align="right" className={tableCells}>
              <Input
                className={input}
                id="standard-basic"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                type="number"
                defaultValue={sharedData.averageNightlyRate}
                onChange={(e) => onUpdateAverageNightlyRate(+e.target.value)}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              ></Input>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row" className={tableCells}>
              Vacancy Rate Percentage
            </TableCell>
            <TableCell align="right" className={tableCells}>
              <Input
                className={input}
                id="standard-basic"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                type="number"
                defaultValue={sharedData.vacancyRatePercentage}
                onChange={(e) => onUpdateVacancyRatePercentage(+e.target.value)}
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              ></Input>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row" className={tableCells}>
              Monthly Operating Expenses
            </TableCell>
            <TableCell align="right" className={tableCells}>
              <Input
                className={input}
                id="standard-basic"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                type="number"
                defaultValue={sharedData.monthlyExpenses}
                onChange={(e) => onUpdateMonthlyExpenses(+e.target.value)}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              ></Input>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row" className={tableCells}>
              Monthly Mortgage
            </TableCell>
            <TableCell align="right" className={tableCells}>
              {monthlyMortgage}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row" className={tableCells}>
              Interest Rate Percentage
            </TableCell>
            <TableCell align="right" className={tableCells}>
              <Input
                className={input}
                id="standard-basic"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                type="number"
                defaultValue={sharedData.interestRatePercentage}
                onChange={(e) =>
                  onUpdateInterestRatePercentage(+e.target.value)
                }
                startAdornment={
                  <InputAdornment position="start">%</InputAdornment>
                }
              ></Input>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row" className={tableCells}>
              Mortgage Loan Term
            </TableCell>
            <TableCell align="right" className={tableCells}>
              <Input
                className={input}
                id="standard-basic"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                type="number"
                defaultValue={sharedData.mortgageLoanTerm}
                onChange={(e) => onUpdateMortgageLoanTerm(+e.target.value)}
                startAdornment={
                  <InputAdornment position="start">Yrs</InputAdornment>
                }
              ></Input>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
