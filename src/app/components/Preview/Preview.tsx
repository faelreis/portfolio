"use client";
import style from "./preview.module.css";
import { motion } from "framer-motion";

export function Preview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: "20%" }}
      whileInView={{ opacity: 1, y: "0%" }}
      transition={{ ease: "easeInOut", duration: 3 }}
      className={style.preview}
    >
      <div className="container">
        <video
          className={style.videoPreview}
          loop
          autoPlay
          muted
          plays-inline="true"
        >
          <source src="/cases-video-portfolio.mp4" type="video/mp4" />
          Seu navegador não suporta a reprodução de vídeo.
        </video>
      </div>
    </motion.div>
  );
}
