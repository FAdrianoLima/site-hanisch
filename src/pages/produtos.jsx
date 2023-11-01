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
      className={styles.backgroundimg}></section>

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
              <Link href="/produtos/h28-140">
              <h3>H28-140 Standard</h3>
              </Link>
            </div>

            <div className={` ${styles.produto}`}>
              <img 
              src="/static/images/produtos/medical/h28-140.jpg"
              alt="Produto"
              />
              <p> Linha Medical</p>
              <h3>H28-140 Standard</h3>
            </div>

            <div className={` ${styles.produto}`}>
              <img 
              src="/static/images/produtos/medical/h28-140.jpg"
              alt="Produto"
              />
              <p> Linha Medical</p>
              <h3>H28-140 Standard</h3>
            </div>


       </div>

       <div className={styles.linha}>

<div className={` ${styles.produto}`}>
       <img 
       src="/static/images/produtos/medical/h28-140.jpg"
       alt="Produto"
       />
       <p> Linha Medical</p>
       <h3>H28-140 Standard</h3>
     </div>

     <div className={` ${styles.produto}`}>
       <img 
       src="/static/images/produtos/medical/h28-140.jpg"
       alt="Produto"
       />
       <p> Linha Medical</p>
       <h3>H28-140 Standard</h3>
     </div>

     <div className={` ${styles.produto}`}>
       <img 
       src="/static/images/produtos/medical/h28-140.jpg"
       alt="Produto"
       />
       <p> Linha Medical</p>
       <h3>H28-140 Standard</h3>
     </div>


</div>

           </div>
          </section>
      
      <Rodape />
      <RodapeNewFly />
    </>
  );
}
