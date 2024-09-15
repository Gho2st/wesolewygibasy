import classes from "./PlaceItem.module.css";
import Image from "next/image";
import Button from "../UI/Button";
import Link from "next/link";

export default function PlaceItem(props) {
  return (
    <div className={classes.itemContainer}>
      <div className={classes.imageContainer}>
        <Image
          src={props.image}
          alt={props.alt}
          width={100}
          height={100}
          layout="responsive"
        ></Image>
      </div>
      <div className={classes.downContainer}>
        <div className={classes.text}>
          <h3 style={{ color: props.color }}>{props.title} </h3>
          <p>{props.location}</p>
          <p>{props.street}</p>
          <h4>{props.moreInfo}</h4>
        </div>
        <div className={classes.innerContainer}>
          <div className={classes.buttonContainer}>
            <Link href={"/" + props.link}>
              <Button text="Sprawdź" fontSize="1rem" />
            </Link>
          </div>
          <div
            className={classes.dotationText}
            style={{ color: props.add !== "" ? "#08c6c3" : "transparent" }}
          >
            <p>{props.add || "Placeholder text"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
