import Image from "next/image";
import { Quicksand } from "next/font/google";

import styles from "./heroDetails.module.scss";

import { spidermanFont } from "@/fonts";
import { IHeroData } from "@/interfaces/heroes";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

interface IProps {
  data: IHeroData;
}

export default function HeroDetails({ data }: IProps) {
  const { id, name, universe, details, firstApparition } = data;

  return (
    <div className={quicksand.className}>
      <h1 className={`${spidermanFont.className} ${styles.title}`}>
        {name}
      </h1>
      <div className={styles.details}>
        <h2 className={styles.subtitle}>Informações</h2>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.label}>Nome Completo</td>
              <td>{details.fullName}</td>
            </tr>
            <tr>
              <td className={styles.label}>Data de Nascimento</td>
              <td>{new Date(details.birthday).toLocaleDateString("pt-BR")}</td>
            </tr>
            <tr>
              <td className={styles.label}>Terra Natal</td>
              <td>{details.homeland}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.details}>
        <h2 className={styles.subtitle}>Primeira Aparição</h2>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.label}>Ano</td>
              <td>{new Date(details.firstApparition).getFullYear()}</td>
            </tr>
            <tr>
              <td className={styles.label}>Episódio</td>
              <td>{details.firstEpisode}</td>
            </tr>
          </tbody>
          </table>
        <h2 className={styles.subtitle}>Última Aparição</h2>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td className={styles.label}>Ano</td>
              <td>{new Date(details.lastApparition).getFullYear()}</td>
            </tr>
            <tr>
              <td className={styles.label}>Episódio</td>
              <td>{details.lastEpisode}</td>
            </tr>
          </tbody>
          </table>
      </div>
    </div>
  );
}
