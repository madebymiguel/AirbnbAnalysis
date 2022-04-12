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
import { Exit } from "../types/Exit";
// change handler for appreciation
export interface ExitSectionProps {
  exitData: Exit;
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
  exitData,
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
                <TableCell align="right"></TableCell>
                <TableCell align="right">
                  Average Appreciation Percentage
                </TableCell>
                <TableCell align="right">Market Value</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="right">Exit Year</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">
                  <Input
                    id="standard-basic"
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    type="number"
                    defaultValue={exitData.yearsHeldonInvestment}
                    onChange={(e) =>
                      onUpdateYearsHeldonInvestment(+e.target.value)
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="right">First Year</TableCell>
                <TableCell align="right">
                  <Input
                    id="standard-basic"
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    type="number"
                    defaultValue={exitData.averageAppreciationPercentage}
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
                <TableCell align="right">{initialMarketValue}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="right">Final Sales Price</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">{finalSalesPrice}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="right">Sales Cost Percentage</TableCell>
                <TableCell align="right">
                  <Input
                    id="standard-basic"
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    type="number"
                    defaultValue={exitData.salesCostPercentage}
                    onChange={(e) =>
                      onUpdateSalesCostPercentage(+e.target.value)
                    }
                    startAdornment={
                      <InputAdornment position="start">%</InputAdornment>
                    }
                  />
                </TableCell>
                <TableCell align="right">{salesCostAmount}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="right">Remaining Mortgage Balance</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">{remainingBalance}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="right">Total Investment</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">{totalInvestment}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="right">Home Sale Profit</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">{homeSaleProfit}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="right">Total Cash Flow</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">{totalCashFlow}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="right">Total Profit</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">{totalProfit}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="right">Total Return on Investment</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">{totalROI}%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
}
