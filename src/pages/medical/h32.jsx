import Menu from "../../components/menu";
import Rodape from "../../components/rodape";
import styles from "../../styles/Produto.module.css";
import Link from "next/link";
import RodapeNewFly from "../../components/rodape-newfly";
import * as React from "react";

export default function H28140() {
  const [imagemPrincipal, setImagemPrincipal] = React.useState(
    "/static/images/produtos/medical/h32-01.jpg"
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
                src="/static/images/produtos/medical/h32-01.jpg"
                onClick={() =>
                  setImagemPrincipal(
                    "/static/images/produtos/medical/h32-01.jpg"
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
                src="/static/images/produtos/medical/h37-90.jpg"
                onClick={() =>
                  setImagemPrincipal(
                    "/static/images/produtos/medical/h37-90.jpg"
                  )
                }
              />
            </div>
          </div>
          
          <div className={`${styles.box} `}>
           <div>
           <span>LINHA MEDICAL</span>
            <h3> H32 STANDARD</h3>
            <h4>Dimensões:</h4>
            <p>
              <span>
                {" "}
                <img src="/static/images/circulo-azul.png" alt="" /> Comprimento - 320mm{" "}
              </span>
              <span>
                {" "}
                <img src="/static/images/circulo-azul.png" alt="" /> Largura - 240mm{" "}
              </span>
              <span>
                {" "}
                <img src="/static/images/circulo-azul.png" alt="" /> Altura - 30mm{" "}
              </span>
              <span>
                {" "}
                <img src="/static/images/circulo-azul.png" alt="" /> Número de
                Bandejas - 0{" "}
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
              Matéria prima PPSU. Grande leveza. <br />
              Maior proteção ao instrumental. <br />
              graças ao baixo desgaste por atrito.
            </a>
            <a className={`${styles.diferencial}`}>
              Não oxida.
              <br />
              Não apresenta manchas.
              <br />
              Alta resistência ao impacto, mantendo constante sua aparência de
              nova.
            </a>
            <a className={`${styles.diferencial}`}>
              Fácil higienização.
              <br />
              Alta resistência ao calor (mais de 190°).
              <br />
              Alta durabilidade (grande vida útil de mais de 1000 ciclos de
              esterilização).
            </a>
          </div>

          <div className="flex flex-row">
            <a className={`${styles.diferencial}`}>
              Instrumental mais durável
              <br />
              Indeformável
              <br />
              Distinção
              <br />
            </a>
            <a className={`${styles.diferencial}`}>
              Diferencial de marca. (disponibilidade de gravação a laser na
              tampa).
              <br />
              Customizável, adaptando-se aos mais diversos tipos de
              instrumentais existentes (aplicação de espaçadores de silicone).
            </a>
            <a className={`${styles.diferencial}`}>
              <h4 className="mb-[1rem]">Específico para autoclave a vapor:</h4>
              Temperatura Deflexão (1.82 Mpa) ASTM D648 200°C
            </a>
          </div>

          <div className="flex flex-row">
          
            <a className={`${styles.diferencial}`}>
            <h4  className="mb-[1rem]" >Resistência:</h4> <br />
            
              <br />
              Resistência à ruptura ASTM D638 70 Mpa
              <br />
              Resistência ao impacto izod ASTM D256 690 J/m
              <br />
              Resistência à flexão ASTM D790 91 Mpa
              <br />
              Resistência Dieletrica (3.2 mm) ASTM D149 15 kV/mm
            </a>
            <a className={`${styles.diferencial}`}>
              <h4  className="mb-[1rem]" >Leveza:</h4> <br />
              Matéria prima PPSU/PPSU Raw Material
              <br />
              Peso específico conforme ASTM 1,29g/cm³
              <br />
              Matéria prima inox/Sainless Raw Material
              <br />
              Peso específico conforme ASTM 7,86/cm³
              <br />
              Matéria prima Alumínio/Aluminium Raw Material
              <br />
              Peso específico conforme ASTM 2,71g/cm³
            </a>
          </div>
        </div>
      </section>

      <VideoPlayer />

      <Rodape />
      <RodapeNewFly />
    </>
  );
}
