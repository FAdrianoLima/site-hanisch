import Link from "next/link";
import styles from "../styles/Banner.module.css";
import * as React from "react";

function Banner() {
  const [activeItem, setActiveItem] = React.useState(0); // Estado ativo para o item da lista
  const [bannerImage, setBannerImage] = React.useState(
    "/static/images/hanisch-1.png"
  ); // Estado para a imagem do banner
  const [blockText, setBlockText] = React.useState("Medical"); // Estado para o texto do bloco
  const [blockNumber, setBlockNumber] = React.useState("01"); // Estado para o número do bloco

  const listaItens = ["Medical", "Odonto", "Lab"];

  const textosBlocos = [
    "Cada detalhe é fundamental para compor o design. A sensação de experimentar uma tecnologia no manuseio das mãos, é algo que aproxima o seu espaço com a liberdade do ambiente externo.",
    "Cada detalhe é fundamental para compor o design. A sensação de experimentar uma tecnologia no manuseio das mãos, é algo que aproxima o seu espaço com a liberdade do ambiente externo.",
    "Cada detalhe é fundamental para compor o design. A sensação de experimentar uma tecnologia no manuseio das mãos, é algo que aproxima o seu espaço com a liberdade do ambiente externo.",
  ];

  const handleItemClick = (index) => {
    setActiveItem(index); // Atualiza o estado activeItem quando um item da lista é clicado
    setBannerImage(`/static/images/hanisch-${index}.png`); // Atualiza a imagem do banner com base no índice
    setBlockText(listaItens[index]); // Atualiza o texto do bloco com base no índice
    setBlockNumber((index + 1).toString().padStart(2, "0")); // Atualiza o número do bloco com base no índice
  };

  return (
    <>
      <section className={styles.background}>
       <Link href="/produtos" passHref legacyBehavior>
       <div className={styles.vertical}>
          <img
            style={{ marginRight: "-9rem" }}
            src="/static/images/seta-esquerda.png"
            alt=""
          />
          <p className={styles.textovertical}>ver todos os os produtos</p>
          <img
            style={{ marginLeft: "-9rem" }}
            src="/static/images/seta-direita.png"
            alt=""
          />
        </div>
       </Link>

        <div className={styles.interno}>
          <div
            className={styles.box2}
            style={{
              backgroundImage: `url(${bannerImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className={styles.bloco}>
              <span>
                {listaItens[activeItem]}
                <Link href="/" passHref legacyBehavior>
                  <button>
                    conheça agora &nbsp; &nbsp;
                    <img src="/static/images/seta-direita.png" alt="" />
                  </button>
                </Link>
              </span>
              <p>{textosBlocos[activeItem]}</p>
            </div>
          </div>

          <div className={styles.box}>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p> &nbsp;{activeItem + 1}</p>
          </div>
        </div>

        <Link href="/produtos" passHref legacyBehavior>
        <div className={styles.vertical}>
          <img
            style={{ marginRight: "-9rem" }}
            src="/static/images/seta-esquerda.png"
            alt=""
          />
          <p className={styles.textovertical}>ver todos os os produtos</p>
          <img
            style={{ marginLeft: "-9rem", marginRight: "-15rem" }}
            src="/static/images/seta-direita.png"
            alt=""
          />
        </div>
        </Link>
      </section>
      <section
        className={styles.background2}
        style={{ marginTop: "150px", paddingBottom: "0px" }}
      >
        <div className={styles.lista}>
          <ul>
            {listaItens.map((item, index) => (
              <li
                key={index}
                className={index === activeItem ? styles.active : ""}
                onClick={() => handleItemClick(index)}
              >
                <span>{index + 1}</span> <a>{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.box3}>
          <div className={styles.produto}>
            <h2>Produtos Diferenciados</h2>
            <p>
              Ideal para você que desejar ampliar e inovar nos ambientes da sua
              casa ou apartamento.
            </p>
            <Link href="/" passHref legacyBehavior>
              <a>
                <button>
                  Conheça agora &nbsp; &nbsp;
                  <img src="/static/images/seta-direita.png" alt="" />
                </button>
              </a>
            </Link>
          </div>
          <div>
            <img className={styles.img} src="/static/images/ideia-02.png" />
          </div>
        </div>
      </section>

      <section
        className={styles.background2}
        style={{ marginTop: "0px", paddingTop: "0px" }}
      >
        <div>
          <img
            className={styles.prod}
            src="/static/images/h-52-transparente-8.png"
          />
        </div>
      </section>

      <section
        className={styles.background2}
        style={{
          marginTop: "0px",
          paddingTop: "0px",
          marginBottom: "0px",
          paddingBottom: "0px",
        }}
      >
        <div className={styles.box5}>
          <span className={styles.cotacao}>
            <h3>FAÇA UMA COTAÇÃO</h3>
            <p>
              Fale agora com um de nossos atendentes, a Hanisch é a certeza de
              qualidade e o melhor acabamento.
            </p>

            <button>54 3224.6060</button>

            <Link href="/contato" passHref legacyBehavior>
              <h4>Mais formas de contato</h4>
            </Link>
          </span>
        </div>
        <div className={styles.box33}>
          <span className={styles.somos}>
            <p>
              Olá, somos a <a>HANISCH</a> Sua <a>melhor opção</a> em estojos
              esterilizados no brasil.
            </p>
            <Link href="/" passHref legacyBehavior>
              <button>
                Quem Somos &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <img src="/static/images/seta-direita.png" alt="" />
              </button>
            </Link>
          </span>
        </div>
      </section>

      <section
        className={styles.background2}
        style={{ marginTop: "-25px", paddingTop: "0px" }}
      >
        <div className={styles.interno2}>
         
        <div className={styles.boxblog}>

          <h4 className={styles.h4}>Últimas do Blog</h4>

          <div className={styles.blog}>
            <img src="/static/images/blog/blog-01.png" />
            <p>01 de março de 2019</p>
            <h4>Fechar ou não fechar sua sacada? Conheça os benefícios!</h4>
            <p className={styles.descricao}>
              A transformação da sacada em um ambiente fechado, tem sido a
              escolha de muitas pessoas que buscam por ampliar os seus espaços.
              É uma alternativa perfeita e bastante indicada para deixar uma
              área externa ainda mais proveitosa até nas estações mais rígidas.
            </p>
            <span>
              <button>conforto</button>
              <button
              style={{marginLeft:"0.5rem", marginRight:"0.5rem"}}
              >conforto</button>{" "}
              <button>conforto</button>
            </span>
          </div>
          </div>

        <div className={styles.boxblog2}>
        <div className={styles.blog}>
            <img src="/static/images/blog/blog-01.png" />
            <p>01 de março de 2019</p>
            <h4>Fechar ou não fechar sua sacada? Conheça os benefícios!</h4>
            <p className={styles.descricao}>
              A transformação da sacada em um ambiente fechado, tem sido a
              escolha de muitas pessoas que buscam por ampliar os seus espaços.
              É uma alternativa perfeita e bastante indicada para deixar uma
              área externa ainda mais proveitosa até nas estações mais rígidas.
            </p>
            <span>
              <button>conforto</button>
              <button
              style={{marginLeft:"0.5rem", marginRight:"0.5rem"}}
              >conforto</button>{" "}
              <button>conforto</button>
            </span>
          </div>
        </div>

        <div className={styles.boxblog}>

        <h4 className={styles.h4}
        style={{display:"none"}}
        >Últimas do Blog</h4>

          <div className={styles.blog}>
            <img src="/static/images/blog/blog-01.png" />
            <p>01 de março de 2019</p>
            <h4>Fechar ou não fechar sua sacada? Conheça os benefícios!</h4>
            <p className={styles.descricao}>
              A transformação da sacada em um ambiente fechado, tem sido a
              escolha de muitas pessoas que buscam por ampliar os seus espaços.
              É uma alternativa perfeita e bastante indicada para deixar uma
              área externa ainda mais proveitosa até nas estações mais rígidas.
            </p>
            <span>
              <button>conforto</button>
              <button
              style={{marginLeft:"0.5rem", marginRight:"0.5rem"}}
              >conforto</button>{" "}
              <button>conforto</button>
            </span>
          </div>
          </div>

          <div className={styles.boxblog3}>
        <Link href="/" passHref legacyBehavior>
        <p className={styles.vejamais}>
          Veja mais <br />
          em nosso <b>blog</b>  <img
          className={styles.img2}
          src="/static/images/seta-direita-2.png" alt="" />
          </p>
        </Link>
          <div 
          className={styles.linha}
          />
          </div>

        </div>
      </section>
    </>
  );
}

export default Banner;
