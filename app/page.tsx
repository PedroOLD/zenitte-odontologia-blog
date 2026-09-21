import { Header } from "@/src/components/Header";
import { MainBanner } from "@/src/components/MainBanner";
import { TitleDescription } from "@/src/components/TitleDescription/titleDescription";
import "./styles.scss";
import { MainButton } from "@/src/components/Button";
import { servicos, cards } from "./datasServicos";
import Image from "next/image";
import { CardImageFlap } from "@/src/components/CardImageFlag";
import { Slide } from "@/src/components/Slide";


export default function Home() {
  return (
    <div className="">
      <Header />
      <MainBanner backgroundImage="/images/bg.svg" logo="/images/logo.svg" text="A verdadeira beleza está na harmonia dos detalhes."  />
      
      <section data-fs-section-servicos>
        <h2 data-fs-section-servicos-title>Nossos servicos</h2>

        <div data-fs-container-sevicos>
          {servicos.map((servico) => (
            <TitleDescription
              key={servico.title}
              title={servico.title}
              description={servico.description}
            />
          ))}
        </div>
        <MainButton label="Agende agora" variant="solid" />
      </section>

      <section data-fs-banner-portifolio>
        <div data-fs-container-banner-portifolio>
            <h2>Cada sorriso é planejado de forma única.</h2>
            <div data-fs-content-banner>
              <Image src="images/banner.svg" fill alt="banner image" />
            </div>
        </div>

        <div data-fs-slide-portifolio>
          <Slide>
            {cards.map((card) => (
              <CardImageFlap key={card.description} {...card} />
            ))}
          </Slide>
        </div>
      </section>
    </div>
  );
}
