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
import { Shared } from "../types/Shared";
import { StartupCost } from "../types/StartupCost";

export interface StartupCostSectionProps {
  sharedData: Shared;
  startupCostData: StartupCost;
  onUpdatePurchasePrice: (purchasePrice: number) => void;
  onUpdateDownPaymentPercentage: (downPaymentPercentage: number) => void;
  downPaymentAmount: string;
  onUpdateClosingCostsPercentage: (closingCosts: number) => void;
  onUpdateHoldingCosts: (holdingCosts: number) => void;
  onUpdateStartupCosts: (startupCosts: number) => void;
  onUpdateRenovationCost: (renovationCost: number) => void;
  initialInvestment: string;
}

export default function StartupCostSection({
  sharedData,
  startupCostData,
  onUpdatePurchasePrice,
  onUpdateDownPaymentPercentage,
  downPaymentAmount,
  onUpdateClosingCostsPercentage,
  onUpdateHoldingCosts,
  onUpdateStartupCosts,
  onUpdateRenovationCost,
  initialInvestment,
}: StartupCostSectionProps) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Acquisition + Startup Costs</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Purchase Price
                  </TableCell>
                  <TableCell align="right">
                    <Input
                      id="standard-basic"
                      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                      type="number"
                      defaultValue={sharedData.purchasePrice}
                      onChange={(e) => onUpdatePurchasePrice(+e.target.value)}
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Down Payment Percentage
                  </TableCell>
                  <TableCell align="right">
                    <Input
                      id="standard-basic"
                      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                      type="number"
                      defaultValue={sharedData.downPaymentPercentage}
                      onChange={(e) =>
                        onUpdateDownPaymentPercentage(+e.target.value)
                      }
                      startAdornment={
                        <InputAdornment position="start">%</InputAdornment>
                      }
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Down Payment Amount
                  </TableCell>
                  <TableCell align="right">{downPaymentAmount}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Closing Costs
                  </TableCell>
                  <TableCell align="right">
                    <Input
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
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Holding Costs
                  </TableCell>
                  <TableCell align="right">
                    <Input
                      id="standard-basic"
                      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                      type="number"
                      defaultValue={startupCostData.holdingCosts}
                      onChange={(e) => onUpdateHoldingCosts(+e.target.value)}
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Startup Costs
                  </TableCell>
                  <TableCell align="right">
                    <Input
                      id="standard-basic"
                      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                      type="number"
                      defaultValue={sharedData.startupCosts}
                      onChange={(e) => onUpdateStartupCosts(+e.target.value)}
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Renovation Cost
                  </TableCell>
                  <TableCell align="right">
                    <Input
                      id="standard-basic"
                      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                      type="number"
                      defaultValue={startupCostData.renovationCost}
                      onChange={(e) => onUpdateRenovationCost(+e.target.value)}
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Total Startup Cost
                  </TableCell>
                  <TableCell align="right">{initialInvestment}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
