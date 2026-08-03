import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { createSession } from "@/app/lib/auth";

const hash = Buffer.from(
  process.env.ADMIN_PASSWORD_HASH_B64 ?? "",
  "base64",
).toString("utf8");

if (hash.length !== 60 || !hash.startsWith("$2")) {
  throw new Error(
    `ADMIN_PASSWORD_HASH_B64 nieprawidłowy (dekoduje się do ${hash.length} znaków)`,
  );
}

export async function POST(req) {
  const { login, password } = await req.json();

  const loginOk = login === process.env.ADMIN_LOGIN;
  const passwordOk = await bcrypt.compare(password ?? "", hash);

  if (!loginOk || !passwordOk) {
    return NextResponse.json({ error: "Nieprawidłowe dane" }, { status: 401 });
  }

  await createSession();
  return NextResponse.json({ success: true });
}
