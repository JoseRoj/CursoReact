import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifItem = ({ title, url }) => {
  console.log(title, url);
  return (
    <>
      <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
      </div>
    </>
  );
};