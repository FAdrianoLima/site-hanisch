import Menu from "../components/menu";
import Rodape from "../components/rodape";
import Whats from "../components/whats";
import styles from "../styles/Produtos.module.css";
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
        className={styles.backgroundimg}
      ></section>

      <section
        style={{ paddingTop: "0px", paddingBottom: "0px" }}
        className={`${styles.background2}`}
      >
        <div className={`${styles.box2} `}>
          <p className="font-bold text-[#4481FF]">PRODUTOS</p>
          <p className="uppercase text-[24px] leading-[32px] mt-[3rem]">
            Olá, somos a <a className="font-bold text-[#4481FF] "> hanisch!</a>{" "}
            <br />
            Sua <a className="font-bold text-[#4481FF]">melhor opção</a>
            <br />
            em estojos esterilizados
            <br /> no brasil.
          </p>
        </div>

        <img className={styles.img} src="/static/images/bg-quem-somos.png" />
      </section>

      <section
        style={{ paddingBottom: "0px" }}
        className={`${styles.background} bg-[#4481ff]`}
      >
        <div className={styles.interno}>
          <div className={styles.box3}>
          <Link href="/produtos/#medical" passHref legacyBehavior>
            <button className={styles.filtros}>Medical</button>
          </Link>
          <Link href="/produtos/#odonto" passHref legacyBehavior>
            <button className={styles.filtros}>Odonto</button>
          </Link>
          <Link href="/produtos/#lab" passHref legacyBehavior>
            <button className={styles.filtros}>Lab</button>
          </Link>
          <Link href="/produtos/#personalizados" passHref legacyBehavior>
            <button className={styles.filtros}>Personalizados</button>
          </Link>
          </div>
        </div>
      </section>

      {/*
            MEDICAL
          */}
      <a id="medical" className="bg-[#4481ff]"></a>
      <section className={`${styles.background} bg-[#4481ff]`}>
        <div className={styles.interno}>
          <div className={styles.linha}>
            <div className={` ${styles.produto2}`}>
              <div className={styles.informacoes}>
                <p>Linha Medical</p>
                <h3>H28-140 Standard</h3>
                <Link href="/medical/h28-140" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>H28-140</h2>
              </div>
              <img
                src="/static/images/produtos/medical/h28-140.png"
                alt="Produto"
              />
            </div>

            <div className={` ${styles.produto2}`}>
              <div className={styles.informacoes}>
                <p>Linha Medical</p>
                <h3>H28-70 Standard</h3>
                <Link href="/medical/h28-70" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>H28-70</h2>
              </div>
              <img
                src="/static/images/produtos/medical/h28-70.png"
                alt="Produto"
              />
            </div>
          </div>

          <div className={`${styles.linha} mt-[4rem]`}>
            <div className={` ${styles.produto2}`}>
              <div className={styles.informacoes}>
                <p>Linha Medical</p>
                <h3>H32 Standard</h3>
                <Link href="/medical/h32" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>H32-01</h2>
              </div>
              <img
                src="/static/images/produtos/medical/h32-01.png"
                alt="Produto"
              />
            </div>

            <div className={` ${styles.produto2}`}>
              <div className={styles.informacoes}>
                <p>Linha Medical</p>
                <h3>H37-90 Standard</h3>
                <Link href="/medical/h37-90" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>H37-90</h2>
              </div>
              <img
                src="/static/images/produtos/medical/h37-90.png"
                alt="Produto"
              />
            </div>
          </div>

          <div className={`${styles.linha} mt-[4rem]`}>
            <div className={` ${styles.produto2}`}>
              <div className={styles.informacoes}>
                <p>Linha Medical</p>
                <h3>H39-110 Standard</h3>
                <Link href="/medical/h39-110" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>H39-110</h2>
              </div>
              <img
                src="/static/images/produtos/medical/h39-110.png"
                alt="Produto"
              />
            </div>

            <div className={` ${styles.produto2}`}>
              <div className={styles.informacoes}>
                <p>Linha Medical</p>
                <h3>H49-100 Standard</h3>
                <Link href="/medical/h49-100" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>H49-100</h2>
              </div>
              <img
                src="/static/images/produtos/medical/h49-100.png"
                alt="Produto"
              />
            </div>
          </div>

          <div className={`${styles.linha} mt-[4rem]`}>
            <div className={` ${styles.produto2}`}>
              <div className={styles.informacoes}>
                <p>Linha Medical</p>
                <h3>H49-70 Standard</h3>
                <Link href="/medical/h49-70" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>H49-70</h2>
              </div>
              <img
                src="/static/images/produtos/medical/h49-70.png"
                alt="Produto"
              />
            </div>

            <div className={` ${styles.produto2}`}>
              <div className={styles.informacoes}>
                <p>Linha Medical</p>
                <h3>H52-100 Standard</h3>
                <Link href="/medical/h52-100" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>H52-100</h2>
              </div>
              <img
                src="/static/images/produtos/medical/h52-100.png"
                alt="Produto"
              />
            </div>
          </div>

          <div className={`${styles.linha} mt-[4rem]`}>
            <div className={` ${styles.produto2}`}>
              <div className={styles.informacoes}>
                <p>Linha Medical</p>
                <h3>H52-160 Standard</h3>
                <Link href="/medical/h52-160" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>H52-160</h2>
              </div>
              <img
                src="/static/images/produtos/medical/h52-160.png"
                alt="Produto"
              />
            </div>

            <div className={` ${styles.produto2}`}>
              <div className={styles.informacoes}>
                <p>Linha Medical</p>
                <h3>H26 Standard</h3>
                <Link href="/medical/h26" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>H26</h2>
              </div>
              <img
                src="/static/images/produtos/medical/h26.png"
                alt="Produto"
              />
            </div>
          </div>

          <div className={`${styles.linha} mt-[4rem]`}>
            <div className={` ${styles.produto2}`}>
              <div className={styles.informacoes}>
                <p>Linha Medical</p>
                <h3>H45 Standard</h3>
                <Link href="/medical/h45" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>H45</h2>
              </div>
              <img
                src="/static/images/produtos/medical/h45.png"
                alt="Produto"
              />
            </div>

            <div className={` ${styles.produto2}`}>
              <div className={styles.informacoes}>
                <p>Linha Medical</p>
                <h3>H14</h3>
                <Link href="/medical/h14" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>H14</h2>
              </div>
              <img
                src="/static/images/produtos/medical/h14.png"
                alt="Produto"
              />
            </div>
          </div>

          <div className={`${styles.linha} mt-[4rem]`}>
            <div className={` ${styles.produto2}`}>
              <div className={styles.informacoes}>
                <p>Linha Medical</p>
                <h3>HL26x17 Parafuso</h3>
                <Link href="/medical/hl-26x17-parafuso" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>HL 26x17</h2>
              </div>
              <img
                src="/static/images/produtos/medical/hl-26x17-parafuso.png"
                alt="Produto"
              />
            </div>

            <div className={` ${styles.produto2}`}>
              <div className={styles.informacoes}>
                <p>Linha Medical</p>
                <h3>HL 26x26 Parafuso</h3>
                <Link href="/medical/hl-26x26-parafuso" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>HL 26x26</h2>
              </div>
              <img
                src="/static/images/produtos/medical/hl-26x26-parafuso.png"
                alt="Produto"
              />
            </div>
          </div>

          <div className={`${styles.linha} mt-[4rem]`}>
            <div className={` ${styles.produto2}`}>
              <div className={styles.informacoes}>
                <p>Linha Medical</p>
                <h3>HL26x17 Implante</h3>
                <Link href="/medical/hl-26x17-implante" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>HL 26x17</h2>
              </div>
              <img
                src="/static/images/produtos/medical/hl-26x17-implante.png"
                alt="Produto"
              />
            </div>

            <div className={` ${styles.produto2}`}>
              <div className={styles.informacoes}>
                <p>Linha Medical</p>
                <h3>HL26x26 Implante</h3>
                <Link href="/medical/hl-26x26-implante" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>HL 26x26</h2>
              </div>
              <img
                src="/static/images/produtos/medical/hl-26x26-implante.png"
                alt="Produto"
              />
            </div>
          </div>

          <div className={`${styles.linha} mt-[4rem]`}>
            <div className={` ${styles.produto2}`}>
              <div className={styles.informacoes}>
                <p>Linha Medical</p>
                <h3>H37 bandeja</h3>
                <Link href="/medical/h37-bandeja" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>H37</h2>
              </div>
              <img
                src="/static/images/produtos/medical/h37-bandeja.png"
                alt="Produto"
              />
            </div>

            <div className={` ${styles.produto2}`}>
              <div className={styles.informacoes}>
                <p>Linha Medical</p>
                <h3>H49 Bandeja</h3>
                <Link href="/medical/h49-bandeja" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>H49</h2>
              </div>
              <img
                src="/static/images/produtos/medical/h49-bandeja.png"
                alt="Produto"
              />
            </div>
          </div>

          <div className={`${styles.linha} mt-[4rem]`}>
            <div className={` ${styles.produto2}`}>
              <div className={styles.informacoes}>
                <p>Linha Medical</p>
                <h3>H52 bandeja</h3>
                <Link href="/medical/h49-bandeja" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>H52</h2>
              </div>
              <img
                src="/static/images/produtos/medical/h49-bandeja.png"
                alt="Produto"
              />
            </div>
          </div>
        </div>
      </section>

      {/*
            MEDICAL
          */}

      {/*
            ODONTO
          */}
      <a id="odonto" className="bg-[#3d74e7]"></a>
      <section className={`${styles.background} bg-[#3d74e7]`}>
        <div className={styles.interno}>
          <div className={`${styles.linha} mt-[4rem]`}>
            <div className={` ${styles.produto2}`}>
              <div className={styles.informacoes}>
                <p>Linha Odonto</p>
                <h3>H12-01</h3>
                <Link href="/odonto/h12" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>H12-01</h2>
              </div>
              <img
                src="/static/images/produtos/odonto/h12-01.png"
                alt="Produto"
              />
            </div>

            <div className={` ${styles.produto2}`}>
              <div className={styles.informacoes}>
                <p>Linha Odonto</p>
                <h3>H18-01</h3>
                <Link href="/odonto/h18" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>H18-01</h2>
              </div>
              <img
                src="/static/images/produtos/odonto/h18-01.png"
                alt="Produto"
              />
            </div>
          </div>

          <div className={`${styles.linha} mt-[4rem]`}>
            <div className={` ${styles.produto2}`}>
              <div className={styles.informacoes}>
                <p>Linha Odonto</p>
                <h3>H19-01</h3>
                <Link href="/odonto/h19" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>H19-01</h2>
              </div>
              <img
                src="/static/images/produtos/odonto/h19-01.png"
                alt="Produto"
              />
            </div>

            <div className={` ${styles.produto2}`}>
              <div className={styles.informacoes}>
                <p>Linha Odonto</p>
                <h3>H23-01</h3>
                <Link href="/odonto/h23" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>H23-01</h2>
              </div>
              <img
                src="/static/images/produtos/odonto/h23-01.png"
                alt="Produto"
              />
            </div>
          </div>

          <div className={`${styles.linha} mt-[4rem]`}>
            <div className={` ${styles.produto2}`}>
              <div className={styles.informacoes}>
                <p>Linha Odonto</p>
                <h3>HO8</h3>
                <Link href="/odonto/h08" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>HO8</h2>
              </div>
              <img src="/static/images/produtos/odonto/ho8.png" alt="Produto" />
            </div>
            <div className={` ${styles.produto2}`}>
              <div className={styles.informacoes}>
                <p>Linha Odonto</p>
                <h3>HO12-01</h3>
                <Link href="/odonto/ho12" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>HO12-01</h2>
              </div>
              <img
                src="/static/images/produtos/odonto/ho-12-01.png"
                alt="Produto"
              />
            </div>
          </div>

          <div className={`${styles.linha} mt-[4rem]`}>
            <div className={` ${styles.produto2}`}>
              <div className={styles.informacoes}>
                <p>Linha Odonto</p>
                <h3>HO18-01</h3>
                <Link href="/odonto/ho18" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>HO18-01</h2>
              </div>
              <img
                src="/static/images/produtos/odonto/ho-18-01.png"
                alt="Produto"
              />
            </div>

            <div className={` ${styles.produto2}`}>
              <div className={styles.informacoes}>
                <p>Linha Odonto</p>
                <h3>HO19</h3>
                <Link href="/odonto/ho19" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>HO19</h2>
              </div>
              <img
                src="/static/images/produtos/odonto/h19-01.png"
                alt="Produto"
              />
            </div>
          </div>

          <div className={`${styles.linha} mt-[4rem]`}>
            <div className={` ${styles.produto2}`}>
              <div className={styles.informacoes}>
                <p>Linha Odonto</p>
                <h3>HO23-01</h3>
                <Link href="/odonto/ho23" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>HO23-01</h2>
              </div>
              <img
                src="/static/images/produtos/odonto/ho23-01.png"
                alt="Produto"
              />
            </div>
          </div>
        </div>
      </section>
      {/*
            ODONTO
          */}
      {/*
            lab
          */}
      <a id="lab" className="bg-[#3d74e7]"></a>
      <section className={`${styles.background} bg-[#376cd9]`}>
        <div className={styles.interno}>
          <div className={styles.linha}>
            <div className={` ${styles.produto3}`}>
              <div className={styles.informacoes2}>
                <p>Linha Lab</p>
                <h3>Swab-Pró</h3>
                <Link href="/lab/swab" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo2}>
                <h2>Swab-Pró</h2>
              </div>
              <img
                src="/static/images/produtos/lab/Swab-01.png"
                alt="Produto"
              />
            </div>
          </div>
        </div>
      </section>
      {/*
            lab
          */}

      {/*
            Personalizados
          */}
      <a id="personalizados" className="bg-[#3d74e7]"></a>

      <section className={`${styles.background} bg-[#666666]`}>
        <div className={styles.interno}>
          <div className={styles.linha}>
            <div className={` ${styles.produto4}`}>
              <div className={styles.informacoes}>
                <p>Linha Personalizados</p>
                <h3>H19-9 6 Ótica Otorrino</h3>
                <Link href="/personalizado/h19otorrino" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>Ótica Otorrino</h2>
              </div>
              <img
                src="/static/images/produtos/personalizado/h19-9-6-oticaotorrino.png"
                alt="Produto"
              />
            </div>

            <div className={` ${styles.produto4}`}>
              <div className={styles.informacoes}>
                <p>Linha Personalizados</p>
                <h3>H26 1 Ótica</h3>
                <Link href="/personalizado/h261otica" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>H26 1 Ótica</h2>
              </div>
              <img
                src="/static/images/produtos/personalizado/h26-1otica.png"
                alt="Produto"
              />
            </div>
          </div>

          <div className={`${styles.linha} mt-[4rem]`}>
            <div className={` ${styles.produto4}`}>
              <div className={styles.informacoes}>
                <p>Linha Personalizados</p>
                <h3>H26 2 Óticas</h3>
                <Link href="/personalizado/h262otica" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>H26 2 Óticas</h2>
              </div>
              <img
                src="/static/images/produtos/personalizado/h26-2oticas.png"
                alt="Produto"
              />
            </div>

            <div className={` ${styles.produto4}`}>
              <div className={styles.informacoes}>
                <p>Linha Personalizados</p>
                <h3>H26 Ótica Camisa</h3>
                <Link href="/personalizado/h26camisa" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>Ótica Camisa</h2>
              </div>
              <img
                src="/static/images/produtos/personalizado/h26-OticaCamisa.png"
                alt="Produto"
              />
            </div>
          </div>

          <div className={`${styles.linha} mt-[4rem]`}>
            <div className={` ${styles.produto4}`}>
              <div className={styles.informacoes}>
                <p>Linha Personalizados</p>
                <h3>H28-70 Cabo de Fibra Ótica</h3>
                <Link href="/personalizado/h28fibra" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>H28-70 Cabo de Fibra Ótica</h2>
              </div>
              <img
                src="/static/images/produtos/personalizado/h28-70-cabodefibraotica.png"
                alt="Produto"
              />
            </div>

            <div className={` ${styles.produto4}`}>
              <div className={styles.informacoes}>
                <p>Linha Personalizados</p>
                <h3>H28-70 Motor de Buco</h3>
                <Link href="/personalizado/h28motor" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>Motor Buco</h2>
              </div>
              <img
                src="/static/images/produtos/personalizado/h28-70-motordebuco.png"
                alt="Produto"
              />
            </div>
          </div>

          <div className={`${styles.linha} mt-[4rem]`}>
            <div className={` ${styles.produto4}`}>
              <div className={styles.informacoes}>
                <p>Linha Personalizados</p>
                <h3>H28-140 Pinças Curtas</h3>
                <Link href="/personalizado/h28pincas" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>Pinças Curtas</h2>
              </div>
              <img
                src="/static/images/produtos/personalizado/h28-140-pincascurtas.png"
                alt="Produto"
              />
            </div>

            <div className={` ${styles.produto4}`}>
              <div className={styles.informacoes}>
                <p>Linha Personalizados</p>
                <h3>H39-110 Perfurador</h3>
                <Link
                  href="/personalizado/h39perfurador"
                  passHref
                  legacyBehavior
                >
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>H39-110 Perfurador</h2>
              </div>
              <img
                src="/static/images/produtos/personalizado/h39-110-perfurador.png"
                alt="Produto"
              />
            </div>
          </div>

          <div className={`${styles.linha} mt-[4rem]`}>
            <div className={` ${styles.produto4}`}>
              <div className={styles.informacoes}>
                <p>Linha Personalizados</p>
                <h3>H45 Ótica</h3>
                <Link href="/personalizado/h45otica" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>H45 Ótica</h2>
              </div>
              <img
                src="/static/images/produtos/personalizado/h45-Otica.png"
                alt="Produto"
              />
            </div>

            <div className={` ${styles.produto4}`}>
              <div className={styles.informacoes}>
                <p>Linha Personalizados</p>
                <h3>H45 2 Óticas</h3>
                <Link href="/personalizado/h452otica" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>H45 2 Óticas</h2>
              </div>
              <img
                src="/static/images/produtos/personalizado/h45-2oticas.png"
                alt="Produto"
              />
            </div>
          </div>

          <div className={`${styles.linha} mt-[4rem]`}>
            <div className={` ${styles.produto4}`}>
              <div className={styles.informacoes}>
                <p>Linha Personalizados</p>
                <h3>H45 Mão do Shaver</h3>
                <Link href="/personalizado/h45shaver" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>Mão do Shaver</h2>
              </div>
              <img
                src="/static/images/produtos/personalizado/h45-maodoshaver.png"
                alt="Produto"
              />
            </div>

            <div className={` ${styles.produto4}`}>
              <div className={styles.informacoes}>
                <p>Linha Personalizados</p>
                <h3>H49-70 Cistocópio</h3>
                <Link
                  href="/personalizado/h49cistocopio"
                  passHref
                  legacyBehavior
                >
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>H49-70 Cistocópio</h2>
              </div>
              <img
                src="/static/images/produtos/personalizado/h49-70-Cistoscopia.png"
                alt="Produto"
              />
            </div>
          </div>

          <div className={`${styles.linha} mt-[4rem]`}>
            <div className={` ${styles.produto4}`}>
              <div className={styles.informacoes}>
                <p>Linha Personalizados</p>
                <h3>H49-100 Ureteroscópio</h3>
                <Link
                  href="/personalizado/h49ureteroscopio"
                  passHref
                  legacyBehavior
                >
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>H49-100 Ureteroscópio</h2>
              </div>
              <img
                src="/static/images/produtos/personalizado/h49-100-Ureteroscopio.png"
                alt="Produto"
              />
            </div>

            <div className={` ${styles.produto4}`}>
              <div className={styles.informacoes}>
                <p>Linha Personalizados</p>
                <h3>H52-100 Artroscopia Básica</h3>
                <Link
                  href="/personalizado/h52artroscopia"
                  passHref
                  legacyBehavior
                >
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>Artroscopia Básica</h2>
              </div>
              <img
                src="/static/images/produtos/personalizado/h52-100-Artroscopia.png"
                alt="Produto"
              />
            </div>
          </div>

          <div className={`${styles.linha} mt-[4rem]`}>
            <div className={` ${styles.produto4}`}>
              <div className={styles.informacoes}>
                <p>Linha Personalizados</p>
                <h3>H52-160 Estojo para Pinças Curtas ou Longas</h3>
                <Link href="/personalizado/h52picas" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>Pinças Longas</h2>
              </div>
              <img
                src="/static/images/produtos/personalizado/h52-160-PincasCurtasLongas.png"
                alt="Produto"
              />
            </div>
          </div>
        </div>
      </section>

      {/*
            Personalizados
          */}

      <Rodape />
      <RodapeNewFly />
    </>
  );
}
