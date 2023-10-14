"use client";
import style from "./preview.module.css";
import { motion } from "framer-motion";

export function Preview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: "10%" }}
      whileInView={{ opacity: 1, y: "0%" }}
      transition={{ duration: 3 }}
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
          <source src="/porfolio-preview.mp4" type="video/mp4" />
          Seu navegador não suporta a reprodução de vídeo.
        </video>
      </div>
    </motion.div>
  );
}
