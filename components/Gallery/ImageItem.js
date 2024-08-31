import classes from "./ImageItem.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "../UI/Button";

export default function ImagesItem(props) {
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
      <h5>{props.text}</h5>
    </div>
  );
}
