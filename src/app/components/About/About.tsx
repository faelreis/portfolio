import style from "./about.module.css";
import Image from "next/image";
import RafaelReisFranco from "../../assets/rafaelreissilvafranco.png";
import shapeDetail from "../../assets/shape.svg";

export function About() {
  return (
    <div id="about" className={style.about}>
      <div className="container">
        <div className={style.wrapperAbout}>
          <div className={style.lAbout}>
            <div className={style.wrapperImgAbout}>
              <Image
                className={style.rafaelAbout}
                src={RafaelReisFranco}
                alt="Rafael Reis Silva Franco | Front End"
                quality={100}
              />
              <Image
                className={style.shape}
                src={shapeDetail}
                alt="Brand shape"
              />
            </div>
          </div>
          <div className={style.rAbout}>
            <h2 className={style.aboutName}>Me chamo <strong className={style.aboutNameBold}>Rafael Reis</strong></h2>
            <p className={style.aboutText}>
              Atualmente estou cursando Sistemas de Informação, sou apaixonado
              por tecnologia, design e inovação.
              <br />
              <br />
              Ao longo desse tempo, tive a oportunidade de trabalhar com
              diversos clientes, desenvolvendo projetos criativos e eficientes.
            </p>
            <div className={style.wrapperBigNumbers}>
              <div className={style.boxBigNumber}>
                <h3 className={style.bigNumber}>+3</h3>
                <h4 className={style.descBigNumber}>ANOS DE EXPERIÊNCIA</h4>
              </div>
              <div className={style.boxBigNumber}>
                <h3 className={style.bigNumber}>+28</h3>
                <h4 className={style.descBigNumber}>PROJETOS COMPLETOS</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
