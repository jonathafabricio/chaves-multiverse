import "./globals.scss";
import Image from "next/image";
import Link from "next/link";

import logo from "../../public/spiders/logoChaves.png";

export const metadata = {
  title: "Turma do Chaves",
  description:
    "Criando um carrossel parallax da turma do Chaves com React, Next.js 13 e Framer Motion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <Image
            src="/icons/menu.svg"
            alt="Menu options"
            width={36}
            height={25}
          />
          <Link href="/">
            <Image
              src="/spiders/logoChaves.png"
              alt="Chaves"
              width={735 / 7}
              height={520 / 7}
            />
          </Link>
          <Image src="/icons/user.svg" alt="Login" width={36} height={36} />
        </header>
        {children}
      </body>
    </html>
  );
}
