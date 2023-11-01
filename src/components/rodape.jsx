import * as React from "react";
import Box from "@mui/material/Box";
import styles from "../styles/Rodape.module.css";
import PhoneIcon from "@mui/icons-material/Phone";
import RoomIcon from "@mui/icons-material/Room";
import EmailIcon from "@mui/icons-material/Email";
import TextField,  { TextFieldProps }  from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Link from "next/link";
import Button from "@mui/material/Button";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#c4c4c4",
    },
    secondary: {
      main: "#c4c4c4",
    },
  },
};

const theme = createTheme(themeOptions);

function Rodape() {
  
  return (
    <footer id="rodape" className={styles.background}>
      <div className={styles.interno}>
        <div
          className={styles.box_row}
        >
        
      

               <div
              className={` ${styles.box_row}`}
            >
                <img
              src="favicon.png"
              alt="Favicon"
              className={styles.logo}
              />

               
              <p>
              <img
              src="localizacao.png"
              alt="Localizacao"
              className={styles.icon}
              />
              RS 240, 41 - Loteamento Arco Íris - 93180-000 - Portão/RS 
              </p>

              <Link href="/contato">
                <button>
                  fale conosco
                </button>
              </Link>
            </div>
            
           
              <ul className={styles.social_media}>
              <li
               className={styles.Whats}
              >
                  <Link href="https://api.whatsapp.com/send?phone=555135629700">
                    <a target="_blank">
                      <img src="/whatsapp-cinza.png" /> 55 51 3562 9700
                    </a>
                  </Link>
                </li>
                <li
                 className={styles.Whats}
                >
                  <Link
                  href="https://api.whatsapp.com/send?phone=5554999750481">
                    <a target="_blank">
                      <img src="/whatsapp-cinza.png" /> 54 9 9975.0481
                    </a>
                  </Link>
                </li>
                <span>
                <li>
            <Link href="https://www.facebook.com/HanischMedical">
                    <a target="_blank">
                      <img src="/facebook-azul.png" />
                    </a>
                  </Link>
                </li>
                <li>
            <Link href="https://www.instagram.com/hanischmedical/">
                    <a target="_blank">
                      <img src="/Instagram-azul.png" />
                    </a>
                  </Link>
                </li>
                </span>
              </ul>
              

        </div>
      </div>
    
    </footer>
  );
}

export default Rodape;
