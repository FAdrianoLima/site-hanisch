import * as React from "react";
import Menu from "../components/menu";
import Rodape from "../components/rodape";
import styles from "../styles/Contato.module.css";
import Link from "next/link";
import GoogleMap from "../components/map";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#322783",
    },
    secondary: {
      main: "#4481ff",
    },
  },
});

export default function Contato() {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [cidade, setCidade] = React.useState("");
  const [mensagem, setMensagem] = React.useState("");
  const [showAlertSuccess, setShowAlertSuccess] = React.useState(false);
  const [showAlertDanger, setShowAlertDanger] = React.useState(false);
  const [error, setError] = React.useState({});
  const [disableButton, setDisableButton] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const nome = data.get("nome");
    const email = data.get("email");
    const setor = data.get("setor");

    let isValid = true;
    const newError = { ...error };

    if (email.trim() === "") {
      newError.email = true;
      isValid = false;
    }

    if (nome.trim() === "") {
      newError.nome = true;
      isValid = false;
    }

    if (telefone.trim() === "") {
      newError.telefone = true;
      isValid = false;
    }

    if (cidade.trim() === "") {
      newError.cidade = true;
      isValid = false;
    }

    setError(newError);

    if (!isValid) return;

    setDisableButton(true);

    SendContato({
      nome,
      email,
      cidade,
      telefone,
      mensagem,
    })
      .then((retorno) => {
        const { status } = retorno;

        if (status === 201) {
          setShowAlertSuccess(true);
        } else {
          setShowAlertDanger(true);
        }
      })
      .catch(() => setShowAlertDanger(true))
      .finally(() => {
        setNome("");
        setEmail("");
        setCidade("");
        setTelefone("");
        setMensagem("");
        setDisableButton(false);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Menu />

      <section
        className={styles.background3}
        style={{ paddingBottom: "0px" }}
      ></section>

      <section
        style={{ paddingTop: "0px", paddingBottom: "0px" }}
        className={`${styles.background2}`}
      >
        <div className={`${styles.box2} `}>
          <p className="font-bold text-[#4481FF]">CONTATO</p>
          <p className="uppercase text-[24px] leading-[32px] mt-[3rem] ">
            Fale <a className="font-bold text-[#4481FF] "> conosco,</a> <br />
            estamos aguardando
            <br />o seu<a className="font-bold text-[#4481FF]">contato!</a>
          </p>
        </div>

        <div className={`${styles.box} mt-[5rem]`}>
          <Link href="https://api.whatsapp.com/send?phone=555432246060">
            <a target="_blank">
              <img src="/whatsapp-cinza.png" /> <span>54 3224.6060</span>
            </a>
          </Link>

          <Link href="https://api.whatsapp.com/send?phone=5554999750481">
            <a target="_blank">
              <img src="/whatsapp-cinza.png" /> <span>54 9 9975.0481</span>
            </a>
          </Link>

          <Link href="mailto:contato@hanisch-medical.com.br">
            <a target="_blank">
              <img src="/icon.png" /> contato@hanisch-medical.com.br
            </a>
          </Link>
        </div>
      </section>

      <section style={{ paddingTop: "5rem" }} className={`${styles.background} bg-[#2C2C2C] text-[#fff]`}>
        <div className={styles.interno}>
         
            <div className={` ${styles.mobile}`}>
              <div
                className={` ${styles.box}`}
                style={{ alignItems: "center" }}
              >
                <p className="text-[#999999] mb-[2rem]">Complete o formulário abaixo para entrar em contato.</p>

                <Box
                  component="form"
                  sx={{ width: "100%" }}
                  noValidate
                  autoComplete="off"
                  onSubmit={handleSubmit}
                >
                  <div className="w-full flex flex-row sm:flex-nowrap flex-wrap justify-between items-center">
                    <TextField
                      value={nome || ""}
                      type="text"
                      margin="normal"
                      required
                      fullWidth
                      id="nome"
                      label="Nome"
                      name="nome"
                      autoFocus
                      onChange={(event) => setNome(event.target.value)}
                      sx={{ marginLeft: ".5rem", marginRight: ".5rem" }}
                      onFocus={() => {
                        const newError = { ...error };
                        newError.nome = false;
                        setError(newError);
                      }}
                      error={error.nome}
                      helperText={error.nome ? "campo obrigatório" : ""}
                    />

                    <TextField
                      value={email || ""}
                      type="text"
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="E-Mail"
                      name="email"
                      onChange={(event) => setEmail(event.target.value)}
                      sx={{ marginLeft: ".5rem", marginRight: ".5rem" }}
                      onFocus={() => {
                        const newError = { ...error };
                        newError.email = false;
                        setError(newError);
                      }}
                      error={error.email}
                      helperText={error.email ? "campo obrigatório" : ""}
                    />
                  </div>

                  <div className="w-full flex flex-row sm:flex-nowrap flex-wrap justify-between items-center">
                    <TextField
                      value={cidade || ""}
                      type="text"
                      margin="normal"
                      required
                      fullWidth
                      id="cidade"
                      label="Cidade"
                      name="cidade"
                      autoFocus
                      onChange={(event) => setNome(event.target.value)}
                      sx={{ marginLeft: ".5rem", marginRight: ".5rem" }}
                      onFocus={() => {
                        const newError = { ...error };
                        newError.nome = false;
                        setError(newError);
                      }}
                      error={error.nome}
                      helperText={error.nome ? "campo obrigatório" : ""}
                    />

                    <TextField
                      value={telefone || ""}
                      type="text"
                      margin="normal"
                      required
                      fullWidth
                      id="telefone"
                      label="Telefone"
                      name="telefone"
                      onChange={(event) => setEmail(event.target.value)}
                      sx={{ marginLeft: ".5rem", marginRight: ".5rem" }}
                      onFocus={() => {
                        const newError = { ...error };
                        newError.email = false;
                        setError(newError);
                      }}
                      error={error.email}
                      helperText={error.email ? "campo obrigatório" : ""}
                    />
                  </div>
                  
                  <div style={{ marginLeft: ".5rem", marginRight: ".5rem" }}>
                    <TextField
                      value={mensagem || ""}
                      type="text"
                      margin="normal"
                      fullWidth
                      id="mensagem"
                      label="Mensagem"
                      name="mensagem"
                      multiline
                      rows={4}
                      onChange={(event) => setMensagem(event.target.value)}
                    />
                  </div>
                  <div className="flex flex-row w-full items-center justify-center ">
                    <Button
                      type="submit"
                      variant="contained"
                      className="bg-[#4481ff] hover:bg-[#2466f0] text-white mx-[.5rem] p-4 mt-2 font-bold radius-[1rem]  cursor-pointer"
                      sx={{ marginLeft: 0, marginRight: 0 }}
                      disabled={disableButton}
                    >
                      ENVIAR AGORA
                    </Button>
                  </div>
                </Box>
              </div>
          </div>
        </div>
      </section>
      <section className={`${styles.background} pt-[5rem] flex-col`}>

        <h3 className="text-[24px] text-[#666666]">LOCALIZAÇÃO</h3>
        <p className="text-[14px] text-[#666666] mt-[1rem] mb-[3rem]">Av. Rubem Bento Alves, 4395 - Santa Catarina, Caxias do Sul - RS, 95032-440</p>
        <GoogleMap />
      </section>
      <Rodape />
      <Snackbar
        open={showAlertSuccess}
        autoHideDuration={6000}
        onClose={() => setShowAlertSuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setShowAlertSuccess(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Seu contato foi enviado com sucesso!
        </Alert>
      </Snackbar>
      <Snackbar
        open={showAlertDanger}
        autoHideDuration={6000}
        onClose={() => setShowAlertDanger(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setShowAlertDanger(false)}
          severity="warning"
          sx={{ width: "100%" }}
        >
          Não foi possível enviar o contato!
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}
