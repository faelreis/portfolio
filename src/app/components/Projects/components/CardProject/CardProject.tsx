import style from "./cardproject.module.css";
import Image from "next/image";
import { CardTech } from "../CardTech/CardTech";
import arrowButton from "../../../../assets/arrow.svg";
import githubLogo from "../../../../assets/github-logo.svg";
import Link from "next/link";

export function CardProject({
  imageCase,
  nameCase,
  nameTechs,
  linkCase,
  repCase,
}: {
  imageCase: any;
  nameCase: string;
  nameTechs: string[];
  linkCase: string;
  repCase: string;
}) {
  return (
    <Link href={linkCase} className={style.cardProject}>
      <div className={style.tCardProject}>
        <div className={style.wrapperProjectThumb}>
          <Image
            className={style.projectThumb}
            src={imageCase}
            alt={nameCase}
            quality={100}
          />
        </div>
      </div>
      <div className={style.bCardProject}>
        <h2 className={style.nameProject}>{nameCase}</h2>
        <div className={style.wrapperNameTechs}>
          {nameTechs.map((tech: string, index: number) => (
            <CardTech key={index} nameTech={tech} />
          ))}
        </div>
        <div className={style.wrapperButtons}>
          <Link className={style.liveProject} href={linkCase}>
            <span className={style.textBtn}>Acessar</span>
            <Image className={style.arrowBtn} src={arrowButton} alt="Arrow" />
          </Link>
          <Link className={style.repProject} href={repCase}>
            <Image src={githubLogo} alt="Github" />
          </Link>
        </div>
      </div>
    </Link>
  );
}
