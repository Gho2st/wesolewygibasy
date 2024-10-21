"use client";
import Link from "next/link";
import classes from "./Button2.module.css";
import { motion } from "framer-motion";

export default function Button2(props) {
  return (
    <motion.div
      className={classes.buttonContainer}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.9 }}
      style={{ background: props.background, color: props.color }}
    >
      <Link href={props.href}>{props.text}</Link>
    </motion.div>
  );
}
