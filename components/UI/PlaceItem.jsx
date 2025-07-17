"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../UI/Button";

export default function PlaceItem(props) {
  return (
    <article>
      <motion.div
        className="w-full pb-6 bg-white min-h-full rounded-xl shadow-md"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="h-[350px] shadow-md flex">
          <Image
            src={props.image}
            alt={props.alt}
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-t-xl"
          />
        </div>

        <div className="px-4">
          <div className="text-center mt-6 mb-6 font-normal">
            <h3
              className="text-black font-extrabold mb-6 text-2xl"
              style={{ color: props.color }}
            >
              {props.title}
            </h3>
            <p className="text-xl">{props.location}</p>
            <p className="text-xl">{props.street}</p>
          </div>

          <div>
            <div className="flex justify-center items-center mb-6">
              <Button text="Sprawdź" fontSize="1rem" href={`/${props.link}`} />
            </div>

            <div
              className="text-center font-semibold text-[1rem]"
              style={{
                color: props.add !== "" ? "#08c6c3" : "transparent",
              }}
            >
              {props.add ? (
                props.add
                  .split("\n")
                  .map((line, index) => <p key={index}>{line}</p>)
              ) : (
                <p>Placeholder text</p>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </article>
  );
}
