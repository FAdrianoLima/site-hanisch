import Menu from "../../components/menu";
import Rodape from "../../components/rodape";
import styles from "../../styles/Produto.module.css";
import Link from "next/link";
import RodapeNewFly from "../../components/rodape-newfly";
import * as React from "react";

export default function H28140() {
  const [imagemPrincipal, setImagemPrincipal] = React.useState(
    "/static/images/produtos/lab/Swab-03.png"
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
        style={{ cursor: "pointer" }}
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
                src="/static/images/produtos/lab/Swab-03.png"
                onClick={() =>
                  setImagemPrincipal(
                    "/static/images/produtos/lab/Swab-03.png"
                  )
                }
              />

              <img
                className="cursor-pointer"
                src="/static/images/produtos/lab/Swab-04.png"
                onClick={() =>
                  setImagemPrincipal(
                    "/static/images/produtos/lab/Swab-04.png"
                  )
                }
              />
            </div>
          </div>
          
          <div className={`${styles.box} `}>
           <div>
           <span>LINHA LAB</span>
            <h3>Swab para a coleta de Covid-19</h3>
            <h4>Dimensões:</h4>
            <p>
              <span>
                {" "}
                <img src="/static/images/circulo-azul.png" alt="" /> Apresentação: Caixa com 100 unidades{" "}
              </span>
              <span>
                {" "}
                <img src="/static/images/circulo-azul.png" alt="" /> Caixa Máster: 10 caixas{" "}
              </span>
              <span>
                {" "}
                <img src="/static/images/circulo-azul.png" alt="" /> Código Swab Pró Estéril 3un/ papel cirurgico: 13783{" "}
              </span>
              <span>
                {" "}
                <img src="/static/images/circulo-azul.png" alt="" /> Código Swab Pró Estéril 3un/ papel cirurgico / Solução Salina: 13787
              </span>
              <span>
                {" "}
                <img src="/static/images/circulo-azul.png" alt="" />Marca: Plásticos Hanisch
              </span>
              <span>
                {" "}
                <img src="/static/images/circulo-azul.png" alt="" />Patente requerida
              </span>
            </p>
           </div>

            <div className="flex flex-row">
              <Link href="/contato" passHref legacyBehavior>
                <button className={`${styles.botao02} mr-[1rem] `}>
                  {" "}
                  Solicitar orçamento{" "}
                  <img src="/static/images/seta-direita.png" />{" "}
                </button>
              </Link>
              <Link href="/contato" passHref legacyBehavior>
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
            <a className={`${styles.diferencial}`}>
            Flexível <br />
            Maior conforto na coleta. <br />
            Maior capacidade de coleta de amostra.
            </a>
            <a className={`${styles.diferencial}`}>
            Comprimento 150mm Diâmetro 3mm.
              <br />
              Não apresenta manchas.
              <br />
              Alta resistência ao impacto, mantendo constante sua aparência de
              nova.
            </a>
          </div>

          <div className="flex flex-row">
            <a className={`${styles.diferencial}`}>
              Fácil higienização.
              <br />
              Matéria-prima: PE - Polietileno.
              <br />
              Dever ser manipulado apenas por profissionais da saúde.
            </a>         
            <a className={`${styles.diferencial}`}>
            Deve ser mantido em local seco e fresco, entre 5c° à 40c°.
              <br />
              EMBALAGEM com SWAB PRÓ ESTÉRIL 3 UN/PAPEL CIRURGICO.
              <br />
              EMBALAGEM com SWAB PRÓ ESTÉRIL KIT 3 UN/PAP CIR./SOLUÇÃO SALINA
            </a>
          </div>

          <div className="flex flex-row">
           <img 
           src="/static/images/produtos/lab/swab-detalhe-tudo.jpg"
           />
          </div>

        </div>
      </section>

      <VideoPlayer />

      <Rodape />
      <RodapeNewFly />
    </>
  );
}
