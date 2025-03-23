"use client";
import classes from "./Contact.module.css";
import Image from "next/image";
import Form from "./Form";
import Header from "@/components/UI/Header";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { FaCar } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [isSent, setIsSent] = useState(false);

  const handleFormSubmit = () => {
    setIsSent(true);
  };

  return (
    <>
      <div className={classes.container}>
        <Header text="Rodzinny Żłobek w Krakowie - Zapisz Swoje Dziecko Już Dziś!" />
        <p>
          Czy szukasz bezpiecznego i przyjaznego środowiska, w którym Twoje
          dziecko może rozwijać się każdego dnia? Krakowski żłobek Wesołe
          Wygibasy to idealne miejsce, gdzie maluchy odkrywają świat z radością
          i ciekawością. Oferujemy wysokiej jakości opiekę i wsparcie w
          rozwijaniu umiejętności dzieci w wieku do 3 lat.
        </p>
        <p>
          <strong>Przyjmujemy zapisy przez cały rok!</strong>
        </p>
        <p>
          Nie czekaj – zapisz swoje dziecko już dziś i daj mu szansę na rozwój w
          najlepszym żłobku w Krakowie!
        </p>
      </div>
      <div className={classes.contactContainer}>
        <div className={classes.leftContainer}>
          <Form onFormSubmit={handleFormSubmit} />
        </div>
        <div className={classes.rightContainer}>
          <div className={classes.imageContainer}>
            <Image
              src={"/monkeys/1.gif"}
              height={300}
              width={300}
              layout="responsive"
              alt="Małpka wskazująca na formularz zapisów do Żłobka Wesołe Wygibasy"
            ></Image>
          </div>
          <div className={classes.infoContainer}>
            <div className={classes.item}>
              <Link href={"tel:+48697560022"}>
                <div className={classes.iconContainer}>
                  <FaPhone className={classes.phone} />
                </div>
                <div className={classes.linkContainer}>+48 697 560 022</div>
              </Link>
            </div>
            <div className={classes.item}>
              <Link href="mailto:wesolewygibasy@onet.pl">
                <div className={classes.iconContainer}>
                  <MdEmail />
                </div>
                <div className={classes.linkContainer}>
                  wesolewygibasy@onet.pl
                </div>
              </Link>
            </div>
            <div className={classes.item}>
              <Link href="https://www.facebook.com/wesolewygibasy">
                <div className={classes.iconContainer}>
                  <FaFacebook className={classes.facebook} />
                </div>
                <div className={classes.linkContainer}>
                  Napisz na Facebooku!
                </div>
              </Link>
            </div>
            <div className={classes.item}>
              <div className={classes.iconContainer}>
                <FaCar />
              </div>
              <div className={classes.linkContainer}>Przyjedź & Zapytaj</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
