import React from "react";
import { css } from "linaria";
import SavedSubsection from "./SavedSubsection";
import testHouse1 from "../assets/testHouse1.png";
import testHouse2 from "../assets/testHouse2.png";

export interface SimpleAddress {
  address: string;
  image: StaticImageData;
  purchasePrice: string;
}
export default function SavedSection() {
  const address1 = "111 2nd St NE";
  const address2 = "222 4th Ave SE";

  const city1 = "Bellevue";
  const city2 = "Seattle";

  const state1 = "WA";
  const state2 = "WA";

  const zip1 = "98004";
  const zip2 = "98105";

  const combined1 = address1 + ", " + city1 + ", " + state1 + " " + zip1;
  const combined2 = address2 + ", " + city2 + ", " + state2 + " " + zip2;
  const purchasePrice1 = "$350,000";
  const purchasePrice2 = "$500,000";

  const house1: SimpleAddress = {
    address: combined1,
    image: testHouse1,
    purchasePrice: purchasePrice1,
  };
  const house2: SimpleAddress = {
    address: combined2,
    image: testHouse2,
    purchasePrice: purchasePrice2,
  };

  const houses: SimpleAddress[] = [house1, house2];

  const savedContainer = css`
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100%;
    margin-left: 32px;
    margin-right: 32px;
  `;

  return (
    <div className={savedContainer}>
      <h1>Saved Houses</h1>
      {houses.map((house) => {
        return (
          <SavedSubsection
            key={house.address}
            name={house.address}
            image={house.image}
            purchasePrice={house.purchasePrice}
          />
        );
      })}
    </div>
  );
}
