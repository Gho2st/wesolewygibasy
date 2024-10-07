import classes from "./Header.module.css";

export default function Header(props) {
  return (
    <div>
      <h1 className={classes.header}>{props.text}</h1>
    </div>
  );
}
