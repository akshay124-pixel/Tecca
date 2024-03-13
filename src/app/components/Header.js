import styles from "../styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import Nav from "../components/Nav";

const Header = () => {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href="/">
          <Image src="/logo.svg" alt="my logo image" width={250} height={250} />
        </Link>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
