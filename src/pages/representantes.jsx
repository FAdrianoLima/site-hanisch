import Menu from "../components/menu";
import Rodape from "../components/rodape";
import styles from "../styles/Quem.module.css";
import RodapeNewFly from "../components/rodape-newfly";
import MapaSVG from "../components/mapa";
import Representantes from "../components/representantes"; // Importe o componente Representantes

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Representantes2() {
  const [uf, setUf] = React.useState("");
  const [representantes, setRepresentantes] = React.useState([]);

  // Crie uma lista de representantes
  const representantesLocais = [
    // Adicione representantes manualmente
    {
      usuario: "Nome do Representante 1",
      empresa: "Empresa 1",
      tipo: "Vendedor(a) Interno",
      fone: "123456789",
      cel01: "987654321",
      cel02: "987654321",
      segmentos: "Segmento 1, Segmento 2",
      email: "email1@example.com",
      cidades: "Cidade 1, Cidade 2",
      whats: "987654321",
      uf: "AM",
    },

    {
      usuario: "Nome do Representante 2",
      empresa: "Empresa 2",
      tipo: "Vendedor(a) Interno",
      fone: "123456789",
      cel01: "987654321",
      cel02: "987654321",
      segmentos: "Segmento 1, Segmento 2",
      email: "email1@example.com",
      cidades: "Cidade 1, Cidade 2",
      whats: "987654321",
      uf: "AM",
    },
    // Adicione mais representantes conforme necessário
  ];

  React.useEffect(() => {
    if (uf !== "") {
      const newRepresentantes = [...representantesLocais.filter((a) => a.uf === uf)];
      setRepresentantes(newRepresentantes);
    }
  }, [uf]);

  const handleOnClick = (e) => {
    const id = e.currentTarget.getAttribute("id");
    setUf(id);
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
        <div className={`${styles.box2} `}>
          <p className="font-bold text-[#4481FF] uppercase">Representantes</p>
          <p className="uppercase text-[24px] leading-[32px] mt-[3rem] mb-[4rem] ">
            Saiba <a className="font-bold text-[#4481FF] "> onde encontrar </a>
            os nossos <a className="font-bold text-[#4481FF]"> produtos </a>
          </p>
        </div>

        <img className={styles.img} src="/static/images/bg-quem-somos.png" />
      </section>

      
      <section className={`${styles.background3} h-[50rem]`}>
          <div className={styles.box}>
            <h3 className="text-[#4481ff] mb-[1rem]">
              Selecione um Estado:
            </h3>
          <MapaSVG handleOnClick={handleOnClick}/>
          </div>
          <div className={styles.box}>
          <div className="select-input mb-[2rem]">
              <FormControl fullWidth>
                <InputLabel id="select-uf-label">UF</InputLabel>
                <Select
                  labelId="select-uf-label"
                  id="uf"
                  name="uf"
                  value={uf}
                  label="UF"
                  onChange={(event) => setUf(event.target.value)}
                >
                  <MenuItem value="AC">Acre</MenuItem>
                  <MenuItem value="AL">Alagoas</MenuItem>
                  <MenuItem value="AP">Amapá</MenuItem>
                  <MenuItem value="AM">Amazonas</MenuItem>
                  <MenuItem value="BA">Bahia</MenuItem>
                  <MenuItem value="CE">Ceará</MenuItem>
                  <MenuItem value="DF">Distrito Federal</MenuItem>
                  <MenuItem value="ES">Espírito Santo</MenuItem>
                  <MenuItem value="GO">Goiás</MenuItem>
                  <MenuItem value="MA">Maranhão</MenuItem>
                  <MenuItem value="MT">Mato Grosso</MenuItem>
                  <MenuItem value="MS">Mato Grosso do Sul</MenuItem>
                  <MenuItem value="MG">Minas Gerais</MenuItem>
                  <MenuItem value="PA">Pará</MenuItem>
                  <MenuItem value="PB">Paraíba</MenuItem>
                  <MenuItem value="PR">Paraná</MenuItem>
                  <MenuItem value="PE">Pernambuco</MenuItem>
                  <MenuItem value="PI">Piauí</MenuItem>
                  <MenuItem value="RJ">Rio de Janeiro</MenuItem>
                  <MenuItem value="RN">Rio Grande do Norte</MenuItem>
                  <MenuItem value="RS">Rio Grande do Sul</MenuItem>
                  <MenuItem value="RO">Rondônia</MenuItem>
                  <MenuItem value="RR">Roraima</MenuItem>
                  <MenuItem value="SC">Santa Catarina</MenuItem>
                  <MenuItem value="SP">São Paulo</MenuItem>
                  <MenuItem value="SE">Sergipe</MenuItem>
                  <MenuItem value="TO">Tocantins</MenuItem>
                </Select>
              </FormControl>
            </div>

            {representantes.map((r, i) => (
              <Representantes
                id={i}
                nome={r.usuario}
                empresa={r.empresa}
                tipo={r.tipo}
                fone={r.fone}
                cel01={r.cel01}
                cel02={r.cel02}
                email={r.email}
                segmentos={r.segmentos}
                cidades={r.cidades}
                whats={r.whats}
                key={`k_${i}`}
              />
            ))}

          </div>
      </section>


      <Rodape />
      <RodapeNewFly />
    </>
  );
}
