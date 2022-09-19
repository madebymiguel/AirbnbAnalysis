import React from "react";
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
import { SpreadSheet } from "../types/SpreadSheet";
// change handler for appreciation
export interface ExitSectionProps {
  spreadSheetData: SpreadSheet;
  onUpdateYearlyAverageAppreciationPercentage: (
    year1AppreciationPercentage: number
  ) => void;

  initialMarketValue: string;
  finalSalesPrice: string;
  onUpdateSalesCostPercentage: (salesCostPercentage: number) => void;
  salesCostAmount: string;
  onUpdateremainingMortagageBalance: (
    remainingMortagageBalance: number
  ) => void;
  remainingBalance: string;
  totalInvestment: string;
  onUpdateYearsHeldonInvestment: (yearsHeldonInvestment: number) => void;
  homeSaleProfit: string;
  totalCashFlow: string;
  totalProfit: string;
  totalROI: number;
}

export default function ExitSection({
  spreadSheetData,
  onUpdateYearlyAverageAppreciationPercentage,
  initialMarketValue,
  finalSalesPrice,
  onUpdateSalesCostPercentage,
  salesCostAmount,
  onUpdateremainingMortagageBalance,
  remainingBalance,
  totalInvestment,
  onUpdateYearsHeldonInvestment,
  homeSaleProfit,
  totalCashFlow,
  totalProfit,
  totalROI,
}: ExitSectionProps) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Exit</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Exit Year
                </TableCell>
                <TableCell align="right">
                  <Input
                    id="standard-basic"
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    type="number"
                    defaultValue={spreadSheetData.yearsHeldonInvestment}
                    onChange={(e) =>
                      onUpdateYearsHeldonInvestment(+e.target.value)
                    }
                    startAdornment={
                      <InputAdornment position="start">Yrs</InputAdornment>
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Average Appreciation Percentage
                </TableCell>
                <TableCell align="right">
                  <Input
                    id="standard-basic"
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    type="number"
                    defaultValue={spreadSheetData.averageAppreciationPercentage}
                    onChange={(e) =>
                      onUpdateYearlyAverageAppreciationPercentage(
                        +e.target.value
                      )
                    }
                    startAdornment={
                      <InputAdornment position="start">%</InputAdornment>
                    }
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  {initialMarketValue}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Final Sales Price
                </TableCell>
                <TableCell align="right">{finalSalesPrice}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Sales Cost Percentage
                </TableCell>
                <TableCell align="right">
                  <Input
                    id="standard-basic"
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    type="number"
                    defaultValue={spreadSheetData.salesCostPercentage}
                    onChange={(e) =>
                      onUpdateSalesCostPercentage(+e.target.value)
                    }
                    startAdornment={
                      <InputAdornment position="start">%</InputAdornment>
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Sales Cost Amount
                </TableCell>
                <TableCell align="right">{salesCostAmount}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell component="th" scope="row">
                  Remaining Mortgage Balance
                </TableCell>
                <TableCell align="right">{remainingBalance}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Total Investment
                </TableCell>
                <TableCell align="right">{totalInvestment}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Home Sale Profit
                </TableCell>
                <TableCell align="right">{homeSaleProfit}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Total Cash Flow
                </TableCell>
                <TableCell align="right">{totalCashFlow}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Total Profit
                </TableCell>
                <TableCell align="right">{totalProfit}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Return on Investment
                </TableCell>
                <TableCell align="right">{totalROI}%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
}
