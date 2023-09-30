import style from "./hero.module.css";
import Image from "next/image";
import RafaelReisFranco from "../../assets/rafaelreisfranco-frontend.png";
import shapeDetail from "../../assets/shape.svg";
import arrow from "../../assets/arrow.svg";
import Link from "next/link";

export function Hero() {
  return (
    <div className={style.hero}>
      <div className="container">
        <div className={style.wrapperHero}>
          <div className={style.lHero}>
            <h2 className={style.name}>RAFAEL REIS FRANCO</h2>
            <h1 className={style.title}>
              Especialista em{" "}
              <strong className={style.titleBold}>
                Desenvolvimento Front-End & Design
              </strong>
            </h1>
            <Link href="#projects" className={style.btn}>
              <span className={style.btnText}>Conheça meus projetos</span>
              <Image className={style.arrow} src={arrow} alt="btnIcon" />
            </Link>
          </div>
          <div className={style.rHero}>
            <div className={style.wrapperImgHero}>
              <Image
                quality={100}
                className={style.rafaelImage}
                src={RafaelReisFranco}
                alt="Rafael Reis Silva Franco | Front End"
              />
              <Image
                className={style.shape}
                src={shapeDetail}
                alt="Brand shape"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
