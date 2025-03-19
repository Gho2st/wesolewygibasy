import classes from "./Age.module.css";
import Image from "next/image";
import Button from "../UI/Button";
import Button2 from "../UI/Button2";

export default function Age() {
  return (
    <div className={classes.wrapper}>
      <section className={classes.container}>
        <div className={classes.textContainer}>
          <h2>
            Przyjmujemy <span> maluchy </span> od 8 miesiąca do 3 roku życia!
          </h2>
          <p className={classes.text}>
            Szukasz miejsca, gdzie Twoje dziecko będzie czuło się bezpiecznie,
            szczęśliwie i komfortowo? W naszym żłobku dbamy o ciepłą atmosferę,
            troskliwą opiekę i rozwój dostosowany do wieku dziecka. <br></br>
            <br></br> Każdy dzień to nowe odkrycia: zabawy sensoryczne,
            muzyczne, ruchowe, a także pierwsze przyjaźnie i wspólne posiłki w
            przyjaznym otoczeniu. Zapewniamy przytulne miejsce do odpoczynku, a
            harmonijny plan dnia pomaga maluchom czuć się pewnie i spokojnie.
            <span className={classes.additional}>
              *W placówce na Vetulaniego od 1 roku życia
            </span>
          </p>
          <div className={classes.buttonContainer}>
            <Button text="Adaptacja" href="/adaptacja-w-zlobku" />
            <Button2 text="Plan Dnia" href="/plan-dnia-w-zlobku" />
          </div>
        </div>
        <div className={classes.imageContainer}>
          <Image
            src={"/monkeys/6.gif"}
            width={100}
            height={100}
            layout="responsive"
            className={classes.image}
            alt="Skacząca maskotka małpka Żłobka Wesołe Wygibasy w Krakowie"
          ></Image>
        </div>
      </section>
    </div>
  );
}
