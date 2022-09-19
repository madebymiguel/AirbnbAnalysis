import React from "react";
import { css } from "linaria";
import SavedSection from "../components/SavedSection";
import SpreadSheets from "../components/SpreadSheets";
import Header from "../components/Header";

const pageLayout = css`
  display: grid;
  grid-template-columns: 1fr auto auto 1fr;
  grid-template-areas:
    "header header header header"
    ". saved spreadsheet .";
`;

const header = css`
  grid-area: header;
  width: 100%;
`;

const saved = css`
  grid-area: saved;
  width: 100%;
  border-right: 2px solid black;
`;

const spreadsheet = css`
  grid-area: spreadsheet;
  width: 100%;
  padding-left: 24px;
`;

export default function Dashboard() {
  return (
    <div className={pageLayout}>
      <div className={header}>
        <Header />
      </div>
      <div className={saved}>
        <SavedSection />
      </div>
      <div className={spreadsheet}>
        <SpreadSheets />
      </div>
    </div>
  );
}
