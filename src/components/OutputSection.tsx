import React from "react";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { css } from "linaria";

export interface OutputSectionProps {
  initialInvestment: string;
  capRate: number;
  grossYield: number;
  cashFlow: string;
  cashOnCash: number;
  averageNightRate: string;
  vacancyRate: number;
  breakEvenAverageNightRate: string;
  breakEvenVacancyRate: number;
}

export default function OutputSection({
  initialInvestment,
  capRate,
  grossYield,
  cashFlow,
  cashOnCash,
  averageNightRate,
  vacancyRate,
  breakEvenAverageNightRate,
  breakEvenVacancyRate,
}: OutputSectionProps) {
  const tableCells = css`
    border-bottom: none;
  `;

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={2}>
              Outputs
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row" className={tableCells}>
              Initial Investment
            </TableCell>
            <TableCell align="right" className={tableCells}>
              {initialInvestment}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row" className={tableCells}>
              Cap Rate
            </TableCell>
            <TableCell align="right" className={tableCells}>
              {capRate}%
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row" className={tableCells}>
              Gross Yield
            </TableCell>
            <TableCell align="right" className={tableCells}>
              {grossYield}%
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row" className={tableCells}>
              Monthly Cash Flow
            </TableCell>
            <TableCell align="right" className={tableCells}>
              {cashFlow}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row" className={tableCells}>
              Cash On Cash
            </TableCell>
            <TableCell align="right" className={tableCells}>
              {cashOnCash}%
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row" className={tableCells}>
              Break Even Nightly Rate at vacancy rate of {vacancyRate}%
            </TableCell>
            <TableCell align="right" className={tableCells}>
              {breakEvenAverageNightRate}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row" className={tableCells}>
              Break Even Vacancy Rate at night rate of {averageNightRate}
            </TableCell>
            <TableCell align="right" className={tableCells}>
              {breakEvenVacancyRate}%
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
