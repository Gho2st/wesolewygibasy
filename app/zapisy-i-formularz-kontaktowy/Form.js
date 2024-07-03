"use client";
import classes from "./Form.module.css";
import { useState } from "react";
import Image from "next/image";

export default function Form({ onFormSubmit }) {
  const [childAge, setChildAge] = useState("");
  const [text, setText] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [startDate, setStartDate] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);
  const [errorFields, setErrorFields] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");

  const sendMail = async (e) => {
    e.preventDefault();
    const fieldsToCheck = {
      fullName,
      email,
      phoneNumber,
      childAge,
      text,
      startDate,
      selectedLocation,
    };
    const emptyFields = Object.entries(fieldsToCheck)
      .filter(([key, value]) => !value)
      .map(([key]) => key);
    setErrorFields(emptyFields);

    if (emptyFields.length > 0) {
      setFormError("Proszę uzupełnij wszystkie wymagane pola.");
      return;
    }

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          childAge,
          text,
          fullName,
          email,
          phoneNumber,
          startDate,
          selectedLocation,
        }),
      });

      if (response.ok) {
        console.log("Form submitted succesfully");
        setFormSubmitted(true);
        setFormError(null);
        setEmail("");
        setFullName(fieldsToCheck.fullName);
        setText("");
        setChildAge("");
        setPhoneNumber("");
        setStartDate(null);
        setSelectedLocation("");
        onFormSubmit();
      } else {
        const errorData = await response.json();
        setFormError(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      setFormError("Unexpected error occurred.");
    }
  };

  return (
    <>
      {!formSubmitted ? (
        <div className={classes.containerLeft}>
          <h2>Zostaw Wiadomość</h2>
          <p>
            Wypełnij formularz ponizej a my wrócimy do Ciebie z odpowiedzią jak
            najszybciej to mozliwe!
          </p>
          {formError && <p style={{ color: "red" }}>{formError}</p>}
          <form onSubmit={sendMail} className={classes.form}>
            <div className={classes.item}>
              <input
                type="text"
                id="fullName"
                placeholder="Imię i nazwisko dziecka"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                name="fullName"
                style={{
                  border: errorFields.includes("fullName")
                    ? "1px solid red"
                    : "0",
                }}
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Adres e-mail"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                style={{
                  border: errorFields.includes("email") ? "1px solid red" : "0",
                }}
              />
            </div>
            <div className={classes.item}>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Numer telefonu"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                style={{
                  border: errorFields.includes("phoneNumber")
                    ? "1px solid red"
                    : "0",
                }}
              />
              <input
                type="text"
                id="childAge"
                name="childAge"
                placeholder="Wiek dziecka"
                value={childAge}
                onChange={(e) => {
                  setChildAge(e.target.value);
                }}
                style={{
                  border: errorFields.includes("childAge")
                    ? "1px solid red"
                    : "0",
                }}
              />
            </div>
            <label htmlFor="startDate">Od kiedy chcesz zapisać dziecko?</label>
            <input
              type="date"
              className={classes.startDate}
              id="startDate"
              name="startDate"
              placeholder="Od kiedy chcesz zapisac dziecko?"
              value={startDate}
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
              style={{
                border: errorFields.includes("startDate")
                  ? "1px solid red"
                  : "0",
              }}
            />
            <label htmlFor="selectedLocation">Wybierz placówkę:</label>
            <select
              id="selectedLocation"
              name="selectedLocation"
              value={selectedLocation}
              className={classes.select}
              onChange={(e) => setSelectedLocation(e.target.value)}
              style={{
                border: errorFields.includes("selectedLocation")
                  ? "1px solid red"
                  : "0",
              }}
            >
              <option value="">Wybierz placówkę</option>
              <option value="Klub Malucha, Kraków 31-226, ul. Vetulaniego 8">
                Klub Malucha, Kraków 31-226, ul. Vetulaniego 8
              </option>
              <option value="Niepubliczny żłobek, Kraków 31-222, ul. Glogera 53/LU2">
                Żłobek, Kraków 31-222, ul. Glogera 53/LU2
              </option>
              <option value="Żłobek, Kraków ul. Stańczyka 8/LU3">
                Żłobek, Kraków ul. Stańczyka 8/LU3
              </option>
              <option value="Żłobek, Kraków ul. Śliczna 36">
                Żłobek, Kraków ul. Śliczna 36
              </option>
            </select>
            <label htmlFor="text">Dodatkowe pytania:</label>
            <textarea
              id="text"
              name="text"
              placeholder="Napisz swoją wiadomość"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              style={{
                border: errorFields.includes("text") ? "1px solid red" : "0",
              }}
            />
            <div className={classes.buttonContainer}>
              <button type="submit" className={classes.button}>
                Wyślij wiadomość!
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <h3 className={classes.header3}>
            Dziękuję za przesłanie formularza!
          </h3>
          <p className={classes.text}>
            Oto butelka mleczka dla Ciebie w zamian za wiadomość - wirtualnie,
            ale z sercem! Postaramy się odpowiedzieć tak szybko, jak to możliwe,
            aby nadal było smaczne.
          </p>
          <div className={classes.thanks}>
            <Image
              src={"/others/dziekuje.png"}
              width={200}
              height={200}
              layout="responsive"
              alt="Podziekowanie za wiadomosc"
            />
          </div>
        </div>
      )}
    </>
  );
}
