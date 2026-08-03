"use server";

import { redirect } from "next/navigation";
import { destroySession } from "../auth";

export async function logout() {
  await destroySession();

  // Nie łap wyjątku — niech Next.js obsłuży redirect
  redirect("/admin/login");
}
