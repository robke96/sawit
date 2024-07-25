import Link from "next/link";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
        <Link className={style.footer__link} href="#"><p>&#169; 2024 SawIT. All right reserved</p></Link>
    </footer>
  )
}

export default Footer