"use client";
import classes from "./Form.module.css";
import { useState } from "react";
import Image from "next/image";
import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Form({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    childAge: "",
    text: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    startDate: getTodayDate(),
    selectedLocation: "",
  });
  const [isSending, setIsSending] = useState(false); // Flaga blokady
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);
  const [errorFields, setErrorFields] = useState([]);
  const recaptchaRef = useRef(null); // Ref dla reCAPTCHA

  // Funkcja pobierająca dzisiejszą datę w formacie YYYY-MM-DD
  function getTodayDate() {
    const today = new Date();
    return today.toISOString().split("T")[0];
  }

  // Funkcja walidacji pól formularza
  function validateForm(data) {
    const errors = [];
    if (!data.fullName.trim()) errors.push("fullName");
    if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      errors.push("email");
    if (!data.phoneNumber.trim() || !/^\d{9,15}$/.test(data.phoneNumber))
      errors.push("phoneNumber");
    if (!data.childAge.trim()) errors.push("childAge");
    if (!data.text.trim()) errors.push("text");
    if (!data.startDate.trim()) errors.push("startDate");
    if (!data.selectedLocation.trim()) errors.push("selectedLocation");

    setErrorFields(errors);
    return errors.length === 0;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendMail = async (e) => {
    e.preventDefault();
    if (isSending) return;

    if (!validateForm(formData)) {
      setFormError("Proszę uzupełnij wszystkie wymagane pola.");
      return;
    }

    setFormError(null);

    // Pobranie tokena reCAPTCHA
    const recaptchaToken = recaptchaRef.current.getValue();
    if (!recaptchaToken) {
      setFormError("Proszę zaznacz, że nie jesteś robotem przed wysłaniem.");
      return;
    }

    // console.log("Wysyłanie danych:", { ...formData, recaptchaToken });
    setIsSending(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken }), // Poprawne przekazywanie obu obiektów
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({
          childAge: "",
          text: "",
          fullName: "",
          email: "",
          phoneNumber: "",
          startDate: getTodayDate(),
          selectedLocation: "",
        });
        onFormSubmit();
        recaptchaRef.current.reset(); // Zresetuj CAPTCHA po wysłaniu
      } else {
        const errorData = await response.json();
        setFormError(`Error: ${errorData.message}`);
      }
    } catch (error) {
      setFormError("Niespodziewany błąd.");
    } finally {
      setIsSending(false);
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
            <div className={classes.inputContainer}>
              {[
                {
                  label: "Imię i nazwisko dziecka",
                  type: "text",
                  name: "fullName",
                  value: formData.fullName,
                },
                {
                  label: "Adres e-mail",
                  type: "email",
                  name: "email",
                  value: formData.email,
                },
                {
                  label: "Numer telefonu",
                  type: "text",
                  name: "phoneNumber",
                  value: formData.phoneNumber,
                },
                {
                  label: "Wiek dziecka",
                  type: "text",
                  name: "childAge",
                  value: formData.childAge,
                },
              ].map((field, index) => (
                <input
                  key={index}
                  type={field.type}
                  name={field.name}
                  placeholder={field.label}
                  value={field.value}
                  onChange={handleChange}
                  style={{
                    border: errorFields.includes(field.name)
                      ? "1px solid red"
                      : "0",
                  }}
                  className={classes.input}
                />
              ))}
            </div>

            <label htmlFor="startDate">Od kiedy chcesz zapisać dziecko?</label>
            <input
              type="date"
              className={classes.startDate}
              name="startDate"
              placeholder="Od kiedy chcesz zapisac dziecko?"
              value={formData.startDate}
              onChange={handleChange}
              style={{
                border: errorFields.includes("startDate")
                  ? "1px solid red"
                  : "0",
              }}
            />
            <label htmlFor="selectedLocation">Wybierz placówkę:</label>
            <p className={classes.info}>
              Wolne miejsca w placówce na Łokietka!
            </p>
            <select
              name="selectedLocation"
              value={formData.selectedLocation}
              className={classes.select}
              onChange={handleChange}
              style={{
                border: errorFields.includes("selectedLocation")
                  ? "1px solid red"
                  : "0",
              }}
            >
              <option value="">Wybierz placówkę</option>
              <option value="Klub Malucha, Kraków ul. Vetulaniego 8">
                Klub Malucha, Kraków ul. Vetulaniego 8
              </option>
              <option value="Niepubliczny żłobek, Kraków ul. Glogera 53/LU2">
                Żłobek, Kraków ul. Glogera 53/LU2
              </option>
              <option value="Żłobek, Kraków ul. Stańczyka 8/LU3">
                Żłobek, Kraków ul. Stańczyka 8/LU3
              </option>
              <option value="Żłobek, Kraków ul. Śliczna 36">
                Żłobek, Kraków ul. Śliczna 36
              </option>
              <option value="Żłobek, Kraków ul. Łokietka 23">
                Żłobek, Kraków ul. Łokietka 23
              </option>
            </select>

            {/* text area */}
            <label htmlFor="text">Dodatkowe pytania:</label>
            <textarea
              id="text"
              name="text"
              placeholder="Napisz swoją wiadomość"
              value={formData.text}
              onChange={handleChange}
              style={{
                border: errorFields.includes("text") ? "1px solid red" : "0",
              }}
            />
            <ReCAPTCHA
              className="mt-4"
              ref={recaptchaRef}
              sitekey="6LetqpUqAAAAABRwX_slcBybtlkC7S4X4QZZEYUo" // Wstaw swój Site Key
            />
            <div className={classes.buttonContainer}>
              <button
                type="submit"
                className={classes.button}
                disabled={isSending}
              >
                {isSending ? "Wysyłanie..." : "Wyślij wiadomość!"}
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
