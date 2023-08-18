import styles from "./Footer.module.scss";
import { NavLink } from "react-router-dom";
import { Container } from "@mui/material";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation("common");
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.box}>
          <NavLink to="/">
            <h2>Logo</h2>
          </NavLink>
          <nav>
            <ul>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.active : undefined
                  }
                  to="/"
                  state={{ name: "ilyosbek" }}
                >
                  {t("home")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.active : undefined
                  }
                  to="/blog"
                >
                  {t("blog")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.active : undefined
                  }
                  to="/about"
                >
                  {t("about")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.active : undefined
                  }
                  to="/products"
                >
                  products
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
