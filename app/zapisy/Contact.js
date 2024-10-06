"use client";
import classes from "./page.module.css";
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
      </div>
      <div className={classes.contactContainer}>
        <div className={classes.text}>
          <Form onFormSubmit={handleFormSubmit} />
        </div>
        <div className={classes.animals}>
          <div className={classes.animalsImgContainer}>
            <Image
              src={"/monkeys/1.gif"}
              height={100}
              width={100}
              layout="responsive"
              alt="Małpka wskazująca na formularz zapisów do Żłobka Wesołe Wygibasy"
            ></Image>
          </div>
          <div className={classes.info}>
            <div className={classes.item}>
              <Link href={"tel:+48697560022"}>
                <FaPhone className={classes.phone} />
                +48 697 560 022
              </Link>
            </div>
            <div className={classes.item}>
              <MdEmail />
              <p>wesolewygibasy@onet.pl</p>
            </div>
            <Link href="https://www.facebook.com/wesolewygibasy">
              <div className={classes.itemFacebook}>
                <FaFacebook className={classes.facebook} />
                <p>Napisz na Facebooku!</p>
              </div>
            </Link>
            <div className={classes.item}>
              <FaCar />
              <p>Przyjedź & Zapytaj</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
