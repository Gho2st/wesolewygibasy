"use client";
import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Stars() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: index * 0.1,
            duration: 0.3,
            ease: "easeOut",
          }}
        >
          <FaStar className="text-[#FDCB56] w-5 h-5 lg:w-6 lg:h-6 drop-shadow-sm" />
        </motion.div>
      ))}
    </div>
  );
}
