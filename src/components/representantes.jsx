import * as React from "react";
import "../styles/Mapa.module.css";
import styles from "../styles/Mapa.module.css";
import Link from "next/link";

export default function Representantes({
  id = "",
  nome = "",
  empresa = "",
  tipo = "",
  fone = "",
  cel01 = "",
  cel02 = "",
  email = "",
  segmentos = "",
  cidades = "",
  whats = "",
  onClick,
}) {
  const [whatsApp, setWhatsApp] = React.useState("");

  React.useEffect(() => {
    console.log(whats);

    const newWhats = whats
      .replace(/[^\w\s]/gi, "")
      .split(" ")
      .join("");

    setWhatsApp(newWhats);
  }, [whats]);

  
const representantes = [
  {
    nome: 'Fulano de Tal',
    cargo: 'Cargo do Fulano',
    area: 'Área de Atuação',
    // Outras informações sobre o representante
  },
  {
    nome: 'Ciclano da Silva',
    cargo: 'Cargo do Ciclano',
    area: 'Outra Área de Atuação',
    // Outras informações sobre o representante
  },
  // Você pode adicionar mais representantes conforme necessário
];

// Em algum lugar do seu componente 'Representantes', você pode renderizar essas informações


  return (
    <div key={`k_${id}`}>
      <div className={styles.dados}>
        <span>
          <strong>{nome}</strong>
        </span>
        <span>
          Empresa: <b>{empresa}</b>
        </span>
        <span>
          <b>Tipo:</b> {tipo}
        </span>
        <span>
          <b>Fone:</b> {fone}
        </span>
        <span>
          <b>Cel(01):</b> {cel01}
        </span>
        <span>
          <b>Cel(02):</b> {cel02}
        </span>
        <span>
          <b>Email:</b>&nbsp;
          <Link href={`mailto:${email}`}>
            <a>{email}</a>
          </Link>
        </span>

        <span>
          <b>Segmentos:</b> {segmentos}
        </span>
        <span>
          <b>Cidades de atuação:</b> {cidades}
        </span>
      </div>
      <Link href={`https://api.whatsapp.com/send?phone=55${whatsApp}`} passHref>
        <a target="_blank">
          <span className={styles.btn}>
            <img
              className={styles.zap}
              src="/whats.png"
              alt="WhatsApp"
            />
            Chamar no Whats
          </span>
        </a>
      </Link>
    </div>
  );
}