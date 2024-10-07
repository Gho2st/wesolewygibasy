"use client";
import classes from "./Button.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Button(props) {
  return (
    <motion.div
      className={classes.buttonContainer}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.9 }}
    >
      <Link
        href={props.href}
        style={{ fontSize: props.fontSize, background: props.background }}
      >
        {props.text}
      </Link>
    </motion.div>
  );
}
