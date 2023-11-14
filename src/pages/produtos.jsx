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
                <Link
                  href="/medical/hl-26x17-parafuso"
                  passHref
                  legacyBehavior
                >
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
                <Link
                  href="/medical/hl-26x26-parafuso"
                  passHref
                  legacyBehavior
                >
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
                <Link
                  href="/medical/hl-26x17-implante"
                  passHref
                  legacyBehavior
                >
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
                <Link
                  href="/medical/hl-26x26-implante"
                  passHref
                  legacyBehavior
                >
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

      <section className={`${styles.background} bg-[#3d74e7]`}>
        <div className={styles.interno}>
          <div className={styles.linha}>
            <div className={` ${styles.produto2}`}>
              <div className={styles.informacoes}>
                <p>Linha Odonto</p>
                <h3>H12-01</h3>
                <Link href="/medical/h12-01" passHref legacyBehavior>
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
                <Link href="/medical/h18-01" passHref legacyBehavior>
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
        </div>
      </section>

      <section className={`${styles.background} bg-[#376cd9]`}>
        <div className={styles.interno}>
          <div className={styles.linha}>
            <div className={` ${styles.produto2}`}>
              <div className={styles.informacoes}>
                <p>Linha Medical</p>
                <h3>H28-140 Standard</h3>
                <Link href="/produtos/h28-140" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>H28-140</h2>
              </div>
              <img src="/static/images/h-52-transparente.png" alt="Produto" />
            </div>

            <div className={` ${styles.produto2}`}>
              <div className={styles.informacoes}>
                <p>Linha Medical</p>
                <h3>H28-140 Standard</h3>
                <Link href="/produtos/h28-140" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>H28-140</h2>
              </div>
              <img src="/static/images/h-52-transparente.png" alt="Produto" />
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.background} bg-[#666666]`}>
        <div className={styles.interno}>
          <div className={styles.linha}>
            <div className={` ${styles.produto2}`}>
              <div className={styles.informacoes}>
                <p>Linha Medical</p>
                <h3>H28-140 Standard</h3>
                <Link href="/produtos/h28-140" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>H28-140</h2>
              </div>
              <img src="/static/images/h-52-transparente.png" alt="Produto" />
            </div>

            <div className={` ${styles.produto2}`}>
              <div className={styles.informacoes}>
                <p>Linha Medical</p>
                <h3>H28-140 Standard</h3>
                <Link href="/produtos/h28-140" passHref legacyBehavior>
                  <button>Ver Produto</button>
                </Link>
              </div>
              <div className={styles.textoFundo}>
                <h2>H28-140</h2>
              </div>
              <img src="/static/images/h-52-transparente.png" alt="Produto" />
            </div>
          </div>
        </div>
      </section>


      <Rodape />
      <RodapeNewFly />
    </>
  );
}
