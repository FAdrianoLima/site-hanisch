import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/Quem.module.css";

const CarrosselAutomatico = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/static/images/hanisch-0.png",
    "/static/images/hanisch-index-02.jpg",
    "/static/images/quem-somos.png",
  ];
  const totalImages = images.length;
  const carrosselRef = useRef(null);

  // Função para avançar para a próxima imagem
  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % totalImages);
  };

  // Atualiza a imagem a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000); // 3000 milissegundos = 3 segundos

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section
      className={`${styles.background2} h-[43.6rem] mt-[0rem] pb-[0rem] pt-[0rem]`}
    >
      <div className={`${styles.carrossel} `} ref={carrosselRef}>
        {images.map((image, index) => (
          <img
            key={index}
            className={`${styles.item} ${
              currentIndex === index ? styles.active : ""
            }`}
            src={image}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          />
        ))}
      </div>
      <div className={styles.boxazul}>
        <h3>
        Desenvolvimento e Execução de Projetos
        </h3>
        <p>
          Além da fabricação dos estojos, a Hanisch também faz a personalização,
          partindo do produto standard, passando por todos os processos até
          chegar no produto final. Utilizando a mais alta tecnologia em
          softwares de design 3D, com uma equipe de projetos preparada para
          praticar os processos mais eficientes que agilizam a confecção dos
          kits para esterilização personalizados. A variedade promovida pela
          personalização é imensa. O estojo que antes era comum, se torna
          especial, podendo acomodar qualquer instrumental, tonando o kit para
          esterilização ainda mais eficiente, seguro e com o seu jeito.
        </p>
        <ul>
        <li> <img src="/static/images/circulo-branco.png" /> Projetos especiais para implantes </li>
        <li> <img src="/static/images/circulo-branco.png" /> Personalização de logo </li>
        <li>  <img src="/static/images/circulo-branco.png" /> Gravação Laser </li>
        <li>  <img src="/static/images/circulo-branco.png" /> Gravação Silk </li>
        <li>  <img src="/static/images/circulo-branco.png" /> Fixadores de silicone </li>
        <li>  <img src="/static/images/circulo-branco.png" /> Fixadores de silicone conforme projeto </li>
        </ul>
       
      </div>
    </section>
  );
};

export default CarrosselAutomatico;
