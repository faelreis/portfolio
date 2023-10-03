"use client";
import style from "./cardproject.module.css";
import Image from "next/image";
import { CardTech } from "../CardTech/CardTech";
import arrowButton from "../../../../assets/arrow.svg";
import githubLogo from "../../../../assets/github-logo.svg";
import Link from "next/link";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: "7%" }}
      whileInView={{ opacity: 1, y: "0%" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={style.cardProject}
    >
      <div className={style.tCardProject}>
        <div className={style.wrapperProjectThumb}>
          <Link target="_blank" href={linkCase}>
            <Image
              className={style.projectThumb}
              src={imageCase}
              alt={nameCase}
              quality={100}
            />
          </Link>
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
          <Link target="_blank" href={linkCase} className={style.liveProject}>
            <span className={style.textBtn}>Acessar</span>
            <Image className={style.arrowBtn} src={arrowButton} alt="Arrow" />
          </Link>
          <Link target="_blank" className={style.repProject} href={repCase}>
            <Image src={githubLogo} alt="Github" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
