import style from "./preview.module.css";

export function Preview() {
  return (
    <div
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
    </div>
  );
}
