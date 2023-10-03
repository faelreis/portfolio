"use client";
import style from "./hero.module.css";
import Image from "next/image";
import RafaelReisFranco from "../../assets/rafaelreisfranco-frontend.png";
import shapeDetail from "../../assets/shape.svg";
import arrow from "../../assets/arrow.svg";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className={style.hero}>
      <div className="container">
        <div className={style.wrapperHero}>
          <motion.div
            initial={{ opacity: 0, y: "10%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className={style.lHero}
          >
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
          </motion.div>
          <div className={style.rHero}>
            <motion.div
              initial={{ opacity: 0, y: "10%" }}
              whileInView={{ opacity: 1, y: "0%" }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className={style.wrapperImgHero}
            >
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
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
