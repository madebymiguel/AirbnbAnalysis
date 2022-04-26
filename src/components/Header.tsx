import React, { useEffect, useState } from "react";
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
  async function hasTokenFunction(resData: any) {
    if (resData && resData.message) {
      return resData.message === "true";
    }
  }

  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    checkToken();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginStatus]);

  const checkToken = async () => {
    const res = await fetch("/api/accesstoken", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resData = await res.json();
    const hasToken = await hasTokenFunction(resData);
    if (hasToken) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  };

  return (
    <div className={header}>
      <div className={loginContainer}>
        {!loginStatus ? (
          <>
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
          </>
        ) : (
          <>
            <Link href={"/"} passHref>
              <Button
                className={signButton}
                variant="contained"
                onClick={() => {
                  setLoginStatus(false);
                }}
              >
                logout
              </Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
