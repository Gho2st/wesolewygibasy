"use client";
import classes from "./Button.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Button(props) {
  return (
    <Link
      href={props.href}
      style={{ fontSize: props.fontSize, background: props.background }}
    >
      <motion.div
        className={classes.buttonContainer}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
      >
        {props.text}
      </motion.div>
    </Link>
  );
}
