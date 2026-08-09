import { Header } from "@/src/components/Header";
import { MainBanner } from "@/src/components/MainBanner";
import { TitleDescription } from "@/src/components/TitleDescription/titleDescription";
import "./styles.scss";
import { MainButton } from "@/src/components/Button";

const servicos = [
  {
    title: "Restauração",
    description: "Recupere a beleza e a função do seu sorriso.",
  },
  {
    title: "Facetas",
    description: "Transforme seu sorriso com naturalidade e elegância.",
  },
  {
    title: "Clareamento",
    description: "Um sorriso mais iluminado e confiante.",
  },
  {
    title: "Extração",
    description: "Cuidado e precisão em cada procedimento.",
  },
  {
    title: "Coroa",
    description: "Estética e resistência em perfeita harmonia.",
  },
  {
    title: "Emergência",
    description: "Atendimento rápido quando você mais precisa.",
  },
  {
    title: "Prótese",
    description: "Conforto, funcionalidade e estética para o seu sorriso.",
  },
  {
    title: "Profilaxia",
    description: "Prevenção para manter seu sorriso saudável.",
  },
];

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

      <section>
        
      </section>
    </div>
  );
}
