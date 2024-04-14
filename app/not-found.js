'use client'
import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";
import { useEffect } from 'react';

function NotFoundPage() {
    // Przekierowanie użytkownika na stronę główną
    const redirectToHome = () => {
        window.location.href = '/'; // Przekierowanie na stronę główną
    };

    // Po zamontowaniu komponentu, automatycznie przekieruj na stronę główną
    useEffect(() => {
        redirectToHome();
    }, []);

    return (
        <>
            <Header />
            <div>
                <h1>404 - Strona nie znaleziona</h1>
                <button onClick={redirectToHome}>Przejdź do strony głównej</button>
            </div>
            <Footer />
        </>
    );
}

export default NotFoundPage;
