"use client";
import { motion } from "framer-motion";
export default function Animation({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 1 },
      }}
    >
      {children}
    </motion.div>
  );
}
