import Menu from "../components/menu";
import Rodape from "../components/rodape";
import styles from "../styles/Quem.module.css";
import Link from "next/link";
import RodapeNewFly from "../components/rodape-newfly";
import Carroussel from "../components/carrossel";

export default function aHanisch() {
  return (
    <>
      <Menu />
      <section
        style={{ paddingTop: "0px", paddingBottom: "0px" }}
        className={styles.backgroundimg}
      ></section>

      <section
        style={{ paddingTop: "0px", paddingBottom: "0px" }}
        className={`${styles.background2}`}
      >
        <div className={`${styles.box2} `}>
          <p className="font-bold text-[#4481FF] uppercase">Personalização</p>
          <p className="uppercase text-[24px] leading-[32px] mt-[3rem] mb-[4rem] ">
            Desenvolvimento e Execução de <br />
            <a className="font-bold text-[#4481FF] "> Projetos </a>
            Personalizados para <br /> atender a sua necessidade da <br />
            <a className="font-bold text-[#4481FF]"> melhor maneira</a>
          </p>
          <Link href="/">
            <button>
              Alguns Produtos{" "}
              <img className="w-[1rem]" src="/static/images/seta-direita.png" />
            </button>
          </Link>
        </div>

        <img className={styles.img} src="/static/images/bg-quem-somos.png" />
      </section>

      <Carroussel />

      <section className={`${styles.background3} bg-[#2C2C2C] `}>
        <div className="w-full max-w-[20rem] sm:max-w-[50rem] lg:max-w-[100rem] flex flex-row justify-center items-center">
          <div className={`${styles.box3}`}>
            <img
              className="w-full max-w-[5rem]"
              src="/static/images/seguranca.png"
            />
            <h3>Ferramentas e Moldes</h3>
            <p>
              Especialistas na fabricação de moldes para injeção de
              termoplásticos com geometria complexa e ferramentas de injeção. A
              Hanisch possui uma equipe especializada no desenvolvimento de
              novos produtos e dispõe de ferramentaria dotada de equipamentos
              modernos, com tecnologia CAD/CAM máquinas CNC e profissionais
              especializados na fabricação de moldes para injeção de produtos
              plásticos. Além do desenvolvimento de novos projetos, a Hanisch
              atua na manutenção preventiva e corretiva dos moldes
            </p>
          </div>

          <div className={styles.box3}>
            <img src="/static/images/verstilidade.png" />
            <h3>Características</h3>
            <p>
              O Projeto e construção de moldes para injeção. <br />
              Protótipos funcionais.
              <br />
              Ferramentas de injeção e dispositivos especiais.
              <br />
              Soluções completas para moldes e ferramentas de até 8 toneladas.
              <br />
              Manutenção de ferramentas e moldes.
              <br />
              Estudos e simulações em software MoldFlow. <br />
            </p>
          </div>

          <div className={styles.box3}>
            <img src="/static/images/porta.png" />
            <h3>Diferenciais</h3>
            <p>
              Equipe de projeto própria.
              <br />
              Condições de pagamento com negociação flexível.
              <br />
              Produção just-in-time.
              <br />
              Pós-venda e assistência técnica.
              <br />
              Prazo de entrega de acordo com a sua necessidade.
              <br />
              Qualidade assegurada.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.background3} pt-[10rem] w-full `}>
        <img
          className={`${styles.personalizaveis} ml-[8px]`}
          src="/static/images/personalizacao/siliconesseparadores-hanisch.jpg"
          alt=""
        />

        <img
          className={styles.personalizaveis}
          src="/static/images/personalizacao/fixadores-silicone.jpg"
          alt=""
        />
        <img
          className={styles.personalizaveis}
          src="/static/images/personalizacao/tubo-kirhner.jpg"
          alt=""
        />
        <img
          className={styles.personalizaveis}
          src="/static/images/personalizacao/trilhos.jpg"
          alt=""
        />
        <img
          className={`${styles.personalizaveis} mr-[8px]`}
          src="/static/images/personalizacao/tapete-personalizacao-hanisch.jpg"
          alt=""
        />
      </section>

      <Rodape />
      <RodapeNewFly />
    </>
  );
}
