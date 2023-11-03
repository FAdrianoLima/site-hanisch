import * as React from "react";
import styles from "../styles/Menu.module.css";
import Link from "next/link";

function Menu() {
  React.useEffect(() => {
    const btnMobile = document.getElementById(`${styles.btn_mobile}`);
    btnMobile.addEventListener("click", toggleMenu);
  }, []);

  React.useEffect(() => {
    const btnMobile = document.getElementById(`${styles.btn_mobile}`);
    btnMobile.addEventListener("click", toggleMenu);

    window.addEventListener("scroll", () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      const menu = document.getElementById(styles.menuheader);

      if (winScroll > 0) {
        menu.classList.add(styles["menu-alternative"]);
      } else {
        menu.classList.remove(styles["menu-alternative"]);
      }
    });
  }, []);

  const [showSubMenu, setShowSubMenu] = React.useState(false);

  function handleMouseEnter() {
    setShowSubMenu(true);
  };
  
  function handleMouseLeave() {
    setShowSubMenu(false);
  };

  function toggleMenu() {
    const nav = document.getElementById(`${styles.nav}`);
    nav.classList.toggle(styles.active);
  }

  
  return (
    <div id={styles.menuheader} className={styles.header}>
      <div className={`${styles.interno}`}>
        <img src="/static/images/hanisch-logo-cinza.png" alt="Logo branca" className={styles.logo} />

        <button id={`${styles.btn_mobile}`}>
          <span id={`${styles.hamburguer}`}></span>
        </button>

        <ul
          id={`${styles.nav}`}
          className={`${styles.menu} ${styles.navbar} `}
        >
          <li className={styles.li}>
            <Link href="/" passHref legacyBehavior>
              <a> Home</a>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/a-Hanisch" passHref legacyBehavior>
              <a  >Quem somos</a>
            </Link>
          </li>

          <li className={styles.li}>
            <Link href="/produtos" passHref legacyBehavior>
              <a  >Produtos</a>
            </Link>
          </li>

          <li className={styles.li}>
            <Link href="/personalizacao" passHref legacyBehavior>
              <a  >Personalização</a>
            </Link>
          </li>

          <li className={styles.li}>
            <Link href="/blog" passHref legacyBehavior>
              <a  >Blog</a>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/representantes" passHref legacyBehavior>
              <a  >Representantes</a>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/contato" passHref legacyBehavior>
              <a  >Contato</a>
            </Link>
          </li>
        </ul>
      
     <ul className={`${styles.social_media}`}>
          <li>
            <Link href="https://www.facebook.com/HanischMedical" passHref legacyBehavior>
              <a target="_blank">
                <img src="/facebook-branco.png"></img>
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/hanischmedical/" passHref legacyBehavior>
              <a target="_blank">
                <img src="/Instagram-branco.png"></img>
              </a>
            </Link>
          </li>
          <li className={styles.button}>
            <Link href="/contato" passHref legacyBehavior>
              <a  >54 3224.6060</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
