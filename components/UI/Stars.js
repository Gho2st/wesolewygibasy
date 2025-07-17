import React from "react";
import { FaStar } from "react-icons/fa";

export default function Stars() {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <FaStar
      key={index}
      className="text-yellow-400 w-6 h-6 mb-2 animate-pulse transition-all"
    />
  ));

  return <>{stars}</>;
}
