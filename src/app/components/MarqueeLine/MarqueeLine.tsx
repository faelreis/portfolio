import style from "./marquee.module.css";
import Image from "next/image";
import logoLine from "../../assets/logo-line.svg";
import Marquee from "react-fast-marquee";

export function MarqueeLine() {
  return (
    <div className="container">
      <Marquee gradient={true} gradientColor={"#000000"} speed={100}>
        <div className={style.marqueeWrapper}>
          <div className={style.marqueeLine}>
            <Image className={style.logoLine} src={logoLine} alt="Logo" />
            <span className={style.tagLine}>DESIGN</span>
            <Image className={style.logoLine} src={logoLine} alt="Logo" />
            <span className={style.tagLine}>CODE</span>
            <Image className={style.logoLine} src={logoLine} alt="Logo" />
            <span className={style.tagLine}>GROWTH</span>
            <Image className={style.logoLine} src={logoLine} alt="Logo" />
            <span className={style.tagLine}>STRATEGY</span>
            <Image className={style.logoLine} src={logoLine} alt="Logo" />
            <span className={style.tagLine}>EXPERIENCE</span>
            <Image className={style.logoLine} src={logoLine} alt="Logo" />
            <span className={style.tagLine}>DESIGN</span>
            <Image className={style.logoLine} src={logoLine} alt="Logo" />
            <span className={style.tagLine}>CODE</span>
            <Image className={style.logoLine} src={logoLine} alt="Logo" />
            <span className={style.tagLine}>GROWTH</span>
            <Image className={style.logoLine} src={logoLine} alt="Logo" />
            <span className={style.tagLine}>STRATEGY</span>
            <Image className={style.logoLine} src={logoLine} alt="Logo" />
            <span className={`${style.tagLine} ${style.lastTagLine}`}>
              EXPERIENCE
            </span>
          </div>
        </div>
      </Marquee>
    </div>
  );
}
