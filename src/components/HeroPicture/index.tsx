import Image, { StaticImageData } from "next/image";

import professorGirafales from "@public/turmaChaves/professorGirafales.png";
import quico from "@public/turmaChaves/kiko.png";
import donaFlorinda from "@public/turmaChaves/donaFlorinda.png";
import chaves from "@public/turmaChaves/chaves.png";
import chiquinha from "@public/turmaChaves/chiquinha.png";
import donaClotilde from "@public/turmaChaves/donaClotilde.png";
import seuMadruga from "@public/turmaChaves/seuMadruga.png";
import { IHeroData } from "@/interfaces/heroes";

const heroesImage: Record<string, StaticImageData> = {
  "professor-girafales": professorGirafales, 
  "dona-florinda": donaFlorinda,
  "quico": quico,
  "chaves": chaves,
  "chiquinha": chiquinha,
  "seu-madruga": seuMadruga,
  "dona-clotilde": donaClotilde,
};

interface IProps {
  hero: IHeroData;
}

export default function HeroPicture({ hero }: IProps) {
  return (
    <Image
      src={heroesImage[hero.id] || professorGirafales}
      alt={`${hero.name} (Universo-${hero.universe})` || ""}
      priority
    />
  );
}
