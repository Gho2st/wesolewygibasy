"use client";
import classes from "./Button2.module.css";
import { motion } from "framer-motion";

export default function Button2(props) {
  return (
    <motion.div
      className={classes.buttonContainer}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.9 }}
    >
      <button
        style={{ fontSize: props.fontSize, background: props.background }}
      >
        {props.text}
      </button>
    </motion.div>
  );
}
