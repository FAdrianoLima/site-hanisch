import Menu from "../../components/menu";
import Rodape from "../../components/rodape";
import styles from "../../styles/Produto.module.css";
import Link from "next/link";
import RodapeNewFly from "../../components/rodape-newfly";
import * as React from "react";

export default function H28140() {
  const [imagemPrincipal, setImagemPrincipal] = React.useState(
    "/static/images/produtos/medical/h28-140.jpg"
  );
  

  const VideoPlayer = () => {
    const [videoStarted, setVideoStarted] = React.useState(false);
  
    const handleClick = () => {
      setVideoStarted(true);
    };

    return videoStarted ? (
      <iframe
        width="100%"
        height="540"
        src="https://www.youtube.com/embed/xcJtL7QggTI?si=l1RbSKIusLmGrgjh"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ) : (
      <img
        src="/static/images/banner-video.png"
        alt="Banner"
        onClick={handleClick}
        className="w-full h-[540px]"
        style={{ cursor: 'pointer' }}
      />
    );
  };


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
        <img className={styles.img} src="/static/images/ideia-01.png" />
      </section>

      <section
        className={`${styles.background}`}
        style={{ paddingTop: "0rem" }}
      >
        <div className={styles.interno}>
          <div className={`${styles.box} `}>
            <img src={imagemPrincipal} />
            <div className="flex flex-row justify-between ">
              <img
                className="cursor-pointer"
                src="/static/images/produtos/medical/h28-140.jpg"
                onClick={() =>
                  setImagemPrincipal(
                    "/static/images/produtos/medical/h28-140.jpg"
                  )
                }
              />

              <img
                className="cursor-pointer"
                src="/static/images/produtos/medical/h32-01.jpg"
                onClick={() =>
                  setImagemPrincipal(
                    "/static/images/produtos/medical/h32-01.jpg"
                  )
                }
              />

              <img
                className="cursor-pointer"
                src="/static/images/produtos/medical/h37-01.jpg"
                onClick={() =>
                  setImagemPrincipal(
                    "/static/images/produtos/medical/h37-01.jpg"
                  )
                }
              />
            </div>
          </div>
          <div className={`${styles.box} `}>
            <span>LINHA MEDICAL</span>
            <h3> H28-140 STANDARD</h3>
            <h4>
              CAPACIDADE DE EMPREENDER <br />
              COM TRANSPARÊNCIA.
              <br />
              VALORIZAÇÃO DAS PESSOAS
              <br />E BUSCA POR RESULTADOS.
            </h4>
            <p>
              Trilhamos nossa trajetória baseada valorização de todas as
              pessoas, na confiança e na satisfação de nossos clientes.
              Possuímos produtos de excelência, mão de obra qualificada, os
              melhores parceiros e fornecedores, além de um atendimento
              personalizado, procurando sempre superar as suas expectativas,
              apresentando novas tendências, tecnologias e o cumprindo com os
              prazos.
            </p>

            <div className="flex flex-row">
             <Link href="/contato">
             <button className={`${styles.botao02} mr-[1rem] `}>
                {" "}
                Solicitar orçamento{" "}
                <img src="/static/images/seta-direita.png" />{" "}
              </button>
             </Link>
             <Link href="/contato">
             <button className={styles.botao02}>
                {" "}
                Comprar agora <img src="/static/images/seta-direita.png" />{" "}
              </button>
             </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.background}>
        <div className="flex flex-col w-full max-w-[90rem] text-center">
          <h3 className="text-[#4481ff] mb-[3rem]">Diferenciais e Vantagens</h3>
          <div className="flex flex-row">
            <p className={`${styles.diferencial}`}>
              Perfis em alumí­nio, com conformidade com a norma ABNT NBR 8116,
              garantindo maior resistência para todo sistema Reiki.
            </p>
            <p className={`${styles.diferencial}`}>
              Vidros temperados em 8mm e 10mm. Largura máxima de 600mm e altura
              máxima do vão (vidro) de 2550mm.
            </p>
            <p className={`${styles.diferencial}`}>
              Sistema de nivelamento inovador sem utilização de rebites. Patente
              registrada por BBa sistemas para envidraçamentos BR 10 2015
              018655-0.
            </p>
          </div>

          <div className="flex flex-row">
            <p className={`${styles.diferencial}`}>
              Vedação especial desenvolvida exclusivamente para a marca Reiki
              com maior vedação contra chuvas e atenuação de ruídos, essa última
              conforme a espessura do vidro.
            </p>
            <p className={`${styles.diferencial}`}>
              Acabamento com proteção em nylon nas bordas dos vidros.
            </p>
            <p className={`${styles.diferencial}`}>
              Maior valorização do design com a redução do trilho inferior,
              contando com 19 cores padrão, mais cores customizadas sob
              consulta.
            </p>
          </div>

          <div className="flex flex-row">
            <p className={`${styles.diferencial}`}>
              Abertura total, parcial e fechamento total das lâminas de vidros.
            </p>
            <p className={`${styles.diferencial}`}>
              Deslizamento mais rápido e mais leve das folhas de vidros.
            </p>
            <p className={`${styles.diferencial}`}>
              Facilidade de limpeza pela área interna do ambiente e com maior
              segurança.
            </p>
          </div>

          <div className="flex flex-row">
            <p className={`${styles.diferencial}`}>
              Versatilidade: sistema se adapta a diversas funcionalidades desde
              divisórias de ambientes, jardins de inverno, gazebos ou
              envidraçamento de embarcações
            </p>
            <p className={`${styles.diferencial}`}>
              Produto em conformidade com a ABNT NBR 16259. Carta Patente Nº BR
              102015018655-0, sistema de regulagem de nível para fechamento de
              sacadas.
            </p>
            <p className={`${styles.diferencial}`}>
              Garantia de 5 anos. <br />
              Consulte as condições*
            </p>
          </div>
        </div>
      </section>

       <VideoPlayer />

      <Rodape />
      <RodapeNewFly />
    </>
  );
}
