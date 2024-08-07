"use client";
import classes from "./page.module.css";
import Image from "next/image";
import Form from "./Form";
import H1 from "@/components/UI/H1";
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
        <H1 text="Zapisz Swoje Dziecko!"></H1>
        <p>
          Czy szukasz bezpiecznego i kochającego środowiska, w którym Twoje
          dziecko może się rozwijać każdego dnia? Wesołe Wygibasy to nie tylko
          miejsce opieki, ale takze miejsce w którym maluchy odkrywają świat w
          sposób pełen ciekawości i radości.
        </p>
      </div>
      <div className={classes.contactContainer}>
        <div className={classes.animals}>
          <div className={classes.animalsImgContainer}>
            <Image
              src={"/monkeys/1.gif"}
              height={100}
              width={100}
              layout="responsive"
              alt=""
            ></Image>
          </div>
          <div className={classes.info}>
            <div className={classes.item}>
              <Link href={"tel:+48697560022"}>
                <FaPhone />
                697 560 022
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
        <div className={classes.text}>
          <Form onFormSubmit={handleFormSubmit} />
        </div>
      </div>
    </>
  );
}
