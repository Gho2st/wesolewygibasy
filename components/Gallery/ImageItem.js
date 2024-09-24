import classes from "./ImageItem.module.css";
import Image from "next/image";

export default function ImagesItem(props) {
  return (
    <div className={classes.innerContainer} onClick={props.onClick}>
      <Image
        src={props.src}
        width={100}
        height={100}
        layout="responsive"
        className={classes.image}
        alt={props.alt}
      />
      <p>{props.text}</p>
    </div>
  );
}
