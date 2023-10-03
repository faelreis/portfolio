import style from "./contact.module.css";
import Image from "next/image";
import arrow from "../../assets/arrow.svg";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className={style.contact}>
      <div className="container">
        <div className={style.wrapperContact}>
          <div className={style.lContact}>
            <Link
              className={style.wrapperEmail}
              href="mailto:rafaelreisfranco15@gmail.com"
            >
              <span className={style.textEmail}>
                rafaelreisfranco15@gmail.com
              </span>
              <Image className={style.arrowBtn} src={arrow} alt="arrow" />
            </Link>
          </div>
          <div className={style.rContact}>
            <div className={style.wrapperContactLinks}>
              <Link
                className={style.linkContact}
                href="https://www.linkedin.com/in/rafaelreisfranco/"
                target="_blank"
              >
                LinkedIn
              </Link>
              <Link
                className={style.linkContact}
                href="https://github.com/faelreis"
                target="_blank"
              >
                GitHub
              </Link>
              <Link
                className={style.linkContact}
                href="https://wa.me/5533999267356"
                target="_blank"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
