import Menu from "../components/menu";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import styles from "../styles/Quem.module.css";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Link from "next/link";
import RodapeNewFly from "../components/rodape-newfly";

export default function aHanisch() {
  return (
    <>
      <Menu />
      <section 
       style={{ paddingTop: "0px", paddingBottom: "0px" }}
      className={styles.backgroundimg}></section>

      <section
        style={{ paddingTop: "0px", paddingBottom: "0px" }}
        className={`${styles.background2}`}
      >
        <div className={`${styles.box2} `}>
          <p className="font-bold text-[#4481FF]">QUEM SOMOS</p>
          <p className="uppercase text-[24px] leading-[32px] mt-[3rem] mb-[4rem] ">
            Olá, somos a <a className="font-bold text-[#4481FF] "> hanisch!</a>{" "}
            <br />
            Sua <a className="font-bold text-[#4481FF]">melhor opção</a>
            <br />
            em estojos esterilizados
            <br /> no brasil.
          </p>
          <Link href="/">
            <button>
              Conheça Agora{" "}
              <img className="w-[1rem]" src="/static/images/seta-direita.png" />
            </button>
          </Link>
        </div>

        <img className={styles.img} src="/static/images/bg-quem-somos.png" />
      </section>

      <section
        className={`${styles.background2} h-[36.9rem] mt-[0rem] ]pt-[0rem]`}
      >
        <img
          className={`${styles.img} lg:max-h-[36.9rem]`}
          src="/static/images/quem-somos.png"
        />
        <div className={styles.boxazul}>
          <h3>
            MAIS DE 25 ANOS <br />
            DE CREDIBILIDADE, <br />
            DINAMISMO E INOVAÇÃO.
          </h3>
          <p>
            A Plásticos Hanisch é uma empresa especializada na fabricação e
            personalização de estojos para esterilização de instrumentos e
            implantes cirúrgicos. Com mais de 20 anos de experiência em
            tecnologia de injeção termoplástica, sendo a primeira fabricante de
            estojos para esterilização em PPSU no Brasil. Temos como objetivo
            atender nossos clientes com projetos de alta qualidade, design e
            segurança, sempre buscando mais conhecimento e aprimorando nossos
            processos produtivos.
          </p>
        </div>
      </section>

      <section className={`${styles.background3} bg-[#2C2C2C] `}>
        <div className="w-full max-w-[20rem] sm:max-w-[50rem] lg:max-w-[100rem] flex flex-row justify-center items-center">
          <div className={`${styles.box3}`}>
            <img
              className="w-full max-w-[5rem]"
              src="/static/images/seguranca.png"
            />
            <h3>Segurança</h3>
            <p>
              É essencial conhecer sobre o envidraçamento adequado, mantendo a
              qualidade, design, tecnologia e não mais importante, mas
              fundamental: Segurança.
            </p>
          </div>

          <div className={styles.box3}>
            <img src="/static/images/verstilidade.png" />
            <h3>VERSATILIDADE</h3>
            <p>
              O sistema de envidraçamento se adapta a diversas funcionalidades
              desde divisórias de ambientes, jardins de inverno, gazebos ou
              envidraçamento de embarcações.
            </p>
          </div>

          <div className={styles.box3}>
            <img src="/static/images/porta.png" />
            <h3>ABERTURA E FECHAMENTO TOTAL E/OU PARCIAL</h3>
            <p>
              Através de uma tecnologia patentiada o sistema de envidraçamento
              Reiki UP permite que você recolha todas as lâminas de vidro para o
              lado, assim tendo uma abertura total e/ou parcial do seu ambiente,
              assim você terá um maior contato do ambiente interno com o
              ambiente externo.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.background2} pt-[0rem] `}>
        <img
          className={`${styles.quem} mr-[0.2rem] `}
          src="/static/images/quem-01.png"
          alt=""
        />
        <img className={styles.quem} src="/static/images/quem-01.png" alt="" />
        <img
          className={`${styles.quem} ml-[0.2rem] `}
          src="/static/images/quem-01.png"
          alt=""
        />
      </section>
      <section className={styles.background3}>
        <div className={`${styles.box4} ml-[5rem] `}>
          <h3 className="font-bold text-2xl ">
            CAPACIDADE DE EMPREENDER <br />
            COM TRANSPARÊNCIA.<br />
            VALORIZAÇÃO DAS PESSOAS<br />
            E BUSCA POR RESULTADOS.
          </h3>
          <p className="text-[14px] mt-[2rem] ">
            Trilhamos nossa trajetória baseada valorização de todas as pessoas,
            na confiança e na satisfação de nossos clientes. Possuímos produtos
            de excelência, mão de obra qualificada, os melhores parceiros e
            fornecedores, além de um atendimento personalizado, procurando
            sempre superar as suas expectativas, apresentando novas tendências,
            tecnologias e o cumprindo com os prazos.
          </p>
        </div>

        <div className={`${styles.box5} mr-[5rem] `}>
          <span className={styles.cotacao}>
            <h3>FAÇA UMA COTAÇÃO</h3>
            <p>
              Fale agora com um de nossos atendentes, a Hanisch é a certeza de
              qualidade e o melhor acabamento.
            </p>

            <button>54 3224.6060</button>

            <Link href="/contato">
              <h4>Mais formas de contato</h4>
            </Link>
          </span>
        </div>
      </section>

      <Rodape />
      <RodapeNewFly />
    </>
  );
}
