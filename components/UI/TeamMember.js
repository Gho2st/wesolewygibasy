import classes from "./TeamMember.module.css";
import Image from "next/image";

export default function TeamMember(props) {
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Image src={props.src} width={230} height={230} alt="" />
      </div>
      <h4>{props.name}</h4>
      <h5>{props.role}</h5>
      <p>
        {props.quote}
      </p>
    </div>
  );
}
