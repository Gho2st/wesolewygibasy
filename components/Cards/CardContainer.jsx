"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import classes from "./CardContainer.module.css";
import { useState, useEffect } from "react";

const CardContainer = ({ cards }) => {
  const colors = [
    "#f8e1e9",
    "#e8f0fe",
    "#fff1d6",
    "#e0f7e9",
    "#e6e6ff",
    "#f5e8e4",
    "#fce8e8",
    "#e8f7f0",
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Efekt pojawiania się dla każdej karty
  const cardVariants = {
    hidden: { opacity: 0 }, // Bez animacji y
    visible: {
      opacity: 1,
      transition: {
        duration: isMobile ? 0.3 : 0.8,
        ease: "easeOut",
      },
    },
    hover: !isMobile && {
      scale: 1.05,
      boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  // Efekt dla elementów w karcie
  const fadeIn = {
    hidden: { opacity: 0 }, // Bez animacji y
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className={classes.cardContainer}>
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className={classes.card}
          style={{ backgroundColor: colors[index % colors.length] }}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          whileHover="hover"
        >
          <motion.h3 variants={fadeIn}>{card.title}</motion.h3>
          <motion.p variants={fadeIn}>{card.description}</motion.p>
          {card.link && (
            <motion.div variants={fadeIn}>
              <Link href={card.link.href} className={classes.link}>
                {card.link.text}
              </Link>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default CardContainer;
