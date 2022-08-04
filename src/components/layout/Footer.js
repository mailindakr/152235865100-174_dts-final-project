
// styles
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className="text-muted">
          © {currentYear} Games World
        </p>
        <p className={styles.created}>
          Created{" "}
          <span>
          </span>{" "}
          152235865100-174 - Mailinda Kirana
        </p>
      </div>
    </footer>
  );
};

export default Footer;
