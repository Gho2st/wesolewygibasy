"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";

const CardContainer = ({ cards }) => {
  const accentColors = [
    "#4a71ff",
    "#FDCB56",
    "#04C9C8",
    "#7C9BE6",
    "#FC7E05",
    "#fa7070",
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      y: -8,
      boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.08)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.98 },
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8  max-w-7xl mx-auto">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          whileTap="tap"
          viewport={{ once: true, amount: 0.1 }}
          className="group relative flex flex-col justify-between rounded-2xl lg:rounded-3xl bg-white border border-slate-100 p-6 lg:p-10 overflow-hidden shadow-sm hover:border-slate-200 transition-colors"
        >
          <div
            className="absolute top-0 left-0 w-full h-1.5 lg:h-2"
            style={{
              backgroundColor: accentColors[index % accentColors.length],
            }}
          />

          <div className="flex flex-col">
            <h3 className="text-xl  2xl:text-2xl font-bold text-slate-900 mb-3 lg:mb-4 leading-tight">
              {card.title}
            </h3>
            <p className="text-slate-600 text-base lg:text-lg font-normal leading-relaxed mb-6 lg:mb-8">
              {card.description}
            </p>
          </div>

          {card.link && (
            <div className="mt-auto">
              <Link
                href={card.link.href}
                className="inline-flex items-center gap-2 text-[#4a71ff] text-lg lg:text-xl font-bold hover:text-[#fa7070] transition-colors duration-300"
              >
                <span>{card.link.text}</span>
                <motion.span
                  className="flex shrink-0 items-center justify-center"
                  initial={false}
                  animate={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  <HiArrowLongRight className="w-6 h-6 lg:w-8 lg:h-8" />
                </motion.span>
              </Link>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default CardContainer;
