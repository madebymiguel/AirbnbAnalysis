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
import { MonthlyRevenueAndExpenses } from "../types/MonthlyRevenueAndExpenses";

export interface MonthlyRevenueAndExpensesProps {
  sharedData: Shared;
  monthlyRevenueAndExpensesData: MonthlyRevenueAndExpenses;
  onUpdateAverageNightlyRate: (averageNightlyRate: number) => void;
  monthlyMortgage: string;
  onUpdateVacancyRatePercentage: (vacancyRatePercentage: number) => void;
  grossMonthlyRent: string;
  onUpdateHOA: (hoa: number) => void;
  onUpdatePropertyTaxes: (propertyTaxes: number) => void;
  onUpdateFireInsurance: (fireInsurance: number) => void;
  onUpdateFloodInsurance: (floodInsurance: number) => void;
  onUpdatePMI: (pmi: number) => void;
  onUpdateRepairsReservePerMonthAmount: (
    repairsReservePerMonthAmount: number
  ) => void;
  onUpdateCapitalExpenditure: (capitalExpenditure: number) => void;
  onUpdateWaterSewer: (waterSewer: number) => void;
  onUpdateGarbage: (garbage: number) => void;
  onUpdateGas: (gas: number) => void;
  onUpdateElectricty: (electricty: number) => void;
  onUpdateSnowRemoval: (snowRemoval: number) => void;
  onUpdateLawnCare: (lawnCare: number) => void;
  onUpdatePropertyManagementPercentage: (
    propertyManagementPercentage: number
  ) => void;
  propertyManagementAmount: string;
  onUpdateOther: (other: number) => void;
  monthlyExpenses: string;
  monthlyCashflow: string;
}

export default function MonthlyRevenueAndExpensesSection({
  sharedData,
  monthlyRevenueAndExpensesData,
  onUpdateAverageNightlyRate,
  monthlyMortgage,
  onUpdateVacancyRatePercentage,
  grossMonthlyRent,
  onUpdateHOA,
  onUpdatePropertyTaxes,
  onUpdateFireInsurance,
  onUpdateFloodInsurance,
  onUpdatePMI,
  onUpdateRepairsReservePerMonthAmount,
  onUpdateCapitalExpenditure,
  onUpdateWaterSewer,
  onUpdateGarbage,
  onUpdateGas,
  onUpdateElectricty,
  onUpdateSnowRemoval,
  onUpdateLawnCare,
  onUpdatePropertyManagementPercentage,
  propertyManagementAmount,
  onUpdateOther,
  monthlyExpenses,
  monthlyCashflow,
}: MonthlyRevenueAndExpensesProps) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Monthly Revenue + Expenses</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Average Nightly Rate
                </TableCell>
                <TableCell align="right">
                  <Input
                    id="standard-basic"
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    type="number"
                    defaultValue={sharedData.averageNightlyRate}
                    onChange={(e) =>
                      onUpdateAverageNightlyRate(+e.target.value)
                    }
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Monthly Mortgage (Principal + Interest)
                </TableCell>
                <TableCell align="right">{monthlyMortgage}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Vacancy Rate Percentage
                </TableCell>
                <TableCell align="right">
                  <Input
                    id="standard-basic"
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    type="number"
                    defaultValue={sharedData.vacancyRatePercentage}
                    onChange={(e) =>
                      onUpdateVacancyRatePercentage(+e.target.value)
                    }
                    startAdornment={
                      <InputAdornment position="start">%</InputAdornment>
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Gross monthly Rent
                </TableCell>
                <TableCell align="right">{grossMonthlyRent}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  HOA
                </TableCell>
                <TableCell align="right">
                  <Input
                    id="standard-basic"
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    type="number"
                    defaultValue={monthlyRevenueAndExpensesData.hoa}
                    onChange={(e) => onUpdateHOA(+e.target.value)}
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Property Taxes
                </TableCell>
                <TableCell align="right">
                  <Input
                    id="standard-basic"
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    type="number"
                    defaultValue={monthlyRevenueAndExpensesData.propertyTaxes}
                    onChange={(e) => onUpdatePropertyTaxes(+e.target.value)}
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Fire Insurance
                </TableCell>
                <TableCell align="right">
                  <Input
                    id="standard-basic"
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    type="number"
                    defaultValue={monthlyRevenueAndExpensesData.fireInsurance}
                    onChange={(e) => onUpdateFireInsurance(+e.target.value)}
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Flood insurance
                </TableCell>
                <TableCell align="right">
                  <Input
                    id="standard-basic"
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    type="number"
                    defaultValue={monthlyRevenueAndExpensesData.floodInsurance}
                    onChange={(e) => onUpdateFloodInsurance(+e.target.value)}
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  PMI (if applicable)
                </TableCell>
                <TableCell align="right">
                  <Input
                    id="standard-basic"
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    type="number"
                    defaultValue={monthlyRevenueAndExpensesData.pmi}
                    onChange={(e) => onUpdatePMI(+e.target.value)}
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Repairs Reserve per Month Amount
                </TableCell>
                <TableCell align="right">
                  <Input
                    id="standard-basic"
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    type="number"
                    defaultValue={
                      monthlyRevenueAndExpensesData.repairsReservePerMonthAmount
                    }
                    onChange={(e) =>
                      onUpdateRepairsReservePerMonthAmount(+e.target.value)
                    }
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Capital Expenditure
                </TableCell>
                <TableCell align="right">
                  <Input
                    id="standard-basic"
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    type="number"
                    defaultValue={
                      monthlyRevenueAndExpensesData.capitalExpenditure
                    }
                    onChange={(e) =>
                      onUpdateCapitalExpenditure(+e.target.value)
                    }
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Water, Sewer
                </TableCell>
                <TableCell align="right">
                  <Input
                    id="standard-basic"
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    type="number"
                    defaultValue={monthlyRevenueAndExpensesData.waterSewer}
                    onChange={(e) => onUpdateWaterSewer(+e.target.value)}
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Garbage
                </TableCell>
                <TableCell align="right">
                  <Input
                    id="standard-basic"
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    type="number"
                    defaultValue={monthlyRevenueAndExpensesData.garbage}
                    onChange={(e) => onUpdateGarbage(+e.target.value)}
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Gas
                </TableCell>
                <TableCell align="right">
                  <Input
                    id="standard-basic"
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    type="number"
                    defaultValue={monthlyRevenueAndExpensesData.gas}
                    onChange={(e) => onUpdateGas(+e.target.value)}
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Electricty
                </TableCell>
                <TableCell align="right">
                  <Input
                    id="standard-basic"
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    type="number"
                    defaultValue={monthlyRevenueAndExpensesData.electricty}
                    onChange={(e) => onUpdateElectricty(+e.target.value)}
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Snow Removal
                </TableCell>
                <TableCell align="right">
                  <Input
                    id="standard-basic"
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    type="number"
                    defaultValue={monthlyRevenueAndExpensesData.snowRemoval}
                    onChange={(e) => onUpdateSnowRemoval(+e.target.value)}
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Lawn Care
                </TableCell>
                <TableCell align="right">
                  <Input
                    id="standard-basic"
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    type="number"
                    defaultValue={monthlyRevenueAndExpensesData.lawnCare}
                    onChange={(e) => onUpdateLawnCare(+e.target.value)}
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Property Management Percentage
                </TableCell>
                <TableCell align="right">
                  <Input
                    id="standard-basic"
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    type="number"
                    defaultValue={
                      monthlyRevenueAndExpensesData.propertyManagementPercentage
                    }
                    onChange={(e) =>
                      onUpdatePropertyManagementPercentage(+e.target.value)
                    }
                    startAdornment={
                      <InputAdornment position="start">%</InputAdornment>
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Property Management Amount
                </TableCell>
                <TableCell align="right">{propertyManagementAmount}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Other
                </TableCell>
                <TableCell align="right">
                  <Input
                    id="standard-basic"
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    type="number"
                    defaultValue={monthlyRevenueAndExpensesData.other}
                    onChange={(e) => onUpdateOther(+e.target.value)}
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Monthly Expenses
                </TableCell>
                <TableCell align="right">{monthlyExpenses}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Monthly Cashflow
                </TableCell>
                <TableCell align="right">{monthlyCashflow}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
}
