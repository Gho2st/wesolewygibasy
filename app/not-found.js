"use client";
import { useEffect } from "react";

function NotFoundPage() {
  // Przekierowanie użytkownika na stronę główną
  const redirectToHome = () => {
    window.location.href = "/"; // Przekierowanie na stronę główną
  };

  // Po zamontowaniu komponentu, automatycznie przekieruj na stronę główną
  useEffect(() => {
    redirectToHome();
  }, []);

  return (
    <>
      <div>
        <h1>404 - Strona nie znaleziona</h1>
        <button onClick={redirectToHome}>Przejdź do strony głównej</button>
      </div>
    </>
  );
}

export default NotFoundPage;
