import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Funkcja walidacji pól formularza
function validateFields(fields) {
  return Object.entries(fields).every(
    ([key, value]) => value && value.trim() !== "",
  );
}

// Funkcja tworząca HTML wiadomości e-mail
function createEmailTemplate({
  childAge,
  text,
  fullName,
  email,
  phoneNumber,
  startDate,
  selectedLocation,
}) {
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
      <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
        <h2 style="color: #fa7070; text-align: center;">Wiadomość od rodzica ze strony <br> Wesołe Wygibasy</h2>
        
        <p style="font-size: 16px; line-height: 1.5; color: #333;">
          <strong>Dotyczy:</strong> ${selectedLocation}
        </p>
        
        <ul style="list-style-type: none; padding: 0; font-size: 16px; color: #333; line-height: 1.5;">
          <li><strong>Od kiedy:</strong> ${startDate}</li>
          <li><strong>Imię i Nazwisko Dziecka:</strong> ${fullName}</li>
          <li><strong>Wiek dziecka:</strong> ${childAge}</li>
          <li><strong>Wiadomość:</strong> ${text}</li>
          <li><strong>Email:</strong> <a href="mailto:${email}" style="color: #fa7070;">${email}</a></li>
          <li><strong>Numer Telefonu:</strong> <a href="tel:${phoneNumber}" style="color: #fa7070;">${phoneNumber}</a></li>
        </ul>
        
        <hr style="border: 1px solid #ddd; margin: 20px 0;">
        
        <p style="font-size: 14px; color: #888; text-align: center;">
          Ta wiadomość została wysłana z formularza kontaktowego na stronie Wesołe Wygibasy.
        </p>
      </div>
    </div>
  `;
}

// Funkcja weryfikująca token reCAPTCHA
async function verifyRecaptcha(token) {
  const secret = process.env.RECAPTCHA_SECRET_KEY; // Secret Key reCAPTCHA
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret,
        response: token,
      }),
    },
  );

  const data = await response.json();
  console.log("Odpowiedź z reCAPTCHA:", data); // Logowanie odpowiedzi z Google reCAPTCHA

  return data.success;
}

export async function POST(request) {
  try {
    const {
      childAge,
      text,
      fullName,
      email,
      phoneNumber,
      startDate,
      selectedLocation,
      recaptchaToken,
    } = await request.json();

    // Sprawdzenie, czy wszystkie pola są wypełnione
    const fields = {
      childAge,
      text,
      fullName,
      email,
      phoneNumber,
      startDate,
      selectedLocation,
    };
    if (!validateFields(fields)) {
      return NextResponse.json(
        { message: "Uzupełnij wymagane pola" },
        { status: 400 },
      );
    }

    // Weryfikacja reCAPTCHA
    const recaptchaValid = await verifyRecaptcha(recaptchaToken);
    console.log("Weryfikacja reCAPTCHA:", recaptchaValid); // Sprawdzamy wynik weryfikacji
    if (!recaptchaValid) {
      console.error("Nieudana weryfikacja reCAPTCHA"); // Dodaj logowanie
      return NextResponse.json(
        { message: "Weryfikacja reCAPTCHA nie powiodła się." },
        { status: 400 },
      );
    }

    // Konfiguracja transporteru SMTP
    const transporter = nodemailer.createTransport({
      service: process.env.SMTP_SERVICE || "gmail",
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: process.env.SMTP_PORT || 465,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW,
      },
    });

    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
     
      to: "wesolewygibasy@onet.pl",
      subject: "Email ze strony Wesołe Wygibasy od klienta",
      html: createEmailTemplate(fields),
    };

    // Wysyłka wiadomości e-mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Wiadomość wysłana prawidłowo" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error przy wysyłaniu wiadomości:", error);
    return NextResponse.json(
      { message: "Nieudana próba wysłania wiadomości", error: error.message },
      { status: 500 },
    );
  }
}
