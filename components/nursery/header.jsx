import classes from "./header.module.css";
export default function NurseryHeader(props) {
  return (
    <div className={classes.header}>
      <p className={classes.upText}>Co oferujemy?</p>
      <h2>Odkryj nasz program</h2>
      <p className={classes.description}>{props.text}</p>
    </div>
  );
}
