"use client";
import { useState, useRef } from "react";
import Image from "next/image";
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

  const [isSending, setIsSending] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);
  const [errorFields, setErrorFields] = useState([]);
  const recaptchaRef = useRef(null);

  function getTodayDate() {
    const today = new Date();
    return today.toISOString().split("T")[0];
  }

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

    const recaptchaToken = recaptchaRef.current.getValue();
    if (!recaptchaToken) {
      setFormError("Proszę zaznacz, że nie jesteś robotem przed wysłaniem.");
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken }),
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
        recaptchaRef.current.reset();
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
        <div className="flex flex-col pt-4">
          <h2 className="text-2xl font-bold mb-2">Zostaw Wiadomość</h2>
          <p className="mb-4 text-xl">
            Wypełnij formularz poniżej, a my wrócimy do Ciebie z odpowiedzią jak
            najszybciej to możliwe!
          </p>
          {formError && <p className="text-red-600 mb-4">{formError}</p>}

          <form onSubmit={sendMail} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
                  className={`w-full p-4 text-base rounded-md shadow-sm ${
                    errorFields.includes(field.name)
                      ? "border border-red-500"
                      : "border border-gray-200"
                  }`}
                />
              ))}
            </div>

            <div>
              <label htmlFor="startDate" className="block text-black mt-2">
                Od kiedy chcesz zapisać dziecko?
              </label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className={`w-full p-4 text-base rounded-md shadow-sm mt-2 ${
                  errorFields.includes("startDate")
                    ? "border border-red-500"
                    : "border border-gray-200"
                }`}
              />
            </div>

            <div>
              <label htmlFor="selectedLocation" className="block text-black">
                Wybierz placówkę:
              </label>
              <p className="text-green-600 font-semibold mb-2">
                Wolne miejsca w placówce na Łokietka!
              </p>
              <select
                name="selectedLocation"
                value={formData.selectedLocation}
                onChange={handleChange}
                className={`w-full p-4 text-base rounded-md shadow-sm ${
                  errorFields.includes("selectedLocation")
                    ? "border border-red-500"
                    : "border border-gray-200"
                }`}
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
            </div>

            <div>
              <label htmlFor="text" className="block text-black">
                Dodatkowe pytania:
              </label>
              <textarea
                id="text"
                name="text"
                placeholder="Napisz swoją wiadomość"
                value={formData.text}
                onChange={handleChange}
                className={`w-full h-[125px] p-4 text-base rounded-md shadow-sm mt-2 resize-none ${
                  errorFields.includes("text")
                    ? "border border-red-500"
                    : "border border-gray-200"
                }`}
              />
            </div>

            <ReCAPTCHA
              className="mt-4"
              ref={recaptchaRef}
              sitekey="6LetqpUqAAAAABRwX_slcBybtlkC7S4X4QZZEYUo"
            />

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={isSending}
                className="px-6 py-3 rounded-full bg-[#ff5353] text-white font-semibold text-xl shadow-md transition-transform hover:scale-105 disabled:opacity-50"
              >
                {isSending ? "Wysyłanie..." : "Wyślij wiadomość!"}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="text-center">
          <h3 className="text-2xl font-bold mt-6 text-black">
            Dziękuję za przesłanie formularza!
          </h3>
          <p className="text-black mt-4 max-w-xl mx-auto">
            Oto butelka mleczka dla Ciebie w zamian za wiadomość – wirtualnie,
            ale z sercem! Postaramy się odpowiedzieć tak szybko, jak to możliwe,
            aby nadal było smaczne.
          </p>
          <div className="w-[70%] mx-auto mt-8">
            <Image
              src="/others/dziekuje.png"
              width={200}
              height={200}
              layout="responsive"
              alt="Podziękowanie za wiadomość"
            />
          </div>
        </div>
      )}
    </>
  );
}
