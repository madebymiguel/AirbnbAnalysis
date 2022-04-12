import React from "react";
import Link from "next/link";
import { css } from "linaria";
import Button from "@mui/material/Button";

const header = css`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
const loginContainer = css`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
  margin-right: 16px;
  width: 100%;
  background-color: #e8eae3;
  margin: 0px;
  padding: 16px;
`;

const signButton = css`
  margin-left: 8px;
  box-shadow: 0px 10px 10px -10px #999;
`;

export default function Header() {
  return (
    <div className={header}>
      <div className={loginContainer}>
        <Link href={"/login"} passHref>
          <Button className={signButton} variant="contained">
            login
          </Button>
        </Link>
        <Link href={"/signup"} passHref>
          <Button className={signButton} variant="contained">
            sign up
          </Button>
        </Link>
      </div>
    </div>
  );
}
