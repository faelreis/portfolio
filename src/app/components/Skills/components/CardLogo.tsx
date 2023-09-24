import style from "./cardlogo.module.css";
import Image from "next/image";

export function CardLogo({
  imageLogo,
  nameLogo,
}: {
  imageLogo: string;
  nameLogo: string;
}) {
  return (
    <div className={style.cardLogo}>
      <div className={style.wrapperLogoCard}>
        <Image className={style.logoCard} src={imageLogo} alt={nameLogo} />
      </div>
      <div className={style.boxNameLogo}>
        <h4>{nameLogo}</h4>
      </div>
    </div>
  );
}
