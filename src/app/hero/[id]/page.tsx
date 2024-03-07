// import Carousel from "@/components/Carousel";
// import { IHeroData } from "@/interfaces/heroes";


// interface IProps {
//   params: {
//     id: string;
//   };
// }

// async function getHeroesData(): Promise<{ data: IHeroData[] }> {
//   const res = await fetch(`${process.env.DOMAIN_ORIGIN}/api/heroes`);

//   if (!res.ok) {
//     throw new Error("Falha ao buscar heróis");
//   }

//   return res.json();
// }

// export default async function Hero({ params: { id } }: IProps) {
//   const res = await getHeroesData();

//   return <Carousel heroes={res.data} activeId={id} />;
// }





import heroesData from "../../api/heroes/heroes.json";

import Carousel from "@/components/Carousel";

interface IProps {
  params: {
    id: string;
  };
}

const Hero = ({ params: { id } }: IProps) => {
  return <Carousel heroes={heroesData} activeId={id} />;
}

export default Hero;
