import Link from "next/link";
import classes from "./TextContainer.module.css";
import Image from "next/image";
export default function TextContainer() {
  return (
    <>
      <div className={classes.textContainer}>
        <div className={classes.left}>
          <h3>
            Żłobki <span> Wesołe Wygibasy</span> na Mapie Krakowa!
          </h3>
          <p>
            Jesteśmy miejscem, gdzie każde dziecko jest traktowane z miłością,
            szacunkiem i troską. Nasza misja to stworzenie bezpiecznego i
            inspirującego środowiska, w którym maluchy mogą rozwijać swoje
            umiejętności, kreatywność i osobowość.
          </p>
          <p>
            Nasz żłobki położone są na północy Krakowa, co sprawia, że jesteśmy
            łatwo dostępni dla rodziców z różnych części miasta. Nasza
            lokalizacja oferuje także liczne atrakcje i udogodnienia dla naszych
            małych podopiecznych.
          </p>
          <p>
            W Naszym Żłobku oferujemy opiekę dla dzieci w wieku do 3 lat. Nasz
            zespół wykwalifikowanych i doświadczonych opiekunów dba o to, aby
            każde dziecko otrzymało indywidualną uwagę i wsparcie w swoim
            rozwoju.
          </p>
          <p>
            Nasz program nauczania opiera się na holistycznym podejściu,
            uwzględniającym potrzeby rozwojowe każdego dziecka. Stawiamy na
            kreatywność, aktywność fizyczną oraz rozwijanie umiejętności
            społecznych i emocjonalnych.
          </p>
          <p>
            Jesteśmy dumni z pozytywnych opinii, jakie otrzymujemy od rodziców,
            którzy powierzają nam opiekę nad swoimi dziećmi. Ich zaufanie jest
            dla nas największą nagrodą i motywacją do ciągłego doskonalenia
            naszych usług.
            <Link href={"https://g.page/r/CVSRHQIb-HkkEBM/review"}>
              Zostaw nam Twoją opinię :)
            </Link>
          </p>
          <h4>
            Dołącz do naszej żłobkowej rodziny i daj swojemu dziecku najlepszy
            start w życiu!
          </h4>
        </div>
        <div className={classes.right}>
          <Image
            src={"/others/logo2.png"}
            width={100}
            height={100}
            layout="responsive"
            alt="logo"
          ></Image>
        </div>
      </div>
    </>
  );
}
