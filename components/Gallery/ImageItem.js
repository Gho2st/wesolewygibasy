import classes from "./ImageItem.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "../UI/Button";

// Function to normalize text
function normalizeText(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remove diacritics
}

export default function ImagesItem(props) {
  const normalizedText = normalizeText(props.text);

  return (
    <div className={classes.innerContainer} onClick={props.onClick}>
      <Image
        src={props.src}
        width={100}
        height={100}
        layout="responsive"
        className={classes.image}
        alt=""
      />
      <p>{normalizedText}</p>
    </div>
  );
}
