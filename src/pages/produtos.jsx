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

      <section className={`${styles.background}`}>
        <div className={styles.interno}>
          <div className={styles.linha}>
            <div className={` ${styles.produto}`}>
              <img
                src="/static/images/produtos/medical/h28-140.jpg"
                alt="Produto"
              />
              <p> Linha Medical</p>
              <Link href="/produtos/h28-140" passHref legacyBehavior>
                <h3>H28-140 Standard</h3>
              </Link>
            </div>

            <div className={` ${styles.produto}`}>
              <img
                src="/static/images/produtos/medical/h28-70.jpg"
                alt="Produto"
              />
              <p> Linha Medical</p>
              <Link href="/produtos/h28-70" passHref legacyBehavior>
                <h3>H28-70 Standard</h3>
              </Link>
            </div>

            <div className={` ${styles.produto}`}>
              <img
                src="/static/images/produtos/medical/h32-01.jpg"
                alt="Produto"
              />
              <p> Linha Medical</p>
              <Link href="/produtos/h32-01" passHref legacyBehavior>
                <h3>H32 Standard</h3>
              </Link>
            </div>
          </div>

          <div className={styles.linha}>
            <div className={` ${styles.produto}`}>
              <img
                src="/static/images/produtos/medical/h37-90.jpg"
                alt="Produto"
              />
              <p> Linha Medical</p>
              <Link href="/produtos/h37-90" passHref legacyBehavior>
                <h3>H37-90 Standard</h3>
              </Link>
            </div>

            <div className={` ${styles.produto}`}>
              <img
                src="/static/images/produtos/medical/h39-110.jpg"
                alt="Produto"
              />
              <p> Linha Medical</p>
              <Link href="/produtos/h39-110" passHref legacyBehavior>
                <h3>H39-110 Standard</h3>
              </Link>
            </div>

            <div className={` ${styles.produto}`}>
              <img
                src="/static/images/produtos/medical/h49-100.jpg"
                alt="Produto"
              />
              <p> Linha Medical</p>
              <Link href="/produtos/h49-100" passHref legacyBehavior>
                <h3>H49-100 Standard</h3>
              </Link>
            </div>
          </div>

          <div className={styles.linha}>
            <div className={` ${styles.produto}`}>
              <img
                src="/static/images/produtos/medical/h49-70.jpg"
                alt="Produto"
              />
              <p> Linha Medical</p>
              <Link href="/produtos/h49-70" passHref legacyBehavior>
                <h3>h49-70 Standard</h3>
              </Link>
            </div>

            <div className={` ${styles.produto}`}>
              <img
                src="/static/images/produtos/medical/h52-100.jpg"
                alt="Produto"
              />
              <p> Linha Medical</p>
              <Link href="/produtos/h52-100" passHref legacyBehavior>
                <h3>H52-100 Standard</h3>
              </Link>
            </div>

            <div className={` ${styles.produto}`}>
              <img
                src="/static/images/produtos/medical/h52-160.jpg"
                alt="Produto"
              />
              <p> Linha Medical</p>
              <Link href="/produtos/h52-160" passHref legacyBehavior>
                <h3>H52 160 Standard</h3>
              </Link>
            </div>
          </div>

          <div className={styles.linha}>
          <div className={` ${styles.produto}`}>
              <img
                src="/static/images/produtos/medical/h26.jpg"
                alt="Produto"
              />
              <p> Linha Medical</p>
              <Link href="/produtos/h26" passHref legacyBehavior>
                <h3>H26 Standard</h3>
              </Link>
            </div>

            <div className={` ${styles.produto}`}>
              <img
                src="/static/images/produtos/medical/h45.jpg"
                alt="Produto"
              />
              <p> Linha Medical</p>
              <Link href="/produtos/h45" passHref legacyBehavior>
                <h3>H45 Standard</h3>
              </Link>
            </div>

            <div className={` ${styles.produto}`}>
              <img
                src="/static/images/produtos/medical/h14.jpg"
                alt="Produto"
              />
              <p> Linha Medical</p>
              <Link href="/produtos/h14" passHref legacyBehavior>
                <h3>H14 Standard</h3>
              </Link>
            </div>
          </div>

          <div className={styles.linha}>
          <div className={` ${styles.produto}`}>
              <img
                src="/static/images/produtos/medical/hl-26x17-parafuso.jpg"
                alt="Produto"
              />
              <p> Linha Medical</p>
              <Link href="/produtos/hl-26x17-parafuso" passHref legacyBehavior>
                <h3>HL26x17 Parafuso</h3>
              </Link>
            </div>

            <div className={` ${styles.produto}`}>
              <img
                src="/static/images/produtos/medical/hl-26x26-parafuso.jpg"
                alt="Produto"
              />
              <p> Linha Medical</p>
              <Link href="/produtos/hl-26x26-parafuso" passHref legacyBehavior>
                <h3>HL26x26 Parafuso</h3>
              </Link>
            </div>

            <div className={` ${styles.produto}`}>
              <img
                src="/static/images/produtos/medical/hl-26x17-implante.jpg"
                alt="Produto"
              />
              <p> Linha Medical</p>
              <Link href="/produtos/hl-26x17-implante" passHref legacyBehavior>
                <h3>HL26x17 Implante</h3>
              </Link>
            </div>
          </div>

          <div className={styles.linha}>
          <div className={` ${styles.produto}`}>
              <img
                src="/static/images/produtos/medical/hl-26x26-implante.jpg"
                alt="Produto"
              />
              <p> Linha Medical</p>
              <Link href="/produtos/hl-26x26-implante" passHref legacyBehavior>
                <h3>HL26x26 Implante</h3>
              </Link>
            </div>

            <div className={` ${styles.produto}`}>
              <img
                src="/static/images/produtos/medical/h37-bandeja.jpg"
                alt="Produto"
              />
              <p> Linha Medical</p>
              <Link href="/produtos/h28-140" passHref legacyBehavior>
                <h3>H37 bandeja</h3>
              </Link>
            </div>

            <div className={` ${styles.produto}`}>
              <img
                src="/static/images/produtos/medical/h49-bandeja.jpg"
                alt="Produto"
              />
              <p> Linha Medical</p>
              <Link href="/produtos/h49-bandeja" passHref legacyBehavior>
                <h3>H49 Bandeja</h3>
              </Link>
            </div>
          </div>

          <div className={styles.linha}>
          <div className={` ${styles.produto}`}>
              <img
                src="/static/images/produtos/medical/h52-bandeja.jpg"
                alt="Produto"
              />
              <p> Linha Medical</p>
              <Link href="/produtos/h52-bandeja" passHref legacyBehavior>
                <h3>H52 bandeja</h3>
              </Link>
            </div>

            <div className={` ${styles.produto}`}>
              <img
                src="/static/images/produtos/medical/h28-140.jpg"
                alt="Produto"
              />
              <p> Linha Medical</p>
              <Link href="/produtos/h28-140" passHref legacyBehavior>
                <h3>H28-140 Standard</h3>
              </Link>
            </div>

            <div className={` ${styles.produto}`}>
              <img
                src="/static/images/produtos/medical/h28-140.jpg"
                alt="Produto"
              />
              <p> Linha Medical</p>
              <Link href="/produtos/h28-140" passHref legacyBehavior>
                <h3>H28-140 Standard</h3>
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Rodape />
      <RodapeNewFly />
    </>
  );
}
