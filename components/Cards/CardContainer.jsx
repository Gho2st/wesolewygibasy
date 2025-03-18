"use client";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import classes from "./CardContainer.module.css";
import { useEffect, useState, useRef } from "react";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.15 : 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: isMobile ? 0.7 : 1,
        ease: [0.25, 1, 0.5, 1],
      },
    },
    hover: {
      scale: 1.08,
      boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={classes.cardContainer}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className={classes.card}
          style={{ backgroundColor: colors[index % colors.length] }}
          variants={cardVariants}
        >
          <motion.h3
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
          >
            {card.title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 + 0.1, duration: 0.6 }}
          >
            {card.description}
          </motion.p>
          {card.link && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 + 0.2, duration: 0.6 }}
            >
              <Link href={card.link.href}>{card.link.text}</Link>
            </motion.div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CardContainer;
