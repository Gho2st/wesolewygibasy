import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { childAge, text, fullName, email, phoneNumber, startDate, selectedLocation } = await request.json();

    if (!childAge || !email || !text || !phoneNumber || !startDate || !selectedLocation || !fullName ) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW,
      },
    });

    const mailOption = {
      from: "biosite.praca@gmail.com",
      to: "wesolewygibasy@onet.pl",
      subject: "Email ze strony Wesołe Wygibasy od klienta",
      html: `
        <h2>Wiadomosc od klienta ze strony Wesołe Wygibasy</h2>
        <h3> Dotyczy: ${selectedLocation}</h3>
        <li> Od kiedy: ${startDate}</li>
        <li> Imię i Nazwisko Dziecka: ${fullName}</li>
        <li> Wiek dziecka: ${childAge}</li>
        <li> Wiadomość: ${text}</li>
        <li> Email: ${email}</li>
        <li> Numer Telefonu:: ${phoneNumber}</li>   
        `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}
