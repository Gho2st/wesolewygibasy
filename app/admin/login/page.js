"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import Header from "@/components/UI/Header";

export default function LoginPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ login, password }),
    });
    if (res.ok) {
      router.push("/admin");
    } else {
      const data = await res.json().catch(() => ({}));
      setError(`[${res.status}] ${data.error ?? "Brak odpowiedzi"}`);
      console.log("Odpowiedź serwera:", res.status, data);
    }
  }

  return (
    <>
      <div>
        <Header text="Zaloguj się do panelu" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-sm mx-auto p-6 space-y-4 py-24"
      >
        <input
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Login"
          className="w-full border p-2"
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Hasło"
            className="w-full border p-2 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800"
            aria-label={showPassword ? "Ukryj hasło" : "Pokaż hasło"}
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        <button type="submit" className="w-full bg-black text-white p-2">
          Zaloguj
        </button>
        {error && <p className="text-red-600">{error}</p>}
      </form>
    </>
  );
}
