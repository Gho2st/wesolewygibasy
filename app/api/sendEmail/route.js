import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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
    } = await request.json();

    if (
      !childAge ||
      !email ||
      !text ||
      !phoneNumber ||
      !startDate ||
      !selectedLocation ||
      !fullName
    ) {
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
