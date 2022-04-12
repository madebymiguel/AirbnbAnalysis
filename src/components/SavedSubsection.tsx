import React from "react";
import { css } from "linaria";
import Image from "next/image";

export interface SavedSubsectionProps {
  name: string;
  image: StaticImageData;
  purchasePrice: string;
}

export default function SavedSubsection({
  name,
  image,
  purchasePrice,
}: SavedSubsectionProps) {
  const savedSubsectionContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
    border: solid 2px black;
    border-radius: 8px;
    padding: 8px;
    width: 100%;
    max-width: 20rem;
    position: relative;
  `;
  return (
    <div className={savedSubsectionContainer}>
      <div>{name}</div>
      <Image src={image} alt="house photo" layout="intrinsic" />
      <div>Purchase Price: {purchasePrice}</div>
    </div>
  );
}
