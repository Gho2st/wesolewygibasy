import React from "react";
import { FaStar } from "react-icons/fa";
import classes from "./Stars.module.css";

export default function Stars() {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <FaStar key={index} className={classes.star} />
  ));

  return <>{stars}</>;
}
