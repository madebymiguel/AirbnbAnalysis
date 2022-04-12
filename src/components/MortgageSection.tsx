import React from "react";
import { css } from "linaria";
import Table from "@mui/material/Table";
import Input from "@mui/material/Input";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  InputAdornment,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Exit } from "../types/Exit";

export interface MortgageSectionProps {
  exitData: Exit;
  purchasePrice: string;
  downPaymentPercentage: number;
  onUpdateLengthOfLoan: (lengthOfLoan: number) => void;
  onUpdateInterestRate: (interestRate: number) => void;
  initialPrincipal: string;
  monthlyPayments: string;
}

export function MortgageSection({
  exitData,
  purchasePrice,
  downPaymentPercentage,
  onUpdateLengthOfLoan,
  onUpdateInterestRate,
  initialPrincipal,
  monthlyPayments,
}: MortgageSectionProps) {
  const input = css`
    height: 19px;
  `;

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Mortgage</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Purchase Price
                </TableCell>
                <TableCell align="right">{purchasePrice}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Down Payment Percentage
                </TableCell>
                <TableCell align="right">{downPaymentPercentage}%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Loan Term
                </TableCell>
                <TableCell align="right">
                  <Input
                    className={input}
                    id="standard-basic"
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    type="number"
                    onChange={(e) => onUpdateLengthOfLoan(+e.target.value)}
                    startAdornment={
                      <InputAdornment position="start"> Yrs</InputAdornment>
                    }
                  ></Input>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Interest Rate
                </TableCell>
                <TableCell align="right">
                  <Input
                    className={input}
                    id="standard-basic"
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    type="number"
                    onChange={(e) => onUpdateInterestRate(+e.target.value)}
                    startAdornment={
                      <InputAdornment position="start">%</InputAdornment>
                    }
                  ></Input>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Initial Principal
                </TableCell>
                <TableCell align="right">{initialPrincipal}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Monthly Loan Payments
                </TableCell>
                <TableCell align="right">{monthlyPayments}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
}
