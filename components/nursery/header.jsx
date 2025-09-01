import React from "react";

export default function NurseryHeader(props) {
  return (
    <div className="text-center mt-12 mb-16 md:mb-10">
      <p className="text-teal-500 uppercase mb-4 font-medium text-lg 2xl:text-xl">
        Co oferujemy?
      </p>
      <h2 className="text-4xl md:text-3xl 2xl:text-5xl font-medium">Odkryj nasz program</h2>
      <p className="text-center text-lg 2xl:text-xl sm:w-4/5 2xl:w-3/5 mx-auto mt-8 md:w-full">
        {props.text}
      </p>
    </div>
  );
}
