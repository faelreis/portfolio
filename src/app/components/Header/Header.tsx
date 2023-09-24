import style from "./header.module.css";
import Image from "next/image";
import logoRafael from "../../assets/rafael-logo.svg";

export function Header() {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.wrapperHeader}>
          <div className="logo">
            <Image src={logoRafael} alt="Logo Rafael Reis Franco" />
          </div>
          <nav>
            <ul className={style.wrapperNav}>
              <li className={style.link}><a href="#about">Sobre</a></li>
              <li className={style.link}><a href="#skills">Habilidades</a></li>
              <li className={style.link}><a href="#projects">Projetos</a></li>
              <li className={style.link}><a href="#contact">Contato</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
