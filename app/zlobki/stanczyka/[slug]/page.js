import Image from "next/image";
import fs from "fs";
import path from "path";
import classes from "./page.module.css";
import H1 from "@/components/UI/H1";
import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";

export default function GaleryPost({ params }) {
  const galeryPath = "/galeria/stanczyka/" + params.slug + "/";
  const directoryPath = path.join(process.cwd(), "public", galeryPath); // Sciezka do folderu z obrazami

  // Funkcja do zamiany pierwszej litery na wielką i zamiany pauz na spacje
  const formatSlug = (slug) => {
    return slug
      .replace(/-/g, " ")
      .replace(/^\w|\s\w/g, (match) => match.toUpperCase());
  };

  // Funkcja do odczytu plików w folderze i generowania komponentów obrazów
  const readImages = () => {
    const files = fs.readdirSync(directoryPath);
    return files
      .map((file, index) => {
        const filePath = `${directoryPath}${file}`;
        // Sprawdzenie czy plik jest obrazem
        if (
          fs.statSync(filePath).isFile() &&
          /\.(jpg|jpeg|png|gif)$/i.test(file)
        ) {
          return (
            <div className={classes.imageContainer}>
              <Image
                key={index}
                src={`${galeryPath}${file}`}
                width={100}
                height={100}
                layout="responsive"
                className={classes.image}
              />
            </div>
          );
        }
        return null; // Jeśli plik nie jest obrazem, zwróć null
      })
      .filter(Boolean); // Usunięcie elementów null z tablicy
  };

  return (
    <>
      <Header />
      <H1 text={formatSlug(params.slug)} />

      <div className={classes.container}>{readImages()}</div>
      <Footer />
    </>
  );
}
