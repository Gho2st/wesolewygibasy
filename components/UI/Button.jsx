"use client";
import classes from "./Button.module.css";
import { motion } from "framer-motion";

export default function Button(props) {
  return (
    <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.9 }}>
      <div className={classes.buttonContainer}>
        <button
          style={{ fontSize: props.fontSize, background: props.background }}
        >
          {props.text}
        </button>
      </div>
    </motion.div>
  );
}
