import React from "react";
import Link from "next/link";
import Image from "next/image";
import { css } from "linaria";
import Button from "@mui/material/Button";
import Header from "./Header";
import airbnbPlaceHolder from "../assets/Airbnb-Beachfront-Greece.webp";

export default function Homepage() {
  const container = css`
  display: flex;
  flex-flow: column nowrap
  text-align: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #e8eae3;
  `;

  const mainContainer = css`
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    background-color: white;
    width: 80vw;
    height: 80%;
    box-shadow: 0px 10px 10px -10px #999;
    overflow: hidden;
    margin-top: 3%;
  `;

  const paragraphContainer = css`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 700px;
    padding: 20px;
  `;

  const imageContainer = css`
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    align-content: center;
  `;

  const header = css`
    text-transform: uppercase;
    margin: 0;
  `;

  const content = css`
    margin: 8%;
  `;

  const button = css`
    width: 120px;
    height: 40px;
    padding: 0;
    min-width: 40px;
    font-weight: bold;
    color: black;
    background-color: #eba42d;

    &:hover {
      background-color: #ebc615;
    }
  `;

  return (
    <div className={container}>
      <Header />
      <div className={mainContainer}>
        <div className={paragraphContainer}>
          <h1 className={header}> airbnb data analysis</h1>
          <p className={content}>
            Welcome to Airbnb Data Analysis! <br /> We will assist you to
            utilize your investment in Airbnb!
          </p>
          <Link href={"/spreadsheet"} passHref>
            <Button className={button} variant="contained">
              Get Started
            </Button>
          </Link>
        </div>
        <div className={imageContainer}>
          <Image
            src={airbnbPlaceHolder}
            alt="airbnbPlaceHolder"
            // width={950}
            // height={750}
          />
        </div>
      </div>
    </div>
  );
}
