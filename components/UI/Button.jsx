import classes from "./Button.module.css";

export default function Button(props) {
  return (
    <div className={classes.buttonContainer}>
      <button style={{ fontSize: props.fontSize, background: props.background }}>{props.text}</button>
    </div>
  );
}
