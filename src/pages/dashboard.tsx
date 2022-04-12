import React from "react";
import { css } from "linaria";
import SavedSection from "../components/SavedSection";
import SpreadSheet from "../components/SpreadSheet";
import Header from "../components/Header";

const pageLayout = css`
  display: grid;
  grid-template-columns: 1fr auto auto 1fr;
  grid-template-areas:
    "header header header header"
    ". saved spreadsheet .";
  height: 100vh;
`;

const header = css`
  grid-area: header;
  width: 100%;
`;
const main = css`
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
        <SpreadSheet />
      </div>
    </div>
  );
}
