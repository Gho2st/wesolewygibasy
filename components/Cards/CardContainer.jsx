"use client";
import { motion } from "framer-motion";
import Link from "next/link";

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

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0.15 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="flex flex-col justify-between rounded-xl shadow-md p-6"
          style={{ backgroundColor: colors[index % colors.length] }}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h3
            className="text-xl xl:text-2xl font-semibold mb-4"
            variants={fadeIn}
          >
            {card.title}
          </motion.h3>
          <motion.p
            className="text-gray-700 text-lg font-light mb-8"
            variants={fadeIn}
          >
            {card.description}
          </motion.p>
          {card.link && (
            <motion.div variants={fadeIn}>
              <Link
                href={card.link.href}
                className="text-black text-xl font-semibold  hover:text-[#fa7070] transition-colors duration-200"
              >
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
