import style from "./backgroundVideo.module.css";
import Image from 'next/image';

export function BackgroundVideo() {
  return (
    <div className={style.backgroundVideo}>
      
    </div>
  );
}


// <div className={style.backgroundVideo} style={{ opacity: 0.5 }}>
// <video className={style.video} loop autoPlay muted>
//   <source src="/background-video.gif" />
// </video>
// </div>